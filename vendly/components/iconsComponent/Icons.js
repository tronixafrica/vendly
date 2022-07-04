// product icon
// className="w-[14px] h-[14px]"
export const ProductIcon = ({color, width, height}) => {
  return (
    <svg  className={`${color} ${width} ${height}`} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.3999 8.6H19.5999V21.8H0.399902V8.6H1.5999V6.2C1.5999 2.888 4.2879 0.2 7.5999 0.2C8.4519 0.2 9.2679 0.38 9.9999 0.704C10.756 0.370552 11.5735 0.19888 12.3999 0.2C15.7119 0.2 18.3999 2.888 18.3999 6.2V8.6ZM3.9999 6.2V8.6H6.3999V6.2C6.3999 4.844 6.8679 3.608 7.6239 2.6H7.5999C5.6199 2.6 3.9999 4.22 3.9999 6.2ZM15.9999 8.6V6.2C15.9999 4.22 14.3799 2.6 12.3999 2.6H12.3759C13.165 3.63473 13.5947 4.89874 13.5999 6.2V8.6H15.9999ZM9.9999 3.536C9.2679 4.196 8.7999 5.144 8.7999 6.2V8.6H11.1999V6.2C11.1999 5.144 10.7319 4.196 9.9999 3.536Z" fill={color}/>
    </svg>  
  );
}


// account icon
export const AccountIcon = ({color}) => {
  return ( 
    <svg className="w-[14px] h-[14px]"  viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM9 3C10.93 3 12.5 4.57 12.5 6.5C12.5 8.43 10.93 10 9 10C7.07 10 5.5 8.43 5.5 6.5C5.5 4.57 7.07 3 9 3ZM16 16H2V15.77C2 15.15 2.28 14.57 2.76 14.19C4.47 12.82 6.64 12 9 12C11.36 12 13.53 12.82 15.24 14.19C15.72 14.57 16 15.16 16 15.77V16Z" fill={color}/>
    </svg> 
  );
}

// insight icon
export const InsightIcon = ({color}) => {
  return(
    <svg className="w-[14px] h-[14px]" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 17C1.45 17 0.979333 16.8043 0.588 16.413C0.196 16.021 0 15.55 0 15C0 14.45 0.196 13.979 0.588 13.587C0.979333 13.1957 1.45 13 2 13H2.263C2.33767 13 2.41667 13.0167 2.5 13.05L7.05 8.5C7.01667 8.41667 7 8.33733 7 8.262V8C7 7.45 7.196 6.979 7.588 6.587C7.97933 6.19567 8.45 6 9 6C9.55 6 10.021 6.19567 10.413 6.587C10.8043 6.979 11 7.45 11 8C11 8.03333 10.9833 8.2 10.95 8.5L13.5 11.05C13.5833 11.0167 13.6627 11 13.738 11H14.262C14.3373 11 14.4167 11.0167 14.5 11.05L18.05 7.5C18.0167 7.41667 18 7.33733 18 7.262V7C18 6.45 18.1957 5.979 18.587 5.587C18.979 5.19567 19.45 5 20 5C20.55 5 21.021 5.19567 21.413 5.587C21.8043 5.979 22 6.45 22 7C22 7.55 21.8043 8.02067 21.413 8.412C21.021 8.804 20.55 9 20 9H19.738C19.6627 9 19.5833 8.98333 19.5 8.95L15.95 12.5C15.9833 12.5833 16 12.6627 16 12.738V13C16 13.55 15.8043 14.021 15.413 14.413C15.021 14.8043 14.55 15 14 15C13.45 15 12.9793 14.8043 12.588 14.413C12.196 14.021 12 13.55 12 13V12.738C12 12.6627 12.0167 12.5833 12.05 12.5L9.5 9.95C9.41667 9.98333 9.33733 10 9.262 10H9C8.96667 10 8.8 9.98333 8.5 9.95L3.95 14.5C3.98333 14.5833 4 14.6627 4 14.738V15C4 15.55 3.804 16.021 3.412 16.413C3.02067 16.8043 2.55 17 2 17ZM14 6L13.05 3.95L11 3L13.05 2.05L14 0L14.95 2.05L17 3L14.95 3.95L14 6ZM3 6.975L2.375 5.625L1.025 5L2.375 4.375L3 3.025L3.625 4.375L4.975 5L3.625 5.625L3 6.975Z" fill={color}/>
    </svg>
)
}


// metric icon
export const MetricIcon = ({color}) =>{
  return(
    <svg width="19" height="19" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.11816 1.47758V3.34047" stroke={color} strokeWidth="2.79433" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
} 

// help icon
export const HelpIcon = ({color}) =>{
  return(
    <svg className="w-[14px] h-[14px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM11 16H9V14H11V16ZM11.976 11.115C11.78 11.273 11.591 11.424 11.441 11.574C11.033 11.981 11.001 12.351 11 12.367V12.5H9V12.333C9 12.215 9.029 11.156 10.026 10.159C10.221 9.964 10.463 9.766 10.717 9.56C11.451 8.965 11.933 8.531 11.933 7.933C11.9214 7.42782 11.7125 6.94725 11.3511 6.59412C10.9896 6.24099 10.5043 6.04334 9.99901 6.04347C9.4937 6.0436 9.0085 6.2415 8.64725 6.59482C8.28599 6.94814 8.07736 7.42881 8.066 7.934H6.066C6.066 5.765 7.831 4 10 4C12.169 4 13.934 5.765 13.934 7.934C13.934 9.531 12.755 10.484 11.976 11.115Z" fill={color}/>
    </svg>
  )
} 

// help icon
export const FeedBackIcon = ({color}) =>{
  return(
    <svg className="w-[14px] h-[14px]" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 9C5.5 8.80109 5.57902 8.61032 5.71967 8.46967C5.86032 8.32902 6.05109 8.25 6.25 8.25H13V3.375C13 1.875 11.4161 0.75 10 0.75H2.875C2.17904 0.750744 1.51179 1.02755 1.01967 1.51967C0.527545 2.01179 0.250744 2.67904 0.25 3.375V14.625C0.250744 15.321 0.527545 15.9882 1.01967 16.4803C1.51179 16.9725 2.17904 17.2493 2.875 17.25H10.375C11.071 17.2493 11.7382 16.9725 12.2303 16.4803C12.7225 15.9882 12.9993 15.321 13 14.625V9.75H6.25C6.05109 9.75 5.86032 9.67098 5.71967 9.53033C5.57902 9.38968 5.5 9.19891 5.5 9ZM19.5302 8.46984L15.7802 4.71984C15.6384 4.58513 15.4495 4.51114 15.254 4.51364C15.0584 4.51614 14.8715 4.59495 14.7332 4.73325C14.5949 4.87155 14.5161 5.0584 14.5136 5.25398C14.5111 5.44955 14.5851 5.63836 14.7198 5.78016L17.1892 8.25H13V9.75H17.1892L14.7198 12.2198C14.6473 12.2888 14.5892 12.3716 14.5492 12.4633C14.5091 12.555 14.4878 12.6539 14.4865 12.754C14.4852 12.8541 14.504 12.9534 14.5417 13.0461C14.5794 13.1389 14.6353 13.2231 14.7061 13.2939C14.7769 13.3647 14.8611 13.4206 14.9539 13.4583C15.0466 13.496 15.1459 13.5148 15.246 13.5135C15.3461 13.5122 15.445 13.4909 15.5367 13.4508C15.6284 13.4108 15.7112 13.3527 15.7802 13.2802L19.5302 9.53016C19.6707 9.38952 19.7497 9.19883 19.7497 9C19.7497 8.80117 19.6707 8.61048 19.5302 8.46984Z" fill={color}/>
    </svg>
  )
} 

// help icon
export const NotificationIcon = ({color, width, height}) =>{
  return(
    <svg width={width} height={height}viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.5 30.2556L33.1222 29.9222C32.0505 28.9673 31.1124 27.8723 30.3334 26.6667C29.4825 25.0028 28.9725 23.1858 28.8334 21.3222V15.8333C28.8288 15.1666 28.7694 14.5014 28.6556 13.8445C26.7735 13.4576 25.0829 12.4323 23.87 10.942C22.6572 9.45172 21.9966 7.58811 22 5.66667V4.96667C20.8399 4.39577 19.5935 4.02035 18.3111 3.85556V2.45556C18.3111 2.06216 18.1549 1.68487 17.8767 1.40669C17.5985 1.12851 17.2212 0.972229 16.8278 0.972229C16.4344 0.972229 16.0571 1.12851 15.7789 1.40669C15.5008 1.68487 15.3445 2.06216 15.3445 2.45556V3.91112C12.473 4.31618 9.84511 5.74639 7.94583 7.93771C6.04655 10.129 5.00417 12.9335 5.01114 15.8333V21.3222C4.87198 23.1858 4.362 25.0028 3.51114 26.6667C2.74545 27.8693 1.82247 28.9642 0.766694 29.9222L0.388916 30.2556V33.3889H33.5V30.2556Z" fill={color}/>
    </svg>

  )
} 

// search icon
export const SearchIcon = ({color, width, height}) =>{
  return(
    <svg width={width} height={height} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20L15.514 15.506M18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
} 

// close icon
export const CloseIcon = ({color, width, height}) =>{
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.414 10L14.243 7.172C14.4306 6.98436 14.5361 6.72986 14.5361 6.4645C14.5361 6.19914 14.4306 5.94464 14.243 5.757C14.0554 5.56936 13.8009 5.46394 13.5355 5.46394C13.2701 5.46394 13.0156 5.56936 12.828 5.757L10 8.586L7.172 5.757C6.98436 5.56936 6.72986 5.46394 6.4645 5.46394C6.19914 5.46394 5.94464 5.56936 5.757 5.757C5.56936 5.94464 5.46394 6.19914 5.46394 6.4645C5.46394 6.72986 5.56936 6.98436 5.757 7.172L8.586 10L5.757 12.828C5.56936 13.0156 5.46394 13.2701 5.46394 13.5355C5.46394 13.8009 5.56936 14.0554 5.757 14.243C5.94464 14.4306 6.19914 14.5361 6.4645 14.5361C6.72986 14.5361 6.98436 14.4306 7.172 14.243L10 11.414L12.828 14.243C13.0156 14.4306 13.2701 14.5361 13.5355 14.5361C13.8009 14.5361 14.0554 14.4306 14.243 14.243C14.4306 14.0554 14.5361 13.8009 14.5361 13.5355C14.5361 13.2701 14.4306 13.0156 14.243 12.828L11.414 10ZM10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20Z" fill={color}/>
    </svg>

  )
} 

// close icon
export const DottedIcon = ({color, width, height}) =>{
  return (
    <svg class={`text-${color} w-${width} h-${height}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>

  )
} 

// arrow icon
export const ArrowIcon = ({width, height}) =>{
  return (
    <svg width={width} height={height} viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.48328 3.53343L7.94995 10.0001L1.48328 16.4668C1.32898 16.6211 1.20658 16.8043 1.12307 17.0059C1.03956 17.2075 0.996582 17.4235 0.996582 17.6418C0.996582 17.86 1.03956 18.0761 1.12307 18.2777C1.20658 18.4793 1.32898 18.6625 1.48328 18.8168C1.63759 18.9711 1.82077 19.0935 2.02238 19.177C2.22398 19.2605 2.44007 19.3035 2.65828 19.3035C2.8765 19.3035 3.09258 19.2605 3.29419 19.177C3.4958 19.0935 3.67898 18.9711 3.83328 18.8168L11.4833 11.1668C12.1333 10.5168 12.1333 9.46677 11.4833 8.81676L3.83328 1.16677C3.67909 1.01226 3.49595 0.889681 3.29432 0.806046C3.0927 0.722408 2.87656 0.679359 2.65828 0.679359C2.44 0.679359 2.22387 0.722408 2.02224 0.806046C1.82062 0.889681 1.63747 1.01226 1.48328 1.16677C0.84995 1.81677 0.833283 2.88343 1.48328 3.53343Z" fill="#4F4F4F"/>
    </svg>

  )
} 

// bank details icon
export const BankDetailsIcon = ({width, height}) =>{
  return (
    <svg width={width} height={height} viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.6665 6.83325V3.49992C9.6665 2.57944 10.4127 1.83325 11.3332 1.83325H32.9998C33.9203 1.83325 34.6665 2.57944 34.6665 3.49992V18.4999C34.6665 19.4204 33.9203 20.1666 32.9998 20.1666H31.3332" fill="#0055D4"/>
    <path d="M9.6665 6.83325V3.49992C9.6665 2.57944 10.4127 1.83325 11.3332 1.83325H32.9998C33.9203 1.83325 34.6665 2.57944 34.6665 3.49992V18.4999C34.6665 19.4204 33.9203 20.1666 32.9998 20.1666H31.3332" stroke="#0055D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24.6666 11.8333H2.99992C2.07944 11.8333 1.33325 12.5794 1.33325 13.4999V28.4999C1.33325 29.4204 2.07944 30.1666 2.99992 30.1666H24.6666C25.5871 30.1666 26.3333 29.4204 26.3333 28.4999V13.4999C26.3333 12.5794 25.5871 11.8333 24.6666 11.8333Z" fill="#0055D4" stroke="#0055D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.33325 19.3333H26.3333H1.33325Z" fill="#0055D4"/>
    <path d="M1.33325 19.3333H26.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.3333 15.1665V25.1665V15.1665Z" fill="#0055D4"/>
    <path d="M26.3333 15.1665V25.1665" stroke="#0055D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.33325 15.1665V25.1665V15.1665Z" fill="#0055D4"/>
    <path d="M1.33325 15.1665V25.1665" stroke="#0055D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.1665 24.3333H13.8332" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.8333 24.3333H20.4999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>


  )
} 



// health icon
export const HealthIcon = ({width, height}) =>{
  return (
    <svg  width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M19.9999 34.9999C28.2841 34.9999 34.9999 28.2841 34.9999 19.9999C34.9999 11.7158 28.2841 4.99992 19.9999 4.99992C11.7158 4.99992 4.99992 11.7158 4.99992 19.9999C4.99992 28.2841 11.7158 34.9999 19.9999 34.9999ZM19.9999 36.6666C29.2049 36.6666 36.6666 29.2049 36.6666 19.9999C36.6666 10.7949 29.2049 3.33325 19.9999 3.33325C10.7949 3.33325 3.33325 10.7949 3.33325 19.9999C3.33325 29.2049 10.7949 36.6666 19.9999 36.6666Z" fill="#0055D4"/>
    <path d="M10 29.6915C10 28.8306 10.6433 28.1031 11.5 28.0081C17.9292 27.2965 22.1 27.3606 28.515 28.024C28.8353 28.0576 29.139 28.1838 29.3888 28.3872C29.6385 28.5905 29.8237 28.8622 29.9216 29.1691C30.0196 29.4759 30.026 29.8047 29.9402 30.1151C29.8544 30.4256 29.68 30.7043 29.4383 30.9173C21.8675 37.5165 17.5408 37.4256 10.5333 30.924C10.1917 30.6073 10 30.1573 10 29.6923V29.6915Z" fill="#0055D4"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M28.429 28.8523C22.0648 28.194 17.954 28.1323 11.5907 28.8365C11.3812 28.8609 11.1881 28.9617 11.0483 29.1196C10.9086 29.2775 10.832 29.4814 10.8332 29.6923C10.8332 29.9307 10.9323 30.1565 11.0998 30.3131C14.5732 33.5348 17.2048 34.9907 19.7773 34.9998C22.359 35.009 25.1323 33.5648 28.8907 30.2898C29.0101 30.1835 29.096 30.0449 29.1381 29.8907C29.1802 29.7365 29.1765 29.5733 29.1276 29.4212C29.0787 29.269 28.9867 29.1343 28.8626 29.0335C28.7386 28.9326 28.588 28.87 28.429 28.8532V28.8523ZM11.4082 27.1798C17.9048 26.4607 22.1365 26.5256 28.6015 27.1948C29.0834 27.2451 29.5402 27.4348 29.916 27.7408C30.2917 28.0467 30.5701 28.4555 30.7171 28.9172C30.8641 29.3789 30.8733 29.8735 30.7435 30.3403C30.6137 30.8071 30.3507 31.226 29.9865 31.5456C26.174 34.869 22.999 36.679 19.7723 36.6665C16.5365 36.6548 13.5015 34.814 9.96734 31.5348C9.7143 31.2991 9.51259 31.0138 9.37479 30.6966C9.237 30.3795 9.1661 30.0373 9.16651 29.6915C9.16529 29.0702 9.39334 28.4703 9.80698 28.0066C10.2206 27.543 10.7907 27.2483 11.4082 27.179V27.1798Z" fill="#0055D4"/>
    <path d="M26.6666 16.6667C26.6666 18.4348 25.9642 20.1305 24.714 21.3807C23.4637 22.631 21.768 23.3333 19.9999 23.3333C18.2318 23.3333 16.5361 22.631 15.2859 21.3807C14.0356 20.1305 13.3333 18.4348 13.3333 16.6667C13.3333 14.8986 14.0356 13.2029 15.2859 11.9526C16.5361 10.7024 18.2318 10 19.9999 10C21.768 10 23.4637 10.7024 24.714 11.9526C25.9642 13.2029 26.6666 14.8986 26.6666 16.6667Z" fill="#0055D4"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M19.9999 21.6667C21.326 21.6667 22.5978 21.1399 23.5355 20.2022C24.4731 19.2645 24.9999 17.9927 24.9999 16.6667C24.9999 15.3406 24.4731 14.0688 23.5355 13.1311C22.5978 12.1935 21.326 11.6667 19.9999 11.6667C18.6738 11.6667 17.4021 12.1935 16.4644 13.1311C15.5267 14.0688 14.9999 15.3406 14.9999 16.6667C14.9999 17.9927 15.5267 19.2645 16.4644 20.2022C17.4021 21.1399 18.6738 21.6667 19.9999 21.6667ZM19.9999 23.3333C21.768 23.3333 23.4637 22.631 24.714 21.3807C25.9642 20.1305 26.6666 18.4348 26.6666 16.6667C26.6666 14.8986 25.9642 13.2029 24.714 11.9526C23.4637 10.7024 21.768 10 19.9999 10C18.2318 10 16.5361 10.7024 15.2859 11.9526C14.0356 13.2029 13.3333 14.8986 13.3333 16.6667C13.3333 18.4348 14.0356 20.1305 15.2859 21.3807C16.5361 22.631 18.2318 23.3333 19.9999 23.3333Z" fill="#0055D4"/>
    </svg>


  )
} 


// business info icon
export const BusinessInfoIcon = ({width, height}) =>{
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.6425 35H11.25C9.5924 35 8.00269 34.3415 6.83058 33.1694C5.65848 31.9973 5 30.4076 5 28.75V15H18.3425C16.5364 16.2678 15.0625 17.9522 14.0455 19.9105C13.0285 21.8688 12.4983 24.0434 12.5 26.25C12.5 29.575 13.68 32.625 15.6425 35ZM35 12.5V11.25C35 9.5924 34.3415 8.00269 33.1694 6.83058C31.9973 5.65848 30.4076 5 28.75 5H11.25C9.5924 5 8.00269 5.65848 6.83058 6.83058C5.65848 8.00269 5 9.5924 5 11.25V12.5H35ZM24.6875 21.25C24.6875 20.8356 24.8521 20.4382 25.1451 20.1451C25.4382 19.8521 25.8356 19.6875 26.25 19.6875C26.6644 19.6875 27.0618 19.8521 27.3549 20.1451C27.6479 20.4382 27.8125 20.8356 27.8125 21.25C27.8125 21.6644 27.6479 22.0618 27.3549 22.3549C27.0618 22.6479 26.6644 22.8125 26.25 22.8125C25.8356 22.8125 25.4382 22.6479 25.1451 22.3549C24.8521 22.0618 24.6875 21.6644 24.6875 21.25ZM27.5 31.25C27.5 31.5815 27.3683 31.8995 27.1339 32.1339C26.8995 32.3683 26.5815 32.5 26.25 32.5C25.9185 32.5 25.6005 32.3683 25.3661 32.1339C25.1317 31.8995 25 31.5815 25 31.25V26.25C25 25.9185 25.1317 25.6005 25.3661 25.3661C25.6005 25.1317 25.9185 25 26.25 25C26.5815 25 26.8995 25.1317 27.1339 25.3661C27.3683 25.6005 27.5 25.9185 27.5 26.25V31.25ZM15 26.25C15 24.7726 15.291 23.3097 15.8564 21.9448C16.4217 20.5799 17.2504 19.3397 18.295 18.295C19.3397 17.2504 20.5799 16.4217 21.9448 15.8564C23.3097 15.291 24.7726 15 26.25 15C27.7274 15 29.1903 15.291 30.5552 15.8564C31.9201 16.4217 33.1603 17.2504 34.205 18.295C35.2496 19.3397 36.0783 20.5799 36.6436 21.9448C37.209 23.3097 37.5 24.7726 37.5 26.25C37.5 29.2337 36.3147 32.0952 34.205 34.205C32.0952 36.3147 29.2337 37.5 26.25 37.5C23.2663 37.5 20.4048 36.3147 18.295 34.205C16.1853 32.0952 15 29.2337 15 26.25ZM17.5 26.25C17.5 28.5706 18.4219 30.7962 20.0628 32.4372C21.7038 34.0781 23.9294 35 26.25 35C28.5706 35 30.7962 34.0781 32.4372 32.4372C34.0781 30.7962 35 28.5706 35 26.25C35 23.9294 34.0781 21.7038 32.4372 20.0628C30.7962 18.4219 28.5706 17.5 26.25 17.5C23.9294 17.5 21.7038 18.4219 20.0628 20.0628C18.4219 21.7038 17.5 23.9294 17.5 26.25Z" fill="#0055D4"/>
    </svg>
  )
} 

// contact info icon
export const ContactIcon = ({width, height}) =>{
  return (
    <svg width={width} height={height} viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 0C2.20435 0 1.44129 0.31607 0.87868 0.878679C0.316071 1.44129 0 2.20435 0 3V21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H29C29.7956 24 30.5587 23.6839 31.1213 23.1213C31.6839 22.5587 32 21.7956 32 21V3C32 2.20435 31.6839 1.44129 31.1213 0.878679C30.5587 0.31607 29.7956 0 29 0H3ZM9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12ZM5.898 13.5H12.1C12.6032 13.5005 13.0857 13.7007 13.4415 14.0565C13.7973 14.4123 13.9975 14.8948 13.998 15.398C13.998 17.092 12.844 18.568 11.2 18.98L11.082 19.01C9.714 19.35 8.282 19.35 6.914 19.01L6.794 18.98C5.99565 18.7798 5.28708 18.3186 4.78086 17.6696C4.27465 17.0206 3.99981 16.2211 4 15.398C4.00053 14.8948 4.20067 14.4123 4.5565 14.0565C4.91233 13.7007 5.39478 13.5005 5.898 13.5V13.5ZM18 9C18 8.73478 18.1054 8.48043 18.2929 8.29289C18.4804 8.10536 18.7348 8 19 8H25C25.2652 8 25.5196 8.10536 25.7071 8.29289C25.8946 8.48043 26 8.73478 26 9C26 9.26522 25.8946 9.51957 25.7071 9.70711C25.5196 9.89464 25.2652 10 25 10H19C18.7348 10 18.4804 9.89464 18.2929 9.70711C18.1054 9.51957 18 9.26522 18 9ZM19 14H25C25.2652 14 25.5196 14.1054 25.7071 14.2929C25.8946 14.4804 26 14.7348 26 15C26 15.2652 25.8946 15.5196 25.7071 15.7071C25.5196 15.8946 25.2652 16 25 16H19C18.7348 16 18.4804 15.8946 18.2929 15.7071C18.1054 15.5196 18 15.2652 18 15C18 14.7348 18.1054 14.4804 18.2929 14.2929C18.4804 14.1054 18.7348 14 19 14Z" fill="#0055D4"/>
    </svg>

  )
} 

// wallet icon
export const WalletIcon = ({width, height}) =>{
  return (
    <svg width={width} height={height} viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.9267 3.32482C18.9618 3.28059 19.0056 3.24398 19.0554 3.2172C19.1051 3.19042 19.1598 3.17404 19.2161 3.16905C19.2723 3.16406 19.329 3.17057 19.3827 3.18818C19.4364 3.20579 19.4859 3.23413 19.5283 3.27149L21.0633 4.62482L16.2317 10.6665H19.4333L22.9433 6.27982L25.6967 8.70816C25.7781 8.7801 25.8282 8.881 25.8363 8.98935C25.8444 9.09769 25.8098 9.20491 25.74 9.28816L24.59 10.6665H27.83C28.2313 10.079 28.4041 9.36497 28.3157 8.65896C28.2272 7.95294 27.8838 7.3036 27.35 6.83316L21.1833 1.39482C20.8858 1.13283 20.5381 0.934225 20.1613 0.811144C19.7844 0.688063 19.3865 0.643086 18.9917 0.678961C18.5969 0.714836 18.2136 0.83081 17.8651 1.0198C17.5167 1.20879 17.2104 1.46683 16.965 1.77816L9.96 10.6665H13.1433L18.9267 3.32482ZM3.75 9.83316C3.41848 9.83316 3.10054 9.96485 2.86612 10.1993C2.6317 10.4337 2.5 10.7516 2.5 11.0832C2.5 11.4147 2.6317 11.7326 2.86612 11.967C3.10054 12.2015 3.41848 12.3332 3.75 12.3332H25.4167C26.8533 12.3332 28.231 12.9038 29.2468 13.9197C30.2627 14.9355 30.8333 16.3132 30.8333 17.7498V28.5832C30.8333 30.0197 30.2627 31.3975 29.2468 32.4133C28.231 33.4291 26.8533 33.9998 25.4167 33.9998H5.41667C3.98008 33.9998 2.60233 33.4291 1.5865 32.4133C0.570683 31.3975 0 30.0197 0 28.5832V11.0832C0 10.0886 0.395088 9.13477 1.09835 8.43151C1.80161 7.72825 2.75544 7.33316 3.75 7.33316H10.95L8.96333 9.83316H3.75ZM20.8333 23.5832C20.8333 24.2732 21.3933 24.8332 22.0833 24.8332H25.4167C25.7482 24.8332 26.0661 24.7015 26.3006 24.467C26.535 24.2326 26.6667 23.9147 26.6667 23.5832C26.6667 23.2516 26.535 22.9337 26.3006 22.6993C26.0661 22.4649 25.7482 22.3332 25.4167 22.3332H22.0833C21.7518 22.3332 21.4339 22.4649 21.1994 22.6993C20.965 22.9337 20.8333 23.2516 20.8333 23.5832Z" fill="#0055D4"/>
    </svg>
  )
} 

// orders icon
export const OrdersIcon = ({width, height}) =>{
  return (
    <svg width={width} height={height}  viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 22H28C29.1 22 30 22.9 30 24C30 25.1 29.1 26 28 26H8C6.9 26 6 25.1 6 24V4H2C0.9 4 0 3.1 0 2C0 0.9 0.9 0 2 0H8C9.1 0 10 0.9 10 2V6H36L28 20H10V22ZM9 28C10.66 28 12 29.34 12 31C12 32.66 10.66 34 9 34C7.34 34 6 32.66 6 31C6 29.34 7.34 28 9 28ZM27 28C28.66 28 30 29.34 30 31C30 32.66 28.66 34 27 34C25.34 34 24 32.66 24 31C24 29.34 25.34 28 27 28Z" fill="#0055D4"/>
    </svg>

  )
} 

// sales icon
export const SalesIcon = ({color, width, height}) =>{
  return (
    <svg className={`${color} ${width} ${height}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clipRule="evenodd"></path></svg>

  )
} 




