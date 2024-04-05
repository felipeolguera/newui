/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import {    Statistic } from 'antd'
import {   motion } from 'framer-motion'
import CountUp from 'react-countup'
import ChartEnrConTre from '../charts/ChartEnrConTre';
import { DoubleLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import { Suspense } from 'react';
    

const BuildingView = () => {

  const formatter = (value) => <CountUp end={value} separator="," duration={2}   />;
  const animatedValue={
    color:'white',
    fontFamily: 'Xolonium',
    fontSize: 16,
    textAlign: 'left',
    position: 'absolute',
    top: '10px',
    left: '12px',
  } ;

  const container = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x:0,
      transition: 
      {
        delay: 0.2,
        duration: 0.7,
        delayChildren: 1.5,
        staggerChildren: 0.2 , ease:"easeInOut"
       }
    },
    exit: { opacity: 0, x: -100, 
      transition:{
        delay: 0.7,
         duration: 0.7,
        delayChildren: 0.2,
      staggerChildren: 0.2 , ease:"easeInOut"
    }
    },
   }
  
  const item = {
    hidden: { opacity: 0, y:  -50 },
    show: { opacity: 1, y:0,
     },
     exit: { opacity: 0, y: 50 },
  }

   
  

  return (

    <>
    <Suspense fallback={<Loader />}>
    <motion.div className='buildingview'          
    variants={container}
    initial= 'hidden'  
    animate='show'
    exit='exit'
    >
 
      

        <div className='bvcontainer'>

          <div className='defaultbg' > 
            <img src='buildingviewbg_img.png' className='buildingviewbg_img'/> 

            <div className='backbtn'> 
            
            <Link to={`/`}>
                <h4 > 
                      <DoubleLeftOutlined />  Back 
                
                </h4>
            </Link>

              

            </div>



            {/* ------------------------------ building header ------------------------------ */}
            <motion.div className='bvheader' variants={item}>
              <div className='bvheaderlogo'> 
                          {/* <svg xmlns="http://www.w3.org/2000/svg" width="164" height="45" viewBox="0 0 164 45" fill="none">
                          <g clip-path="url(#clip0_24_408)">
                          <path d="M163.971 20.8873C164.382 14.8755 160.442 9.53909 154.587 8.19377C151.441 7.47098 148.203 8.02494 145.47 9.7554C143.188 11.201 141.488 13.3218 140.571 15.8278C140.016 14.6909 139.788 13.4168 139.932 12.1269C140.131 10.3436 141.009 8.74508 142.413 7.61607C144.957 5.5717 148.682 5.69568 151.077 7.90624L154.734 3.89137C150.322 -0.181534 143.723 -0.405755 139.028 3.36643C134.237 7.21511 133.131 14.0129 136.217 19.1621C133.231 18.4947 130.991 15.8067 130.991 12.5885C130.991 9.37027 133.411 6.4554 136.621 5.95156L135.785 0.567627C129.872 1.4988 125.581 6.55564 125.581 12.6017C125.581 18.6477 130.168 23.8813 136.091 24.6621C135.114 25.4614 133.93 25.9679 132.649 26.1129C130.878 26.3134 129.133 25.8096 127.729 24.6806C125.183 22.6362 124.475 18.9511 126.084 16.1101L121.382 13.4142C118.419 18.6504 119.671 25.1791 124.365 28.9487C126.587 30.7319 129.246 31.5971 131.887 31.5971C134.944 31.5971 137.978 30.4338 140.283 28.1916C140.301 31.2727 138.198 34.0715 135.083 34.789C131.91 35.517 128.607 33.7787 127.402 30.7398L122.377 32.7604C124.248 37.477 128.696 40.4103 133.553 40.4103C134.459 40.4103 135.379 40.3074 136.298 40.0964C142.274 38.7221 146.201 33.0796 145.638 27.0916C148.043 28.9988 148.905 32.399 147.516 35.2981C146.104 38.2525 142.696 39.7667 139.584 38.8197L138.02 44.0348C139.193 44.3909 140.38 44.5624 141.546 44.5624C146.078 44.5624 150.325 41.9799 152.397 37.6484C153.796 34.7204 153.982 31.4177 152.916 28.3499C152.025 25.7885 150.348 23.6492 148.127 22.1904C149.353 21.9002 150.634 21.9583 151.852 22.3883C153.534 22.9818 154.888 24.1978 155.666 25.8281C157.078 28.7825 156.127 32.4096 153.455 34.2693L156.528 38.7537C161.453 35.3297 163.141 28.9012 160.534 23.4513C159.132 20.5233 156.683 18.3206 153.636 17.247C151.092 16.3501 148.386 16.3369 145.868 17.1758C146.406 16.0309 147.252 15.0576 148.344 14.3664C149.853 13.4115 151.642 13.1055 153.392 13.5091C156.568 14.2398 158.792 17.247 158.569 20.5127L163.966 20.8873H163.971Z" fill="white"/>
                          <path d="M2.56999 9.0194V18.8746H0V6.22852H2.55165C3.52621 6.22852 3.94799 6.72708 4.33309 7.20981L9.54905 13.6621L14.765 7.20981C15.1501 6.72971 15.5719 6.22852 16.5464 6.22852H19.0981V18.8772H16.5281V9.02204L10.5603 16.271H8.54044L2.57261 9.02204L2.56999 9.0194Z" fill="white"/>
                          <path d="M39.1365 18.8746H36.3072L34.7091 15.7487H25.4535L23.8554 18.8746H21.0444L26.187 8.72404C26.9756 7.15186 27.9318 6.04395 30.08 6.04395C32.2282 6.04395 33.1661 7.1545 33.973 8.72404L39.1339 18.8746H39.1365ZM31.3873 9.25953C31.1122 8.72404 30.7638 8.39167 30.0826 8.39167C29.4015 8.39167 29.0531 8.72404 28.778 9.25953L26.6481 13.401H33.4988L31.3873 9.25953Z" fill="white"/>
                          <path d="M51.6985 16.5086C53.2415 16.5086 53.7366 16.0285 53.7366 15.3242C53.7366 14.4748 52.9848 14.0474 51.185 13.8997L45.1071 13.4196C42.2778 13.198 40.5907 12.1798 40.5907 9.85053C40.5907 7.17044 42.8306 6.22607 45.4215 6.22607H55.6334V8.59226H45.1831C43.9518 8.59226 43.255 8.92464 43.255 9.77667C43.255 10.4784 43.7318 10.8503 45.7883 11.0165L51.5727 11.4781C54.5304 11.7182 56.4402 12.6625 56.4402 15.2134C56.4402 17.358 55.0806 18.8748 51.536 18.8748H40.5356V16.5086H51.7011H51.6985Z" fill="white"/>
                          <path d="M58.772 6.22852H69.0939C73.592 6.22852 75.135 8.39159 75.135 12.5515C75.135 16.7115 73.592 18.8746 69.0939 18.8746H58.772V6.22852ZM69.0939 8.79782H61.3996V16.2868H69.0939C72.0882 16.2868 72.455 14.9731 72.455 12.5515C72.455 10.13 72.0882 8.79782 69.0939 8.79782Z" fill="white"/>
                          <path d="M93.9398 18.8746H91.1104L89.5124 15.7487H80.2567L78.6587 18.8746H75.8477L80.9903 8.72404C81.7788 7.15186 82.735 6.04395 84.8832 6.04395C87.0314 6.04395 87.9693 7.1545 88.7762 8.72404L93.9371 18.8746H93.9398ZM86.1905 9.25953C85.9154 8.72404 85.567 8.39167 84.8858 8.39167C84.2047 8.39167 83.8563 8.72404 83.5812 9.25953L81.4513 13.401H88.302L86.1905 9.25953Z" fill="white"/>
                          <path d="M95.8701 6.22852H106.779C109.865 6.22852 111.775 7.63451 111.775 10.1669C111.775 11.9422 110.837 13.0343 109.205 13.5144C110.803 14.0314 111.5 15.0681 111.5 16.3818V18.8772H108.783V16.3264C108.783 15.6247 108.398 14.7172 106.726 14.7172H98.5004V18.8772H95.8754V6.22852H95.8701ZM106.981 12.3669C108.597 12.3669 109.092 11.2933 109.092 10.4623C109.092 9.63139 108.597 8.55777 106.981 8.55777H98.4951V12.3669H106.981Z" fill="white"/>
                          <path d="M71.3311 29.0124H61.3969C58.3842 29.0124 58.0174 30.3446 58.0174 32.7661C58.0174 35.1877 58.3842 36.5014 61.3969 36.5014H71.3311V39.0892H61.3969C56.8804 39.0892 55.3374 36.9261 55.3374 32.7661C55.3374 28.6062 56.8804 26.4431 61.3969 26.4431H71.3311V29.0124Z" fill="white"/>
                          <path d="M76.458 26.4402V39.0889H73.833V26.4402H76.458Z" fill="white"/>
                          <path d="M84.6135 39.0889V28.8275H78.3706V26.4429H93.484V28.8275H87.2411V39.0889H84.6161H84.6135Z" fill="white"/>
                          <path d="M97.7252 26.4402L101.582 31.1198C101.967 31.5999 102.462 32.08 102.831 32.7289C103.198 32.0826 103.693 31.5999 104.099 31.1198L107.955 26.4402H111.775L105.569 33.2644C105.165 33.7076 104.154 34.7073 104.154 35.4644V39.0889H101.529V35.4644C101.529 34.6889 100.5 33.6891 100.114 33.2644L93.9082 26.4402H97.7278H97.7252Z" fill="white"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_24_408">
                            <rect width="164" height="44" fill="white" transform="translate(0 0.567627)"/>
                          </clipPath>
                          </defs>
                          </svg> */}
                </div>
              <div className='bvheadertitle'>
                       SMART <br/> SUSTAINABILITY 
                </div>
              <div className='bvheaderbuilding'>
                        ZAIN HQ <div className="bvheaderdivider"></div>
                </div>

            </motion.div>


            {/* ------------------------------ building top ------------------------------ */}

            <div className='bvtop' >

                    <motion.div className='bvsectioncard'variants={item}   >
                        <div className='bvcardheaderbg'><h3>ENERGY CONSUMPTION</h3></div>
                        <div className='cardbody'>
                            <div className='cardgroup'>
                              <div className='cardtop'>
                                  
                                          <Statistic   value={3834} formatter={formatter} 
                                          valueStyle={animatedValue} 
                                          />

                                
                                
                                <h6>MWh</h6> </div>

                              <div className='cardbottom'>  
                                <div>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                  <g opacity="0.3" filter="url(#filter0_b_86_62)">
                                          <rect x="0.855469" y="0.0539551" width="20" height="20" fill="#086050" fill-opacity="0.9"/>
                                          </g>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42871 14.0164V5.52905H6.42871V15.0164H15.916V14.0164H7.42871Z" fill="#8C9493"/>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58441 11.4723V13.3684H8.58441V11.4723H9.58441Z" fill="#8C9493"/>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8701 8.89648V13.3684H11.8701V8.89648H12.8701Z" fill="#8C9493"/>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6191 7.43649V13.3684H13.6191V7.43649H14.6191Z" fill="#8C9493"/>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1816 9.84871V13.3684H10.1816V9.84871H11.1816Z" fill="#8C9493"/>
                                          <defs>
                                            <filter id="filter0_b_86_62" x="-15.1445" y="-15.946" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                              <feGaussianBlur in="BackgroundImageFix" stdDeviation="8"/>
                                              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_86_62"/>
                                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_86_62" result="shape"/>
                                            </filter>
                                          </defs>
                                  </svg>
                                </div>
                                <div><h6>6,880</h6></div>
                                <div className="percent" style={{ left: "84px" }}><h6>33%</h6></div>
                                <div className='arrowup'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                    <path d="M6.55035 8.46387C6.16545 9.13053 5.2032 9.13053 4.8183 8.46387L0.853741 1.59705C0.468841 0.93038 0.949965 0.0970459 1.71977 0.0970459L9.64889 0.0970459C10.4187 0.0970459 10.8998 0.930379 10.5149 1.59705L6.55035 8.46387Z" fill="#41D3B9"/>
                                  </svg>
                                </div>
                              </div>

                            </div>

                            <div className='cardgroup'>
                              <div className='cardtop'><h3>120</h3><h6>KWh/SQM</h6> </div>

                              <div className='cardbottom'>  
                                <div>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                        <g opacity="0.3" filter="url(#filter0_b_86_62)">
                                          <rect x="0.855469" y="0.0539551" width="20" height="20" fill="#086050" fill-opacity="0.9"/>
                                        </g>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42871 14.0164V5.52905H6.42871V15.0164H15.916V14.0164H7.42871Z" fill="#8C9493"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58441 11.4723V13.3684H8.58441V11.4723H9.58441Z" fill="#8C9493"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8701 8.89648V13.3684H11.8701V8.89648H12.8701Z" fill="#8C9493"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6191 7.43649V13.3684H13.6191V7.43649H14.6191Z" fill="#8C9493"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1816 9.84871V13.3684H10.1816V9.84871H11.1816Z" fill="#8C9493"/>
                                        <defs>
                                          <filter id="filter0_b_86_62" x="-15.1445" y="-15.946" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="8"/>
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_86_62"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_86_62" result="shape"/>
                                          </filter>
                                        </defs>
                                  </svg>
                                </div>
                                <div><h6>215</h6></div>
                                <div className="percent" style={{ left: "84px" }}><h6>37%</h6></div>
                                <div className='arrowup'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                    <path d="M6.55035 8.46387C6.16545 9.13053 5.2032 9.13053 4.8183 8.46387L0.853741 1.59705C0.468841 0.93038 0.949965 0.0970459 1.71977 0.0970459L9.64889 0.0970459C10.4187 0.0970459 10.8998 0.930379 10.5149 1.59705L6.55035 8.46387Z" fill="#41D3B9"/>
                                  </svg>
                                </div>
                              </div>

                            </div>
                        </div>

                        <div className='cardfooter'>
                          <div className='cardicon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="23" viewBox="0 0 19 23" fill="none">
                              <path d="M6.93279 1.54695C7.32331 1.15642 7.95648 1.15643 8.347 1.54695L13.7646 6.96453C14.1551 7.35505 14.1551 7.98821 13.7646 8.37874L8.347 13.7963C7.95647 14.1868 7.32331 14.1868 6.93279 13.7963L1.51521 8.37874C1.12469 7.98821 1.12469 7.35505 1.51521 6.96452L6.93279 1.54695Z" fill="white"/>
                              <path d="M12.4623 13.6627C12.8529 13.2721 13.486 13.2721 13.8765 13.6627L17.3739 17.1601C17.7645 17.5506 17.7645 18.1838 17.3739 18.5743L13.8765 22.0717C13.486 22.4622 12.8529 22.4622 12.4623 22.0717L8.96492 18.5743C8.5744 18.1838 8.57439 17.5506 8.96492 17.1601L12.4623 13.6627Z" fill="white"/>
                            </svg>
                          </div>
                          <div className='cardfootertext'>
                            <p>" 34% Energy savings, equivalent to removing 1,637 cars from the road. "</p>
                          </div>
                        </div>
                      </motion.div>

                    <motion.div className='bvsectioncard' variants={item}  >
                        <div className='bvcardheaderbg'><h3>WATER CONSUMPTION</h3></div>
                        <div className='cardbody'>
                        <div className='cardgroup'>
                        <div className='cardtop'>
                        <Statistic   value={10966} formatter={formatter} 
                                        valueStyle={animatedValue} 
                                        />

                          
                          
                          <h6>M3</h6> </div>

                        <div className='cardbottom'>  
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                  <g opacity="0.3" filter="url(#filter0_b_86_62)">
                                  <rect x="0.855469" y="0.0539551" width="20" height="20" fill="#086050" fill-opacity="0.9"/>
                                  </g>
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42871 14.0164V5.52905H6.42871V15.0164H15.916V14.0164H7.42871Z" fill="#8C9493"/>
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58441 11.4723V13.3684H8.58441V11.4723H9.58441Z" fill="#8C9493"/>
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8701 8.89648V13.3684H11.8701V8.89648H12.8701Z" fill="#8C9493"/>
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6191 7.43649V13.3684H13.6191V7.43649H14.6191Z" fill="#8C9493"/>
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1816 9.84871V13.3684H10.1816V9.84871H11.1816Z" fill="#8C9493"/>
                                  <defs>
                                  <filter id="filter0_b_86_62" x="-15.1445" y="-15.946" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="8"/>
                                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_86_62"/>
                                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_86_62" result="shape"/>
                                  </filter>
                                  </defs>
                            </svg>
                          </div>
                          <div><h6>14,629</h6></div>
                          <div className="percent" style={{ left: "84px" }}><h6>40%</h6></div>
                          <div className='arrowup'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                              <path d="M6.55035 8.46387C6.16545 9.13053 5.2032 9.13053 4.8183 8.46387L0.853741 1.59705C0.468841 0.93038 0.949965 0.0970459 1.71977 0.0970459L9.64889 0.0970459C10.4187 0.0970459 10.8998 0.930379 10.5149 1.59705L6.55035 8.46387Z" fill="#41D3B9"/>
                            </svg>
                          </div>
                        </div>

                        </div>

                        <div className='cardgroup'>
                          <div className='cardtop'><h3>342</h3><h6>Liters/SQM</h6> </div>

                          <div className='cardbottom'>  
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                        <g opacity="0.3" filter="url(#filter0_b_86_62)">
                                          <rect x="0.855469" y="0.0539551" width="20" height="20" fill="#086050" fill-opacity="0.9"/>
                                        </g>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42871 14.0164V5.52905H6.42871V15.0164H15.916V14.0164H7.42871Z" fill="#8C9493"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58441 11.4723V13.3684H8.58441V11.4723H9.58441Z" fill="#8C9493"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8701 8.89648V13.3684H11.8701V8.89648H12.8701Z" fill="#8C9493"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6191 7.43649V13.3684H13.6191V7.43649H14.6191Z" fill="#8C9493"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1816 9.84871V13.3684H10.1816V9.84871H11.1816Z" fill="#8C9493"/>
                                        <defs>
                                          <filter id="filter0_b_86_62" x="-15.1445" y="-15.946" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="8"/>
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_86_62"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_86_62" result="shape"/>
                                          </filter>
                                        </defs>
                              </svg>
                            </div>
                            <div><h6>456</h6></div>
                            <div className="percent" style={{ left: "84px" }}><h6>25%</h6></div>
                            <div className='arrowup'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                <path d="M6.55035 8.46387C6.16545 9.13053 5.2032 9.13053 4.8183 8.46387L0.853741 1.59705C0.468841 0.93038 0.949965 0.0970459 1.71977 0.0970459L9.64889 0.0970459C10.4187 0.0970459 10.8998 0.930379 10.5149 1.59705L6.55035 8.46387Z" fill="#41D3B9"/>
                              </svg>
                            </div>
                          </div>

                        </div>
                        </div>

                        <div className='cardfooter'>
                          <div className='cardicon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="23" viewBox="0 0 19 23" fill="none">
                              <path d="M6.93279 1.54695C7.32331 1.15642 7.95648 1.15643 8.347 1.54695L13.7646 6.96453C14.1551 7.35505 14.1551 7.98821 13.7646 8.37874L8.347 13.7963C7.95647 14.1868 7.32331 14.1868 6.93279 13.7963L1.51521 8.37874C1.12469 7.98821 1.12469 7.35505 1.51521 6.96452L6.93279 1.54695Z" fill="white"/>
                              <path d="M12.4623 13.6627C12.8529 13.2721 13.486 13.2721 13.8765 13.6627L17.3739 17.1601C17.7645 17.5506 17.7645 18.1838 17.3739 18.5743L13.8765 22.0717C13.486 22.4622 12.8529 22.4622 12.4623 22.0717L8.96492 18.5743C8.5744 18.1838 8.57439 17.5506 8.96492 17.1601L12.4623 13.6627Z" fill="white"/>
                            </svg>
                          </div>
                          <div className='cardfootertext'>
                            <p>" 49% Energy savings, equivalent to removing 218 cars from the road. "</p>
                          </div>
                        </div>
                    </motion.div>

                    <motion.div className='bvsectioncard' variants={item}   >
                            <div className='bvcardheaderbg'><h3>WASTE PRODUCTION</h3></div>
                            <div className='cardbody'>
                                <div className='cardgroup'>
                                  <div className='cardtop'>
                                     <Statistic   value={798} formatter={formatter} 
                                      valueStyle={animatedValue} 
                                      />

                                    <h6>Tons</h6> </div>

                                  <div className='cardbottom'>  
                                    <div>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                            <g opacity="0.3" filter="url(#filter0_b_86_62)">
                                              <rect x="0.855469" y="0.0539551" width="20" height="20" fill="#086050" fill-opacity="0.9"/>
                                            </g>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42871 14.0164V5.52905H6.42871V15.0164H15.916V14.0164H7.42871Z" fill="#8C9493"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58441 11.4723V13.3684H8.58441V11.4723H9.58441Z" fill="#8C9493"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8701 8.89648V13.3684H11.8701V8.89648H12.8701Z" fill="#8C9493"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6191 7.43649V13.3684H13.6191V7.43649H14.6191Z" fill="#8C9493"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1816 9.84871V13.3684H10.1816V9.84871H11.1816Z" fill="#8C9493"/>
                                            <defs>
                                              <filter id="filter0_b_86_62" x="-15.1445" y="-15.946" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="8"/>
                                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_86_62"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_86_62" result="shape"/>
                                              </filter>
                                            </defs>
                                      </svg>
                                    </div>
                                    <div><h6> </h6></div>
                                    <div className="percent" style={{ left: "90px" }}><h6>5%</h6></div>
                                    <div className='arrowup'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                        <path d="M6.55035 8.46387C6.16545 9.13053 5.2032 9.13053 4.8183 8.46387L0.853741 1.59705C0.468841 0.93038 0.949965 0.0970459 1.71977 0.0970459L9.64889 0.0970459C10.4187 0.0970459 10.8998 0.930379 10.5149 1.59705L6.55035 8.46387Z" fill="#41D3B9"/>
                                      </svg>
                                    </div>
                                  </div>

                                </div>

                                <div className='cardgroup'>
                                  <div className='cardtop'><h3>3%</h3><h6> </h6> </div>

                                  <div className='cardbottom'>  
                                    <div>
                                      
                                    </div>
                                    <div><h6> </h6></div>
                                    <div><h6>Diverted to landfill</h6></div>
                                  </div>

                                </div>
                            </div>

                      </motion.div>

                      <motion.div className='bvsectioncard' variants={item}>
                            <div className='bvcardheaderbg'><h3>CARBON FOOTPRINT</h3></div>
                            <div className='cardbody'>
                                <div className='cardgroup'>
                                  <div className='cardtop'>
                                     <Statistic value={1088} formatter={formatter} 
                                      valueStyle={animatedValue} 
                                      />

                                    <h6>Tons</h6> </div>

                                  <div className='cardbottom' style={{height:82}}>  
                                    <div>
                                    </div>
                                    <div><h6> </h6></div>
                                    <div><h6> </h6></div>
                                  </div>

                                </div>

                                <div className='cardgroup'>
                                  <div className='carbonbars'>
                                        <div className='cardbottom'>  
                                          <div>
                                          </div>
                                          <div style={{position:'relative', left:-20 }}><h6>Energy </h6></div>
                                          <div className="percent" style={{ left: "90px" }}>
                                            <h6>836</h6>
                                            </div>
                                          <div className='arrowup'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                              <path d="M6.55035 8.46387C6.16545 9.13053 5.2032 9.13053 4.8183 8.46387L0.853741 1.59705C0.468841 0.93038 0.949965 0.0970459 1.71977 0.0970459L9.64889 0.0970459C10.4187 0.0970459 10.8998 0.930379 10.5149 1.59705L6.55035 8.46387Z" fill="#41D3B9"/>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className='cardbar'>  
                                          <div style={{position:'relative', left:0  }}> 


                                          <motion.div className='bar' 
                                          style={{position:'relative', top:12, left:14  }} 
                                          initial={{width:0}}
                                          animate={{width:130}}
                                          transition={{ delay:4, duration:2, ease:'easeOut' }}
                                          />


                                                <svg xmlns="http://www.w3.org/2000/svg" width="176" height="13" viewBox="0 0 176 13" fill="none">
                                                  <g opacity="0.2" filter="url(#filter0_b_24_739)">
                                                    <rect x="0.305664" y="0.343018" width="175.441" height="12" fill="#086050" fill-opacity="0.9"/>
                                                  </g>
                                                  <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M166.156 7.34302H13.4004V5.34302H166.156V7.34302Z" fill="#010101"/>
                                                  
                                                  <line opacity="0.5" x1="11.6963" y1="3.24341" x2="11.6963" y2="9.24341" stroke="white"/>
                                                  <line opacity="0.5" x1="167.737" y1="3.24341" x2="167.737" y2="9.24341" stroke="white"/>
                                                  <defs>
                                                    <filter id="filter0_b_24_739" x="-15.6943" y="-15.657" width="207.441" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="8"/>
                                                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_24_739"/>
                                                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_24_739" result="shape"/>
                                                    </filter>
                                                  </defs>
                                                </svg>
                                          </div>
                                        </div>
                                  </div>

                                  <div className='carbonbars' style={{position:'relative', top:-2 }} >
                                        <div className='cardbottom'>  
                                          <div>
                                          </div>
                                          <div style={{position:'relative', left:-20 }}><h6>Water </h6></div>
                                          <div className="percent" style={{ left: "90px" }}><h6>126</h6></div>
                                          <div className='arrowup'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                              <path d="M6.55035 8.46387C6.16545 9.13053 5.2032 9.13053 4.8183 8.46387L0.853741 1.59705C0.468841 0.93038 0.949965 0.0970459 1.71977 0.0970459L9.64889 0.0970459C10.4187 0.0970459 10.8998 0.930379 10.5149 1.59705L6.55035 8.46387Z" fill="#41D3B9"/>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className='cardbar'>  
                                          <div style={{position:'relative', left:0  }}> 

                                          <motion.div className='bar' 
                                          style={{position:'relative', top:12, left:14  }} 
                                          initial={{width:0}}
                                          animate={{width:120}}
                                          transition={{delay:4.3, duration:2, ease:'easeOut'}}
                                          
                                          />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="176" height="13" viewBox="0 0 176 13" fill="none">
                                                  <g opacity="0.2" filter="url(#filter0_b_24_739)">
                                                    <rect x="0.305664" y="0.343018" width="175.441" height="12" fill="#086050" fill-opacity="0.9"/>
                                                  </g>
                                                  <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M166.156 7.34302H13.4004V5.34302H166.156V7.34302Z" fill="#010101"/>
                                                  
                                                  <line opacity="0.5" x1="11.6963" y1="3.24341" x2="11.6963" y2="9.24341" stroke="white"/>
                                                  <line opacity="0.5" x1="167.737" y1="3.24341" x2="167.737" y2="9.24341" stroke="white"/>
                                                  <defs>
                                                    <filter id="filter0_b_24_739" x="-15.6943" y="-15.657" width="207.441" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="8"/>
                                                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_24_739"/>
                                                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_24_739" result="shape"/>
                                                    </filter>
                                                  </defs>
                                                </svg>
                                          </div>
                                        </div>
                                  </div>

                                  <div className='carbonbars' style={{position:'relative', top:-4 }} >
                                        <div className='cardbottom'>  
                                          <div>
                                          </div>
                                          <div style={{position:'relative', left:-20 }}><h6>Waste</h6></div>
                                          <div className="percent" style={{ left: "90px" }}><h6>126</h6></div>
                                          <div className='arrowup'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                              <path d="M6.55035 8.46387C6.16545 9.13053 5.2032 9.13053 4.8183 8.46387L0.853741 1.59705C0.468841 0.93038 0.949965 0.0970459 1.71977 0.0970459L9.64889 0.0970459C10.4187 0.0970459 10.8998 0.930379 10.5149 1.59705L6.55035 8.46387Z" fill="#41D3B9"/>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className='cardbar'>  
                                          <div style={{position:'relative', left:0  }}> 



                                          <motion.div className='bar' 
                                          style={{position:'relative', top:12, left:14,   }} 
                                          initial={{width:0}}
                                          animate={{width:100}}
                                          transition={{ delay:4.6, duration:2, ease:'easeOut'}}
                                          />



                                                <svg xmlns="http://www.w3.org/2000/svg" width="176" height="13" viewBox="0 0 176 13" fill="none">
                                                  <g opacity="0.2" filter="url(#filter0_b_24_739)">
                                                    <rect x="0.305664" y="0.343018" width="175.441" height="12" fill="#086050" fill-opacity="0.9"/>
                                                  </g>
                                                  <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M166.156 7.34302H13.4004V5.34302H166.156V7.34302Z" fill="#010101"/>
                                                  <line opacity="0.5" x1="11.6963" y1="3.24341" x2="11.6963" y2="9.24341" stroke="white"/>
                                                  <line opacity="0.5" x1="167.737" y1="3.24341" x2="167.737" y2="9.24341" stroke="white"/>
                                                  <defs>
                                                    <filter id="filter0_b_24_739" x="-15.6943" y="-15.657" width="207.441" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="8"/>
                                                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_24_739"/>
                                                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_24_739" result="shape"/>
                                                    </filter>
                                                  </defs>
                                                </svg>
                                          </div>
                                        </div>
                                  </div>

                                  


                                </div>
                            </div>

                      </motion.div>



            </div>



            {/* ------------------------------ building bottom ------------------------------ */}

            < motion.div className='bvbottom' variants={item} >

                  <div className='bvbottomleft'>

                      <div className='bvnavlist'>
                        <div className='bvnavactive' >ENERGY CONSUMPTION</div>
                        <div className='bvnav'>WATER CONSUMPTION</div>
                        <div className='bvnav'>WASTE PRODUCTION</div>
                        <div className='bvnav'>CARBON FOOTPRINT</div>
                      </div>

                      < div className='bvchartcontainer' >
                        <div className='bvchartcontainerline'/> 

                        <div className='bvchartnavlist' >
                              <div className='bvchartnavactive' >SAVINGS</div>
                              <div className='bvchartnav'>CONSUMPTION</div>
                        </div> 
                          
                        <div className='bvchart'> 
                          <ChartEnrConTre />
                        </div>

                        

                      </ div>

                      <div className='bvbottomleftbtns' >
                              <div className='bvsusanabtn' >SUSTAINABILITY ANALYSIS</div>
                              <div className='bvbldgmanbtn'>BUILDING MANAGEMENT</div>
                        </div> 

                      
                  </ div>



































                  < div className='bvbottomright'  >
                  
                            {/* <img src='holo-kuwaitzain-floor.png' className='holosiemensfloor'  />  */}
                        
                            
                            <img src='holo-kuwaitzain.png' className='holosiemens'  /> 
 
 


                        <img src='circleglow.png' className='circleglow'  /> 
                              <div className='floorselect'>
                                  <div className='floorbtnactive' style={{width: 80}}>Building</div>
                                  <div className='floorselectlabel'>Floor Select</div>
                                  <div className='floorbtn'>1F</div>
                                  <div className='floorbtn'>2F</div>
                                  <div className='floorbtn'>3F</div>
                                  <div className='floorbtn'>4F</div>
                                  <div className='floorbtn'>5F</div>
                                  <div className='floorbtn'>6F</div>
                                  <div className='floorbtn'>7F</div>
                                </div>            

                  </div>

            </ motion.div>
          </div>

        </div>
      
    </motion.div></Suspense>

 
    </>

  )


}

export default BuildingView