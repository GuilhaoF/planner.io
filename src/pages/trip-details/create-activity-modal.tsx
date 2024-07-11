import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  const { tripId } = useParams();
  const navigate = useNavigate();

  async function handleCreateActivity(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const title = formData.get("title") as string;
    const occurs_at = formData.get("occurs_at") as string;

    await api.post(`trips/${tripId}/activities`, {
      title,
      occurs_at,
    });
  
    navigate(0); // Navega para a mesma página e atualiza os dados
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="font-lg font-semibold">Cadastrar atividade</h2>
            <button>
              <X
                className="size-5 text-zinc-400"
                onClick={closeCreateActivityModal}
              />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form className="space-y-3" onSubmit={handleCreateActivity}>
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              name="title"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Calendar className="text-zinc-400 size-5" />
            <input
              type="datetime-local"
              name="occurs_at"
              placeholder="Data e horário da atividade"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <Button size="full">Salvar atividade</Button>
        </form>
      </div>
    </div>
  );
}
