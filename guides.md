---
title: Guides - Dokumentacja Pixi
---

# 📖 Guides (Poradniki)

W tej sekcji znajdziesz szczegółowe poradniki, które pomogą Ci w optymalizacji, konfiguracji oraz rozwiązywaniu najczęstszych problemów związanych ze skryptami Pixi.

---

## 🛠️ Podstawy optymalizacji
Optymalizacja to klucz do płynnej gry. Nasze skrypty są tworzone z myślą o `0.00ms`, ale poprawne skonfigurowanie serwera jest równie ważne.

### Lista kroków optymalizacji:
1. **Używaj najnowszych wersji `ox_lib`**: Zawsze dbaj o aktualność zależności.
2. **Ograniczaj zasięg (Distance)**: W plikach `config.lua` ustawiaj rozsądne wartości `drawDistance` (np. 1.5 - 2.0 metrów).
3. **Logi**: Wyłącz tryb `Debug` na środowisku produkcyjnym, aby zaoszczędzić zasoby procesora.

---

## ⚠️ Najczęstsze problemy (Troubleshooting)

| Problem | Rozwiązanie |
| :--- | :--- |
| **Błąd: "Resource not found"** | Sprawdź nazwę folderu w `resources/` oraz wpis w `server.cfg`. |
| **Błąd: "Database connection failed"** | Sprawdź konfigurację w `ox_mysql`. |
| **Skrypt nie widzi przedmiotów** | Upewnij się, że dodałeś przedmioty do `ox_inventory/data/items.lua`. |

> [!IMPORTANT]
> Zawsze czytaj konsolę serwera! Większość błędów jest tam opisana bardzo szczegółowo.

---

## 🚀 Zaawansowana konfiguracja
Jeśli chcesz w pełni wykorzystać potencjał naszych skryptów, zajrzyj do sekcji **API** w panelu bocznym.

### Przykładowa integracja z innymi skryptami:
Jeśli chcesz, aby skrypt Pixi Core wywołał zdarzenie w innym zasobie, użyj poniższej struktury:

```lua
-- Przykład użycia TriggerEvent
TriggerEvent('pixi_core:onPlayerLoaded', function(data)
    print("Gracz załadowany: " .. data.name)
end)