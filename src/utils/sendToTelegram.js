const BOT_TOKEN = import.meta.env.VITE_TG_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_TG_CHAT_ID;

export async function sendToTelegram(formData) {
  const {
    // Блок 1 — Автомобиль
    carBrand,
    carModel,
    carConfig,
    // Блок 2 — Кредит
    loanTerm,
    selectedBank,
    downPayment,
    discount70k,
    discount30k,
    // Блок 3 — Trade-in
    tradeInEnabled,
    tradeInBrand,
    tradeInYear,
    tradeInTransmission,
    tradeInModel,
    tradeInConfig,
    // Блок 4 — Персональные данные
    name,
    phone,
    gift,
  } = formData;

  const text = `
🚗 <b>Новая заявка на кредит</b>

<b>1. Автомобиль</b>
• Марка: ${carBrand || '—'}
• Модель: ${carModel || '—'}
• Комплектация: ${carConfig || '—'}

<b>2. Кредит</b>
• Срок: ${loanTerm} мес.
• Банк: ${selectedBank || '—'}
• Первоначальный взнос: ${downPayment ? downPayment + ' ₽' : '0 ₽'}
• Скидка 70 000 ₽: ${discount70k ? '✅' : '❌'}
• Акция «Выгодный кредит» −30 000 ₽: ${discount30k ? '✅' : '❌'}

<b>3. Trade-in</b>
• Программа: ${tradeInEnabled ? 'Включена' : 'Выключена'}
${tradeInEnabled ? `• Марка: ${tradeInBrand || '—'}
• Модель: ${tradeInModel || '—'}
• Год выпуска: ${tradeInYear || '—'}
• КПП: ${tradeInTransmission || '—'}
• Комплектация: ${tradeInConfig || '—'}` : ''}

<b>4. Клиент</b>
• Имя: ${name || '—'}
• Телефон: ${phone || '—'}
• Подарок: ${gift || '—'}
`.trim();

  const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: 'HTML',
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.description || 'Telegram API error');
  }

  return res.json();
}
