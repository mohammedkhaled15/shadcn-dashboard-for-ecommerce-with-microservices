import { AppAreaChart } from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import { AppPieChart } from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <div className="bg-primary-foreground p-2 rounded-lg lg:col-span-2 xl:col-span-2 2xl:col-span-2 flex items-center justify-center">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-2 rounded-lg  flex items-center justify-center">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-2 rounded-lg  flex items-center justify-center">
        <CardList title="Popular Products" />
      </div>
      <div className="bg-primary-foreground p-2 rounded-lg lg:col-span-2 xl:col-span-2 2xl:col-span-2  flex items-center justify-center">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-2 rounded-lg  flex items-center justify-center">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground p-2 rounded-lg  flex items-center justify-center">
        <TodoList />
      </div>
    </div>
  );
}
