import { Toaster } from "sonner";
import Router from "@/config/Router";

export default function App(){
  return (
    <>
      <Router />
      <Toaster position="top-right" richColors closeButton/>
    </>
  )
}
