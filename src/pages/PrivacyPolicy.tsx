import { ShieldCheck, Info, Mail, FileText } from "lucide-react";
import { useThemeStore } from "../zustand/store";

const PrivacyPolicy = () => {
  const { theme } = useThemeStore();

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100 text-gray-800"
      } pt-[200px] p-6 rounded-lg shadow-lg max-w-4xl mx-auto`}
    >
      <div className="flex items-center mb-8">
        <ShieldCheck className="text-indigo-500 w-10 h-10 mr-3" />
        <h1 className="text-4xl font-bold">Datenschutzrichtlinie</h1>
      </div>

      <p className="mb-6 leading-relaxed">
        Diese Datenschutzrichtlinie erklärt, wie [Kurs Adı] (im Folgenden "wir",
        "unser" oder "Unternehmen") die Daten sammelt, verwendet und schützt,
        die von den Nutzern unserer Dienstleistungen bereitgestellt werden.
      </p>

      <div className="space-y-8">
        <div>
          <div className="flex items-center mb-3">
            <Info className="text-indigo-500 w-6 h-6 mr-2" />
            <h2 className="text-2xl font-semibold">
              1. Gesammelte Informationen
            </h2>
          </div>
          <p className="mb-3">
            Wir sammeln folgende Informationen von unseren Nutzern:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Vor- und Nachname</li>
            <li>E-Mail-Adresse</li>
            <li>Telefonnummer (falls vorhanden)</li>
            <li>Informationen zu Nutzerpräferenzen</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center mb-3">
            <FileText className="text-indigo-500 w-6 h-6 mr-2" />
            <h2 className="text-2xl font-semibold">
              2. Verwendung der Informationen
            </h2>
          </div>
          <p className="mb-3">
            Die gesammelten Informationen können für folgende Zwecke verwendet
            werden:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Um unsere Dienstleistungen bereitzustellen und zu verbessern
            </li>
            <li>Um mit Nutzern zu kommunizieren</li>
            <li>Um über neue Dienstleistungen und Updates zu informieren</li>
            <li>Um Nutzerfeedback zu bewerten</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center mb-3">
            <ShieldCheck className="text-indigo-500 w-6 h-6 mr-2" />
            <h2 className="text-2xl font-semibold">
              3. Weitergabe von Informationen
            </h2>
          </div>
          <p className="mb-3">
            Wir werden Ihre persönlichen Daten nicht an Dritte weitergeben, es
            sei denn, es besteht eine gesetzliche Verpflichtung oder Sie haben
            zugestimmt.
          </p>
        </div>

        <div>
          <div className="flex items-center mb-3">
            <ShieldCheck className="text-indigo-500 w-6 h-6 mr-2" />
            <h2 className="text-2xl font-semibold">4. Datensicherheit</h2>
          </div>
          <p className="mb-3">
            Wir ergreifen angemessene Sicherheitsmaßnahmen, um Ihre Daten zu
            schützen. Bitte beachten Sie jedoch, dass die Datenübertragung über
            das Internet nicht vollständig sicher ist.
          </p>
        </div>

        <div>
          <div className="flex items-center mb-3">
            <Info className="text-indigo-500 w-6 h-6 mr-2" />
            <h2 className="text-2xl font-semibold">5. Rechte der Nutzer</h2>
          </div>
          <p className="mb-3">
            Nutzer haben das Recht, ihre Daten einzusehen, zu korrigieren oder
            zu löschen. Diese Anfragen können Sie an [E-Mail-Adresse] richten.
          </p>
        </div>

        <div>
          <div className="flex items-center mb-3">
            <FileText className="text-indigo-500 w-6 h-6 mr-2" />
            <h2 className="text-2xl font-semibold">
              6. Änderungen der Richtlinie
            </h2>
          </div>
          <p className="mb-3">
            Wir behalten uns das Recht vor, diese Datenschutzrichtlinie zu
            ändern. Änderungen werden auf unserer Website veröffentlicht.
          </p>
        </div>

        <div>
          <div className="flex items-center mb-3">
            <Mail className="text-indigo-500 w-6 h-6 mr-2" />
            <h2 className="text-2xl font-semibold">7. Kontaktinformationen</h2>
          </div>
          <p className="mb-3">
            Bei Fragen zu unserer Datenschutzrichtlinie können Sie uns gerne
            kontaktieren:
          </p>
          <p className="mb-3">E-Mail: 2goecebe@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
