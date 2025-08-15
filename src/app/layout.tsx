import '@/globals.css';
import Header from '@/shared/layout/Header';
import Sidebar from '@/shared/layout/Sidebar';
import backOfficeHomeIconGreenSvg from '@public/img/svg/backofficeHomeIconGreenSvg.svg';
import OfficeHomeIcon from '@public/img/svg/backofficeHomeIconSvg.svg';
import OfficeReportIcon from '@public/img/svg/backofficeReportIconSvg.svg';
import MenuIconSvg from '@public/img/svg/MenuIconSvg.svg';
import UsersNotActive from '@public/img/svg/organizationUsersNotActiveSvg.svg';
import settingsGreenIconSvg from '@public/img/svg/settingsGreenIconSvg.svg';
import userAvatarActiveIconSvg from '@public/img/svg/userAvatarActiveIconSvg.svg';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" data-theme="mytheme">
      <body>
        <div className="w-full min-h-screen flex bg-neutral overflow-x-hidden">
          <Sidebar
            items={[
              { title: 'صفحه اصلی', linkUrl: '/home', officeIcon: OfficeHomeIcon },
              { title: 'بانک محتوا', linkUrl: '/content', officeIcon: UsersNotActive },
              { title: 'کاربران', linkUrl: '/users', officeIcon: UsersNotActive },
              { title: 'گزارش', linkUrl: '/report', officeIcon: OfficeReportIcon },
            ]}
          />

          <div className="flex-1 min-w-0">
            <Header
              itemsRight={[
                { title: 'منو', topbarIcon: MenuIconSvg },
                { title: 'صفحه اصلی', topbarIcon: backOfficeHomeIconGreenSvg },
              ]}
              itemsLeft={[
                { title: 'تنظیمات', topbarIcon: settingsGreenIconSvg },
                { title: 'اطلاعات کاربر', topbarIcon: userAvatarActiveIconSvg },
              ]}
            />
            <main className="w-full p-6 min-w-0">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
