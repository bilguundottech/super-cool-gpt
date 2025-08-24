"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";
import { useActionState, useEffect } from "react";
import { startChatAction } from "../actions";
import { toast } from "sonner";

const ChatInput = () => {
  const [state, formAction, isPending] = useActionState(startChatAction, null);

  useEffect(() => {
    if (state && !state.success) {
      toast.error("Chat failed", {
        description: "Please try again",
      });
    }
  }, [state]);

  return (
    <form action={formAction}>
      <fieldset disabled={isPending} className="flex w-full">
        <Input name="message" />
        <Button size="icon" type="submit">
          <SendIcon />
        </Button>
      </fieldset>
    </form>
  );
};

export default ChatInput;
