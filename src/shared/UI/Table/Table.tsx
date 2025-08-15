'use client';
import backTableActionIconSvg from '@public/img/svg/backTableActionIconSvg.svg';
import Image from 'next/image';
import { useState } from 'react';

function Table() {
  const [evalutationStatle] = useState<'start' | 'done'>('start');
  return (
    <div className="overflow-x-auto">
      <table className="table w-full  overflow-hidden">
        {/* head */}

        <thead className="bg-neutral text-base-content ">
          <tr className=" text-center text-xs xl:text-base font-semibold ">
            <th className="flex items-center justify-center">
              <div className="inline-flex form-control">
                <label className="cursor-pointer label">
                  <input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                </label>
              </div>
            </th>
            <th>ترتیب نمایش</th>
            <th>عنوان فیلم</th>
            <th> پایه</th>
            <th>وضعیت ارزیابی</th>
            <th>وضعیت اچ ال اس</th>
            <th>وضعیت</th>
            <th>کی ایجاد کرده</th>
            <th>تاریخ ایجاد</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody className="neutral-content font-normal text-xs xl:text-sm">
          {/* row 1 */}
          <tr className="text-center">
            <th>
              <div className="inline-flex form-control">
                <label className="cursor-pointer label">
                  <input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                </label>
              </div>
            </th>
            <td>
              <span>1</span>
            </td>
            <td>درس اول</td>
            <td>
              <div className="line-clamp-1">پایه نهم-ریاضی فیزیک</div>
            </td>
            <td className={`${evalutationStatle === 'start' && 'text-primary'}`}>شروع</td>
            <td>در صف انجام</td>
            <td className="m-auto">
              <input type="checkbox" className="toggle toggle-info" defaultChecked />
            </td>
            <td>نیلی</td>
            <td>1403/06/01</td>
            <td>
              <div className="flex justify-center items-center text-primary gap-x-1">
                <button className="xl:hidden" type="button" aria-label="مشاهده یا ویرایش">
                  <Image src={backTableActionIconSvg} alt="مشاهده یا ویرایش" />
                </button>
                <button className="hidden xl:flex justify-center items-center gap-x-1 ">
                  <Image src={backTableActionIconSvg} alt="مشاهده یا ویرایش" />
                  <span>مشاهده / ویرایش</span>
                </button>
              </div>
            </td>
          </tr>
          {/* row 2 */}
          <tr className="text-center">
            <th>
              <div className="inline-flex form-control">
                <label className="cursor-pointer label">
                  <input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                </label>
              </div>
            </th>
            <td>
              <span>2</span>
            </td>
            <td>درس اول</td>
            <td>
              <div className="line-clamp-1">پایه نهم-ریاضی فیزیک</div>
            </td>
            <td>انجام شده</td>
            <td>در حال انجام</td>
            <td className="m-auto">
              <input type="checkbox" className="toggle toggle-info" />
            </td>
            <td>نیلی</td>
            <td>1403/06/01</td>
            <td>
              <div className="flex justify-center items-center text-primary gap-x-1">
                <button className="xl:hidden" type="button" aria-label="مشاهده یا ویرایش">
                  <Image src={backTableActionIconSvg} alt="مشاهده یا ویرایش" />
                </button>
                <button className="hidden xl:flex justify-center items-center gap-x-1 ">
                  <Image src={backTableActionIconSvg} alt="مشاهده یا ویرایش" />
                  <span>مشاهده / ویرایش</span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
