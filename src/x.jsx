import React from "react";
import "../styles/styles.css";
import maximalFocus from "../images/maximalfocus-QtZDb5QJOFM-unsplash.jpg";
import haseebJamil from "../images/haseeb-jamil-zbg2-gyo_hM-unsplash.jpg";
import antonNazaretian from "../images/anton-nazaretian-vWPrYe5HCxY-unsplash.jpg";
import { Box, Typography, Divider, Hidden } from "@mui/material";
import { Person, Clock } from "react-bootstrap-icons";

const Section2 = () => {


  return (
    <section className="section">
      <Box
        sx={{
          bgcolor: "greenlight",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography
          variant="h6"
          component="h1"
          sx={{
            fontWeight: "500",
            fontSize: "30px",
          }}
        >
          Latest news
        </Typography>

        <Box
          sx={{
            display: "flex", //The styling and container for the whole article section
            flexDirection: { lg: "row", xs: "column" },
            justifyContent: "center",
            bgcolor: "lightyellow",
            width: "100%",
            height: "100%",
            marginTop: {lg:'24px',xs:"12px"},
          }}
        >
          <Box //first column
            sx={{
              width: { lg: "50%", xs: "100%" },
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              bgcolor: "lightgray",
            }}
          >
            <Box
              component="img"
              src={maximalFocus}
              alt="maximal focus"
              sx={{
                height: { lg: "350px", xs: "300px" },
                width: "100%",
                marginBottom: "15px",
                objectFit: "cover",
              }}
            />
            <Typography
              sx={{
                fontWeight: "500",
                marginBottom: { lg: "40px", xs: "20px" },
                fontSize: { lg: "24px", xs: "18px" },
                lineHeight: "normal",
                width: "100%",
              }}
            >
              Breaking news headline: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit
            </Typography>
            <Box
              sx={{
                display: "flex",
                marginBottom: { lg: "40px", xs: "20px" },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#DEFF8B",
                  padding: "4px 18px",
                  marginRight: "20px",
                  fontSize: "13px",
                  fontWeight: "500",
                  fontFamily: "Montserrat",
                  color: "black",
                  justifyContent: "center",
                  display: "inline-flex",
                }}
              >
                Culture
              </Box>

              <Box
                sx={{
                  backgroundColor: "#FF6B6B",
                  padding: "4px 18px",
                  marginRight: "20px",
                  fontSize: "13px",
                  fontWeight: "500",
                  fontFamily: "Montserrat",
                  color: "white",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Society
              </Box>
            </Box>

            <Box
              sx={{
                fontWeight: "400",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "normal",
                width: "100%",
                marginBottom: { lg: "30px", xs: "10px" },
              }}
            >
              More information Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </Box>

            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography //icons
                sx={{
                  marginLeft: { lg: "10px", xs: "" },
                  fontSize: "12px",
                  alignItems: "center",
                  display: "flex",
                  marginRight: "30px",
                }}
              >
                <Box
                  sx={{
                    paddingRight: "10px",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Person
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Montserrat",
                    }}
                  />
                </Box>
                Anna Antoni
              </Typography>
                Anna Antoni
              </Typography>

              <Typography
                sx={{
                  marginLeft: "10px",
                  fontSize: "12px",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    paddingRight: "10px",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Clock
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Montserrat",
                    }}
                  />
                </Box>
                February 24, 2023
              </Typography>
            </Box>
          </Box>

          <Hidden smDown>
            {/* Display vertical divider on screens larger than or equal to small */}
            <Divider
              orientation="vertical"
              flexItem
              sx={{ marginX: "32px", fontWeight: "bold" }}
            />
          </Hidden>

          <Box
            sx={{
              width: "100%",
              height:"100%",
              display: "flex",
              flexDirection: { lg: "row", xs: "column" },
            }}
          >
            <Box //second column
              sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor:"lightblue",
                width: "100%",
                height:"100%",
              }}
            >
              
              <Hidden smUp>
                <Divider
                  orientation="horizontal"
                  flexItem
                  sx={{
                    width: "100%",
                    marginY: "12px",
                  }}
                ></Divider>
              </Hidden>

              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: { lg: "column", xs: "row" },
                  width: "100%",
                  height: { xs: "111px",lg:"100%" },
                  gap: { xs: "8px",lg:"0px" },
                }}
              >
            
                <Box
                  component="img"
                  src={haseebJamil}
                  alt="maximal focus"
                  sx={{
                    height: { lg: "200px", xs: "100%" },
                    width: { lg: "100%", xs: "50%" },
                    // marginBottom: "15px",
                  }}
                />
                <Box
                  sx={{
                    width: { xs: "50%" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: { lg: "24px", xs: "15px" },
                      width: { lg: "100%", xs: "200px" },
                    }}
                  >
                    News headline
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "#731963",
                      padding: { lg: "4px 18px", xs: "4px 2px" },
                      fontSize: "13px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "white",
                      width: { lg: "150px", xs: "65%" },
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    Daily Opinion
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        paddingRight: "10px",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Clock
                        sx={{
                          fontSize: "15px",
                          fontFamily: "Montserrat",
                        }}
                      />
                    </Box>
                    February 24, 2023
                  </Typography>
                </Box>

               
              </Box>

              <Divider
                orientation="horizontal"
                flexItem
                sx={{
                  width: "100%",
                  marginY: "12px",
                }}
              ></Divider>

              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: { lg: "column", xs: "row" },
                  width: "100%",
                  height: { xs: "111px" },
                  gap: { xs: "8px",lg:"0px" },
                }}
              >
                <Box
                  component="img"
                  src={antonNazaretian}
                  alt="maximal focus"
                  sx={{
                    height: { lg: "200px", xs: "100%" },
                    width: { lg: "100%", xs: "50%" },
                   
                  }}
                />
                <Box
                  sx={{
                    width: { xs: "50%",lg:"100%" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: { lg: "24px", xs: "15px" },
                      lineHeight:"normal",
                      width: "100%",
                    }}
                  >
                    News headline: Lorem ipsum dolor sit
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "#FBCEB5",
                      padding: { lg: "4px 18px", xs: "4px 0px" },
                      fontSize: "13px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "black",
                      width: { lg: "150px", xs: "95%" },
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    Sexuality and Gender
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        paddingRight: "10px",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Clock
                        sx={{
                          fontSize: "15px",
                          fontFamily: "Montserrat",
                        }}
                      />
                    </Box>
                    February 24, 2023
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Hidden smDown>
              {/* Display vertical divider on screens larger than or equal to small */}
              <Divider
                orientation="vertical"
                flexItem
                sx={{ marginX: "32px", bgcolor: "black", fontWeight: "bold" }}
              />
            </Hidden>

            {/* news headline  small */}
            <Box //third column
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginTop: { lg: "0", xs: "20px" },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: { lg: "column", xs: "row" },
                }}
              >
                <Box
                  component="div"
                  sx={{
                    marginBottom: { lg: "20px", xs: "10px" },
                    width: { xs: "100%" },
                    height: { xs: "100%" },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "500",
                      marginBottom: "15px",
                      fontSize: { lg: "24px", xs: "18px" },
                      fontFamily: "Montserrat",
                    }}
                  >
                    News headline
                  </Typography>

                  <Box
                    sx={{
                      backgroundColor: "#0B3C49",
                      padding: "4px 18px",
                      fontSize: "13px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "white",
                      width: "80px",
                      justifyContent: "center",
                      display: "flex",
                      marginBottom: "15px",
                    }}
                  >
                    Critical eye
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        paddingRight: "10px",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Clock
                        sx={{
                          fontSize: "15px",
                          fontFamily: "Montserrat",
                        }}
                      />
                    </Box>
                    February 24, 2023
                  </Typography>
                </Box>

                <Hidden smDown>
                  <Divider
                    orientation="horizontal"
                    flexItem
                    sx={{
                      width: "100%",
                    }}
                  ></Divider>
                </Hidden>
                <Hidden smUp>
                  {/* Display vertical divider on screens larger than or equal to small */}
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      marginX: "12px",
                      fontWeight: "bold",
                    }}
                  />
                </Hidden>

                <Box
                  component="div"
                  sx={{
                    margin: { lg: "20px 0 20px 0" },
                    width: { xs: "100%" },
                    height: { xs: "100%" },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "500",
                      marginBottom: { lg: "15px", xs: "12px" },
                      fontSize: { lg: "24px", xs: "18px" },
                      fontFamily: "Montserrat",
                    }}
                  >
                    News headline
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "#DEFF8B",
                      padding: "4px 18px",
                      marginBottom: "15px",
                      fontSize: "15px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "black",
                      justifyContent: "center",
                      width: "50px",
                      display: "flex",
                    }}
                  >
                    Culture
                  </Box>

                  <Hidden smDown>
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontFamily: "Montserrat",
                        fontSize: { lg: "15px" },
                        lineHeight: "normal",
                        marginBottom: { lg: "15px", xs: "12px" },
                      }}
                    >
                      More information Lorem ipsum dolor sit amet.
                    </Typography>
                  </Hidden>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        paddingRight: "10px",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Clock
                        sx={{
                          fontSize: "15px",
                          fontFamily: "Montserrat",
                        }}
                      />
                    </Box>
                    February 24, 2023
                  </Typography>
                </Box>
              </Box>

              <Divider
                orientation="horizontal"
                flexItem
                sx={{
                  width: "100%",
                  marginY: "12px",
                }}
              ></Divider>

              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: { lg: "column", xs: "row" },
                }}
              >
                <Box
                  component="div"
                  sx={{
                    marginBottom: { lg: "20px", xs: "10px" },
                    width: { xs: "100%" },
                    height: { xs: "100%" },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "500",
                      marginBottom: "15px",
                      fontSize: { lg: "24px", xs: "15px" },
                      fontFamily: "Montserrat",
                    }}
                  >
                    News headline: Lorem ipsum dolor sit
                  </Typography>

                  <Box
                    sx={{
                      backgroundColor: "#FF6B6B",
                      padding: "4px 18px",
                      fontSize: "13px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "white",
                      width: "80px",
                      justifyContent: "center",
                      display: "flex",
                      marginBottom: "15px",
                    }}
                  >
                    Society
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        paddingRight: "10px",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Clock
                        sx={{
                          fontSize: "15px",
                          fontFamily: "Montserrat",
                        }}
                      />
                    </Box>
                    February 24, 2023
                  </Typography>
                </Box>

                <Hidden smDown>
                  <Divider
                    orientation="horizontal"
                    flexItem
                    sx={{
                      width: "100%",
                    }}
                  ></Divider>
                </Hidden>
                <Hidden smUp>
                  {/* Display vertical divider on screens larger than or equal to small */}
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      marginX: "12px",
                     
                      fontWeight: "bold",
                    }}
                  />
                </Hidden>

                <Box
                  component="div"
                  sx={{
                    margin: { lg: "20px 0 20px 0" },
                    width: { xs: "100%" },
                    height: { xs: "100%" },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "500",
                      marginBottom: { lg: "15px", xs: "12px" },
                      fontSize: { lg: "24px", xs: "15px" },
                      fontFamily: "Montserrat",
                    }}
                  >
                    News headline: Lorem ipsum dolor sit
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "#731963",
                      padding: "4px 18px",
                      marginBottom: "15px",
                      fontSize: "15px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "black",
                      justifyContent: "center",
                      width: { lg: "50px", xs: "70%" },
                      display: "flex",
                    }}
                  >
                    Daily Opinion
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        paddingRight: "10px",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Clock
                        sx={{
                          fontSize: "15px",
                          fontFamily: "Montserrat",
                        }}
                      />
                    </Box>
                    February 24, 2023
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      
      
    </section>
  )


};

export default Section2;
