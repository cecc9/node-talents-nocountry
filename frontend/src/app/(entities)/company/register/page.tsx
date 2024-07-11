import Link from "next/link";
import { CompanyRegisterForm } from "@/components/company-register-form";

const CompanyRegisterPage = () => {
  return (
    <div>
      <CompanyRegisterForm />

      <div className="candidateRegister__links">
        <Link href={"/candidate/register"}>registrate como candidato</Link>
        <br />
        <Link href={"/auth/login"}>Inicia sesion</Link>
      </div>
    </div>
  );
};

export default CompanyRegisterPage;
