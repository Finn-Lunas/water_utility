import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoHint from "@/components/ui/InfoHint";
import LatestNews from "@/components/ui/LatestNews";
import { news } from "@/components/sections/NewsSection";

export const metadata: Metadata = {
  title: "Вхід в особистий кабінет — Водоканал Карпатвіз",
};

async function verifyTurnstile(token: string) {
  "use server";
  const secret = process.env.TURNSTILE_SECRET_KEY ?? "";
  if (!token || !secret)
    return { success: false } as { success: boolean; "error-codes"?: string[] };
  const r = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
      cache: "no-store",
    }
  );
  return (await r.json()) as { success: boolean; "error-codes"?: string[] };
}

export default function LoginPage() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

  // server action-шаблон (поки без реальної авторизації)
  async function loginAction(formData: FormData) {
    "use server";
    const { redirect } = await import("next/navigation");
    
    // honeypot: якщо заповнено — бот
    if ((formData.get("website") || "").toString().trim()) return;
    const cf = (formData.get("cf-turnstile-response") || "").toString();
    const v = await verifyTurnstile(cf);
    if (!v.success) return; // тут можна додати повідомлення про помилку/логування
    
    // Перевірка чи заповнені поля (базова валідація)
    const account = (formData.get("account") || "").toString().trim();
    const surname = (formData.get("surname") || "").toString().trim();
    
    if (account && surname) {
      // TODO: далі — пошук абонента та авторизація
      // Поки просто редіректимо на кабінет
      redirect("/cabinet");
    }
  }

  return (
    <>
      {/* Turnstile скрипт */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      {/* No-op handlers to avoid console errors if callbacks referenced */}
      <Script
        id="turnstile-handlers"
        strategy="afterInteractive"
      >{`window.onTurnstileSuccess = function(){};
         window.onTurnstileError = function(){};
         window.onTurnstileExpired = function(){}`}</Script>

      <Header />
      <main className="pt-[var(--header-h)]">
        <section className="bg-lightBlue/40">
          <div className="container py-10 md:py-14">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Вхід в особистий кабінет
            </h1>
            <p className="mt-2 text-textSecondary">
              Укажіть номер особового рахунку та прізвище.
            </p>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-stretch">
              <form
                action={loginAction}
                className="rounded-2xl border border-line bg-white shadow-soft p-5 md:p-6"
              >
              {/* honeypot (не відображати) */}
              <input
                type="text"
                name="website"
                autoComplete="off"
                tabIndex={-1}
                className="hidden"
              />

              <div className="grid gap-4">
                <label className="grid gap-2">
                  <span className="text-sm font-medium">
                    Номер особового рахунку
                  </span>
                  <input
                    name="account"
                    inputMode="numeric"
                    placeholder="Напр., 0123456789"
                    required
                    className="h-11 rounded-xl border border-line px-3 outline-none focus:border-primary"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium">Прізвище</span>
                  <input
                    name="surname"
                    placeholder="Напр., Іваненко"
                    required
                    className="h-11 rounded-xl border border-line px-3 outline-none focus:border-primary"
                  />
                </label>

                {/* Тільки Turnstile */}
                <div className="mt-2 rounded-xl border border-line bg-white/60 px-3 py-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex-1 min-w-[160px] max-w-full">
                      <div
                        className="cf-turnstile"
                        data-sitekey={siteKey}
                        data-theme="light"
                        data-size="flexible"
                        data-callback="onTurnstileSuccess"
                        data-error-callback="onTurnstileError"
                        data-expired-callback="onTurnstileExpired"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-white hover:bg-primary-600"
                >
                  Увійти
                </button>

                <div className="text-sm text-textSecondary flex items-center gap-2">
                  <span>Проблеми зі входом?</span>
                  <InfoHint />
                </div>
              </div>
              </form>

              <div className="lg:order-2">
                <LatestNews news={news[0]} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
