import CardList from "@/components/CardList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { BadgeCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import EditUserForm from "@/components/EditUserForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AppLineChart } from "@/components/AppLineChart";

const SingleUserPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{id}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* CONTAINER */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* USER BADGES CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">{id}</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              quos reiciendis, saepe enim tempore repellendus deserunt
              voluptatum eligendi blanditiis culpa facere quidem harum
              voluptates quod animi perspiciatis soluta molestiae eaque.
            </p>
          </div>
          {/* INFORMATION CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUserForm id={id} />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile Completion
                </p>
                <Progress value={33} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Full name:</span>
                <span className="font-bold">{id}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span className="font-bold">{id + "@gmail.com"}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone Number:</span>
                <span className="font-bold">+201587964</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Address:</span>
                <span className="font-bold">New York</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">City:</span>
                <span className="font-bold">New York</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Joined at 2025.01.01
            </p>
          </div>
        </div>
        {/* RIGHT */}
        <div className="xl:w-2/3 space-y-6">
          {/* USER CARD CONTAINER */}

          {/* CHART CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
