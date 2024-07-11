import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/Button";
import { useState } from "react";
import { CreateImportantLinksModal } from "./create-important-link-modal";


export function ImportantLinks() {
  const [isImportantLinkModal, setIsImportantLinkModal] = useState(false)

  function openImportantLinkModal() {
        setIsImportantLinkModal(true)
  }

  function closeImportantLinkModal() {
    setIsImportantLinkModal(false)
  }
  


  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
              https://www.airbnb.com.br/rooms/10470001139028321098312093821903812038910
            </a>
          </div>

          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
              https://www.airbnb.com.br/rooms/10470001139028321098312093821903812038910
            </a>
          </div>

          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>

      <Button variant="secondary" size="full" onClick={openImportantLinkModal}>
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>


      {
        isImportantLinkModal && (
          <CreateImportantLinksModal closeImportantLinkModal={closeImportantLinkModal} />
        )
      }
    </div>
  )
}