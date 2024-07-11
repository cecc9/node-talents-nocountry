import { CandidateRegisterForm } from "@/components/candidate-register-form";
import Link from "next/link";

const CandidateRegisterPage = () => {
  return (
    <div>
      <CandidateRegisterForm />

      <div className="candidateRegister__links">
        <Link href={"/company/register"}>registrate como empresa</Link>
        <br />
        <Link href={"/auth/login"}>Inicia sesion</Link>
      </div>
    </div>
  );
};

export default CandidateRegisterPage;
