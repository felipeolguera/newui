/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import ChartEnrConTre from './charts/ChartEnrConTre';
import { DoubleLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


 // import { useLocation } from 'react-router-dom';

// interface  {
//   enableCam: () => void;
// }

const Energy = ({ enableCam, isGestureEnabled }) => {
  const handleClick = () => {
    enableCam();
  };

  const container = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 1,
        delayChildren: 0.6,
        staggerChildren: 0.2,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        delay: 0.3,
        duration: 1,
        delayChildren: 0.1,
        staggerChildren: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 60 },
  };

  // const location = useLocation();

 
  return (
    <>
      <motion.div
        className="uicontainer"
        // key={location.pathname}
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <section className="uileftsection" style={{height: 774}}>
          <div className="sectionbg" />

          <motion.div className="sectionheader" variants={item} style={{width: '100%'}}>


          <div className='backbtn' 
              style={{
              display: 'flex',
              flexDirection: 'column',
              width: '200px',
              height: '50px',
              position: 'relative',
              left: '12px'}}
              > 
            
            <Link to={`/`}>
                <h4 > 
                      <DoubleLeftOutlined />  Back 
                </h4>
            </Link>
            </div>

             <div className="sectiontitle">
              ENERGY <br /> SUSTAINABILITY
            </div>


            <div className="filter">
              <img src="filter.png" alt="filter" width="84px" height="20px" />
            </div>


          </motion.div>

          {/* -------------------------------------------------- ENERGY CONSUMPTION --------------------------------------------------*/}
          <motion.div className="sectioncard" variants={item}>
            <div className="cardheaderbg">
              <h3>ENERGY CONSUMPTION</h3>
            </div>
            <div className="cardbody" style={{ top: 64}}>
                                <div className="cardtop">
                                  <h3>44,670</h3>
                                  <h6>MWh</h6> 
                                </div>
                                <div className="cardtop">
                                  <h3>132</h3>
                                  <h6>KWh/SQM</h6>{" "}
                                </div>
                      </div> 

                  <div className="cardbenchmark">Benchmark</div>

                  <div className="cardbenchmarkbody">
                      <div className="cardbottom">
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="21"
                                      height="21"
                                      viewBox="0 0 21 21"
                                      fill="none"
                                    >
                                      <g opacity="0.3" filter="url(#filter0_b_86_62)">
                                        <rect
                                          x="0.855469"
                                          y="0.0539551"
                                          width="20"
                                          height="20"
                                          fill="#086050"
                                          fill-opacity="0.9"
                                        />
                                      </g>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.42871 14.0164V5.52905H6.42871V15.0164H15.916V14.0164H7.42871Z"
                                        fill="#8C9493"
                                      />
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M9.58441 11.4723V13.3684H8.58441V11.4723H9.58441Z"
                                        fill="#8C9493"
                                      />
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.8701 8.89648V13.3684H11.8701V8.89648H12.8701Z"
                                        fill="#8C9493"
                                      />
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M14.6191 7.43649V13.3684H13.6191V7.43649H14.6191Z"
                                        fill="#8C9493"
                                      />
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M11.1816 9.84871V13.3684H10.1816V9.84871H11.1816Z"
                                        fill="#8C9493"
                                      />
                                      <defs>
                                        <filter
                                          id="filter0_b_86_62"
                                          x="-15.1445"
                                          y="-15.946"
                                          width="52"
                                          height="52"
                                          filterUnits="userSpaceOnUse"
                                          color-interpolation-filters="sRGB"
                                        >
                                          <feFlood
                                            flood-opacity="0"
                                            result="BackgroundImageFix"
                                          />
                                          <feGaussianBlur
                                            in="BackgroundImageFix"
                                            stdDeviation="8"
                                          />
                                          <feComposite
                                            in2="SourceAlpha"
                                            operator="in"
                                            result="effect1_backgroundBlur_86_62"
                                          />
                                          <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_backgroundBlur_86_62"
                                            result="shape"
                                          />
                                        </filter>
                                      </defs>
                                    </svg>
                                  </div>
                                  <div>
                                    <h6>66,844</h6>
                                  </div>
                                  <div className="percent">
                                    <h6>33%</h6>
                                  </div>
                                  <div className="arrowup">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="11"
                                      height="9"
                                      viewBox="0 0 11 9"
                                      fill="none"
                                    >
                                      <path
                                        d="M6.55035 8.46387C6.16545 9.13053 5.2032 9.13053 4.8183 8.46387L0.853741 1.59705C0.468841 0.93038 0.949965 0.0970459 1.71977 0.0970459L9.64889 0.0970459C10.4187 0.0970459 10.8998 0.930379 10.5149 1.59705L6.55035 8.46387Z"
                                        fill="#41D3B9"
                                      />
                                    </svg>
                                  </div>
                        </div>

                      <div className="cardbottom">
                                <div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                  >
                                    <g opacity="0.3" filter="url(#filter0_b_86_62)">
                                      <rect
                                        x="0.855469"
                                        y="0.0539551"
                                        width="20"
                                        height="20"
                                        fill="#086050"
                                        fill-opacity="0.9"
                                      />
                                    </g>
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M7.42871 14.0164V5.52905H6.42871V15.0164H15.916V14.0164H7.42871Z"
                                      fill="#8C9493"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M9.58441 11.4723V13.3684H8.58441V11.4723H9.58441Z"
                                      fill="#8C9493"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M12.8701 8.89648V13.3684H11.8701V8.89648H12.8701Z"
                                      fill="#8C9493"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M14.6191 7.43649V13.3684H13.6191V7.43649H14.6191Z"
                                      fill="#8C9493"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.1816 9.84871V13.3684H10.1816V9.84871H11.1816Z"
                                      fill="#8C9493"
                                    />
                                    <defs>
                                      <filter
                                        id="filter0_b_86_62"
                                        x="-15.1445"
                                        y="-15.946"
                                        width="52"
                                        height="52"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                      >
                                        <feFlood
                                          flood-opacity="0"
                                          result="BackgroundImageFix"
                                        />
                                        <feGaussianBlur
                                          in="BackgroundImageFix"
                                          stdDeviation="8"
                                        />
                                        <feComposite
                                          in2="SourceAlpha"
                                          operator="in"
                                          result="effect1_backgroundBlur_86_62"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in="SourceGraphic"
                                          in2="effect1_backgroundBlur_86_62"
                                          result="shape"
                                        />
                                      </filter>
                                    </defs>
                                  </svg>
                                </div>
                                <div>
                                  <h6>211</h6>
                                </div>
                                <div className="percent">
                                  <h6>37%</h6>
                                </div>
                                <div className="arrowup">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="11"
                                    height="9"
                                    viewBox="0 0 11 9"
                                    fill="none"
                                  >
                                    <path
                                      d="M6.55035 8.46387C6.16545 9.13053 5.2032 9.13053 4.8183 8.46387L0.853741 1.59705C0.468841 0.93038 0.949965 0.0970459 1.71977 0.0970459L9.64889 0.0970459C10.4187 0.0970459 10.8998 0.930379 10.5149 1.59705L6.55035 8.46387Z"
                                      fill="#41D3B9"
                                    />
                                  </svg>
                                </div>
                        </div>

                  </div>



             <div className="cardfooter">
              <div className="cardicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="23"
                  viewBox="0 0 19 23"
                  fill="none"
                >
                  <path
                    d="M6.93279 1.54695C7.32331 1.15642 7.95648 1.15643 8.347 1.54695L13.7646 6.96453C14.1551 7.35505 14.1551 7.98821 13.7646 8.37874L8.347 13.7963C7.95647 14.1868 7.32331 14.1868 6.93279 13.7963L1.51521 8.37874C1.12469 7.98821 1.12469 7.35505 1.51521 6.96452L6.93279 1.54695Z"
                    fill="white"
                  />
                  <path
                    d="M12.4623 13.6627C12.8529 13.2721 13.486 13.2721 13.8765 13.6627L17.3739 17.1601C17.7645 17.5506 17.7645 18.1838 17.3739 18.5743L13.8765 22.0717C13.486 22.4622 12.8529 22.4622 12.4623 22.0717L8.96492 18.5743C8.5744 18.1838 8.57439 17.5506 8.96492 17.1601L12.4623 13.6627Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="cardfootertext">
                <p>
                  " 34% Energy savings, equivalent to removing 1,637 cars from
                  the road. "
                </p>
              </div>
            </div>
          </motion.div>
          {/* -------------------------------------------------- ENERGY CONSUMPTION - END --------------------------------------------------*/}



          {/* -------------------------------------------------- ENERGY COOLING --------------------------------------------------*/}
          <motion.div className="sectioncard" variants={item} style={{top:'320px', height:'100px'}}>

             <div className="cardbody" style={{position: 'relative' , top: '0px' }}  >

              <div className="cardgroup" style={{position: 'relative' , top: '6px' }} >

                <div className="cardtop" style={{background: '#08576096', justifyContent:"center" }}>
                  <h3 style={{paddingLeft: '0' }}>Electric</h3>
                 </div>
                 <div className="cardtop" style={{ background: 'rgba(8, 90, 96, 0.2)',  justifyContent:"center" }}>
                  <h3 style={{paddingLeft: '0' }}>75%</h3>
                 </div>

               </div>
               <div className="cardgroup" style={{position: 'relative' , top: '6px' }} >

                <div className="cardtop" style={{background: '#08576096', justifyContent:"center" }}>
                  <h3 style={{paddingLeft: '0' }}>Cooling</h3>
                </div>
                <div className="cardtop" style={{ background: 'rgba(8, 90, 96, 0.2)',  justifyContent:"center" }}>
                  <h3 style={{paddingLeft: '0' }}>25%</h3>
                </div>

                </div>
 
            </div>

           </motion.div>
          {/* -------------------------------------------------- ENERGY COOLING - END --------------------------------------------------*/}

          {/* -------------------------------------------------- ENERGY CHART --------------------------------------------------*/}

          <motion.div 
          className="sectioncard" 
          variants={item} 
          style={{top:'430px', height:'290px'}}>

            <div className="cardheaderbg">
              <h3>ENERGY CONSUMPTION TREND</h3>
            </div>

            <div className="cardbody" >

            <div className='bvchart' style={{  height:'210px', width: "100%", marginTop: 5}}>
 
            <ChartEnrConTre />
            </div>

             </div>

           </motion.div>
            

          
          {/* -------------------------------------------------- ENERGY CHART - END --------------------------------------------------*/}


         </section>

      </motion.div>

      {/* -------------------------------------------------- CLEAN ENERGY GENERATION  --------------------------------------------------*/}
      <section>
        
        <motion.div
          className="cleanenergy"
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 2,
              duration: 1,
            },
          }}
          exit={{ opacity: 0, x: 100, transition: { duration: 1 } }}
          style={{ height: 284, width:721 , bottom: '5vh' }}

        >

          <div className="ztlogo" /> 

          <motion.div
            className="enableEye"
            onClick={handleClick}
            whileHover={{ scale: 1.2, opacity: 1 }}
            whileTap={{ scale: 1.3 }}
            style={
              isGestureEnabled
                ? { backgroundColor: "#07dcf0cc" }
                : {
                    background:
                      "linear-gradient(173deg, rgba(22, 39, 36, 0.90) 31.95%, rgba(20, 68, 59, 0.36) 112.56%)",
                  }
            }
          >
            <EyeOutlined
              style={{
                fontSize: "33px",
                color: "#eee",
                display: isGestureEnabled ? "none" : "flex",
              }}
            />
            <EyeInvisibleOutlined
              style={{
                fontSize: "33px",
                color: "#eee",
                display: isGestureEnabled ? "flex" : "none",
              }}
            />
          </motion.div>

          <motion.div
            className="sectioncard"
            style={{ position: "relative", top: -20, right: 0, height: 270, width:721 , background:'rgba(3, 35, 35, 0)'}}
            variants={item}
          >

            <div className="cardheaderbgL" style={{  backgroundImage: 'url(cardheaderbgL2.png)' , width: 680, right: 22 , top:4
}}>
              <h3 >BUILDING EFFICIENCY</h3>
            </div>

            <div className="cardbody" style={{ top: 0}}>

              <div className="cardgroup_be">

                <div className="cardthumb">
                  <h3 style={{paddingLeft:0}}>76%</h3>
                  <img src="thumb_omantel.png" width={'100%'} height={89} /> 
                  <h3 style={{paddingLeft:0}}>Omantel HQ</h3>
                </div>
                <div className="cardthumb">
                  <h3 style={{paddingLeft:0}}>56%</h3>
                  <img src="thumb_kuwait.png" width={'100%'} height={89} /> 
                  <h3 style={{paddingLeft:0}}>Zain Kuwait</h3>
                </div>
                <div className="cardthumb">
                  <h3 style={{paddingLeft:0}}>33%</h3>
                  <img src="thumb_asima.png" width={'100%'} height={89} /> 
                  <h3 style={{paddingLeft:0}}>Assima Mall</h3>
                </div>
                <div className="cardthumb">
                  <h3 style={{paddingLeft:0}}>24%</h3>
                  <img src="thumb_gems.png" width={'100%'} height={89} /> 
                  <h3 style={{paddingLeft:0}}>Gems School</h3>
                </div>

              </div>

             </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Energy;
