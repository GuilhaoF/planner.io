import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { CreateImportantLinksModal } from "./create-important-link-modal";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { LinksProps } from "../../types/type-links";


export function ImportantLinks() {
  const [isImportantLinkModal, setIsImportantLinkModal] = useState(false)
  const [links, setLinks] = useState<LinksProps[]>([])
  const { tripId } = useParams()

  function openImportantLinkModal() {
        setIsImportantLinkModal(true)
  }

  function closeImportantLinkModal() {
    setIsImportantLinkModal(false)
  }

  useEffect(() => {
    api.get(`/trips/${tripId}/links`).then(response => {
      setLinks(response.data.links)
    })
  },[])
  

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      <div className="space-y-5">
        {
          links.map((link) => (
            <div key={link.id} className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">{link.title}</span>
              <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
               {link.url}
              </a>
            </div>
            <Link2 className="text-zinc-400 size-5 shrink-0" />
          </div>
          ))
        }

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
  </div>
)}