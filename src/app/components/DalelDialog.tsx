import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { GiInfo } from "react-icons/gi";

interface DalelDialogProps {
  dalel?: string;
}
export default function DalelDialog({ dalel }: DalelDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className="absolute end-0 top-0 flex h-full w-full items-end justify-center pb-1 text-black">
        <GiInfo className="text-xl" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>الدليل</DialogTitle>
          <DialogDescription>{dalel}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
