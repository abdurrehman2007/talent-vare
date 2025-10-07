import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";

export default function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="mx-auto flex h-17 max-w-[1200px] items-center gap-3 px-4">
        {/* mobile menu trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[320px] p-0">
            <SheetHeader className="border-b px-4 py-3">
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className="space-y-4 p-4">
              {/* mobile search */}
              <div className="flex items-center gap-2 rounded-md border border-transparent bg-[#F6F9FF] px-5 py-1">
                <Search className="size-4 text-muted-foreground" />
                <Input
                  placeholder="Search"
                  className="h-7 py-0 border-none shadow-none focus-visible:ring-0 bg-transparent"
                />
              </div>
              <nav className="grid gap-2 text-sm text-foreground">
                <a className="font-medium text-primary">Find Jobs</a>
                <a>Top Companies</a>
                <a>Job Tracker</a>
                <a>My Calendar</a>
                <a>Documents</a>
                <a>Messages</a>
                <a>Notifications</a>
              </nav>
              <Button className="w-full bg-primary text-primary-foreground">
                Resume Builder
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        {/* logo and desktop nav */}
        <div className="flex items-center gap-3">
          <div className="grid place-items-center">
            <img src="images/logo.svg" alt="Logo" className="h-9 w-9" />
          </div>
          <nav className="hidden items-center gap-5 text-sm text-foreground md:flex">
            <a className="font-semibold text-primary">Find Jobs</a>
            <a>Top Companies</a>
            <a>Job Tracker</a>
            <a>My Calendar</a>
            <a>Documents</a>
            <a>Messages</a>
            <a>Notifications</a>
          </nav>
        </div>

        {/* desktop search */}
        <div className="ml-auto hidden items-center gap-2 rounded-md border border-transparent bg-[#F6F9FF] px-5 py-1 md:flex">
          <Search className="size-4 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="h-7 w-48 py-0 border-none shadow-none focus-visible:ring-0 bg-transparent"
          />
        </div>

        <Button className="ml-2 hidden h-9 bg-primary px-5 py-3 text-primary-foreground md:inline-flex">
          Resume Builder
        </Button>
        <div className="ml-auto flex items-center gap-2">
          <Avatar className="size-8">
            <AvatarImage src="/placeholder-user.jpg" alt="User avatar" />
            <AvatarFallback className="bg-secondary">A</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
