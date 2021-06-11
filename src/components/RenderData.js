import React, { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import jsonData from "../A2PI.json";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  main: {
    width: "85%",
    margin: "2rem auto",
  },
  details: {
    display: "flex",
    flexWrap: "wrap",
  },
  btnStyle: {
    margin: "1rem",
    backgroundColor: "#056EF2",
  },
}));

function RenderData(props) {
  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname;
  const grade = props.grade;
  const tech = props.tech;
  const [newData, setNewData] = useState([]);
  const [newLinks, setNewLinks] = useState(["1", "2", "3"]);

  useEffect(() => {
    console.log("path changed");
    const data = jsonData.filter((f) => {
      return path == "/1to1"
        ? f.type == "1to1"
        : path == "/1ton"
        ? f.type == "1ton"
        : path == "/school"
        ? f.type == "school"
        : path == path
        ? f.path == path
        : f.country;
    });
    setNewData(data);
  }, [path]);

  const secondData = newData.filter((i) => {
    return i.grade == grade && i.tech == tech;
  });

  return (
    <>
      {!grade || !tech ? (
        <>
          {
            <h4>Please select the right Grade and Technology</h4>
            /* {newData.map((i) => {
						console.log(i.grade)
						return (
							<>
								<Accordion className={classes.main}>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header">
										<Typography className={classes.heading}>
											Section-1 -{" "}
											{` ( ${i.country} - ${i.grade} - ${i.tech} ) `}
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.details}>
										{i.links1
											? i.links1.map((l1, index) => {
													return (
														<Button
															variant="contained"
															href={l1}
															color="primary">
															Level-{index + 1}
														</Button>
													)
											  })
											: "not available"}
									</AccordionDetails>
								</Accordion>
								<Accordion className={classes.main}>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header">
										<Typography className={classes.heading}>
											Section-1 -{" "}
											{` ( ${i.country} - ${i.grade} - ${i.tech} ) `}
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.details}>
										{i.links2
											? i.links2.map((l1, index) => {
													return (
														<Button
															variant="contained"
															href={l1}
															color="primary">
															Level-{index + 1}
														</Button>
													)
											  })
											: "not available"}
									</AccordionDetails>
								</Accordion>
								<Accordion className={classes.main}>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header">
										<Typography className={classes.heading}>
											Section-1 -{" "}
											{` ( ${i.country} - ${i.grade} - ${i.tech} ) `}
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.details}>
										{i.links3
											? i.links3.map((l1, index) => {
													return (
														<Button
															variant="contained"
															href={l1}
															color="primary">
															Level-{index + 1}
														</Button>
													)
											  })
											: "not available"}
									</AccordionDetails>
								</Accordion>

								<br />
								<br />
							</>
						)
					})} */
          }
        </>
      ) : (
        <>
          {secondData.map((i) => {
            return (
              <>
                <Button
                  variant="contained"
                  className={classes.btnStyle}
                  color="primary"
				  target ="_blank"
				  href={i.demo}
                >
					Demo
				
                </Button>
                <Accordion className={classes.main}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>
                      Level-1 - {` ( ${i.country} - ${i.grade} - ${i.tech} ) `}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.details}>
                    {i.links1
                      ? i.links1.map((l1, index) => {
                          return (
                            <Button
                              variant="contained"
                              onClick={(e) => {
                                setNewLinks([l1.link]);
                                console.log(l1.link);
                              }}
                              className={classes.btnStyle}
                              color="primary"
                            >
                              Session-{index + 1}
                            </Button>
                          );
                        })
                      : "not available"}
                  </AccordionDetails>
                </Accordion>
                <Accordion className={classes.main}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>
                      Level 2- {` ( ${i.country} - ${i.grade} - ${i.tech} ) `}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.details}>
                    {i.links2
                      ? i.links2.map((l1, index) => {
                          return (
                            <Button
                              variant="contained"
                              href={l1}
                              className={classes.btnStyle}
                              color="primary"
                            >
                              Session-{index + 1}
                            </Button>
                          );
                        })
                      : "not available"}
                  </AccordionDetails>
                </Accordion>
                <Accordion className={classes.main}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>
                      Level 3 - {` ( ${i.country} - ${i.grade} - ${i.tech} ) `}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.details}>
                    {i.links3
                      ? i.links3.map((l1, index) => {
                          return (
                            <Button
                              variant="contained"
                              href={l1}
                              className={classes.btnStyle}
                              color="primary"
                            >
                              Session-{index + 1}
                            </Button>
                          );
                        })
                      : "not available"}
                  </AccordionDetails>
                </Accordion>

                <br />
                <br />
              </>
            );
          })}
        </>
      )}

      {newLinks.map((n) => {
        console.log(n);
        return (
          <>
            <Button
              variant="contained"
              href={n}
              className={classes.btnStyle}
              color="primary"
            >
              Project
            </Button>
          </>
        );
      })}
    </>
  );
}

//Iske div ne bht takleef diya hai

export default RenderData;
