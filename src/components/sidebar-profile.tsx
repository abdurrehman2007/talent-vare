import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

interface SidebarRowProps {
  label: string;
  value: string;
}
function SidebarRow({ label, value }: SidebarRowProps) {
  return (
    <div className="flex items-center justify-between border-b py-3 first:pt-0 last:pb-0 last:border-0">
      <div className="text-sm text-accent-foreground">{label}</div>
      <div className="text-sm text-primary">{value}</div>
    </div>
  );
}

export default function SidebarProfile() {
  return (
    <div className="space-y-4">
      <Card className="overflow-hidden pt-0">
        <img
          src="/images/profile-cover.jpg"
          alt=""
          className="h-[100px] w-full object-cover"
        />
        <CardContent className="-mt-[60px] flex flex-col items-center pt-0">
          <Avatar className="size-[86px] ring-2 ring-card">
            <AvatarImage src="/images/profile.png" alt="Albert Flores" />
            <AvatarFallback className="bg-secondary text-foreground">
              AF
            </AvatarFallback>
          </Avatar>
          <div className="max-w-[80%] mt-2 text-center">
            <h3 className="text-xl font-semibold text-dark">Albert Flores</h3>
            <p className="mt-1 text-sm leading-5 text-accent-foreground">
              Senior Product Designer | UI/UX Designer | Graphic Designer |
              Web...
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Glenion, Maryland
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="p-5">
        <CardContent className="p-0">
          <SidebarRow label="Profile Visitors" value="140" />
          <SidebarRow label="Resume Viewers" value="20" />
          <SidebarRow label="My Jobs" value="88" />
        </CardContent>
      </Card>

      <Card className="py-2.5">
        <CardContent className="flex items-center justify-between px-2.5">
          <div>
            <div className="text-base font-semibold">My calendar</div>
            <div className="text-sm text-foreground">Upcoming interviews</div>
          </div>
          <ChevronDown className="size-6 text-[#333333]" />
        </CardContent>
      </Card>
    </div>
  );
}
