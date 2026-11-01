import { Router } from "express";
import { adminAuth } from "./auth.js";

const router = Router();

router.use(adminAuth);

router.get("/dashboard", (req, res) => {
  res.json({
    success: true,
    message: "NEON VPN Admin API",
    sections: [
      "users",
      "subscriptions",
      "payments",
      "plans",
      "vpn_servers",
      "audit_logs"
    ]
  });
});

export default router;