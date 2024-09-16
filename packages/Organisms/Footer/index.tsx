import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="flex w-full select-none flex-col">
      <div className="bg-indigo-400 px-40 pb-3 pt-8">
        <div className="flex h-full w-full gap-32 text-white">
          <div className="flex h-full w-full flex-col gap-3">
            <div className="flex gap-3">
              <div className="h-20 w-[6.25rem] bg-slate-300"></div>
              <div className="flex items-center">Đồng hành cùng bạn trên con đường đu goods</div>
            </div>
            <div className="flex gap-3 px-4 text-sm font-medium text-ui-text-50">
              <ul className="flex flex-col gap-4 p-3 leading-5">
                <li>Chính sách bảo mật</li>
                <li>Hình thức mua hàng</li>
                <li>Hình thức vận chuyển</li>
                <li>Chính sách đổi trả</li>
                <li>Cam kết</li>
              </ul>
              <ul className="flex flex-col gap-4 p-3 font-medium leading-5">
                <li>Trang chủ</li>
                <li>Giới thiệu</li>
                <li>Tin tức</li>
              </ul>
            </div>
          </div>
          <div className="flex h-full w-full flex-col gap-4 py-3">
            <div className="flex justify-end gap-3 py-3">
              <Facebook />
              <Twitter />
              <Instagram />
            </div>
            <div className="flex h-14 rounded-full bg-ui-tertiary-300">
              <div className="flex h-full w-full items-center rounded-full bg-white px-5 py-3">
                <input
                  type="text"
                  placeholder="Nhập email để theo dõi thêm ưu đãi"
                  className="w-full text-sm text-ui-text-900 placeholder-ui-text-900 outline-none"
                />
              </div>
              <div className="flex h-full w-40 justify-center rounded-r-full py-4 font-semibold">
                GỬI NGAY
              </div>
            </div>
            <div className="py-3 text-ui-text-50">
              <h1 className="font-semibold leading-6">Hồ Chí Minh</h1>
              <ol className="list-inside list-disc pl-2 text-sm font-light leading-5">
                <li>Saigon Centre, 65 Lê Lợi, Bến Nghé, Quận 1, TP.HCM</li>
                <li>Hotline: 098754321</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 bg-indigo-400 py-4 text-xs font-light">
        <div className="rounded-full bg-indigo-200 px-4 py-2">lunasstore@gmail.com</div>
        <div className="rounded-full bg-indigo-200 px-4 py-2">0383188154</div>
      </div>
      <div className="flex h-10 items-center justify-center bg-[#FAFAFA] text-xs font-extralight text-ui-text-900 opacity-90">
        ©Copyright 2024 Brand name. All rights reserved.
      </div>
    </footer>
  )
}
export default Footer
