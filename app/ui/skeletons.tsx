// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="m-2 h-6 w-60 rounded-md bg-gray-200 font-medium p-2" />
      <div className="grid grid-cols-3 gap-4 rounded-xl bg-white px-4 py-8 text-center">
        <div className="flex flex-col items-center">
          <div className="h-6 w-6 rounded-md bg-gray-200 mb-2"></div>
          <div className="h-6 w-20 rounded-md bg-gray-200"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-6 w-6 rounded-md bg-gray-200 mb-2"></div>
          <div className="h-6 w-20 rounded-md bg-gray-200"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-6 w-6 rounded-md bg-gray-200 mb-2"></div>
          <div className="h-6 w-20 rounded-md bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
    </>
  );
}

export function MonthlyBillsChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4" />
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-200" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function BillDiffSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between py-4">
      <div className="h-6 w-20 rounded-md bg-gray-200"></div>
      <div className="h-6 w-20 rounded-md bg-gray-200"></div>
      <div className="h-6 w-20 rounded-md bg-gray-200"></div>
    </div>
  );
}

export function BillDiffsSkeleton() {
  return (
    <div className={`${shimmer} flex w-full flex-col md:col-span-4`}>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-2">
        <div className="h-6 w-24 rounded-md bg-gray-200 mb-2 ms-2"></div>
        <div className="bg-white px-6">
          <BillDiffSkeleton />
          <BillDiffSkeleton />
          <BillDiffSkeleton />
          <BillDiffSkeleton />
          <BillDiffSkeleton />
          <BillDiffSkeleton />
          <BillDiffSkeleton />
        </div>
      </div>
      <div className="flex items-center pb-2 pt-6">
        <div className="h-5 w-5 rounded-full bg-gray-200" />
        <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardsSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <MonthlyBillsChartSkeleton />
        <BillDiffsSkeleton />
      </div>
    </>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-5 w-24 rounded bg-gray-100"></div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-5 w-32 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-5 w-16 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-5 w-16 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-5 w-16 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          {/* <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div> */}
        </div>
      </td>
    </tr>
  );
}

export function BillsMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-3">
      <div className="flex justify-between">
        <div className="flex flex-row">
          <div className="h-6 w-6 rounded-md bg-gray-200"></div>
          <div className="h-6 w-20 rounded-md bg-gray-200 font-medium ms-2"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100 font-medium"></div>
      </div>
      <div className="h-4 w-20 rounded-md bg-gray-200 font-medium text-xs mt-1"></div>
    </div>
  );
}

export function BillsTableSkeleton() {
  return (
    <div className="mt-4 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <BillsMobileSkeleton />
            <BillsMobileSkeleton />
            <BillsMobileSkeleton />
            <BillsMobileSkeleton />
            <BillsMobileSkeleton />
            <BillsMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Title
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  User
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Value
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Label
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function BillsPageSkeleton() {
  return (
    <div className={`${shimmer} w-full overflow-hidden rounded-md`}>
      <div className="flex items-center justify-between gap-2 md:mt-8">
        <div className="m-0">
          <div className="relative inline-block rounded-lg w-24 h-10 bg-gray-100 d-block me-4"></div>
          <div className="relative inline-block rounded-lg w-24 h-10 bg-gray-100 d-block"></div>
        </div>
        <div className="flex h-10 w-12 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium"></div>
      </div>
      <BillsTableSkeleton />
      <div className="mt-5 flex w-full justify-center">
        <div className="inline-flex">
          <div className="w-12 h-10 rounded-lg bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function GroceryMobileSkeleton() {
  return (
    <div className="rounded-lg bg-gray-50 p-2 mb-4">
      <div className="h-5 w-20 rounded-md bg-gray-200 mb-2"></div>
      <div className="flex items-center mb-2">
        <div className="mb-2 w-full rounded-md bg-white p-3">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-md bg-gray-200"></div>
              <div className="h-6 w-40 rounded-md bg-gray-200 font-medium ms-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GroceriesTableSkeleton() {
  return (
    <div className="mt-4 flow-root">
      <div className="inline-block min-w-full align-middle">
        <GroceryMobileSkeleton />
        <GroceryMobileSkeleton />
        <GroceryMobileSkeleton />
        <GroceryMobileSkeleton />
        <GroceryMobileSkeleton />
      </div>
    </div>
  );
}

export function GroceriesPageSkeleton() {
  return (
    <div className={`${shimmer} w-full overflow-hidden rounded-md`}>
      <div className="flex items-center justify-between gap-2 md:mt-8">
        <div className="relative inline-block rounded-lg w-24 h-10 bg-gray-100 d-block me-4"></div>
        <div className="relative inline-block rounded-lg w-24 h-10 bg-gray-100 d-block"></div>
      </div>
      <GroceriesTableSkeleton />
    </div>
  );
}

export function RecipeSkeleton() {
  return (
    <div className="p-2">
      <div className="h-6 w-32 rounded-md bg-gray-200 text-medium my-1"></div>
      <div className="h-32 w-32 rounded-md bg-gray-200"></div>
      <div className="flex flex-wrap">
        <div className="h-4 w-16 rounded-md bg-gray-200 px-2 me-1 mt-1.5"></div>
        <div className="h-4 w-16 rounded-md bg-gray-200 px-2 me-1 mt-1.5"></div>
      </div>
    </div>
  );
}

export function RecipesListSkeleton() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="grid grid-cols-2 gap-4">
        <RecipeSkeleton />
        <RecipeSkeleton />
        <RecipeSkeleton />
        <RecipeSkeleton />
      </div>
    </div>
  );
}

export function RecipesPageSkeleton() {
  return (
    <div className={`${shimmer} w-full overflow-hidden rounded-md`}>
      <div className="relative inline-block rounded-lg w-full h-16 bg-gray-100 d-block mx-auto mb-3"></div>
      <RecipesListSkeleton />
    </div>
  );
}

export function LoadingSkeleton() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <p className="text-lg font-medium text-gray-600">Loading...</p>
    </div>
  );
}
