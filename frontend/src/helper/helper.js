export const formatTel = (tel) => {
    if (!tel) return "";
    const cleaned = tel.replace(/\D/g, "").slice(0, 10); // เอาเฉพาะตัวเลขและไม่เกิน 10 ตัว
    const part1 = cleaned.slice(0, 3);
    const part2 = cleaned.slice(3, 6);
    const part3 = cleaned.slice(6, 10);
    return [part1, part2, part3].filter(Boolean).join("-");
  };
  
export const sanitizePhoneNumber = (input) => {
    return input.replace(/\D/g, "").slice(0, 10);
  };
  