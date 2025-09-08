export type RuntimeConfig = {
  emailjsServiceId?: string
  emailjsTemplateId?: string
  emailjsPublicKey?: string
  calendlyUrl?: string
}

export async function loadRuntimeConfig(): Promise<RuntimeConfig> {
  try {
    const el = document.getElementById('runtime-config') as HTMLScriptElement | null
    if (el?.textContent) {
      const parsed = JSON.parse(el.textContent)
      return parsed as RuntimeConfig
    }
  } catch (_e) {
    // ignore
  }
  return {}
}


