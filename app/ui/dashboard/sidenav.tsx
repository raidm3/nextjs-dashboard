import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import BillsLogo from '@/app/ui/bills-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col">
      <div
        className="bg-primary p-4 md:h-40"
      >
        <div className="w-32 text-white md:w-40">
          <BillsLogo />
        </div>
      </div>
      <div className="flex grow flex-row justify-between md:flex-col md:space-x-0 md:space-y-2 z-50 bg-gray-50 md:px-0 md:relative fixed bottom-0 left-0 right-0">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          className="hidden md:block"
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
