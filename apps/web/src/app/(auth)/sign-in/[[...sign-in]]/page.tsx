import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <SignIn
      appearance={{
        elements: {
          rootBox: "mx-auto",
          cardBox: "!bg-transparent !shadow-none !border-none",
          card: "!bg-transparent !shadow-none !border-none",
          headerTitle: "!text-foreground",
          socialButtonsBlockButton: "!shadow-none !text-foreground",
        },
      }}
    />
  );
};

export default SignInPage;
