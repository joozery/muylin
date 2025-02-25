import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: "/", // แก้ให้ Vite ใช้ root path
  server: {
    port: 5173, // หรือเปลี่ยนเป็น port ที่ต้องการ
  },
  build: {
    outDir: "dist", // ให้ไฟล์ build ออกไปที่โฟลเดอร์ dist
  },
});