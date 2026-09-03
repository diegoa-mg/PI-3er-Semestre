import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();
  return <h1 className="text-2xl font-bold p-6">{t("login.title")}</h1>;
}

function NotFound() {
  const { t } = useTranslation();
  return <h1 className="text-2xl font-bold p-6">{t("common.notFound")}</h1>;
}

export default function App() {
  const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => i18n.changeLanguage(lng);

  return (
    <div>
      <nav className="p-4 flex justify-between items-center border-b">
        <span className="font-semibold">{t("app.name")}</span>
        <div className="space-x-2">
          <button onClick={() => cambiarIdioma("es")} className="text-sm underline">
            ES
          </button>
          <button onClick={() => cambiarIdioma("en")} className="text-sm underline">
            EN
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
