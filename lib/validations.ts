import { z } from "zod";

// User schemas
export const userRoleSchema = z.enum(["ADMIN", "USER"]);

export const createUserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: userRoleSchema,
  departmentId: z.number().optional(),
  salary: z.number().positive("Salary must be positive").optional(),
  hireDate: z.string().optional(),
});

// Department schemas
export const createDepartmentSchema = z.object({
  name: z.string().min(2, "Department name must be at least 2 characters"),
  description: z.string().optional(),
  managerId: z.number().optional(),
});

// Project schemas
export const projectStatusSchema = z.enum([
  "PLANNING",
  "IN_PROGRESS",
  "ON_HOLD",
  "COMPLETED",
  "CANCELLED",
]);

export const createProjectSchema = z.object({
  name: z.string().min(2, "Project name must be at least 2 characters"),
  description: z.string().optional(),
  status: projectStatusSchema.default("PLANNING"),
  budget: z.number().positive("Budget must be positive").optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
});

// Task schemas
export const taskStatusSchema = z.enum([
  "BACKLOG",
  "IN_PROGRESS",
  "REVIEW",
  "DONE",
]);
export const taskPrioritySchema = z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]);

export const createTaskSchema = z.object({
  title: z.string().min(2, "Task title must be at least 2 characters"),
  description: z.string().optional(),
  status: taskStatusSchema.default("BACKLOG"),
  priority: taskPrioritySchema.default("MEDIUM"),
  projectId: z.number().optional(),
  dueDate: z.date().optional(),
  assigneeIds: z.array(z.number()).default([]),
});

// Leave Request schemas
export const leaveTypeSchema = z.enum([
  "ANNUAL",
  "SICK",
  "MATERNITY",
  "PATERNITY",
  "PERSONAL",
  "EMERGENCY",
]);
export const leaveStatusSchema = z.enum(["PENDING", "APPROVED", "REJECTED"]);

export const createLeaveRequestSchema = z.object({
  type: leaveTypeSchema,
  startDate: z.date(),
  endDate: z.date(),
  reason: z.string().optional(),
});

// Invoice schemas
export const invoiceStatusSchema = z.enum([
  "DRAFT",
  "SENT",
  "PAID",
  "OVERDUE",
  "CANCELLED",
]);

export const createInvoiceSchema = z.object({
  clientName: z.string().min(2, "Client name must be at least 2 characters"),
  clientEmail: z.string().email("Invalid email address").optional(),
  amount: z.number().positive("Amount must be positive"),
  tax: z.number().min(0, "Tax cannot be negative").optional(),
  dueDate: z.date(),
  description: z.string().optional(),
});

// Transaction schemas
export const transactionTypeSchema = z.enum(["INCOME", "EXPENSE"]);

export const createTransactionSchema = z.object({
  type: transactionTypeSchema,
  amount: z.number().positive("Amount must be positive"),
  description: z.string().min(2, "Description must be at least 2 characters"),
  category: z.string().optional(),
  date: z.date().default(() => new Date()),
});

// Lead schemas
export const leadStatusSchema = z.enum([
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "PROPOSAL",
  "NEGOTIATION",
  "WON",
  "LOST",
]);

export const createLeadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address").optional(),
  phone: z.string().optional(),
  company: z.string().optional(),
  status: leadStatusSchema.default("NEW"),
  source: z.string().optional(),
  value: z.number().positive("Value must be positive").optional(),
});

// Activity schemas
export const activityTypeSchema = z.enum([
  "CALL",
  "EMAIL",
  "MEETING",
  "DEMO",
  "FOLLOW_UP",
]);

export const createActivitySchema = z.object({
  leadId: z.number(),
  type: activityTypeSchema,
  description: z.string().optional(),
  scheduledAt: z.date().optional(),
});
