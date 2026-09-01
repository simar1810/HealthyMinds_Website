"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { api, TENANT_ID } from "@/lib/api";
import { DEFAULT_WHATSAPP_PHONE } from "@/lib/site-config";

const DEFAULT_CURRENCY = "AED";

export interface TenantWhatsappConfig {
  phone?: string;
  leadsEnabled?: boolean;
  prefill?: string;
}

export interface TenantInfo {
  _id: string;
  name?: string;
  brand?: string;
  currency: string;
  appPackageName?: string;
  featureList?: Array<{ name: string; status: boolean; _id: string }>;
  whatsappConfig?: TenantWhatsappConfig | Record<string, unknown>;
}

interface TenantContextType {
  tenant: TenantInfo | null;
  currency: string;
  loading: boolean;
  whatsappPhone: string;
  leadsEnabled: boolean;
  whatsappPrefill: string;
}

const TenantContext = createContext<TenantContextType | undefined>(undefined);

function extractWhatsapp(config: TenantInfo["whatsappConfig"]): {
  phone: string;
  leadsEnabled: boolean;
  prefill: string;
} {
  const fallbackPrefill =
    "Hi HealthyMinds, I'd like to know more about your meal plans in Dubai.";
  if (!config || typeof config !== "object") {
    return { phone: DEFAULT_WHATSAPP_PHONE, leadsEnabled: true, prefill: fallbackPrefill };
  }
  const rec = config as Record<string, unknown>;
  const leadsEnabled = rec.leadsEnabled !== false;
  const prefill =
    typeof rec.prefill === "string" && rec.prefill.trim()
      ? rec.prefill
      : fallbackPrefill;
  return { phone: DEFAULT_WHATSAPP_PHONE, leadsEnabled, prefill };
}

export function TenantProvider({ children }: { children: React.ReactNode }) {
  const [tenant, setTenant] = useState<TenantInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!TENANT_ID) {
      setLoading(false);
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        const res = await api.get<TenantInfo>(`/tenant/${TENANT_ID}`, { noAuth: true });
        if (!cancelled && res.data) {
          setTenant(res.data);
        }
      } catch {
        if (!cancelled) setTenant(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const wa = useMemo(() => extractWhatsapp(tenant?.whatsappConfig), [tenant]);
  const currency = tenant?.currency?.trim() || DEFAULT_CURRENCY;

  return (
    <TenantContext.Provider
      value={{
        tenant,
        currency,
        loading,
        whatsappPhone: wa.phone,
        leadsEnabled: wa.leadsEnabled,
        whatsappPrefill: wa.prefill,
      }}
    >
      {children}
    </TenantContext.Provider>
  );
}

export function useTenant(): TenantContextType {
  const ctx = useContext(TenantContext);
  if (ctx === undefined) {
    throw new Error("useTenant must be used within a TenantProvider");
  }
  return ctx;
}
