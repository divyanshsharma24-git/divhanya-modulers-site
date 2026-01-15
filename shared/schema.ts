import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  businessType: text("business_type"),
  contactNumber: text("contact_number").notNull(),
  whatsappNumber: text("whatsapp_number"),
  email: text("email"),
  inquiry: text("inquiry"),
  source: text("source").default("website"), // website, chatbot, helpdesk
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertLeadSchema = createInsertSchema(leads).omit({ 
  id: true, 
  createdAt: true 
});

export type Lead = typeof leads.$inferSelect;
export type InsertLead = z.infer<typeof insertLeadSchema>;
