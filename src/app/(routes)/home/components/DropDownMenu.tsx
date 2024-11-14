// import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { FaChevronDown } from 'react-icons/fa6';
export function DropdownMenuDemo() {
  return (
    // <DropdownMenu modal={false} dir="rtl">
    //   <DropdownMenuTrigger asChild>
    //     <div>
    //       <div
    //         className="bg-gray-50 px-3 py-2 rounded-lg cursor-pointer flex justify-between items-center gap-5"
    //         aria-label="اذاعة القران الكريم"
    //       >
    //         <span className="text-sm">اذاعة القران الكريم من القاهرة</span>
    //         <div className="flex gap-2">
    //           <div className="w-[1px] h-5 bg-black "></div>

    //           <FaChevronDown size={20} />
    //         </div>
    //       </div>
    //     </div>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent className="w-56">
    //     <DropdownMenuLabel>My Account</DropdownMenuLabel>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuGroup>
    //       <DropdownMenuItem>اذاعة المملكة العربية السعودية</DropdownMenuItem>
    // <DropdownMenuItem value =''>اذاعة الامارات</DropdownMenuItem>
    //       <DropdownMenuItem>اذاعة المملكة العربية السعودية</DropdownMenuItem>
    //     </DropdownMenuGroup>
    //     <DropdownMenuSeparator />

    //     <DropdownMenuItem>المزيد ...</DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <div className="flex cursor-pointer items-center justify-between gap-5 rounded-lg bg-gray-50 px-3 py-2">
      <select
        defaultValue="اذاعة القران الكريم من القاهرة"
        className="cursor-pointer appearance-none text-sm outline-none"
        dir="rtl"
      >
        <option value="اذاعة القران الكريم من القاهرة">
          اذاعة القران الكريم من القاهرة
        </option>
        <option value="اذاعة المملكة العربية السعودية">
          اذاعة المملكة العربية السعودية
        </option>
        <option value="اذاعة الامارات">اذاعة الامارات</option>
        <option value="المزيد ...">المزيد ...</option>
      </select>
    </div>
  );
}
