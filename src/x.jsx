import { useState } from "react";

import DashBoardTopItem from "../../../shared/components/DashBoardTopItem";
import TeacherCard from "../../../shared/components/TeacherCard";
import NormalSelect from "../../../shared/components/ui/NormalSelect";
import PageLoading from "../../../shared/components/ui/PageLoading";
import PaginationIndicator from "../../../shared/components/ui/PaginationIndicator";
import PageSearchIconAndLabel from "../../../shared/components/PageSearchIconAndLabel";

import { AddTeacherButton } from "../../../shared/components/ui/AddTeacherButton";
import { AddButtonPlain } from "../../../shared/components/ui/Buttons";

import { accountType } from "../../../constants/accountType";

import { useTeacher } from "../../../store/teacherStore/teacherContext";
import { useAuth } from "../../../store/authContext";

export default function Teachers() {
  const { user } = useAuth();

  const userType = user?.userType;

  const { state, handleFilterUpdate, handleDeleteTeacher, fetchNextData, fetchPreviousData } =
    useTeacher();

  const {
    isLoading,
    error,
    allTeachers,
    currentPage,
    currentPageCount,
    dataPerPage,
    totalCount,
  } = state;

  const [filterParams, setFilterParams] = useState({
    subjectFilter: "",
    classFilter: "",
  });

  /// This function is responsible for updating the value of the "filterParams"
  /// state
  const handleFilterSelection = (name, value) => {
    let filterValue = value;
    if (value === "all subjects" || value === "all classes") {
      filterValue = "";
    }
    const updatedObj = {
      [name]: filterValue,
    };

    setFilterParams((prevState) => {
      return { ...prevState, ...updatedObj };
    });
  };

  return (
    <div className="flex h-full w-full flex-col rounded-[22px] bg-grey-light p-[20px]">
      <div className="flex w-full flex-row justify-between py-[20px]">
        <DashBoardTopItem>
          <div className="w-full">
            <h2 className="mb-[10px] text-[28px] font-body font-semibold leading-[38px] text-[#272D37] ">
              Teachers 
            </h2>
         
          </div>
        </DashBoardTopItem>

        <div className="flex flex-row items-center justify-between gap-x-2 ">
          <NormalSelect
            placeholder="all subjects"
            options={[
              "all subjects",
              "civic edu",
              "maths",
              "english",
              "agric",
              "home economics",
            ]}
            value={filterParams.subjectFilter}
            handleSelect={(event) =>
              handleFilterSelection("subjectFilter", event.value)
            }
          />
          <NormalSelect
            value={filterParams.classFilter}
            placeholder="all class"
            options={[
              "all classes",
              "jss1",
              "jss2",
              "jss3",
              "sss1",
              "sss2",
              "sss3",
            ]}
            handleSelect={(event) =>
              handleFilterSelection("classFilter", event.value)
            }
          />
          <AddButtonPlain
            showIcon={false}
            clicked={() => handleFilterUpdate(filterParams)}
          >
            Filter Teachers
          </AddButtonPlain>
          {userType === accountType.SCHOOL && <AddTeacherButton />}
        </div>
      </div>

      {isLoading ? (
        <PageLoading classes="h-full w-full" />
      ) : error ? (
        <div className="flex h-full items-center justify-center">
          <PageSearchIconAndLabel label={error ?? "Something went wrong"} />
        </div>
      ) : allTeachers?.length === 0 ? (
        <div className="flex h-full items-center justify-center">
          <PageSearchIconAndLabel />
        </div>
      ) : (
        <div className="grid h-full w-full grid-cols-4 gap-5">
          {allTeachers?.map((eachTeacher, index) => {
            const {
              teacherAuthId,
              id,
              profileImageUrl,
              firstName,
              lastName,
              middleName,
              phoneNumber,
              dateOfBirth,
              teacherEmail, // <- Main info stops here
              subjects,
              classes,
              yearsOfExperience, // <- Job info stops here
              country,
              state,
              LGA,
              address, // <- Location info stops here
              formerEmployerName,
              formerJobTitle,
              documents, // <- Other info stops here
            } = eachTeacher;

            const mainInfo = {
              "User ID": id,
              "First Name": firstName,
              "Last Name": lastName,
              "Middle Name": middleName,
              Email: teacherEmail,
              Contact: phoneNumber,
              "Date of Birth": dateOfBirth,
            };

            const jobInfo = {
              Subjects: subjects,
              Classes: classes,
              "Years of Experience": yearsOfExperience,
            };

            const locationInfo = {
              Country: country,
              State: state,
              LGA: LGA,
              Address: address,
            };

            const otherInfo = {
              "Former Job Title": formerJobTitle,
              "Former Employer Name": formerEmployerName,
              Documents: documents,
            };

            return (
              <TeacherCard
                key={id}
                teacherAuthId={teacherAuthId}
                profileImage={profileImageUrl}
                mainInfo={mainInfo}
                jobInfo={jobInfo}
                locationInfo={locationInfo}
                otherInfo={otherInfo}
                onDelete={() => handleDeleteTeacher(teacherAuthId)}
              />
            );
          })}
        </div>
      )}
      <PaginationIndicator
        classes="self-end"
        currentPageNumber={currentPage}
        itemPerPage={dataPerPage}
        itemCount={currentPageCount}
        totalCount={totalCount}
        onBackArrowClick={fetchPreviousData}
        onForwardArrowClick={fetchNextData}
      />
    </div>
  );
}
