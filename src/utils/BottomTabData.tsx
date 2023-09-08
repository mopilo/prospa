import DashboardScreen from "../screens/Dashboard/DashboardScreen";
import Dummy from "../screens/Dummy";

const virtualIcon = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="vector">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.66667C0 0.746192 0.746192 0 1.66667 0H5C5.92047 0 6.66667 0.746192 6.66667 1.66667V5C6.66667 5.92047 5.92047 6.66667 5 6.66667H1.66667C0.746192 6.66667 0 5.92047 0 5V1.66667ZM1.66667 1.66667H5V5H1.66667V1.66667Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.66667 8.33333C0.746192 8.33333 0 9.07953 0 10V13.3333C0 14.2538 0.746192 15 1.66667 15H5C5.92047 15 6.66667 14.2538 6.66667 13.3333V10C6.66667 9.07953 5.92047 8.33333 5 8.33333H1.66667ZM1.66667 10H5V13.3333H1.66667V10Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C9.07953 0 8.33333 0.746192 8.33333 1.66667V5C8.33333 5.92047 9.07953 6.66667 10 6.66667H13.3333C14.2538 6.66667 15 5.92047 15 5V1.66667C15 0.746192 14.2538 0 13.3333 0H10ZM10 1.66667H13.3333V5H10V1.66667Z" />
<path d="M11.6667 15C11.2064 15 10.8333 14.6269 10.8333 14.1667V12.5H9.16667C8.70643 12.5 8.33333 12.1269 8.33333 11.6667C8.33333 11.2064 8.70643 10.8333 9.16667 10.8333H10.8333V9.16667C10.8333 8.70643 11.2064 8.33333 11.6667 8.33333C12.1269 8.33333 12.5 8.70643 12.5 9.16667V10.8333H14.1667C14.6269 10.8333 15 11.2064 15 11.6667C15 12.1269 14.6269 12.5 14.1667 12.5H12.5V14.1667C12.5 14.6269 12.1269 15 11.6667 15Z" />
</g>
</svg>
`;

const invoiceIcon = `<svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Vector">
<path d="M8.74999 10.2C8.74999 10.6695 8.35826 11.05 7.87499 11.05H4.37501C3.89175 11.05 3.5 10.6695 3.5 10.2C3.5 9.73055 3.89175 9.35 4.37501 9.35H7.87499C8.35826 9.35 8.74999 9.73055 8.74999 10.2Z" />
<path d="M10.5 6.79999C10.5 7.26946 10.1083 7.65 9.62499 7.65H4.37501C3.89175 7.65 3.5 7.26946 3.5 6.79999C3.5 6.33055 3.89175 5.94999 4.37501 5.94999H9.62499C10.1083 5.94999 10.5 6.33055 10.5 6.79999Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4874 3.75208C13.8156 4.07089 14 4.5033 14 4.95416V15.3C14 16.2389 13.2165 17 12.25 17H1.75C0.783502 17 0 16.2389 0 15.3V1.7C0 0.761115 0.783502 0 1.75 0H8.90014C9.36424 0 9.80936 0.179103 10.1376 0.497913L13.4874 3.75208ZM12.25 4.95416V15.3H1.75V1.7H8.90014L12.25 4.95416Z"/>
</g>
</svg>
`;

const businessIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M12 3.2V2.4C12 1.07452 10.9255 0 9.6 0H6.4C5.07452 0 4 1.07452 4 2.4V3.2H1.6C0.716344 3.2 0 3.91634 0 4.8V14.4C0 15.2837 0.716344 16 1.6 16H14.4C15.2837 16 16 15.2837 16 14.4V4.8C16 3.91634 15.2837 3.2 14.4 3.2H12ZM10.4 2.4C10.4 1.95817 10.0418 1.6 9.6 1.6H6.4C5.95817 1.6 5.6 1.95817 5.6 2.4V3.2H10.4V2.4ZM13.6334 8.59626L14.4 8.30879V14.4H1.6V8.3088L2.36654 8.59625C2.72583 8.73099 3.10642 8.8 3.49014 8.8H4V9.6C4 10.0418 4.35817 10.4 4.8 10.4C5.24183 10.4 5.6 10.0418 5.6 9.6V8.8H10.4V9.6C10.4 10.0418 10.7582 10.4 11.2 10.4C11.6418 10.4 12 10.0418 12 9.6V8.8H12.5098C12.8935 8.8 13.2741 8.73099 13.6334 8.59626ZM1.6 6.6V4.8H14.4V6.59999L13.0716 7.09813C12.892 7.16549 12.7017 7.2 12.5098 7.2H3.49014C3.29828 7.2 3.10798 7.16549 2.92834 7.09813L1.6 6.6Z" fill="white"/>
</svg>
`;

const homeIcon = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group">
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M0 7.42919C0 6.99128 0.175592 6.57137 0.488158 6.26182L6.3215 0.483546C6.97233 -0.161182 8.02767 -0.161182 8.6785 0.483546L14.5118 6.26182C14.8244 6.57137 15 6.99128 15 7.42919V14.1745C15 14.6304 14.6269 15 14.1667 15H9.16667C8.70642 15 8.33333 14.6304 8.33333 14.1745V10.0472H6.66667V14.1745C6.66667 14.6304 6.29358 15 5.83333 15H0.833333C0.3731 15 0 14.6304 0 14.1745V7.42919ZM7.5 1.65092L1.66667 7.42919V13.3491H5V9.22168C5 8.76586 5.3731 8.39622 5.83333 8.39622H9.16667C9.62692 8.39622 10 8.76586 10 9.22168V13.3491H13.3333V7.42919L7.5 1.65092Z"/>
</g>
</svg>
`;

export const paymentIcon = `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M14.4334 5.53134C14.4996 5.36533 14.517 5.18265 14.4832 5.00643C14.4494 4.8302 14.366 4.66834 14.2435 4.54133L9.86859 0L8.63136 1.28429L11.5127 4.2752H0.500101V6.09173H13.6249C13.798 6.09178 13.9671 6.03856 14.111 5.93881C14.2549 5.83907 14.3671 5.69726 14.4334 5.53134ZM0.566601 8.46866C0.50036 8.63467 0.483043 8.81734 0.516841 8.99357C0.550639 9.1698 0.634034 9.33166 0.756473 9.45867L5.13141 14L6.36864 12.7157L3.48731 9.7248H14.4999V7.90827H1.37509C1.20202 7.9081 1.0328 7.96127 0.888869 8.06103C0.744939 8.1608 0.632779 8.30267 0.566601 8.46866Z"/>
</svg>
`;


export const BottomTabData = [
  {
    id: 1,
    title: "Home",
    icon: homeIcon,
    focusedIcon: homeIcon,
    component: DashboardScreen,
  },
  {
    id: 2,
    title: "Payments",
    icon: paymentIcon,
    focusedIcon: paymentIcon,
    component: DashboardScreen,
  },
  {
    id: 3,
    title: "Business",
    icon: businessIcon,
    focusedIcon: businessIcon,
    component: DashboardScreen,
  },
  {
    id: 4,
    title: "Invoice",
    icon: invoiceIcon,
    focusedIcon: invoiceIcon,
    component: DashboardScreen,
  },
  {
    id: 5,
    title: "Virtual",
    icon: virtualIcon,
    focusedIcon: virtualIcon,
    component: DashboardScreen,
  },
];

// export const BottomTabData = [
//   {
//     id: "home",
//     title: "DashboardScreen",
//     icon: homeLight,
//     focusedIcon: homeBlue,
//     component: DashboardScreen,
//   },
//   {
//     id: "acct",
//     title: "AccountScreen",
//     icon: hmoPlansLight,
//     focusedIcon: hmoPlansBlue,
//     component: AccountScreen,
//   },
//   // {
//   //   id: "history",
//   //   title: "DashboardScreen",
//   //   lightIcon: historyLight,
//   //   blueIcon: historyBlue,
//   //   component: DashboardScreen,
//   // },
//   // {
//   //   id: "account",
//   //   title: "DashboardScreen",
//   //   lightIcon: settingsLight,
//   //   blueIcon: settingsBlue,
//   //   component: DashboardScreen,
//   // },
// ];
