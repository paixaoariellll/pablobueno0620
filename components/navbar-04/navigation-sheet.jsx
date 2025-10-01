import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";
import Logomarca from "../start/logomarca";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon' className='rounded-full'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className='px-8 py-3'>
        <SheetHeader>
          <SheetTitle>
            <Logomarca />
          </SheetTitle>
        </SheetHeader>

        <NavMenu orientation='vertical' className='mt-6 [&>div]:h-full' />
      </SheetContent>
    </Sheet>
  );
};
