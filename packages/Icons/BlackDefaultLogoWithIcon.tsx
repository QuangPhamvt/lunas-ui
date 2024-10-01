import { IIconProps } from '@/types'

const BlackDefaultLogoWithIcon = (props: IIconProps) => {
  const { width, height } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? '104'}
      height={height ?? '64'}
      viewBox="0 0 104 64"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_1128_4961)">
        <path
          d="M12.6526 37.5876C10.9443 38.0229 9.18991 38.2512 7.42718 38.2675C5.67079 38.2806 3.91834 38.0994 2.20176 37.727C1.92539 37.659 1.66704 37.5319 1.44452 37.3543C1.222 37.1767 1.0406 36.9529 0.912823 36.6984C0.640523 36.223 0.565472 35.6596 0.703806 35.1294C1.19151 33.107 1.67922 31.1196 2.14951 29.1321C2.61979 27.1446 3.1075 25.1572 3.56037 23.1348C3.36152 23.2167 3.14836 23.2582 2.93332 23.2568C2.79701 23.251 2.66472 23.2089 2.55012 23.1348C2.4446 23.0662 2.36017 22.9697 2.30627 22.8559L0.703806 20.1536L2.44561 18.9507L3.80422 17.9395L5.16283 16.9109C5.16283 16.9109 5.16283 16.7714 5.16283 16.6843C5.15066 16.6033 5.15066 16.5211 5.16283 16.4402C5.45894 15.3244 5.73763 14.1738 5.98148 12.9534C6.22533 11.733 6.55628 10.5649 6.88722 9.4666C7.23033 8.28312 7.63735 7.11915 8.10648 5.97981C8.55464 4.88175 9.13989 3.8449 9.84829 2.89401C10.1444 2.52789 10.5102 2.10948 10.9456 1.6562C11.371 1.22557 11.8444 0.845339 12.3565 0.52299C12.8301 0.21546 13.3775 0.0408531 13.9415 0.017406C14.2429 0.0121826 14.5419 0.0717314 14.8184 0.192032C15.0948 0.312333 15.3423 0.490587 15.544 0.714765C15.9413 1.10351 16.2399 1.58172 16.4149 2.10948C16.6092 2.67601 16.7492 3.25978 16.8329 3.85287C16.9062 4.43126 16.9469 5.01331 16.9549 5.59627V7.23506C16.8901 8.43851 16.6068 9.62007 16.1188 10.7218C15.6215 11.8386 15.0023 12.8969 14.2725 13.8774C13.5107 14.9037 12.6597 15.8605 11.7294 16.7366C10.7714 17.6257 9.79603 18.4799 8.78579 19.2993L5.30217 33.9264C6.42612 34.0309 7.55733 34.0309 8.68128 33.9264C9.82731 33.8535 10.9611 33.6487 12.0604 33.3162L12.9487 36.9425V37.1866C12.9487 37.3783 12.8442 37.5004 12.6526 37.5876ZM11.5204 8.438C11.1721 9.4666 10.8411 10.5301 10.5624 11.611L10.8411 11.1926C11.3746 10.4653 11.8576 9.70218 12.2868 8.90872C12.6959 8.10008 12.8879 7.19894 12.8442 6.29363C12.8655 6.13744 12.8655 5.97909 12.8442 5.82291C12.3046 6.64112 11.8604 7.51855 11.5204 8.438Z"
          fill="black"
        />
        <path
          d="M30.2448 24.0065L31.046 24.5121C31.3899 24.7105 31.7162 24.938 32.0214 25.1921C31.4341 26.466 30.765 27.7006 30.0183 28.888C29.3023 30.0446 28.4419 31.105 27.4579 32.0436C26.6803 32.8194 25.6829 33.3368 24.6013 33.5255C24.0342 33.5739 23.4642 33.4759 22.9458 33.2409C22.4274 33.0059 21.9779 32.6416 21.6402 32.1831C21.4195 31.9199 21.2377 31.6263 21.1003 31.3114C20.4856 32.1157 19.6298 32.7019 18.6582 32.9843C17.6865 33.2666 16.6501 33.2302 15.7007 32.8804C14.4558 32.5641 13.356 31.8323 12.5829 30.8058C11.8397 29.8052 11.3335 28.6487 11.1023 27.4236C10.8413 26.1276 10.7477 24.8034 10.8236 23.4835C10.8986 22.2335 11.0381 20.9882 11.2417 19.7527V19.6481C11.219 19.5861 11.219 19.5182 11.2417 19.4563L11.6249 17.7129L12.9835 17.9047C13.6077 17.9678 14.2255 18.0844 14.8298 18.2533C15.1781 18.2533 15.3872 18.5672 15.4394 19.0204C15.4719 19.5466 15.4309 20.0747 15.3175 20.5895V20.6767C15.1846 21.2523 15.08 21.8342 15.004 22.4201C14.9451 23.2035 14.9451 23.9902 15.004 24.7736C14.9978 25.5542 15.0855 26.3327 15.2652 27.0924C15.3127 27.3923 15.4264 27.6779 15.5982 27.9282C15.7699 28.1786 15.9954 28.3874 16.2581 28.5394C16.4469 28.6382 16.6535 28.6984 16.8659 28.7164C17.0782 28.7343 17.292 28.7097 17.4947 28.644C17.9446 28.5184 18.3571 28.2851 18.6966 27.9641C19.0653 27.618 19.3873 27.2253 19.6546 26.796C19.931 26.3814 20.1315 25.921 20.2468 25.4361C20.2468 24.3029 20.2468 23.2395 20.2468 22.2283C20.2468 21.2171 20.2468 20.4849 20.3339 19.8398L23.713 18.9158H24.2878C24.4343 18.9467 24.5752 18.9996 24.7058 19.0727C24.7633 19.1057 24.8102 19.1543 24.8411 19.213C24.8719 19.2717 24.8854 19.3379 24.88 19.404C24.88 19.7701 24.7755 20.3454 24.7058 21.1474C24.6361 21.9493 24.5316 22.8908 24.4446 23.745C24.3575 24.5993 24.2704 25.4884 24.2355 26.395C24.1759 27.0212 24.1759 27.6517 24.2355 28.2779C24.3052 28.6382 24.4446 28.8125 24.6536 28.8009C24.936 28.7437 25.1925 28.597 25.3851 28.3825C25.7015 28.0761 25.9982 27.75 26.2734 27.4062C26.5959 27.0271 26.8982 26.6314 27.1792 26.2207C27.4579 25.8197 27.6843 25.4536 27.8759 25.1223L28.2765 24.4947C28.334 24.3863 28.398 24.2815 28.4681 24.1809C28.5175 24.0681 28.582 23.9625 28.6597 23.8671C28.7206 23.7378 28.8031 23.6199 28.9036 23.5184C28.976 23.4484 29.0665 23.4001 29.1648 23.3789C29.2406 23.3677 29.3179 23.3745 29.3905 23.3987C29.4631 23.4229 29.529 23.4639 29.5829 23.5184C29.7571 23.6753 29.9835 23.8148 30.2448 24.0065Z"
          fill="black"
        />
        <path
          d="M43.709 24.8783L44.5276 25.3665C44.874 25.5567 45.2059 25.7723 45.5205 26.0115C45.0107 27.2475 44.4291 28.4525 43.7787 29.6204C43.2091 30.6993 42.481 31.6865 41.6188 32.5493C40.9459 33.2455 40.0541 33.6887 39.0932 33.8045C38.5387 33.7919 37.9938 33.6573 37.4971 33.4102C37.0004 33.1631 36.5641 32.8097 36.2192 32.3749C35.7063 31.8582 35.3397 31.2145 35.1567 30.5095C34.9963 29.7883 34.9145 29.0517 34.9129 28.3128C34.9129 27.5457 34.9129 26.7786 35.0348 25.9941C35.0761 25.2799 35.0761 24.5639 35.0348 23.8497C35.0348 23.2918 34.8432 22.978 34.5297 22.8909C34.2161 22.8037 33.8678 23.1349 33.4672 23.8497C32.973 25.0176 32.622 26.241 32.4221 27.4934C32.0022 29.7969 31.7461 32.1273 31.6557 34.467L27.754 34.2229V32.2355C27.754 29.9865 27.6669 27.6155 27.754 25.0875C27.8411 22.5596 27.9282 20.1014 28.1024 17.7304C28.1209 17.6169 28.163 17.5086 28.226 17.4125C28.289 17.3164 28.3715 17.2346 28.4682 17.1725C28.5065 17.1552 28.5481 17.1462 28.5901 17.1462C28.6322 17.1462 28.6737 17.1552 28.712 17.1725L32.1956 17.2771C32.1956 17.6781 32.1086 18.0617 32.0911 18.4626C32.0737 18.8636 32.0911 19.2472 32.0911 19.6656C32.4573 19.237 32.9093 18.8902 33.4179 18.6476C33.9265 18.405 34.4803 18.272 35.0435 18.2572C35.6067 18.2424 36.1667 18.3461 36.6873 18.5617C37.2079 18.7773 37.6774 19.0999 38.0655 19.5087C38.6161 20.0352 39.0083 20.7056 39.1977 21.4438C39.3954 22.183 39.4949 22.9451 39.4938 23.7103C39.5108 24.5194 39.4759 25.3289 39.3893 26.1336C39.3104 26.8746 39.2813 27.6202 39.3022 28.3651C39.3022 28.923 39.459 29.0973 39.7028 28.9056C40.0372 28.6372 40.3154 28.3054 40.5215 27.9293C40.8176 27.476 41.0963 26.9704 41.375 26.4474L41.9149 25.4014C41.9842 25.3062 42.0372 25.2001 42.0717 25.0875L42.2284 24.7563C42.2935 24.6295 42.3756 24.5122 42.4723 24.4076C42.5493 24.3401 42.6378 24.2869 42.7336 24.2507C42.8381 24.2507 42.9774 24.2507 43.1516 24.3902C43.3258 24.5297 43.4303 24.704 43.709 24.8783Z"
          fill="black"
        />
        <path
          d="M61.5797 24.0065L62.381 24.5121C62.722 24.7149 63.048 24.9422 63.3564 25.192C62.7628 26.4661 62.0879 27.7007 61.3359 28.888C60.6312 30.0477 59.7761 31.1088 58.7928 32.0436C58.0112 32.8234 57.007 33.3412 55.9189 33.5254C55.3522 33.5705 54.7833 33.471 54.2654 33.2363C53.7476 33.0015 53.2977 32.6391 52.9578 32.183C52.4438 31.491 52.1087 30.6825 51.9824 29.8294C51.7014 30.163 51.3925 30.4722 51.0592 30.7534C50.7384 31.0511 50.4011 31.3305 50.049 31.5903C49.3429 32.1045 48.5138 32.4232 47.6453 32.5143C46.8625 32.5893 46.074 32.4507 45.3635 32.1133C44.6632 31.7806 44.0626 31.2696 43.6217 30.6314C43.095 29.9194 42.7376 29.0966 42.5766 28.2255C42.4068 27.3703 42.3251 26.4998 42.3328 25.6279C42.3339 24.7353 42.4392 23.846 42.6463 22.9779C42.8546 22.1189 43.1646 21.2878 43.5695 20.5023C43.9845 19.7164 44.5326 19.0086 45.1893 18.4102C45.8135 17.7942 46.5627 17.3196 47.3861 17.0188C48.2096 16.718 49.088 16.598 49.9619 16.6668C51.7345 16.8549 53.3678 17.7159 54.5254 19.0727L55.048 18.9158H55.6402C55.7821 18.9436 55.9178 18.9967 56.0408 19.0727C56.0998 19.1039 56.148 19.1522 56.1791 19.2113C56.2102 19.2705 56.2227 19.3376 56.215 19.4039C56.215 19.7701 56.1279 20.3454 56.0408 21.1473C55.9537 21.9493 55.884 22.8907 55.7795 23.745C55.675 24.5993 55.6228 25.4884 55.5879 26.395C55.5283 27.0212 55.5283 27.6516 55.5879 28.2778C55.5879 28.6439 55.7795 28.8183 55.9885 28.8008C56.2723 28.7473 56.53 28.6 56.7201 28.3824C57.0424 28.0766 57.345 27.7505 57.6258 27.4061C57.9427 27.027 58.2392 26.6313 58.5142 26.2206C58.7928 25.8196 59.0367 25.4535 59.2283 25.1223L59.6115 24.4947C59.6816 24.394 59.7456 24.2892 59.8031 24.1808L59.9947 23.867C60.0614 23.7413 60.1433 23.6242 60.2385 23.5184C60.3173 23.4478 60.4136 23.3996 60.5172 23.3789C60.5903 23.3691 60.6646 23.3766 60.7341 23.4008C60.8037 23.4251 60.8667 23.4653 60.9179 23.5184L61.5797 24.0065ZM50.7805 21.4437C50.543 21.2401 50.2647 21.0896 49.9642 21.0024C49.6638 20.9152 49.3483 20.8933 49.0387 20.9381C48.7015 21.0211 48.3879 21.1806 48.1221 21.4044C47.8563 21.6281 47.6455 21.91 47.5059 22.2282C47.0922 22.9153 46.7867 23.6621 46.6002 24.4424C46.4281 25.2145 46.3869 26.0101 46.4783 26.7959C46.4719 26.9237 46.4719 27.0517 46.4783 27.1795C46.4783 27.3713 46.5828 27.5805 46.6525 27.7722C46.7076 27.944 46.7715 28.1127 46.8441 28.2778C46.8441 28.4173 47.0008 28.4696 47.0879 28.3999C47.4307 28.265 47.7398 28.0567 47.9936 27.7897C48.2459 27.5405 48.4788 27.2724 48.6904 26.9877C50.0125 25.4407 50.752 23.4793 50.7805 21.4437Z"
          fill="black"
        />
        <path
          d="M79.1547 24.0065L79.9559 24.5121C80.2998 24.7105 80.6261 24.938 80.9313 25.192C80.4436 26.2381 79.9211 27.2492 79.3289 28.2778C78.7987 29.2305 78.1617 30.1196 77.4303 30.9278C76.768 31.8125 76.0019 32.6144 75.1485 33.3162C74.3796 33.9321 73.551 34.4694 72.6752 34.9202C71.7167 35.4132 70.6524 35.6646 69.5748 35.6524C68.6924 35.714 67.8121 35.5074 67.0491 35.0596C66.2695 34.6215 65.5879 34.0281 65.0461 33.3162C64.4999 32.5597 64.0984 31.7085 63.8616 30.8058C63.629 29.9172 63.5993 28.9877 63.7745 28.0861L64.0706 26.7262C64.0447 26.5961 64.0631 26.4611 64.1229 26.3427C64.1929 26.2551 64.284 26.1868 64.3876 26.1442C64.4911 26.1015 64.6038 26.0858 64.7151 26.0986L65.5338 26.2206L66.753 26.395L68.3032 26.639C68.1813 27.1272 68.0768 27.5805 68.0071 27.9989C67.9375 28.4173 67.9026 28.7137 67.8678 29.0798C67.8086 29.3615 67.8086 29.6524 67.8678 29.9341C67.9502 30.2509 68.1413 30.5286 68.4077 30.7186C68.6416 30.9055 68.9276 31.0151 69.2264 31.0324C69.373 31.0391 69.5194 31.0163 69.657 30.9654C69.7946 30.9145 69.9206 30.8365 70.0276 30.736C70.3001 30.469 70.4776 30.1199 70.5327 29.7423C70.736 28.8447 70.6817 27.908 70.376 27.04C69.9959 26.2012 69.5655 25.3861 69.087 24.5993C68.9129 24.3029 68.7561 24.0239 68.6168 23.745C68.4774 23.4661 68.3555 23.2046 68.251 22.943C67.6638 23.4418 67.0277 23.8799 66.3524 24.2506C65.6949 24.6359 64.985 24.9237 64.2448 25.1049C63.5149 25.2533 62.7626 25.2533 62.0327 25.1049C61.2185 24.9441 60.4542 24.5915 59.8032 24.0763L61.545 20.5895C62.258 20.782 63.0093 20.782 63.7223 20.5895C64.5708 20.3536 65.3805 19.9953 66.126 19.526C67.265 18.7815 68.2915 17.8773 69.1741 16.8412C69.2516 16.7669 69.3216 16.6851 69.3832 16.5971L69.6096 16.353L71.0553 14.6096L73.8248 16.4576C73.9498 16.5708 74.0663 16.6932 74.1731 16.8237C74.2059 16.8948 74.2229 16.9721 74.2229 17.0504C74.2229 17.1286 74.2059 17.206 74.1731 17.277C74.1201 17.5447 73.9934 17.7923 73.8073 17.9918C73.5069 18.3683 73.1747 18.7182 72.8145 19.0378C72.4125 19.389 72.1626 19.8829 72.1178 20.4151C72.1042 20.9101 72.2118 21.4009 72.4313 21.8447C72.6671 22.3471 72.9408 22.8309 73.25 23.2917C73.6011 23.7075 73.9269 24.1441 74.2254 24.5993C74.4916 25.098 74.6852 25.6322 74.8002 26.1858C74.9354 26.758 75.017 27.3417 75.044 27.9292H75.1485C75.3816 27.7068 75.5917 27.4615 75.7756 27.1969C76.002 26.8657 76.2285 26.5344 76.4375 26.1683C76.6465 25.8022 76.8207 25.4884 76.96 25.192L77.1864 24.5993L77.3955 24.2855C77.4448 24.1727 77.5093 24.0671 77.5871 23.9716C77.6417 23.8389 77.725 23.7198 77.8309 23.623C77.9033 23.553 77.9938 23.5047 78.0922 23.4835C78.2141 23.4835 78.336 23.4835 78.5102 23.623C78.6844 23.7624 78.8934 23.8147 79.1547 24.0065Z"
          fill="black"
        />
        <path
          d="M22.2672 49.4775L23.0685 49.983C23.4124 50.1815 23.7387 50.4089 24.0439 50.663C23.5562 51.709 23.0336 52.7376 22.4414 53.7488C21.9156 54.7042 21.2783 55.5938 20.5428 56.3987C19.882 57.2692 19.1155 58.0539 18.2611 58.7349C17.4964 59.3566 16.6672 59.8943 15.7877 60.3388C14.8292 60.8319 13.7649 61.0832 12.6873 61.071C11.8043 61.1417 10.9213 60.9345 10.1617 60.4783C9.38209 60.0401 8.7004 59.4468 8.1586 58.7349C7.60944 57.9865 7.20749 57.1405 6.97417 56.2418C6.73496 55.3611 6.69332 54.4383 6.85225 53.5396L7.14835 52.1797C7.12537 52.0823 7.12537 51.9808 7.14835 51.8833C7.21837 51.7958 7.30942 51.7275 7.413 51.6848C7.51658 51.6422 7.62928 51.6265 7.74057 51.6393L8.55922 51.7613L9.77848 51.9356C10.2662 52.0402 10.7887 52.11 11.3287 52.1797C11.2093 52.6271 11.1162 53.0812 11.05 53.5396C11.05 53.9057 10.9281 54.2544 10.8932 54.6379C10.8355 54.9197 10.8355 55.2103 10.8932 55.4922C10.9877 55.7986 11.1767 56.0671 11.4332 56.2593C11.6671 56.4462 11.9531 56.5558 12.2518 56.5731C12.3973 56.5831 12.5433 56.5636 12.681 56.5156C12.8187 56.4677 12.9453 56.3924 13.0531 56.2941C13.329 56.0226 13.5067 55.6668 13.5582 55.283C13.8277 54.3718 13.8216 53.4012 13.5408 52.4935C13.1648 51.6471 12.7342 50.8259 12.2518 50.0353C12.0777 49.739 11.9383 49.46 11.7816 49.1811C11.6248 48.9021 11.5203 48.6406 11.4158 48.3791C10.8316 48.8737 10.2017 49.3116 9.53463 49.6867C8.87303 50.0763 8.1567 50.3643 7.40962 50.5409C6.68071 50.6989 5.92644 50.6989 5.19753 50.5409C4.38682 50.3791 3.62406 50.0332 2.96802 49.5298L4.70982 46.043C5.42284 46.2355 6.17407 46.2355 6.88708 46.043C7.73827 45.8146 8.54907 45.4558 9.29077 44.9795C10.4258 44.2366 11.4518 43.3388 12.3389 42.3121L12.548 42.068C12.6148 41.979 12.6906 41.8972 12.7744 41.824L14.2201 40.0806L16.9025 42.0332L17.2508 42.3993C17.2972 42.4674 17.329 42.5444 17.344 42.6254C17.359 42.7065 17.3569 42.7898 17.3379 42.87C17.2845 43.1289 17.1644 43.3693 16.9896 43.5674C16.6775 43.9391 16.3399 44.2886 15.9793 44.6134C15.5801 44.9668 15.3309 45.4595 15.2826 45.9907C15.271 46.4911 15.3784 46.9871 15.5961 47.4377C15.8321 47.9345 16.1058 48.4124 16.4148 48.8673C16.7192 49.2982 16.9983 49.7464 17.2508 50.2097C17.5142 50.7035 17.7077 51.2316 17.8256 51.7787C17.9596 52.3513 18.0412 52.9348 18.0695 53.5221H18.174C18.4159 53.3083 18.6269 53.0619 18.801 52.7899C19.0275 52.4587 19.2539 52.1274 19.4629 51.7787C19.6719 51.4301 19.8461 51.0814 19.9855 50.8024L20.299 50.2097L20.508 49.8959C20.5655 49.7875 20.6295 49.6827 20.6996 49.5821C20.7647 49.4553 20.8467 49.338 20.9435 49.2334C21.0201 49.1696 21.1091 49.1221 21.2047 49.0939C21.3267 49.0939 21.4486 49.0939 21.6228 49.2334C21.833 49.3265 22.0481 49.408 22.2672 49.4775Z"
          fill="black"
        />
        <path
          d="M30.7674 49.5299L31.5686 50.0355C31.9097 50.2383 32.2357 50.4655 32.544 50.7154C31.9866 51.9183 31.3073 53.191 30.5061 54.5508C29.7862 55.8146 28.9146 56.9855 27.9108 58.0376C27.1752 58.8826 26.2051 59.4895 25.1239 59.781C24.1833 59.9728 23.3821 59.4846 22.4938 58.3166C21.9966 57.5709 21.6476 56.7363 21.4661 55.8584C21.2243 54.7515 21.0786 53.6257 21.0307 52.4936C21.0307 51.3314 21.0307 50.0587 21.0307 48.6756C21.0307 47.3332 21.2049 45.9908 21.379 44.6309H20.5081H19.9159C19.7713 44.6492 19.625 44.6492 19.4805 44.6309L19.585 40.8478H21.8667C21.8667 40.5688 21.9364 40.1155 22.0758 39.4879C22.1977 38.8777 22.3022 38.2501 22.4241 37.5876C22.546 36.9251 22.6331 36.3324 22.7376 35.7571C22.8422 35.1817 22.8944 34.7459 22.9292 34.4844L27.1967 35.0597C27.1967 35.2515 27.0922 35.6176 27.0051 36.158C26.918 36.6985 26.8135 37.2564 26.709 37.9014C26.6045 38.5465 26.5174 39.0695 26.4477 39.6448C26.378 40.2201 26.3083 40.5688 26.2735 40.7955H27.0051H27.6321C27.7192 40.7955 27.8237 40.9524 27.9456 41.3533C28.0697 41.7979 28.1513 42.2532 28.1895 42.7132C28.2327 43.1771 28.2327 43.644 28.1895 44.1079C28.1895 44.5263 28.0676 44.7355 27.9108 44.7355H27.1967H26.9354H25.5942C25.4374 45.8687 25.2981 46.9845 25.211 48.0654C25.1239 49.1463 25.0542 50.1575 25.0368 51.0641C25.0194 51.9706 25.0368 52.8074 25.0368 53.4176C25.0507 53.9199 25.1883 54.411 25.4374 54.8472C25.5594 55.0216 25.7858 54.8472 26.1167 54.4637C26.4852 53.9739 26.8226 53.4615 27.127 52.9295C27.4928 52.3367 27.8237 51.744 28.1198 51.1861L28.7295 50.0878C28.7982 49.9894 28.8565 49.8843 28.9036 49.7739C28.9474 49.662 29.006 49.5565 29.0778 49.4601C29.1325 49.3274 29.2158 49.2083 29.3217 49.1115C29.3656 49.0656 29.4183 49.0291 29.4767 49.0041C29.535 48.9792 29.5979 48.9663 29.6613 48.9663C29.7248 48.9663 29.7876 48.9792 29.846 49.0041C29.9044 49.0291 29.9571 49.0656 30.001 49.1115C30.2465 49.2685 30.5025 49.4083 30.7674 49.5299Z"
          fill="black"
        />
        <path
          d="M56.5286 50.2969L57.0163 50.663C56.8247 51.064 56.6331 51.4649 56.4067 51.9008C56.1803 52.3366 55.9887 52.7899 55.7622 53.2432L55.0655 54.5856L54.2991 55.8757C54.0573 56.3011 53.7774 56.7038 53.463 57.0787L52.5921 58.1596C52.0735 58.7121 51.4885 59.1982 50.8503 59.6066C50.5951 59.7723 50.3046 59.8759 50.0021 59.9092C49.6997 59.9425 49.3937 59.9046 49.1085 59.7984C48.7564 59.6804 48.4323 59.4911 48.1565 59.2421C47.8808 58.9931 47.6594 58.6899 47.5061 58.3513C47.3614 58.0925 47.2334 57.8246 47.1229 57.5494C46.9835 57.2356 46.8616 56.9043 46.7397 56.5557C46.45 55.5118 46.315 54.4309 46.3391 53.3478C46.3391 52.8248 46.4261 52.3192 46.4958 51.8136C46.5655 51.308 46.6352 50.8024 46.7397 50.2794C46.8572 49.3244 47.0494 48.3801 47.3145 47.4551C46.9584 47.4579 46.6085 47.3613 46.3042 47.1762C45.8232 48.1488 45.1813 49.033 44.4056 49.7913C43.6522 50.5767 42.692 51.1328 41.6362 51.3952C41.0611 51.5089 40.4694 51.5089 39.8944 51.3952C39.8944 51.7787 39.8944 52.1797 39.8944 52.5633C39.8944 52.9468 39.8944 53.3478 39.7724 53.7837C39.5667 55.112 39.0861 56.3827 38.3616 57.5145C37.7174 58.5567 36.8103 59.4106 35.7315 59.9901C34.5735 60.581 33.2335 60.7058 31.9866 60.3388C31.0475 60.1834 30.2015 59.6791 29.6177 58.9267C29.294 58.5832 29.0291 58.1885 28.8339 57.7586C28.6481 57.3402 28.4739 56.9043 28.3114 56.451C28.048 55.5164 27.9478 54.5432 28.0152 53.5744C28.0628 52.6509 28.2266 51.7372 28.503 50.8548C28.7625 50.2557 29.0592 49.6734 29.3913 49.1114C29.7415 48.5515 30.1439 48.0262 30.5931 47.5423C31.4701 46.5999 32.5734 45.8977 33.798 45.5025L33.6413 45.2236L33.5019 44.9272C33.2037 44.4823 32.9911 43.9857 32.8749 43.4628C32.8011 43.1769 32.8011 42.8769 32.8749 42.5911C32.9513 42.3938 33.0847 42.2239 33.2581 42.1029L36.2714 40.6908L37.0552 42.4342C37.1252 42.6528 37.2186 42.8633 37.3339 43.0618L37.6823 43.7591C37.8042 44.0381 37.961 44.3519 38.1177 44.718C38.2558 44.9613 38.4193 45.1892 38.6054 45.3979L39.337 46.165C39.5783 46.4153 39.8471 46.6376 40.1382 46.8275C40.3255 46.9714 40.5482 47.0617 40.7827 47.089C41.2863 46.9455 41.7161 46.615 41.9845 46.165C42.3103 45.7491 42.5797 45.2918 42.7858 44.8052C42.8137 44.6623 42.8799 44.5297 42.9774 44.4216C42.7492 44.1618 42.5452 43.8817 42.3677 43.5848C42.1783 43.2767 42.0096 42.9564 41.8626 42.6259C41.6226 42.1924 41.4243 41.7371 41.2704 41.2661C41.2025 40.9913 41.2025 40.7041 41.2704 40.4293C41.3574 40.2485 41.4563 40.0738 41.5665 39.9062L44.3011 38.5464C44.4269 39.0083 44.6206 39.449 44.8759 39.8539C45.0675 40.3421 45.2243 40.6733 45.3114 40.8651C45.7201 41.751 46.3805 42.4968 47.21 43.0095C48.0774 43.4604 49.0688 43.6135 50.0317 43.4453C50.3662 43.4449 50.6976 43.51 51.0071 43.6371C51.2751 43.8163 51.5157 44.0336 51.7212 44.2822C51.9214 44.5546 52.0691 44.8621 52.1567 45.1887C52.2616 45.4878 52.2616 45.8137 52.1567 46.1127C51.9309 46.6803 51.7447 47.2628 51.5993 47.8561C51.4425 48.414 51.3206 48.9719 51.1813 49.5995C51.0419 50.2271 50.9548 50.7501 50.8852 51.3429C50.8155 51.9357 50.7632 52.4587 50.6936 53.0863V53.6267C50.6769 53.719 50.6769 53.8135 50.6936 53.9057C50.6936 54.2718 50.6936 54.4461 50.9026 54.4461C51.1116 54.4461 51.1813 54.3415 51.3729 54.1149L51.6167 53.6616L51.9651 53.1386C52.0885 52.9487 52.1991 52.7506 52.296 52.5458C52.4005 52.3541 52.5225 52.1623 52.6444 51.9705C52.7663 51.7788 52.836 51.587 52.9405 51.4126L53.1843 50.9071C53.1843 50.7327 53.3063 50.6107 53.3411 50.5061L53.463 50.262L53.5675 50.1225L53.6721 49.9831C53.6692 49.925 53.6692 49.8668 53.6721 49.8087V49.6344C53.7371 49.5076 53.8192 49.3903 53.9159 49.2857L54.212 49.1462C54.3484 49.1641 54.4792 49.2117 54.5952 49.2857L54.8565 49.5123L55.2745 49.7738L55.6577 50.0528C55.7876 50.1293 55.9213 50.1992 56.0583 50.262L56.5286 50.2969ZM35.6269 51.2557C35.6157 50.6622 35.4277 50.0855 35.087 49.5995C34.7521 49.6242 34.4315 49.7453 34.1638 49.9482C34.0052 50.0326 33.8587 50.1382 33.7284 50.262L33.2929 50.663C33.0473 50.9746 32.8204 51.3006 32.6136 51.6393C32.4461 51.9362 32.3006 52.245 32.1782 52.5633C32.1782 52.7551 32.0911 53.0863 32.0214 53.5396C31.9692 53.9739 31.9692 54.4128 32.0214 54.8471C32.0772 55.248 32.2134 55.6335 32.422 55.9803C32.4492 56.0603 32.4923 56.134 32.5486 56.1969C32.6049 56.2598 32.6733 56.3107 32.7498 56.3465C32.8262 56.3823 32.9091 56.4023 32.9935 56.4053C33.0778 56.4083 33.1619 56.3942 33.2407 56.3639C33.5085 56.3222 33.7628 56.2185 33.9836 56.0612C34.2043 55.9038 34.3853 55.697 34.5122 55.4573C34.8975 54.8345 35.1908 54.1592 35.3831 53.4524C35.5558 52.7335 35.6319 51.9948 35.6095 51.2557H35.6269Z"
          fill="black"
        />
        <path
          d="M70.2018 50.7502C69.6602 51.7162 69.018 52.622 68.2858 53.4525C67.5291 54.315 66.6344 55.0456 65.6382 55.6143C64.5731 56.2045 63.372 56.5051 62.1546 56.486C60.4238 56.5644 58.7052 56.16 57.1905 55.3179C56.0192 54.6339 55.0419 53.6618 54.3513 52.4936C53.7116 51.373 53.3085 50.1328 53.1669 48.8499C53.0023 47.6935 53.0023 46.5196 53.1669 45.3632C53.3836 44.1707 53.8463 43.0366 54.5255 42.0333C55.1005 41.1921 55.8878 40.5184 56.8073 40.0807C57.8611 39.5672 59.001 39.2539 60.169 39.1567C61.0403 39.1237 61.9098 39.2599 62.7294 39.5577C63.4622 39.8161 64.1324 40.226 64.6965 40.7606C65.2607 41.2953 65.7062 41.9427 66.004 42.6609C66.3146 43.3638 66.4748 44.1239 66.4743 44.8924C66.4967 45.7199 66.2983 46.5383 65.8995 47.2635C65.533 47.9315 65.0423 48.5232 64.4538 49.0069C63.8839 49.4637 63.2424 49.8231 62.5552 50.0703C61.9367 50.303 61.2826 50.4269 60.6218 50.4364C59.7522 50.4282 58.8932 50.2444 58.0962 49.896C58.4976 50.7541 59.1548 51.4667 59.9774 51.9358C60.7398 52.3621 61.6284 52.5041 62.4856 52.3367C63.5017 52.1091 64.4393 51.6158 65.2028 50.9072C66.2495 49.9444 67.1114 48.7982 67.7458 47.525C67.9385 47.2051 68.1794 46.9169 68.46 46.6707C68.7038 46.4615 69.1044 46.5487 69.6444 46.9322L70.6198 47.6121C70.9508 47.8388 71.2294 48.048 71.4907 48.2049C71.1065 49.0756 70.6762 49.9253 70.2018 50.7502ZM58.6884 43.9161C58.3419 44.3559 58.0603 44.8432 57.8524 45.3632L58.2182 45.799C58.3316 45.9317 58.4672 46.0437 58.6188 46.1302C58.9997 46.49 59.4905 46.7111 60.0122 46.7579C60.3749 46.7689 60.7287 46.6446 61.005 46.4092C61.2709 46.1462 61.4579 45.8141 61.545 45.4503C61.6317 45.0835 61.6317 44.7014 61.545 44.3346C61.468 43.9935 61.2994 43.68 61.0573 43.428C60.9154 43.306 60.7471 43.2189 60.5657 43.1735C60.3842 43.1281 60.1947 43.1257 60.0122 43.1665C59.5011 43.2541 59.0346 43.5122 58.6884 43.8987V43.9161Z"
          fill="black"
        />
        <path
          d="M86.0175 43.7765C87.2739 40.216 89.6238 37.1447 92.7307 35.0026C95.8376 32.8606 99.5421 31.7576 103.314 31.8517C101.816 30.6982 100.147 29.7864 98.3669 29.1494C93.8882 27.5635 88.9636 27.8233 84.6763 29.8716C80.3889 31.9199 77.0902 35.5891 75.5057 40.0718C73.9212 44.5545 74.1807 49.4837 76.2272 53.7749C78.2737 58.0661 81.9394 61.3679 86.4181 62.9538C88.1984 63.5855 90.0686 63.9269 91.957 63.965C88.9665 61.6568 86.7816 58.4612 85.7149 54.8353C84.6481 51.2093 84.754 47.3386 86.0175 43.7765Z"
          fill="black"
        />
        <path
          d="M100.631 51.622C100.335 51.9533 97.0429 49.8786 97.0429 49.8786C97.0429 49.8786 94.0818 52.2148 93.5593 51.8835C93.0368 51.5523 94.047 47.9434 94.047 47.9434C94.047 47.9434 91.0859 46.0083 91.0859 45.3109C91.0859 44.6136 95.1269 44.631 95.1269 44.631C95.1269 44.631 96.2068 40.9873 96.712 40.9873C97.2171 40.9873 98.628 44.4741 98.628 44.4741C98.628 44.4741 102.112 44.1254 102.582 44.8576C103.052 45.5899 99.8821 47.7691 99.8821 47.7691C99.8821 47.7691 100.945 51.2908 100.631 51.622Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_1128_4961">
          <rect width="102.627" height="64" fill="white" transform="translate(0.686279)" />
        </clipPath>
      </defs>
    </svg>
  )
}
BlackDefaultLogoWithIcon.displayName = 'BlackDefaultLogoWithIcon'
export default BlackDefaultLogoWithIcon
