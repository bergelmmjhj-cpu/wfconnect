var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  aiActionLogs: () => aiActionLogs,
  aiAlertState: () => aiAlertState,
  aiMessageLog: () => aiMessageLog,
  appConfig: () => appConfig,
  appNotifications: () => appNotifications,
  applicants: () => applicants,
  appointments: () => appointments,
  auditLog: () => auditLog,
  clawdAssistantRuns: () => clawdAssistantRuns,
  clawdChatMessages: () => clawdChatMessages,
  contactLeads: () => contactLeads,
  conversations: () => conversations2,
  crmPushQueue: () => crmPushQueue,
  crmSyncLogs: () => crmSyncLogs,
  discordActionLogs: () => discordActionLogs,
  discordAlerts: () => discordAlerts,
  exportAuditLogs: () => exportAuditLogs,
  insertAppNotificationSchema: () => insertAppNotificationSchema,
  insertAppointmentSchema: () => insertAppointmentSchema,
  insertContactLeadSchema: () => insertContactLeadSchema,
  insertConversationSchema: () => insertConversationSchema,
  insertExportAuditLogSchema: () => insertExportAuditLogSchema,
  insertMessageLogSchema: () => insertMessageLogSchema,
  insertMessageSchema: () => insertMessageSchema,
  insertPaymentProfileSchema: () => insertPaymentProfileSchema,
  insertPayrollBatchItemSchema: () => insertPayrollBatchItemSchema,
  insertPayrollBatchSchema: () => insertPayrollBatchSchema,
  insertShiftCheckinSchema: () => insertShiftCheckinSchema,
  insertShiftOfferSchema: () => insertShiftOfferSchema,
  insertShiftRequestSchema: () => insertShiftRequestSchema,
  insertShiftSchema: () => insertShiftSchema,
  insertShiftSeriesSchema: () => insertShiftSeriesSchema,
  insertTimesheetEntrySchema: () => insertTimesheetEntrySchema,
  insertTimesheetSchema: () => insertTimesheetSchema,
  insertTitoLogSchema: () => insertTitoLogSchema,
  insertUserSchema: () => insertUserSchema,
  insertWorkerApplicationSchema: () => insertWorkerApplicationSchema,
  insertWorkplaceAssignmentSchema: () => insertWorkplaceAssignmentSchema,
  insertWorkplaceSchema: () => insertWorkplaceSchema,
  loginUserSchema: () => loginUserSchema,
  messageLogs: () => messageLogs,
  messages: () => messages2,
  paymentProfiles: () => paymentProfiles,
  payrollBatchItemStatusEnum: () => payrollBatchItemStatusEnum,
  payrollBatchItems: () => payrollBatchItems,
  payrollBatchStatusEnum: () => payrollBatchStatusEnum,
  payrollBatches: () => payrollBatches,
  pushTokens: () => pushTokens,
  recurrenceExceptions: () => recurrenceExceptions,
  registerUserSchema: () => registerUserSchema,
  sentReminders: () => sentReminders,
  seriesEndTypeEnum: () => seriesEndTypeEnum,
  seriesFrequencyEnum: () => seriesFrequencyEnum,
  shiftCategoryEnum: () => shiftCategoryEnum,
  shiftCheckinStatusEnum: () => shiftCheckinStatusEnum,
  shiftCheckins: () => shiftCheckins,
  shiftFrequencyEnum: () => shiftFrequencyEnum,
  shiftOfferStatusEnum: () => shiftOfferStatusEnum,
  shiftOffers: () => shiftOffers,
  shiftRequestStatusEnum: () => shiftRequestStatusEnum,
  shiftRequests: () => shiftRequests,
  shiftSeries: () => shiftSeries,
  shiftStatusEnum: () => shiftStatusEnum,
  shifts: () => shifts,
  smsLogs: () => smsLogs,
  timesheetEntries: () => timesheetEntries,
  timesheetStatusEnum: () => timesheetStatusEnum,
  timesheets: () => timesheets,
  titoCorrections: () => titoCorrections,
  titoLogs: () => titoLogs,
  userPhotos: () => userPhotos,
  users: () => users,
  workerApplications: () => workerApplications,
  workplaceAssignmentStatusEnum: () => workplaceAssignmentStatusEnum,
  workplaceAssignments: () => workplaceAssignments,
  workplaces: () => workplaces
});
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, boolean, doublePrecision, uniqueIndex, index, date, numeric } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var users, insertUserSchema, registerUserSchema, loginUserSchema, conversations2, messages2, messageLogs, insertConversationSchema, insertMessageSchema, insertMessageLogSchema, pushTokens, contactLeads, insertContactLeadSchema, workerApplications, insertWorkerApplicationSchema, workplaces, insertWorkplaceSchema, workplaceAssignmentStatusEnum, workplaceAssignments, insertWorkplaceAssignmentSchema, titoLogs, insertTitoLogSchema, titoCorrections, timesheetStatusEnum, timesheets, insertTimesheetSchema, timesheetEntries, insertTimesheetEntrySchema, payrollBatchStatusEnum, payrollBatches, insertPayrollBatchSchema, payrollBatchItemStatusEnum, payrollBatchItems, insertPayrollBatchItemSchema, paymentProfiles, insertPaymentProfileSchema, shiftStatusEnum, shiftFrequencyEnum, shiftCategoryEnum, seriesFrequencyEnum, seriesEndTypeEnum, shiftSeries, insertShiftSeriesSchema, recurrenceExceptions, auditLog, userPhotos, shifts, insertShiftSchema, shiftRequestStatusEnum, shiftRequests, insertShiftRequestSchema, shiftOfferStatusEnum, shiftOffers, insertShiftOfferSchema, appNotifications, insertAppNotificationSchema, shiftCheckinStatusEnum, shiftCheckins, insertShiftCheckinSchema, sentReminders, exportAuditLogs, insertExportAuditLogSchema, smsLogs, discordAlerts, discordActionLogs, crmSyncLogs, crmPushQueue, aiActionLogs, aiAlertState, clawdChatMessages, clawdAssistantRuns, appointments, insertAppointmentSchema, appConfig, aiMessageLog, applicants;
var init_schema = __esm({
  "shared/schema.ts"() {
    "use strict";
    users = pgTable("users", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      email: text("email").notNull().unique(),
      password: text("password"),
      fullName: text("full_name").notNull(),
      role: text("role").notNull().default("worker"),
      // admin, hr, client, worker
      timezone: text("timezone").default("America/Toronto"),
      onboardingStatus: text("onboarding_status"),
      // For workers: NOT_APPLIED, APPLICATION_SUBMITTED, etc.
      workerRoles: text("worker_roles"),
      // JSON array of worker roles
      businessName: text("business_name"),
      // For clients
      businessAddress: text("business_address"),
      businessPhone: text("business_phone"),
      phone: text("phone"),
      profilePhotoUrl: text("profile_photo_url"),
      totpSecret: text("totp_secret"),
      totpEnabled: boolean("totp_enabled").default(false),
      recoveryCodes: text("recovery_codes"),
      mustChangePassword: boolean("must_change_password").default(false),
      isActive: boolean("is_active").default(true),
      googleId: text("google_id"),
      passwordResetToken: text("password_reset_token"),
      passwordResetExpiry: timestamp("password_reset_expiry"),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    }, (table) => ({
      phoneUnique: uniqueIndex("users_phone_unique").on(table.phone).where(sql`${table.phone} IS NOT NULL`)
    }));
    insertUserSchema = createInsertSchema(users).pick({
      email: true,
      password: true,
      fullName: true,
      role: true,
      timezone: true,
      onboardingStatus: true,
      workerRoles: true,
      businessName: true,
      businessAddress: true,
      businessPhone: true,
      phone: true,
      isActive: true
    });
    registerUserSchema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
      fullName: z.string().min(2),
      role: z.enum(["admin", "hr", "client", "worker"])
    });
    loginUserSchema = z.object({
      email: z.string().email(),
      password: z.string().min(1)
    });
    conversations2 = pgTable("conversations", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      type: text("type").notNull().default("hr_worker"),
      // Only "hr_worker" type
      workerUserId: varchar("worker_user_id").notNull().references(() => users.id),
      hrUserId: varchar("hr_user_id").references(() => users.id),
      // Optional - can be null if multiple HR
      lastMessageAt: timestamp("last_message_at"),
      lastMessagePreview: text("last_message_preview"),
      isArchived: boolean("is_archived").default(false),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    messages2 = pgTable("messages", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      conversationId: varchar("conversation_id").notNull().references(() => conversations2.id),
      senderUserId: varchar("sender_user_id").notNull().references(() => users.id),
      recipientUserId: varchar("recipient_user_id").notNull().references(() => users.id),
      body: text("body").notNull(),
      messageType: text("message_type").notNull().default("text"),
      // "text" | "image" | "file"
      mediaUrl: text("media_url"),
      readAt: timestamp("read_at"),
      status: text("status").notNull().default("delivered"),
      // "sent" | "delivered" | "read"
      deletedAt: timestamp("deleted_at"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    messageLogs = pgTable("message_logs", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      messageId: varchar("message_id").notNull().references(() => messages2.id),
      event: text("event").notNull(),
      // "created" | "delivered" | "read" | "edited" | "deleted"
      actorUserId: varchar("actor_user_id").notNull().references(() => users.id),
      metadata: text("metadata"),
      // JSON string for additional data
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    insertConversationSchema = createInsertSchema(conversations2);
    insertMessageSchema = createInsertSchema(messages2);
    insertMessageLogSchema = createInsertSchema(messageLogs);
    pushTokens = pgTable("push_tokens", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").notNull().references(() => users.id),
      token: text("token").notNull(),
      platform: text("platform").notNull().default("unknown"),
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    }, (table) => [
      uniqueIndex("push_tokens_token_idx").on(table.token)
    ]);
    contactLeads = pgTable("contact_leads", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      name: text("name").notNull(),
      email: text("email").notNull(),
      company: text("company"),
      phone: text("phone"),
      cityProvince: text("city_province"),
      serviceNeeded: text("service_needed"),
      message: text("message").notNull(),
      ip: text("ip"),
      userAgent: text("user_agent"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    insertContactLeadSchema = createInsertSchema(contactLeads).pick({
      name: true,
      email: true,
      company: true,
      phone: true,
      cityProvince: true,
      serviceNeeded: true,
      message: true,
      ip: true,
      userAgent: true
    });
    workerApplications = pgTable("worker_applications", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      // Personal Details
      fullName: text("full_name").notNull(),
      phone: text("phone").notNull(),
      email: text("email").notNull(),
      address: text("address").notNull(),
      city: text("city").notNull(),
      province: text("province").notNull(),
      postalCode: text("postal_code").notNull(),
      dateOfBirth: text("date_of_birth"),
      // Work Eligibility
      workStatus: text("work_status").notNull(),
      // citizen, permanent_resident, work_permit
      backgroundCheckConsent: boolean("background_check_consent").default(false),
      // Role Interests
      preferredRoles: text("preferred_roles").notNull(),
      // JSON array
      otherRole: text("other_role"),
      // Availability
      availableDays: text("available_days").notNull(),
      // JSON array
      preferredShifts: text("preferred_shifts").notNull(),
      // JSON array (morning, afternoon, evening)
      unavailablePeriods: text("unavailable_periods"),
      // Experience
      yearsExperience: text("years_experience"),
      workHistory: text("work_history"),
      // JSON array of job objects
      experienceSummary: text("experience_summary"),
      // Skills
      skills: text("skills"),
      // JSON array
      certifications: text("certifications"),
      // JSON array
      // Shift Preferences
      shiftTypePreference: text("shift_type_preference"),
      // day, night, flexible
      desiredShiftLength: text("desired_shift_length"),
      // 4, 8, flexible
      maxTravelDistance: text("max_travel_distance"),
      // Emergency Contact
      emergencyContactName: text("emergency_contact_name").notNull(),
      emergencyContactRelationship: text("emergency_contact_relationship").notNull(),
      emergencyContactPhone: text("emergency_contact_phone").notNull(),
      // Payment Information
      paymentMethod: text("payment_method"),
      // direct_deposit, etransfer
      bankName: text("bank_name"),
      bankInstitution: text("bank_institution"),
      bankTransit: text("bank_transit"),
      bankAccount: text("bank_account"),
      etransferEmail: text("etransfer_email"),
      // Acknowledgments
      titoAcknowledgment: boolean("tito_acknowledgment").default(false),
      siteRulesAcknowledgment: boolean("site_rules_acknowledgment").default(false),
      workerAgreementConsent: boolean("worker_agreement_consent").default(false),
      privacyConsent: boolean("privacy_consent").default(false),
      marketingConsent: boolean("marketing_consent").default(false),
      // Electronic Signature
      signature: text("signature").notNull(),
      // Typed full name as signature
      signatureDate: text("signature_date").notNull(),
      // Status
      status: text("status").notNull().default("pending"),
      // pending, reviewed, approved, rejected
      reviewedBy: varchar("reviewed_by"),
      reviewedAt: timestamp("reviewed_at"),
      notes: text("notes"),
      // Metadata
      ip: text("ip"),
      userAgent: text("user_agent"),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    insertWorkerApplicationSchema = createInsertSchema(workerApplications).omit({
      id: true,
      status: true,
      reviewedBy: true,
      reviewedAt: true,
      notes: true,
      createdAt: true,
      updatedAt: true
    });
    workplaces = pgTable("workplaces", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      name: text("name").notNull(),
      addressLine1: text("address_line1"),
      city: text("city"),
      province: text("province"),
      postalCode: text("postal_code"),
      country: text("country").default("Canada"),
      latitude: doublePrecision("latitude"),
      longitude: doublePrecision("longitude"),
      geofenceRadiusMeters: integer("geofence_radius_meters").default(150),
      isActive: boolean("is_active").default(true),
      crmExternalId: text("crm_external_id"),
      crmSource: boolean("crm_source").default(false),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    insertWorkplaceSchema = createInsertSchema(workplaces).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    workplaceAssignmentStatusEnum = z.enum(["invited", "active", "suspended", "removed"]);
    workplaceAssignments = pgTable("workplace_assignments", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      workplaceId: varchar("workplace_id").notNull().references(() => workplaces.id),
      workerUserId: varchar("worker_user_id").notNull().references(() => users.id),
      status: text("status").notNull().default("active"),
      // invited, active, suspended, removed
      invitedByUserId: varchar("invited_by_user_id").references(() => users.id),
      invitedAt: timestamp("invited_at").defaultNow().notNull(),
      acceptedAt: timestamp("accepted_at"),
      notes: text("notes"),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    }, (table) => ({
      uniqueWorkerWorkplace: uniqueIndex("unique_worker_workplace").on(table.workplaceId, table.workerUserId)
    }));
    insertWorkplaceAssignmentSchema = createInsertSchema(workplaceAssignments).omit({
      id: true,
      invitedAt: true,
      createdAt: true,
      updatedAt: true
    });
    titoLogs = pgTable("tito_logs", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      workerId: varchar("worker_id").notNull().references(() => users.id),
      workplaceId: varchar("workplace_id").references(() => workplaces.id),
      shiftId: varchar("shift_id"),
      // Time tracking
      timeIn: timestamp("time_in"),
      timeOut: timestamp("time_out"),
      // GPS verification - Time In
      timeInGpsLat: doublePrecision("time_in_gps_lat"),
      timeInGpsLng: doublePrecision("time_in_gps_lng"),
      timeInDistanceMeters: doublePrecision("time_in_distance_meters"),
      timeInGpsVerified: boolean("time_in_gps_verified").default(false),
      timeInGpsFailureReason: text("time_in_gps_failure_reason"),
      // GPS verification - Time Out
      timeOutGpsLat: doublePrecision("time_out_gps_lat"),
      timeOutGpsLng: doublePrecision("time_out_gps_lng"),
      timeOutDistanceMeters: doublePrecision("time_out_distance_meters"),
      timeOutGpsVerified: boolean("time_out_gps_verified").default(false),
      timeOutGpsFailureReason: text("time_out_gps_failure_reason"),
      // Approval
      status: text("status").notNull().default("pending"),
      // pending, approved, disputed
      approvedBy: varchar("approved_by"),
      approvedAt: timestamp("approved_at"),
      disputedBy: varchar("disputed_by"),
      disputedAt: timestamp("disputed_at"),
      notes: text("notes"),
      lateReason: text("late_reason"),
      lateNote: text("late_note"),
      flaggedLate: boolean("flagged_late").default(false),
      lateMinutes: integer("late_minutes"),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    insertTitoLogSchema = createInsertSchema(titoLogs).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    titoCorrections = pgTable("tito_corrections", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      titoLogId: varchar("tito_log_id").notNull().references(() => titoLogs.id),
      requesterId: varchar("requester_id").notNull().references(() => users.id),
      approverId: varchar("approver_id").references(() => users.id),
      originalTimeIn: timestamp("original_time_in"),
      originalTimeOut: timestamp("original_time_out"),
      correctedTimeIn: timestamp("corrected_time_in"),
      correctedTimeOut: timestamp("corrected_time_out"),
      reason: text("reason").notNull(),
      note: text("note"),
      status: text("status").notNull().default("pending"),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      reviewedAt: timestamp("reviewed_at")
    });
    timesheetStatusEnum = z.enum(["draft", "submitted", "approved", "disputed", "processed"]);
    timesheets = pgTable("timesheets", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      workerUserId: varchar("worker_user_id").notNull().references(() => users.id),
      periodYear: integer("period_year").notNull(),
      periodNumber: integer("period_number").notNull(),
      status: text("status").notNull().default("draft"),
      // draft, submitted, approved, disputed, processed
      submittedAt: timestamp("submitted_at"),
      approvedByUserId: varchar("approved_by_user_id").references(() => users.id),
      approvedAt: timestamp("approved_at"),
      disputedByUserId: varchar("disputed_by_user_id").references(() => users.id),
      disputedAt: timestamp("disputed_at"),
      disputeReason: text("dispute_reason"),
      totalHours: numeric("total_hours", { precision: 10, scale: 2 }).default("0"),
      totalPay: numeric("total_pay", { precision: 12, scale: 2 }).default("0"),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    }, (table) => ({
      uniqueWorkerPeriod: uniqueIndex("unique_worker_period").on(table.workerUserId, table.periodYear, table.periodNumber)
    }));
    insertTimesheetSchema = createInsertSchema(timesheets).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    timesheetEntries = pgTable("timesheet_entries", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      timesheetId: varchar("timesheet_id").notNull().references(() => timesheets.id, { onDelete: "cascade" }),
      workplaceId: varchar("workplace_id").references(() => workplaces.id),
      titoLogId: varchar("tito_log_id").references(() => titoLogs.id),
      dateLocal: date("date_local").notNull(),
      timeInUtc: timestamp("time_in_utc").notNull(),
      timeOutUtc: timestamp("time_out_utc").notNull(),
      breakMinutes: integer("break_minutes").default(0),
      hours: numeric("hours", { precision: 5, scale: 2 }).notNull(),
      payRate: numeric("pay_rate", { precision: 10, scale: 2 }).notNull(),
      amount: numeric("amount", { precision: 10, scale: 2 }).notNull(),
      notes: text("notes"),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    }, (table) => ({
      uniqueTitoLog: uniqueIndex("unique_timesheet_tito_log").on(table.titoLogId)
    }));
    insertTimesheetEntrySchema = createInsertSchema(timesheetEntries).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    payrollBatchStatusEnum = z.enum(["open", "finalized", "exported"]);
    payrollBatches = pgTable("payroll_batches", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      periodYear: integer("period_year").notNull(),
      periodNumber: integer("period_number").notNull(),
      status: text("status").notNull().default("open"),
      // open, finalized, exported
      createdByUserId: varchar("created_by_user_id").notNull().references(() => users.id),
      finalizedByUserId: varchar("finalized_by_user_id").references(() => users.id),
      finalizedAt: timestamp("finalized_at"),
      totalWorkers: integer("total_workers").default(0),
      totalHours: numeric("total_hours", { precision: 10, scale: 2 }).default("0"),
      totalAmount: numeric("total_amount", { precision: 12, scale: 2 }).default("0"),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    }, (table) => ({
      uniquePeriodBatch: uniqueIndex("unique_period_batch").on(table.periodYear, table.periodNumber)
    }));
    insertPayrollBatchSchema = createInsertSchema(payrollBatches).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    payrollBatchItemStatusEnum = z.enum(["included", "excluded"]);
    payrollBatchItems = pgTable("payroll_batch_items", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      payrollBatchId: varchar("payroll_batch_id").notNull().references(() => payrollBatches.id, { onDelete: "cascade" }),
      workerUserId: varchar("worker_user_id").notNull().references(() => users.id),
      timesheetId: varchar("timesheet_id").notNull().references(() => timesheets.id),
      status: text("status").notNull().default("included"),
      // included, excluded
      hours: numeric("hours", { precision: 10, scale: 2 }).notNull(),
      amount: numeric("amount", { precision: 12, scale: 2 }).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    insertPayrollBatchItemSchema = createInsertSchema(payrollBatchItems).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    paymentProfiles = pgTable("payment_profiles", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      workerUserId: varchar("worker_user_id").notNull().references(() => users.id).unique(),
      paymentMethod: text("payment_method"),
      // direct_deposit, etransfer
      bankName: text("bank_name"),
      etransferEmail: text("etransfer_email"),
      bankInstitution: text("bank_institution"),
      bankTransit: text("bank_transit"),
      bankAccount: text("bank_account"),
      voidChequeFileId: text("void_cheque_file_id"),
      notes: text("notes"),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    insertPaymentProfileSchema = createInsertSchema(paymentProfiles).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    shiftStatusEnum = z.enum(["scheduled", "in_progress", "completed", "cancelled"]);
    shiftFrequencyEnum = z.enum(["one-time", "recurring", "open-ended"]);
    shiftCategoryEnum = z.enum(["hotel", "banquet", "janitorial", "airbnb"]);
    seriesFrequencyEnum = z.enum(["daily", "weekly", "biweekly", "monthly"]);
    seriesEndTypeEnum = z.enum(["date", "count", "never"]);
    shiftSeries = pgTable("shift_series", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      workplaceId: varchar("workplace_id").notNull().references(() => workplaces.id),
      workerUserId: varchar("worker_user_id").references(() => users.id),
      title: text("title").notNull(),
      roleType: text("role_type"),
      startTime: text("start_time").notNull(),
      endTime: text("end_time"),
      notes: text("notes"),
      category: text("category").notNull().default("janitorial"),
      frequency: text("frequency").notNull().default("weekly"),
      recurringDays: text("recurring_days"),
      startDate: date("start_date").notNull(),
      endType: text("end_type").notNull().default("never"),
      endDate: date("end_date"),
      endAfterCount: integer("end_after_count"),
      status: text("status").notNull().default("active"),
      createdByUserId: varchar("created_by_user_id").references(() => users.id),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    insertShiftSeriesSchema = createInsertSchema(shiftSeries).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    recurrenceExceptions = pgTable("recurrence_exceptions", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      seriesId: varchar("series_id").notNull().references(() => shiftSeries.id),
      date: date("date").notNull(),
      type: text("type").notNull().default("cancelled"),
      overrideStartTime: text("override_start_time"),
      overrideEndTime: text("override_end_time"),
      overrideWorkerUserId: varchar("override_worker_user_id").references(() => users.id),
      overrideNotes: text("override_notes"),
      reason: text("reason"),
      cancelledByUserId: varchar("cancelled_by_user_id").references(() => users.id),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    auditLog = pgTable("audit_log", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id),
      action: text("action").notNull(),
      entityType: text("entity_type").notNull(),
      entityId: varchar("entity_id"),
      details: text("details"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    userPhotos = pgTable("user_photos", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").notNull().references(() => users.id),
      url: text("url").notNull(),
      status: text("status").notNull().default("pending_review"),
      reviewerId: varchar("reviewer_id").references(() => users.id),
      reviewedAt: timestamp("reviewed_at"),
      rejectionReason: text("rejection_reason"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    shifts = pgTable("shifts", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      requestId: varchar("request_id"),
      workplaceId: varchar("workplace_id").notNull().references(() => workplaces.id),
      workerUserId: varchar("worker_user_id").references(() => users.id),
      roleType: text("role_type"),
      title: text("title").notNull(),
      date: date("date").notNull(),
      startTime: text("start_time").notNull(),
      endTime: text("end_time"),
      notes: text("notes"),
      status: text("status").notNull().default("scheduled"),
      frequencyType: text("frequency_type").notNull().default("one-time"),
      category: text("category").notNull().default("janitorial"),
      recurringDays: text("recurring_days"),
      recurringEndDate: date("recurring_end_date"),
      parentShiftId: varchar("parent_shift_id"),
      workersNeeded: integer("workers_needed"),
      crmShiftId: text("crm_shift_id"),
      crmSource: boolean("crm_source").default(false),
      createdByUserId: varchar("created_by_user_id").references(() => users.id),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    insertShiftSchema = createInsertSchema(shifts).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    shiftRequestStatusEnum = z.enum(["draft", "submitted", "offered", "filled", "cancelled", "expired"]);
    shiftRequests = pgTable("shift_requests", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      clientId: varchar("client_id").notNull().references(() => users.id),
      workplaceId: varchar("workplace_id").references(() => workplaces.id),
      roleType: text("role_type").notNull(),
      date: date("date").notNull(),
      startTime: text("start_time").notNull(),
      endTime: text("end_time").notNull(),
      notes: text("notes"),
      requestedWorkerId: varchar("requested_worker_id").references(() => users.id),
      status: text("status").notNull().default("draft"),
      crmRequestId: text("crm_request_id"),
      crmSource: boolean("crm_source").default(false),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    insertShiftRequestSchema = createInsertSchema(shiftRequests).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    shiftOfferStatusEnum = z.enum(["pending", "accepted", "declined", "expired", "cancelled"]);
    shiftOffers = pgTable("shift_offers", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      shiftId: varchar("shift_id").notNull().references(() => shifts.id),
      workerId: varchar("worker_id").notNull().references(() => users.id),
      status: text("status").notNull().default("pending"),
      offeredAt: timestamp("offered_at").defaultNow().notNull(),
      respondedAt: timestamp("responded_at"),
      cancelledAt: timestamp("cancelled_at"),
      cancelledBy: varchar("cancelled_by"),
      cancelReason: text("cancel_reason"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    }, (table) => ({
      uniqueShiftWorker: uniqueIndex("unique_shift_worker_offer").on(table.shiftId, table.workerId)
    }));
    insertShiftOfferSchema = createInsertSchema(shiftOffers).omit({
      id: true,
      offeredAt: true,
      createdAt: true
    });
    appNotifications = pgTable("app_notifications", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").notNull().references(() => users.id),
      type: text("type").notNull(),
      title: text("title").notNull(),
      body: text("body").notNull(),
      deepLink: text("deep_link"),
      metadata: text("metadata"),
      readAt: timestamp("read_at"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    insertAppNotificationSchema = createInsertSchema(appNotifications).omit({
      id: true,
      createdAt: true
    });
    shiftCheckinStatusEnum = z.enum(["on_my_way", "issue", "checked_in", "checked_out"]);
    shiftCheckins = pgTable("shift_checkins", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      shiftId: varchar("shift_id").notNull().references(() => shifts.id),
      workerId: varchar("worker_id").notNull().references(() => users.id),
      status: text("status").notNull(),
      note: text("note"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    insertShiftCheckinSchema = createInsertSchema(shiftCheckins).omit({
      id: true,
      createdAt: true
    });
    sentReminders = pgTable("sent_reminders", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      shiftId: varchar("shift_id").notNull().references(() => shifts.id),
      workerId: varchar("worker_id").notNull().references(() => users.id),
      reminderType: text("reminder_type").notNull(),
      sentAt: timestamp("sent_at").defaultNow().notNull()
    }, (table) => ({
      uniqueReminder: uniqueIndex("unique_shift_worker_reminder").on(table.shiftId, table.workerId, table.reminderType)
    }));
    exportAuditLogs = pgTable("export_audit_logs", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      adminUserId: varchar("admin_user_id").notNull().references(() => users.id),
      exportType: text("export_type").notNull(),
      // timesheet, paymentSummary, allHotels
      fileFormat: text("file_format").notNull(),
      // csv, xlsx, zip
      periodYear: integer("period_year").notNull(),
      periodNumber: integer("period_number").notNull(),
      workplaceId: varchar("workplace_id").references(() => workplaces.id),
      workplaceName: text("workplace_name"),
      fileName: text("file_name").notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    insertExportAuditLogSchema = createInsertSchema(exportAuditLogs).omit({
      id: true,
      createdAt: true
    });
    smsLogs = pgTable("sms_logs", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      phoneNumber: text("phone_number").notNull(),
      direction: text("direction").notNull(),
      message: text("message").notNull(),
      shiftOfferId: varchar("shift_offer_id"),
      shiftId: varchar("shift_id"),
      workerId: varchar("worker_id"),
      status: text("status").notNull().default("sent"),
      openphoneMessageId: text("openphone_message_id"),
      classification: text("classification"),
      // sick_call, client_request, shift_response, general
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    discordAlerts = pgTable("discord_alerts", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      alertId: text("alert_id").notNull().unique(),
      type: text("type").notNull().default("general"),
      title: text("title").notNull(),
      message: text("message").notNull(),
      sourcePhone: text("source_phone"),
      sourceWorkerId: varchar("source_worker_id"),
      workerId: varchar("worker_id"),
      clientId: varchar("client_id"),
      workplaceId: varchar("workplace_id"),
      shiftId: varchar("shift_id"),
      discordChannelId: text("discord_channel_id"),
      originalMessage: text("original_message"),
      status: text("status").notNull().default("pending"),
      acknowledgedBy: text("acknowledged_by"),
      acknowledgedAt: timestamp("acknowledged_at"),
      responseNote: text("response_note"),
      discordMessageId: text("discord_message_id"),
      actionsTaken: text("actions_taken"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    discordActionLogs = pgTable("discord_action_logs", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      alertId: text("alert_id"),
      discordUserId: text("discord_user_id").notNull(),
      discordUsername: text("discord_username").notNull(),
      actionType: text("action_type").notNull(),
      rawMessage: text("raw_message").notNull(),
      parsedIntent: text("parsed_intent"),
      result: text("result"),
      success: boolean("success").notNull().default(true),
      failureReason: text("failure_reason"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    crmSyncLogs = pgTable("crm_sync_logs", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      syncType: text("sync_type").notNull(),
      status: text("status").notNull().default("running"),
      createdCount: integer("created_count").default(0),
      updatedCount: integer("updated_count").default(0),
      skippedCount: integer("skipped_count").default(0),
      errorCount: integer("error_count").default(0),
      errorMessages: text("error_messages"),
      dryRun: boolean("dry_run").default(false),
      startedAt: timestamp("started_at").defaultNow().notNull(),
      completedAt: timestamp("completed_at")
    });
    crmPushQueue = pgTable("crm_push_queue", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      entityType: text("entity_type").notNull(),
      entityId: text("entity_id").notNull(),
      action: text("action").notNull(),
      payload: text("payload").notNull(),
      status: text("status").notNull().default("pending"),
      attempts: integer("attempts").notNull().default(0),
      maxAttempts: integer("max_attempts").notNull().default(5),
      lastError: text("last_error"),
      nextRetryAt: timestamp("next_retry_at").defaultNow().notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      completedAt: timestamp("completed_at")
    }, (table) => ({
      statusIdx: index("crm_push_queue_status_idx").on(table.status),
      nextRetryIdx: index("crm_push_queue_next_retry_idx").on(table.nextRetryAt)
    }));
    aiActionLogs = pgTable("ai_action_logs", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      monitorType: text("monitor_type").notNull(),
      signalId: text("signal_id"),
      signalSummary: text("signal_summary").notNull(),
      actionTaken: text("action_taken").notNull(),
      alertSentTo: text("alert_sent_to"),
      errorMessage: text("error_message"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    }, (table) => ({
      createdAtIdx: index("ai_action_logs_created_at_idx").on(table.createdAt),
      monitorTypeIdx: index("ai_action_logs_monitor_type_idx").on(table.monitorType)
    }));
    aiAlertState = pgTable("ai_alert_state", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      entityType: text("entity_type").notNull(),
      entityId: text("entity_id").notNull(),
      alertType: text("alert_type").notNull(),
      alertedAt: timestamp("alerted_at").defaultNow().notNull(),
      alertCount: integer("alert_count").notNull().default(1)
    }, (table) => ({
      dedupeIdx: uniqueIndex("ai_alert_state_dedupe_idx").on(table.entityType, table.entityId, table.alertType)
    }));
    clawdChatMessages = pgTable("clawd_chat_messages", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").notNull().references(() => users.id),
      role: text("role").notNull(),
      // "user" | "assistant" | "system"
      content: text("content").notNull(),
      metadata: text("metadata"),
      // JSON: which assistants invoked, scores, etc.
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    clawdAssistantRuns = pgTable("clawd_assistant_runs", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      chatMessageId: varchar("chat_message_id"),
      assistantType: text("assistant_type").notNull(),
      // "executive"|"staffing"|"attendance"|"recruitment"|"payroll"|"client_risk"|"communication"
      inputContext: text("input_context"),
      // JSON: what data was fed in
      outputFindings: text("output_findings"),
      // JSON: structured AssistantOutput
      durationMs: integer("duration_ms"),
      userId: varchar("user_id").references(() => users.id),
      createdAt: timestamp("created_at").defaultNow().notNull()
    }, (table) => ({
      createdAtIdx: index("clawd_runs_created_at_idx").on(table.createdAt),
      assistantTypeIdx: index("clawd_runs_assistant_type_idx").on(table.assistantType)
    }));
    appointments = pgTable("appointments", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      title: text("title").notNull(),
      companyName: text("company_name").notNull(),
      contactName: text("contact_name").notNull(),
      contactPhone: text("contact_phone"),
      contactEmail: text("contact_email"),
      appointmentDate: timestamp("appointment_date").notNull(),
      location: text("location"),
      address: text("address"),
      latitude: doublePrecision("latitude"),
      longitude: doublePrecision("longitude"),
      leadSource: text("lead_source").notNull().default("other"),
      // cold_call, lead_generation, referral, website, crm_sync, other
      status: text("status").notNull().default("scheduled"),
      // scheduled, completed, cancelled, rescheduled, no_show
      assignedUserId: varchar("assigned_user_id").references(() => users.id),
      notes: text("notes"),
      outcome: text("outcome"),
      crmAppointmentId: text("crm_appointment_id"),
      crmSource: text("crm_source"),
      createdBy: varchar("created_by").references(() => users.id),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    insertAppointmentSchema = createInsertSchema(appointments).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    appConfig = pgTable("app_config", {
      key: text("key").primaryKey(),
      value: text("value").notNull(),
      description: text("description"),
      updatedAt: timestamp("updated_at").defaultNow().notNull(),
      updatedBy: varchar("updated_by").references(() => users.id)
    });
    aiMessageLog = pgTable("ai_message_log", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      recipientPhone: text("recipient_phone").notNull(),
      recipientName: text("recipient_name"),
      message: text("message").notNull(),
      sentAt: timestamp("sent_at").defaultNow().notNull(),
      responseReceived: boolean("response_received").default(false).notNull(),
      responseReceivedAt: timestamp("response_received_at"),
      followupSent: boolean("followup_sent").default(false).notNull(),
      followupSentAt: timestamp("followup_sent_at"),
      followupMessage: text("followup_message"),
      triggeredBy: text("triggered_by").default("clawd"),
      // clawd, auto_responder, manual
      contextNote: text("context_note"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    applicants = pgTable("applicants", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      fullName: text("full_name").notNull(),
      phone: text("phone").notNull(),
      addressFull: text("address_full").notNull(),
      addressStreet: text("address_street"),
      addressCity: text("address_city"),
      addressProvince: text("address_province"),
      addressPostalCode: text("address_postal_code"),
      addressCountry: text("address_country").default("Canada"),
      applyingFor: text("applying_for").notNull(),
      jobPostingSource: text("job_posting_source").notNull(),
      photoData: text("photo_data"),
      // base64 data URI
      photoFilename: text("photo_filename"),
      photoMimeType: text("photo_mime_type"),
      photoFileSize: integer("photo_file_size"),
      resumeData: text("resume_data"),
      // base64 data URI
      resumeFilename: text("resume_filename"),
      resumeMimeType: text("resume_mime_type"),
      resumeFileSize: integer("resume_file_size"),
      status: text("status").notNull().default("new"),
      // new, reviewing, interviewed, hired, rejected
      adminNotes: text("admin_notes"),
      submittedAt: timestamp("submitted_at").defaultNow().notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
  }
});

// server/db.ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
var client, db;
var init_db = __esm({
  "server/db.ts"() {
    "use strict";
    init_schema();
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is required");
    }
    client = postgres(process.env.DATABASE_URL);
    db = drizzle(client, { schema: schema_exports });
  }
});

// server/services/openphone.ts
var openphone_exports = {};
__export(openphone_exports, {
  logSMS: () => logSMS,
  sendConfirmationSMS: () => sendConfirmationSMS,
  sendSMS: () => sendSMS,
  sendShiftAssignedSMS: () => sendShiftAssignedSMS,
  sendShiftOfferSMS: () => sendShiftOfferSMS
});
import { eq } from "drizzle-orm";
async function sendSMS(toPhoneNumber, message) {
  if (!OPENPHONE_API_KEY) {
    console.error("[OPENPHONE] API key not configured");
    return { success: false, error: "API key not configured" };
  }
  const cleaned = toPhoneNumber.replace(/[^\d+]/g, "");
  const formatted = cleaned.startsWith("+") ? cleaned : `+1${cleaned}`;
  try {
    const response = await fetch("https://api.openphone.com/v1/messages", {
      method: "POST",
      headers: {
        "Authorization": OPENPHONE_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: message,
        from: OPENPHONE_PHONE_NUMBER_ID,
        to: [formatted]
      })
    });
    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`[OPENPHONE] SMS send failed (${response.status}):`, errorBody);
      return { success: false, error: `HTTP ${response.status}: ${errorBody}` };
    }
    const data = await response.json();
    console.log(`[OPENPHONE] SMS sent to ${formatted}`);
    return { success: true, messageId: data?.data?.id || data?.id };
  } catch (error) {
    console.error("[OPENPHONE] SMS send error:", error?.message || error);
    return { success: false, error: error?.message || "Unknown error" };
  }
}
async function logSMS(params) {
  try {
    await db.insert(smsLogs).values({
      phoneNumber: params.phoneNumber,
      direction: params.direction,
      message: params.message,
      shiftOfferId: params.shiftOfferId || null,
      shiftId: params.shiftId || null,
      workerId: params.workerId || null,
      status: params.status,
      openphoneMessageId: params.openphoneMessageId || null
    });
  } catch (e) {
    console.error("[OPENPHONE] Failed to log SMS:", e?.message);
  }
}
async function sendShiftOfferSMS(worker, shift, offerId) {
  if (!worker.phone) {
    console.log(`[OPENPHONE] Worker ${worker.fullName} has no phone number, skipping SMS`);
    return;
  }
  let workplaceName = "Unknown Location";
  try {
    const [wp] = await db.select({ name: workplaces.name }).from(workplaces).where(eq(workplaces.id, shift.workplaceId));
    if (wp?.name) workplaceName = wp.name;
  } catch {
  }
  const timeRange = shift.endTime ? `${shift.startTime} - ${shift.endTime}` : `${shift.startTime} (open-ended)`;
  const message = `WFConnect Shift Available!

${shift.title}
Date: ${shift.date}
Time: ${timeRange}
Location: ${workplaceName}

Reply ACCEPT SHIFT to accept or DECLINE SHIFT to decline.`;
  const result = await sendSMS(worker.phone, message);
  await logSMS({
    phoneNumber: worker.phone,
    direction: "outbound",
    message,
    shiftOfferId: offerId,
    shiftId: shift.id,
    workerId: worker.id,
    status: result.success ? "sent" : "failed",
    openphoneMessageId: result.messageId
  });
}
async function sendShiftAssignedSMS(worker, shift) {
  if (!worker.phone) {
    console.log(`[OPENPHONE] Worker ${worker.fullName} has no phone number, skipping SMS`);
    return;
  }
  let workplaceName = "Unknown Location";
  try {
    const [wp] = await db.select({ name: workplaces.name }).from(workplaces).where(eq(workplaces.id, shift.workplaceId));
    if (wp?.name) workplaceName = wp.name;
  } catch {
  }
  const timeRange = shift.endTime ? `${shift.startTime} - ${shift.endTime}` : `${shift.startTime} (open-ended)`;
  const message = `WFConnect Shift Assigned!

${shift.title}
Date: ${shift.date}
Time: ${timeRange}
Location: ${workplaceName}

You have been assigned to this shift. Please confirm your availability.`;
  const result = await sendSMS(worker.phone, message);
  await logSMS({
    phoneNumber: worker.phone,
    direction: "outbound",
    message,
    shiftId: shift.id,
    workerId: worker.id,
    status: result.success ? "sent" : "failed",
    openphoneMessageId: result.messageId
  });
}
async function sendConfirmationSMS(phoneNumber, message, workerId) {
  const result = await sendSMS(phoneNumber, message);
  await logSMS({
    phoneNumber,
    direction: "outbound",
    message,
    workerId,
    status: result.success ? "sent" : "failed",
    openphoneMessageId: result.messageId
  });
}
var OPENPHONE_API_KEY, OPENPHONE_PHONE_NUMBER_ID;
var init_openphone = __esm({
  "server/services/openphone.ts"() {
    "use strict";
    init_db();
    init_schema();
    OPENPHONE_API_KEY = process.env.OPENPHONE_API_KEY;
    OPENPHONE_PHONE_NUMBER_ID = "PNo1n737XV";
  }
});

// server/services/email.ts
import sgMail from "@sendgrid/mail";
async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY ? "repl " + process.env.REPL_IDENTITY : process.env.WEB_REPL_RENEWAL ? "depl " + process.env.WEB_REPL_RENEWAL : null;
  if (!xReplitToken) {
    throw new Error("X-Replit-Token not found for repl/depl");
  }
  connectionSettings = await fetch(
    "https://" + hostname + "/api/v2/connection?include_secrets=true&connector_names=sendgrid",
    {
      headers: {
        "Accept": "application/json",
        "X-Replit-Token": xReplitToken
      }
    }
  ).then((res) => res.json()).then((data) => data.items?.[0]);
  if (!connectionSettings || (!connectionSettings.settings.api_key || !connectionSettings.settings.from_email)) {
    throw new Error("SendGrid not connected");
  }
  return { apiKey: connectionSettings.settings.api_key, email: connectionSettings.settings.from_email };
}
async function getUncachableSendGridClient() {
  const { apiKey, email } = await getCredentials();
  sgMail.setApiKey(apiKey);
  return {
    client: sgMail,
    fromEmail: email
  };
}
async function sendEmail(options) {
  try {
    const { client: client2, fromEmail } = await getUncachableSendGridClient();
    const msg = {
      to: options.to,
      from: fromEmail,
      subject: options.subject,
      text: options.text
    };
    if (options.html) {
      msg.html = options.html;
    }
    if (options.attachments && options.attachments.length > 0) {
      msg.attachments = options.attachments.map((att) => ({
        content: att.content,
        filename: att.filename,
        type: att.type,
        disposition: att.disposition || "attachment"
      }));
    }
    await client2.send(msg);
    console.log(`[EMAIL] Sent to ${options.to}: ${options.subject}`);
    return { success: true };
  } catch (error) {
    console.error("[EMAIL] Send error:", error?.message || error);
    return { success: false, error: error?.message || "Failed to send email" };
  }
}
async function sendCSVEmail(to, subject, bodyText, csvContent, filename) {
  const base64Content = Buffer.from(csvContent).toString("base64");
  return sendEmail({
    to,
    subject,
    text: bodyText,
    attachments: [{
      content: base64Content,
      filename,
      type: "text/csv"
    }]
  });
}
async function sendXLSXEmail(to, subject, bodyText, xlsxBuffer, filename) {
  const base64Content = xlsxBuffer.toString("base64");
  return sendEmail({
    to,
    subject,
    text: bodyText,
    attachments: [{
      content: base64Content,
      filename,
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    }]
  });
}
var connectionSettings;
var init_email = __esm({
  "server/services/email.ts"() {
    "use strict";
  }
});

// server/services/clawd/analytics/staffing.ts
import { eq as eq2, and as and2, gte, lte, sql as sql2, ne, count } from "drizzle-orm";
function getNowUTC() {
  return /* @__PURE__ */ new Date();
}
function addHours(date2, hours) {
  return new Date(date2.getTime() + hours * 60 * 60 * 1e3);
}
function subtractDays(date2, days) {
  return new Date(date2.getTime() - days * 24 * 60 * 60 * 1e3);
}
function toDateString(d) {
  return d.toISOString().split("T")[0];
}
async function getUnfilledShifts(withinHours) {
  const now = getNowUTC();
  const cutoff = addHours(now, withinHours);
  const todayStr = toDateString(now);
  const cutoffStr = toDateString(cutoff);
  const upcomingShifts = await db.select({
    id: shifts.id,
    title: shifts.title,
    workplaceId: shifts.workplaceId,
    workplaceName: workplaces.name,
    date: shifts.date,
    startTime: shifts.startTime,
    endTime: shifts.endTime,
    workersNeeded: shifts.workersNeeded,
    workerUserId: shifts.workerUserId
  }).from(shifts).leftJoin(workplaces, eq2(shifts.workplaceId, workplaces.id)).where(
    and2(
      gte(shifts.date, todayStr),
      lte(shifts.date, cutoffStr),
      eq2(shifts.status, "scheduled")
    )
  );
  const unfilled = [];
  for (const s of upcomingShifts) {
    const needed = s.workersNeeded ?? 1;
    const assigned = s.workerUserId ? 1 : 0;
    if (assigned < needed) {
      const shiftDateTime = /* @__PURE__ */ new Date(`${s.date}T${s.startTime}:00Z`);
      const hoursUntilStart = (shiftDateTime.getTime() - now.getTime()) / (1e3 * 60 * 60);
      if (hoursUntilStart > 0 && hoursUntilStart <= withinHours) {
        unfilled.push({
          shiftId: s.id,
          title: s.title,
          workplaceName: s.workplaceName ?? "Unknown",
          workplaceId: s.workplaceId,
          date: s.date,
          startTime: s.startTime,
          endTime: s.endTime,
          workersNeeded: needed,
          workersAssigned: assigned,
          hoursUntilStart: Math.round(hoursUntilStart * 10) / 10
        });
      }
    }
  }
  return unfilled.sort((a, b) => a.hoursUntilStart - b.hoursUntilStart);
}
async function getFillRatesByWorkplace(days, label) {
  const now = getNowUTC();
  const startDate = toDateString(subtractDays(now, days));
  const endDate = toDateString(now);
  const results = await db.select({
    workplaceId: shifts.workplaceId,
    workplaceName: workplaces.name,
    totalShifts: count(shifts.id),
    filledShifts: sql2`count(case when ${shifts.workerUserId} is not null then 1 end)`.as("filled_shifts")
  }).from(shifts).leftJoin(workplaces, eq2(shifts.workplaceId, workplaces.id)).where(
    and2(
      gte(shifts.date, startDate),
      lte(shifts.date, endDate),
      ne(shifts.status, "cancelled")
    )
  ).groupBy(shifts.workplaceId, workplaces.name);
  return results.map((r) => ({
    workplaceId: r.workplaceId,
    workplaceName: r.workplaceName ?? "Unknown",
    totalShifts: Number(r.totalShifts),
    filledShifts: Number(r.filledShifts),
    fillRate: Number(r.totalShifts) > 0 ? Math.round(Number(r.filledShifts) / Number(r.totalShifts) * 100) : 0,
    period: label
  }));
}
async function getFillRateTrends() {
  const current = await getFillRatesByWorkplace(14, "current");
  const now = getNowUTC();
  const prevStart = toDateString(subtractDays(now, 28));
  const prevEnd = toDateString(subtractDays(now, 14));
  const previousResults = await db.select({
    workplaceId: shifts.workplaceId,
    workplaceName: workplaces.name,
    totalShifts: count(shifts.id),
    filledShifts: sql2`count(case when ${shifts.workerUserId} is not null then 1 end)`.as("filled_shifts")
  }).from(shifts).leftJoin(workplaces, eq2(shifts.workplaceId, workplaces.id)).where(
    and2(
      gte(shifts.date, prevStart),
      lte(shifts.date, prevEnd),
      ne(shifts.status, "cancelled")
    )
  ).groupBy(shifts.workplaceId, workplaces.name);
  const previousMap = new Map(
    previousResults.map((r) => [
      r.workplaceId,
      Number(r.totalShifts) > 0 ? Math.round(Number(r.filledShifts) / Number(r.totalShifts) * 100) : 0
    ])
  );
  return current.map((c) => {
    const prev = previousMap.get(c.workplaceId) ?? 0;
    const change = c.fillRate - prev;
    let trend = "stable";
    if (change > 5) trend = "improving";
    else if (change < -5) trend = "declining";
    return {
      workplaceId: c.workplaceId,
      workplaceName: c.workplaceName,
      currentFillRate: c.fillRate,
      previousFillRate: prev,
      change,
      trend
    };
  });
}
async function getOverusedWorkers(days = 14) {
  const now = getNowUTC();
  const startDate = toDateString(subtractDays(now, days));
  const endDate = toDateString(now);
  const results = await db.select({
    workerId: shifts.workerUserId,
    workerName: users.fullName,
    shiftCount: count(shifts.id)
  }).from(shifts).innerJoin(users, eq2(shifts.workerUserId, users.id)).where(
    and2(
      gte(shifts.date, startDate),
      lte(shifts.date, endDate),
      ne(shifts.status, "cancelled"),
      sql2`${shifts.workerUserId} is not null`
    )
  ).groupBy(shifts.workerUserId, users.fullName).orderBy(sql2`count(${shifts.id}) desc`).limit(20);
  return results.map((r) => ({
    workerId: r.workerId,
    workerName: r.workerName,
    shiftCount: Number(r.shiftCount),
    period: `${days}d`
  }));
}
async function getSchedulingConflicts() {
  const now = getNowUTC();
  const todayStr = toDateString(now);
  const futureStr = toDateString(addHours(now, 7 * 24));
  const upcomingShifts = await db.select({
    id: shifts.id,
    title: shifts.title,
    workerUserId: shifts.workerUserId,
    date: shifts.date,
    startTime: shifts.startTime,
    endTime: shifts.endTime,
    workerName: users.fullName
  }).from(shifts).leftJoin(users, eq2(shifts.workerUserId, users.id)).where(
    and2(
      gte(shifts.date, todayStr),
      lte(shifts.date, futureStr),
      eq2(shifts.status, "scheduled"),
      sql2`${shifts.workerUserId} is not null`
    )
  ).orderBy(shifts.workerUserId, shifts.date, shifts.startTime);
  const conflicts = [];
  const byWorkerDate = /* @__PURE__ */ new Map();
  for (const s of upcomingShifts) {
    const key = `${s.workerUserId}-${s.date}`;
    if (!byWorkerDate.has(key)) byWorkerDate.set(key, []);
    byWorkerDate.get(key).push(s);
  }
  for (const [, workerShifts] of byWorkerDate) {
    if (workerShifts.length < 2) continue;
    for (let i = 0; i < workerShifts.length; i++) {
      for (let j = i + 1; j < workerShifts.length; j++) {
        const a = workerShifts[i];
        const b = workerShifts[j];
        const aEnd = a.endTime ?? "23:59";
        const bEnd = b.endTime ?? "23:59";
        if (a.startTime < bEnd && b.startTime < aEnd) {
          conflicts.push({
            workerId: a.workerUserId,
            workerName: a.workerName ?? "Unknown",
            shift1Id: a.id,
            shift1Title: a.title,
            shift2Id: b.id,
            shift2Title: b.title,
            date: a.date,
            overlapDescription: `${a.startTime}-${aEnd} overlaps with ${b.startTime}-${bEnd}`
          });
        }
      }
    }
  }
  return conflicts;
}
async function getShiftOfferStats(days = 30) {
  const now = getNowUTC();
  const startDate = subtractDays(now, days);
  const results = await db.select({
    status: shiftOffers.status,
    count: count(shiftOffers.id)
  }).from(shiftOffers).where(gte(shiftOffers.createdAt, startDate)).groupBy(shiftOffers.status);
  const statusCounts = {};
  let total = 0;
  for (const r of results) {
    statusCounts[r.status] = Number(r.count);
    total += Number(r.count);
  }
  const accepted = statusCounts["accepted"] ?? 0;
  const declined = statusCounts["declined"] ?? 0;
  const pending = statusCounts["pending"] ?? 0;
  const expired = statusCounts["expired"] ?? 0;
  return {
    totalOffers: total,
    accepted,
    declined,
    pending,
    expired,
    acceptanceRate: total > 0 ? Math.round(accepted / total * 100) : 0,
    declineRate: total > 0 ? Math.round(declined / total * 100) : 0
  };
}
async function getProblematicSites(days = 30) {
  const now = getNowUTC();
  const startDate = toDateString(subtractDays(now, days));
  const endDate = toDateString(now);
  const siteStats = await db.select({
    workplaceId: shifts.workplaceId,
    workplaceName: workplaces.name,
    totalShifts: count(shifts.id),
    filledShifts: sql2`count(case when ${shifts.workerUserId} is not null and ${shifts.status} != 'cancelled' then 1 end)`.as("filled"),
    cancelledShifts: sql2`count(case when ${shifts.status} = 'cancelled' then 1 end)`.as("cancelled")
  }).from(shifts).leftJoin(workplaces, eq2(shifts.workplaceId, workplaces.id)).where(
    and2(
      gte(shifts.date, startDate),
      lte(shifts.date, endDate)
    )
  ).groupBy(shifts.workplaceId, workplaces.name);
  const problematic = [];
  for (const s of siteStats) {
    const total = Number(s.totalShifts);
    const filled = Number(s.filledShifts);
    const cancelled = Number(s.cancelledShifts);
    const fillRate = total > 0 ? Math.round(filled / total * 100) : 100;
    const cancellationRate = total > 0 ? cancelled / total * 100 : 0;
    const issueScore = Math.round((100 - fillRate) * 0.6 + cancellationRate * 0.4);
    if (fillRate < 80 || cancelled > 2) {
      problematic.push({
        workplaceId: s.workplaceId,
        workplaceName: s.workplaceName ?? "Unknown",
        fillRate,
        cancellationCount: cancelled,
        issueScore
      });
    }
  }
  return problematic.sort((a, b) => b.issueScore - a.issueScore);
}
async function getStaffingMetrics() {
  const [
    unfilled12,
    unfilled24,
    unfilled48,
    fillRates7d,
    fillRates14d,
    fillRates30d,
    trends,
    overused,
    conflicts,
    offerStats,
    problematic
  ] = await Promise.all([
    getUnfilledShifts(12),
    getUnfilledShifts(24),
    getUnfilledShifts(48),
    getFillRatesByWorkplace(7, "7-day"),
    getFillRatesByWorkplace(14, "14-day"),
    getFillRatesByWorkplace(30, "30-day"),
    getFillRateTrends(),
    getOverusedWorkers(14),
    getSchedulingConflicts(),
    getShiftOfferStats(30),
    getProblematicSites(30)
  ]);
  const avg7dFillRate = fillRates7d.length > 0 ? Math.round(fillRates7d.reduce((sum2, r) => sum2 + r.fillRate, 0) / fillRates7d.length) : 100;
  return {
    unfilledShifts: {
      next12Hours: unfilled12,
      next24Hours: unfilled24,
      next48Hours: unfilled48
    },
    fillRates: {
      "7d": fillRates7d,
      "14d": fillRates14d,
      "30d": fillRates30d
    },
    fillRateTrends: trends,
    overusedWorkers: overused,
    schedulingConflicts: conflicts,
    shiftOfferStats: offerStats,
    problematicSites: problematic,
    summary: {
      totalUpcomingShifts: unfilled48.length + (unfilled24.length - unfilled48.filter((s) => s.hoursUntilStart <= 24).length),
      totalUnfilledNext24h: unfilled24.length,
      averageFillRate7d: avg7dFillRate,
      totalConflicts: conflicts.length,
      totalProblematicSites: problematic.length
    }
  };
}
var init_staffing = __esm({
  "server/services/clawd/analytics/staffing.ts"() {
    "use strict";
    init_db();
    init_schema();
  }
});

// server/services/clawd/anthropic-client.ts
var anthropic_client_exports = {};
__export(anthropic_client_exports, {
  MAX_TOKENS: () => MAX_TOKENS,
  MODEL: () => MODEL,
  callClaude: () => callClaude,
  callClaudeWithTools: () => callClaudeWithTools,
  getAnthropicClient: () => getAnthropicClient
});
import Anthropic from "@anthropic-ai/sdk";
function getAnthropicClient() {
  return new Anthropic({
    apiKey: process.env.AI_INTEGRATIONS_ANTHROPIC_KEY || process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY,
    baseURL: process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL
  });
}
async function callClaude(systemPrompt, messages3, options) {
  const client2 = getAnthropicClient();
  const response = await client2.messages.create({
    model: MODEL,
    max_tokens: options?.maxTokens ?? MAX_TOKENS,
    temperature: options?.temperature ?? 0.3,
    system: systemPrompt,
    messages: messages3
  });
  const textBlock = response.content.find((block) => block.type === "text");
  return textBlock?.text ?? "";
}
async function callClaudeWithTools(systemPrompt, messages3, tools, toolExecutor, options) {
  const client2 = getAnthropicClient();
  const toolCalls = [];
  let apiMessages = messages3.map((m) => ({
    role: m.role,
    content: m.content
  }));
  let iterations = 0;
  while (iterations < MAX_TOOL_ITERATIONS) {
    iterations++;
    const response = await client2.messages.create({
      model: MODEL,
      max_tokens: options?.maxTokens ?? MAX_TOKENS,
      temperature: options?.temperature ?? 0.3,
      system: systemPrompt,
      messages: apiMessages,
      tools
    });
    if (response.stop_reason === "end_turn" || !response.content.some((b) => b.type === "tool_use")) {
      const textBlock = response.content.find((b) => b.type === "text");
      return {
        finalResponse: textBlock?.text ?? "Done.",
        toolCalls
      };
    }
    apiMessages.push({ role: "assistant", content: response.content });
    const toolResultContents = [];
    for (const block of response.content) {
      if (block.type !== "tool_use") continue;
      const toolBlock = block;
      const input = toolBlock.input;
      let result;
      let success = true;
      let errorMsg;
      try {
        result = await toolExecutor(toolBlock.name, input);
        console.log(`[Clawd Tools] Executed ${toolBlock.name}:`, JSON.stringify(result).slice(0, 200));
      } catch (err) {
        success = false;
        errorMsg = err?.message || "Tool execution failed";
        result = { error: errorMsg };
        console.error(`[Clawd Tools] Error executing ${toolBlock.name}:`, errorMsg);
      }
      toolCalls.push({
        toolName: toolBlock.name,
        input,
        result,
        success,
        error: errorMsg
      });
      toolResultContents.push({
        type: "tool_result",
        tool_use_id: toolBlock.id,
        content: JSON.stringify(result)
      });
    }
    apiMessages.push({ role: "user", content: toolResultContents });
  }
  const lastAssistantMsg = [...apiMessages].reverse().find((m) => m.role === "assistant");
  let finalText = "I completed several actions but reached the maximum steps. Here is what I did:";
  if (lastAssistantMsg && typeof lastAssistantMsg.content === "string") {
    finalText = lastAssistantMsg.content;
  } else if (Array.isArray(lastAssistantMsg?.content)) {
    const tb = lastAssistantMsg.content.find((b) => b.type === "text");
    if (tb) finalText = tb.text;
  }
  return { finalResponse: finalText, toolCalls };
}
var MODEL, MAX_TOKENS, MAX_TOOL_ITERATIONS;
var init_anthropic_client = __esm({
  "server/services/clawd/anthropic-client.ts"() {
    "use strict";
    MODEL = "claude-sonnet-4-6";
    MAX_TOKENS = 2048;
    MAX_TOOL_ITERATIONS = 8;
  }
});

// server/services/clawd/base-assistant.ts
function getCachedAnalytics(key) {
  const entry = analyticsCache.get(key);
  if (entry && Date.now() - entry.timestamp < CACHE_TTL_MS) {
    return entry.data;
  }
  analyticsCache.delete(key);
  return null;
}
function setCachedAnalytics(key, data) {
  analyticsCache.set(key, { data, timestamp: Date.now() });
}
async function runAssistant(assistantType, domainPrompt, analyticsData, userQuestion, userId, chatMessageId) {
  const startTime = Date.now();
  const systemPrompt = `${domainPrompt}

${STRUCTURED_OUTPUT_INSTRUCTION}`;
  const userContent = `## Current Analytics Data
${JSON.stringify(analyticsData, null, 2)}

## User Question
${userQuestion}`;
  const responseText = await callClaude(systemPrompt, [
    { role: "user", content: userContent }
  ]);
  const durationMs = Date.now() - startTime;
  let parsed;
  try {
    const cleaned = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    try {
      parsed = JSON.parse(cleaned);
    } catch {
      const firstBrace = cleaned.indexOf("{");
      const lastBrace = cleaned.lastIndexOf("}");
      if (firstBrace !== -1 && lastBrace > firstBrace) {
        parsed = JSON.parse(cleaned.slice(firstBrace, lastBrace + 1));
      } else {
        throw new Error("No JSON object found in response");
      }
    }
  } catch {
    const plainText = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "").replace(/^\s*[\[{][\s\S]*$/, "").trim();
    parsed = {
      summary: plainText.slice(0, 500) || "Analysis unavailable.",
      keyFindings: [],
      risks: [],
      supportingEvidence: [],
      recommendedActions: [],
      confidenceScore: 0.3,
      severityScore: 0
    };
  }
  const output = {
    assistantType,
    ...parsed
  };
  try {
    await db.insert(clawdAssistantRuns).values({
      chatMessageId: chatMessageId ?? null,
      assistantType,
      inputContext: JSON.stringify({ question: userQuestion, dataKeys: Object.keys(analyticsData) }),
      outputFindings: JSON.stringify(output),
      durationMs,
      userId: userId ?? null
    });
  } catch (err) {
    console.error(`[Clawd] Failed to log assistant run for ${assistantType}:`, err);
  }
  return output;
}
var analyticsCache, CACHE_TTL_MS, STRUCTURED_OUTPUT_INSTRUCTION;
var init_base_assistant = __esm({
  "server/services/clawd/base-assistant.ts"() {
    "use strict";
    init_anthropic_client();
    init_db();
    init_schema();
    analyticsCache = /* @__PURE__ */ new Map();
    CACHE_TTL_MS = 3 * 60 * 1e3;
    STRUCTURED_OUTPUT_INSTRUCTION = `
You MUST respond with valid JSON matching this exact structure:
{
  "summary": "Brief 1-3 sentence summary of findings",
  "keyFindings": [
    { "title": "Finding title", "detail": "Detailed explanation", "category": "category name", "severity": "low|medium|high|critical" }
  ],
  "risks": [
    { "title": "Risk title", "description": "What could go wrong", "likelihood": "low|medium|high", "impact": "low|medium|high|critical", "affectedEntity": "optional entity name", "affectedEntityId": "optional ID" }
  ],
  "supportingEvidence": [
    { "metric": "Metric name", "value": "metric value", "context": "What this means", "period": "optional time period" }
  ],
  "recommendedActions": [
    { "title": "Action title", "description": "What to do", "priority": "low|medium|high|urgent", "category": "category name" }
  ],
  "confidenceScore": 0.85,
  "severityScore": 0.5
}

Rules:
- confidenceScore: 0.0-1.0 (how confident you are in the analysis)
- severityScore: 0.0-1.0 (how urgent/severe the situation is, 0=nothing wrong, 1=critical)
- Only include findings/risks/actions that are supported by the data
- Do NOT invent data or make unsupported claims
- If data is insufficient, say so clearly and lower confidence score
- Keep summaries actionable and business-focused
- Return ONLY the JSON object, no markdown or extra text
`;
  }
});

// server/services/clawd/assistants/staffing.ts
async function analyzeStaffing(userQuestion, userId, chatMessageId) {
  let metrics = getCachedAnalytics("staffing");
  if (!metrics) {
    metrics = await getStaffingMetrics();
    setCachedAnalytics("staffing", metrics);
  }
  return runAssistant(
    "staffing",
    STAFFING_SYSTEM_PROMPT,
    metrics,
    userQuestion,
    userId,
    chatMessageId
  );
}
var STAFFING_SYSTEM_PROMPT;
var init_staffing2 = __esm({
  "server/services/clawd/assistants/staffing.ts"() {
    "use strict";
    init_staffing();
    init_base_assistant();
    STAFFING_SYSTEM_PROMPT = `You are the Staffing Intelligence Assistant for WFConnect, a workforce management platform.

Your role is to analyze staffing data and provide actionable insights to help managers optimize workforce allocation and prevent coverage gaps.

You will receive real-time staffing analytics including:
- **Unfilled Shifts**: Shifts within 12, 24, and 48 hours that still need workers assigned, sorted by urgency
- **Fill Rates**: Workplace-level fill rates over 7-day, 14-day, and 30-day windows showing how well each site is staffed
- **Fill Rate Trends**: Whether fill rates are improving, declining, or stable compared to the previous period
- **Worker Overuse**: Workers with the highest shift counts who may be at risk of burnout or compliance issues
- **Scheduling Conflicts**: Workers double-booked with overlapping shifts on the same day
- **Shift Offer Stats**: Acceptance, decline, and expiration rates for shift offers sent to workers
- **Problematic Sites**: Workplaces with consistently low fill rates or high cancellation counts, ranked by issue severity

Focus on:
1. Identifying urgent staffing gaps that need immediate attention
2. Highlighting trends that could lead to future problems
3. Flagging worker fatigue or scheduling conflicts before they cause issues
4. Recommending concrete actions to improve fill rates and reduce cancellations
5. Prioritizing sites that need the most attention`;
  }
});

// server/services/clawd/types.ts
var TIME_WINDOWS;
var init_types = __esm({
  "server/services/clawd/types.ts"() {
    "use strict";
    TIME_WINDOWS = {
      "7d": { days: 7, label: "7-day" },
      "14d": { days: 14, label: "14-day" },
      "30d": { days: 30, label: "30-day" }
    };
  }
});

// server/services/clawd/analytics/attendance.ts
import { eq as eq3, and as and3, gte as gte2, lte as lte2, sql as sql3, isNull as isNull2, isNotNull, desc as desc2 } from "drizzle-orm";
function getWindowDates(window) {
  const end = /* @__PURE__ */ new Date();
  const start = /* @__PURE__ */ new Date();
  start.setDate(start.getDate() - window.days);
  return { start, end };
}
function getPreviousWindowDates(window) {
  const end = /* @__PURE__ */ new Date();
  end.setDate(end.getDate() - window.days);
  const start = /* @__PURE__ */ new Date();
  start.setDate(start.getDate() - window.days * 2);
  return { start, end };
}
async function getLateArrivals(windowDates) {
  const results = await db.select({
    workerId: titoLogs.workerId,
    workerName: users.fullName,
    totalLateArrivals: sql3`count(*)::int`,
    totalLateMinutes: sql3`coalesce(sum(${titoLogs.lateMinutes}), 0)::int`,
    averageLateMinutes: sql3`coalesce(avg(${titoLogs.lateMinutes}), 0)::float`,
    worstLateMinutes: sql3`coalesce(max(${titoLogs.lateMinutes}), 0)::int`
  }).from(titoLogs).innerJoin(users, eq3(titoLogs.workerId, users.id)).where(
    and3(
      eq3(titoLogs.flaggedLate, true),
      gte2(titoLogs.createdAt, windowDates.start),
      lte2(titoLogs.createdAt, windowDates.end)
    )
  ).groupBy(titoLogs.workerId, users.fullName).orderBy(desc2(sql3`count(*)`));
  return results;
}
async function getNoShows(windowDates) {
  const startDate = windowDates.start.toISOString().split("T")[0];
  const endDate = windowDates.end.toISOString().split("T")[0];
  const completedShiftsWithNoTito = await db.select({
    workerId: shifts.workerUserId,
    workerName: users.fullName,
    shiftId: shifts.id,
    shiftDate: shifts.date,
    workplaceName: workplaces.name
  }).from(shifts).innerJoin(users, eq3(shifts.workerUserId, users.id)).innerJoin(workplaces, eq3(shifts.workplaceId, workplaces.id)).leftJoin(
    titoLogs,
    and3(
      eq3(titoLogs.workerId, shifts.workerUserId),
      eq3(titoLogs.shiftId, shifts.id)
    )
  ).where(
    and3(
      isNotNull(shifts.workerUserId),
      gte2(shifts.date, startDate),
      lte2(shifts.date, endDate),
      eq3(shifts.status, "completed"),
      isNull2(titoLogs.id)
    )
  ).orderBy(shifts.workerUserId);
  const grouped = /* @__PURE__ */ new Map();
  for (const row of completedShiftsWithNoTito) {
    if (!row.workerId) continue;
    const existing = grouped.get(row.workerId);
    const shiftEntry = {
      shiftId: row.shiftId,
      date: row.shiftDate,
      workplaceName: row.workplaceName
    };
    if (existing) {
      existing.totalNoShows++;
      existing.noShowShifts.push(shiftEntry);
    } else {
      grouped.set(row.workerId, {
        workerId: row.workerId,
        workerName: row.workerName,
        totalNoShows: 1,
        noShowShifts: [shiftEntry]
      });
    }
  }
  return Array.from(grouped.values()).sort((a, b) => b.totalNoShows - a.totalNoShows);
}
async function getAcceptThenCancels(windowDates) {
  const results = await db.select({
    workerId: shiftOffers.workerId,
    workerName: users.fullName,
    shiftId: shiftOffers.shiftId,
    respondedAt: shiftOffers.respondedAt,
    cancelledAt: shiftOffers.cancelledAt,
    cancelReason: shiftOffers.cancelReason
  }).from(shiftOffers).innerJoin(users, eq3(shiftOffers.workerId, users.id)).where(
    and3(
      eq3(shiftOffers.status, "cancelled"),
      isNotNull(shiftOffers.respondedAt),
      isNotNull(shiftOffers.cancelledAt),
      gte2(shiftOffers.createdAt, windowDates.start),
      lte2(shiftOffers.createdAt, windowDates.end)
    )
  ).orderBy(shiftOffers.workerId);
  const grouped = /* @__PURE__ */ new Map();
  for (const row of results) {
    const existing = grouped.get(row.workerId);
    const cancelEntry = {
      shiftId: row.shiftId,
      acceptedAt: row.respondedAt?.toISOString() ?? "",
      cancelledAt: row.cancelledAt?.toISOString() ?? "",
      cancelReason: row.cancelReason
    };
    if (existing) {
      existing.totalCancellations++;
      existing.cancelledOffers.push(cancelEntry);
    } else {
      grouped.set(row.workerId, {
        workerId: row.workerId,
        workerName: row.workerName,
        totalCancellations: 1,
        cancelledOffers: [cancelEntry]
      });
    }
  }
  return Array.from(grouped.values()).sort((a, b) => b.totalCancellations - a.totalCancellations);
}
async function getWorkerShiftCounts(windowDates) {
  const startDate = windowDates.start.toISOString().split("T")[0];
  const endDate = windowDates.end.toISOString().split("T")[0];
  const results = await db.select({
    workerId: shifts.workerUserId,
    workerName: users.fullName,
    shiftCount: sql3`count(*)::int`
  }).from(shifts).innerJoin(users, eq3(shifts.workerUserId, users.id)).where(
    and3(
      isNotNull(shifts.workerUserId),
      gte2(shifts.date, startDate),
      lte2(shifts.date, endDate)
    )
  ).groupBy(shifts.workerUserId, users.fullName);
  const map = /* @__PURE__ */ new Map();
  for (const r of results) {
    if (r.workerId) {
      map.set(r.workerId, { count: r.shiftCount, name: r.workerName });
    }
  }
  return map;
}
function computeReliabilityScores(shiftCounts, lateArrivals, noShows, cancels) {
  const lateMap = new Map(lateArrivals.map((l) => [l.workerId, l]));
  const noShowMap = new Map(noShows.map((n) => [n.workerId, n]));
  const cancelMap = new Map(cancels.map((c) => [c.workerId, c]));
  const allWorkerIds = /* @__PURE__ */ new Set([
    ...shiftCounts.keys(),
    ...lateMap.keys(),
    ...noShowMap.keys(),
    ...cancelMap.keys()
  ]);
  const scores = [];
  for (const workerId of allWorkerIds) {
    const workerInfo = shiftCounts.get(workerId);
    const totalShifts = workerInfo?.count ?? 0;
    const workerName = workerInfo?.name ?? lateMap.get(workerId)?.workerName ?? noShowMap.get(workerId)?.workerName ?? cancelMap.get(workerId)?.workerName ?? "Unknown";
    const lateCount = lateMap.get(workerId)?.totalLateArrivals ?? 0;
    const noShowCount = noShowMap.get(workerId)?.totalNoShows ?? 0;
    const cancellationCount = cancelMap.get(workerId)?.totalCancellations ?? 0;
    const denominator = Math.max(totalShifts, 1);
    const latenessScore = Math.max(0, 100 - lateCount / denominator * 100);
    const noShowScore = Math.max(0, 100 - noShowCount / denominator * 200);
    const cancellationScore = Math.max(0, 100 - cancellationCount / denominator * 150);
    const score = Math.round(
      (latenessScore * 0.3 + noShowScore * 0.4 + cancellationScore * 0.3) * 10
    ) / 10;
    scores.push({
      workerId,
      workerName,
      score: Math.max(0, Math.min(100, score)),
      latenessScore: Math.round(latenessScore * 10) / 10,
      noShowScore: Math.round(noShowScore * 10) / 10,
      cancellationScore: Math.round(cancellationScore * 10) / 10,
      totalShiftsInPeriod: totalShifts,
      lateCount,
      noShowCount,
      cancellationCount
    });
  }
  return scores.sort((a, b) => a.score - b.score);
}
async function computeReliabilityTrends(window) {
  const currentDates = getWindowDates(window);
  const previousDates = getPreviousWindowDates(window);
  const [currentLate, currentNoShows, currentCancels, currentShifts] = await Promise.all([
    getLateArrivals(currentDates),
    getNoShows(currentDates),
    getAcceptThenCancels(currentDates),
    getWorkerShiftCounts(currentDates)
  ]);
  const [prevLate, prevNoShows, prevCancels, prevShifts] = await Promise.all([
    getLateArrivals(previousDates),
    getNoShows(previousDates),
    getAcceptThenCancels(previousDates),
    getWorkerShiftCounts(previousDates)
  ]);
  const currentScores = computeReliabilityScores(currentShifts, currentLate, currentNoShows, currentCancels);
  const previousScores = computeReliabilityScores(prevShifts, prevLate, prevNoShows, prevCancels);
  const prevScoreMap = new Map(previousScores.map((s) => [s.workerId, s.score]));
  const trends = [];
  for (const current of currentScores) {
    const previousScore = prevScoreMap.get(current.workerId);
    if (previousScore === void 0) continue;
    const delta = current.score - previousScore;
    let trend = "stable";
    if (delta > 5) trend = "improving";
    else if (delta < -5) trend = "declining";
    trends.push({
      workerId: current.workerId,
      workerName: current.workerName,
      currentScore: current.score,
      previousScore,
      trend,
      scoreDelta: Math.round(delta * 10) / 10
    });
  }
  return trends.sort((a, b) => a.scoreDelta - b.scoreDelta);
}
async function getRiskBreakdownBySite(windowDates) {
  const startDate = windowDates.start.toISOString().split("T")[0];
  const endDate = windowDates.end.toISOString().split("T")[0];
  const results = await db.select({
    workplaceId: shifts.workplaceId,
    workplaceName: workplaces.name,
    totalShifts: sql3`count(*)::int`,
    lateCount: sql3`count(case when ${titoLogs.flaggedLate} = true then 1 end)::int`,
    noTitoCount: sql3`count(case when ${titoLogs.id} is null and ${shifts.status} = 'completed' then 1 end)::int`
  }).from(shifts).innerJoin(workplaces, eq3(shifts.workplaceId, workplaces.id)).leftJoin(
    titoLogs,
    and3(
      eq3(titoLogs.shiftId, shifts.id),
      eq3(titoLogs.workerId, shifts.workerUserId)
    )
  ).where(
    and3(
      isNotNull(shifts.workerUserId),
      gte2(shifts.date, startDate),
      lte2(shifts.date, endDate)
    )
  ).groupBy(shifts.workplaceId, workplaces.name);
  return results.map((r) => {
    const totalIssues = r.lateCount + r.noTitoCount;
    const reliability = r.totalShifts > 0 ? Math.round((1 - totalIssues / r.totalShifts) * 1e3) / 10 : 100;
    return {
      workplaceId: r.workplaceId,
      workplaceName: r.workplaceName,
      avgReliability: Math.max(0, reliability),
      workerCount: r.totalShifts
    };
  }).sort((a, b) => a.avgReliability - b.avgReliability);
}
async function getRiskBreakdownByRole(windowDates) {
  const startDate = windowDates.start.toISOString().split("T")[0];
  const endDate = windowDates.end.toISOString().split("T")[0];
  const results = await db.select({
    roleType: shifts.roleType,
    totalShifts: sql3`count(*)::int`,
    lateCount: sql3`count(case when ${titoLogs.flaggedLate} = true then 1 end)::int`,
    noTitoCount: sql3`count(case when ${titoLogs.id} is null and ${shifts.status} = 'completed' then 1 end)::int`
  }).from(shifts).leftJoin(
    titoLogs,
    and3(
      eq3(titoLogs.shiftId, shifts.id),
      eq3(titoLogs.workerId, shifts.workerUserId)
    )
  ).where(
    and3(
      isNotNull(shifts.workerUserId),
      isNotNull(shifts.roleType),
      gte2(shifts.date, startDate),
      lte2(shifts.date, endDate)
    )
  ).groupBy(shifts.roleType);
  return results.map((r) => {
    const totalIssues = r.lateCount + r.noTitoCount;
    const reliability = r.totalShifts > 0 ? Math.round((1 - totalIssues / r.totalShifts) * 1e3) / 10 : 100;
    return {
      roleType: r.roleType ?? "Unknown",
      avgReliability: Math.max(0, reliability),
      workerCount: r.totalShifts
    };
  }).sort((a, b) => a.avgReliability - b.avgReliability);
}
async function getAttendanceMetrics(windowKey = "30d") {
  const window = TIME_WINDOWS[windowKey] ?? TIME_WINDOWS["30d"];
  const windowDates = getWindowDates(window);
  const [lateArrivals, noShows, acceptThenCancels, shiftCounts, siteBd, roleBd, trends] = await Promise.all([
    getLateArrivals(windowDates),
    getNoShows(windowDates),
    getAcceptThenCancels(windowDates),
    getWorkerShiftCounts(windowDates),
    getRiskBreakdownBySite(windowDates),
    getRiskBreakdownByRole(windowDates),
    computeReliabilityTrends(window)
  ]);
  const reliabilityScores = computeReliabilityScores(shiftCounts, lateArrivals, noShows, acceptThenCancels);
  const workerRiskBreakdown = reliabilityScores.map((s) => ({
    workerId: s.workerId,
    workerName: s.workerName,
    riskLevel: s.score >= 80 ? "low" : s.score >= 60 ? "medium" : s.score >= 40 ? "high" : "critical",
    score: s.score
  }));
  const decliningWorkers = trends.filter((t) => t.trend === "declining");
  const totalLateArrivals = lateArrivals.reduce((sum2, l) => sum2 + l.totalLateArrivals, 0);
  const totalNoShows = noShows.reduce((sum2, n) => sum2 + n.totalNoShows, 0);
  const totalCancellations = acceptThenCancels.reduce((sum2, c) => sum2 + c.totalCancellations, 0);
  const avgScore = reliabilityScores.length > 0 ? Math.round(reliabilityScores.reduce((sum2, s) => sum2 + s.score, 0) / reliabilityScores.length * 10) / 10 : 100;
  const highRiskCount = workerRiskBreakdown.filter((w) => w.riskLevel === "high" || w.riskLevel === "critical").length;
  return {
    periodLabel: window.label,
    periodDays: window.days,
    lateArrivals,
    noShows,
    acceptThenCancels,
    reliabilityScores,
    reliabilityTrends: trends,
    decliningWorkers,
    riskBreakdown: {
      byWorker: workerRiskBreakdown,
      bySite: siteBd,
      byRole: roleBd
    },
    summary: {
      totalWorkersAnalyzed: reliabilityScores.length,
      totalLateArrivals,
      totalNoShows,
      totalCancellations,
      averageReliabilityScore: avgScore,
      highRiskWorkerCount: highRiskCount,
      decliningWorkerCount: decliningWorkers.length
    }
  };
}
var init_attendance = __esm({
  "server/services/clawd/analytics/attendance.ts"() {
    "use strict";
    init_db();
    init_schema();
    init_types();
  }
});

// server/services/clawd/assistants/attendance.ts
async function analyzeAttendance(userQuestion, userId, chatMessageId) {
  let metrics = getCachedAnalytics("attendance");
  if (!metrics) {
    metrics = await getAttendanceMetrics();
    setCachedAnalytics("attendance", metrics);
  }
  return runAssistant(
    "attendance",
    ATTENDANCE_SYSTEM_PROMPT,
    metrics,
    userQuestion,
    userId,
    chatMessageId
  );
}
var ATTENDANCE_SYSTEM_PROMPT;
var init_attendance2 = __esm({
  "server/services/clawd/assistants/attendance.ts"() {
    "use strict";
    init_attendance();
    init_base_assistant();
    ATTENDANCE_SYSTEM_PROMPT = `You are an expert Attendance & Reliability Analyst for a staffing agency. Your role is to analyze worker attendance patterns and reliability data to identify risks and recommend interventions.

You specialize in:
- No-show analysis: identifying workers who fail to appear for assigned shifts
- Lateness patterns: detecting chronic tardiness, tracking late minutes, and spotting trends
- Accept-then-cancel behavior: workers who accept shift offers then cancel before the shift
- Reliability scoring: composite scores combining lateness, no-shows, and cancellations
- Reliability trends: detecting workers whose reliability is improving or declining over time
- Risk breakdown: analyzing reliability by worker, site, and role type

When analyzing data:
- Flag workers with critically low reliability scores (below 40) as urgent concerns
- Highlight declining reliability trends that may indicate disengagement or personal issues
- Identify sites or roles with disproportionately high attendance issues
- Consider the volume of shifts when evaluating severity (a worker with 1 no-show out of 2 shifts is different from 1 out of 50)
- Provide actionable recommendations such as coaching conversations, schedule adjustments, or performance improvement plans
- Note patterns like specific days/times with higher no-show rates if visible in the data`;
  }
});

// server/services/clawd/analytics/recruitment.ts
import { eq as eq4, sql as sql4, and as and4, gte as gte3, lte as lte3, count as count2, isNull as isNull3, isNotNull as isNotNull2 } from "drizzle-orm";
async function getRecruitmentMetrics() {
  const [
    applicantsByStage,
    stalledApplicants,
    stageTimings,
    conversionRates,
    roleDemandAnalysis,
    chronicShortageRoles,
    pipelineVelocity,
    summaryData
  ] = await Promise.all([
    computeApplicantsByStage(),
    computeStalledApplicants(),
    computeStageTimings(),
    computeConversionRates(),
    computeRoleDemandAnalysis(),
    computeChronicShortageRoles(),
    computePipelineVelocity(),
    computeSummary()
  ]);
  return {
    applicantsByStage,
    totalApplicants: applicantsByStage.reduce((sum2, s) => sum2 + s.count, 0),
    stalledApplicants,
    stageTimings,
    conversionRates,
    roleDemandAnalysis,
    chronicShortageRoles,
    pipelineVelocity,
    summary: summaryData
  };
}
async function computeApplicantsByStage() {
  const results = await db.select({
    stage: workerApplications.status,
    count: count2()
  }).from(workerApplications).groupBy(workerApplications.status);
  const total = results.reduce((sum2, r) => sum2 + Number(r.count), 0);
  return STAGES.map((stage) => {
    const found = results.find((r) => r.stage === stage);
    const cnt = found ? Number(found.count) : 0;
    return {
      stage,
      count: cnt,
      percentage: total > 0 ? Math.round(cnt / total * 100 * 10) / 10 : 0
    };
  });
}
async function computeStalledApplicants() {
  const thresholdDate = /* @__PURE__ */ new Date();
  thresholdDate.setDate(thresholdDate.getDate() - STALLED_THRESHOLD_DAYS);
  const results = await db.select({
    id: workerApplications.id,
    fullName: workerApplications.fullName,
    email: workerApplications.email,
    status: workerApplications.status,
    updatedAt: workerApplications.updatedAt,
    createdAt: workerApplications.createdAt
  }).from(workerApplications).where(
    and4(
      sql4`${workerApplications.status} IN ('pending', 'reviewed')`,
      lte3(workerApplications.updatedAt, thresholdDate)
    )
  ).orderBy(workerApplications.updatedAt);
  const now = /* @__PURE__ */ new Date();
  return results.map((r) => ({
    applicationId: r.id,
    fullName: r.fullName,
    email: r.email,
    currentStage: r.status,
    daysSinceLastChange: Math.floor(
      (now.getTime() - new Date(r.updatedAt).getTime()) / (1e3 * 60 * 60 * 24)
    ),
    appliedAt: new Date(r.createdAt)
  }));
}
async function computeStageTimings() {
  const timings = [];
  const pendingApps = await db.select({
    createdAt: workerApplications.createdAt,
    updatedAt: workerApplications.updatedAt,
    status: workerApplications.status,
    reviewedAt: workerApplications.reviewedAt
  }).from(workerApplications);
  const pendingDurations = [];
  const reviewedDurations = [];
  let pendingCount = 0;
  let reviewedCount = 0;
  for (const app2 of pendingApps) {
    const created = new Date(app2.createdAt).getTime();
    const updated = new Date(app2.updatedAt).getTime();
    if (app2.status === "pending") {
      pendingCount++;
      const days = (Date.now() - created) / (1e3 * 60 * 60 * 24);
      pendingDurations.push(days);
    } else {
      const reviewedDate = app2.reviewedAt ? new Date(app2.reviewedAt).getTime() : updated;
      const daysInPending = (reviewedDate - created) / (1e3 * 60 * 60 * 24);
      pendingDurations.push(daysInPending);
      if (app2.status === "reviewed") {
        reviewedCount++;
        const days = (Date.now() - reviewedDate) / (1e3 * 60 * 60 * 24);
        reviewedDurations.push(days);
      } else if (app2.status === "approved" || app2.status === "rejected") {
        const daysInReviewed = (updated - reviewedDate) / (1e3 * 60 * 60 * 24);
        if (daysInReviewed > 0) {
          reviewedDurations.push(daysInReviewed);
        }
      }
    }
  }
  timings.push({
    stage: "pending",
    averageDaysInStage: computeAverage(pendingDurations),
    medianDaysInStage: computeMedian(pendingDurations),
    totalApplicantsInStage: pendingCount
  });
  timings.push({
    stage: "reviewed",
    averageDaysInStage: computeAverage(reviewedDurations),
    medianDaysInStage: computeMedian(reviewedDurations),
    totalApplicantsInStage: reviewedCount
  });
  return timings;
}
async function computeConversionRates() {
  const stageCounts = await db.select({
    status: workerApplications.status,
    count: count2()
  }).from(workerApplications).groupBy(workerApplications.status);
  const countMap = {};
  let totalAll = 0;
  for (const r of stageCounts) {
    countMap[r.status] = Number(r.count);
    totalAll += Number(r.count);
  }
  const rates = [];
  const pendingTotal = totalAll;
  const reviewedTotal = (countMap["reviewed"] || 0) + (countMap["approved"] || 0) + (countMap["rejected"] || 0);
  const approvedTotal = countMap["approved"] || 0;
  rates.push({
    fromStage: "pending",
    toStage: "reviewed",
    total: pendingTotal,
    converted: reviewedTotal,
    rate: pendingTotal > 0 ? Math.round(reviewedTotal / pendingTotal * 100 * 10) / 10 : 0
  });
  rates.push({
    fromStage: "reviewed",
    toStage: "approved",
    total: reviewedTotal,
    converted: approvedTotal,
    rate: reviewedTotal > 0 ? Math.round(approvedTotal / reviewedTotal * 100 * 10) / 10 : 0
  });
  rates.push({
    fromStage: "pending",
    toStage: "approved",
    total: pendingTotal,
    converted: approvedTotal,
    rate: pendingTotal > 0 ? Math.round(approvedTotal / pendingTotal * 100 * 10) / 10 : 0
  });
  return rates;
}
async function computeRoleDemandAnalysis() {
  const now = /* @__PURE__ */ new Date();
  const thirtyDaysFromNow = /* @__PURE__ */ new Date();
  thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
  const applicantRoles = await db.select({
    preferredRoles: workerApplications.preferredRoles,
    status: workerApplications.status
  }).from(workerApplications).where(sql4`${workerApplications.status} IN ('pending', 'reviewed')`);
  const roleCounts = {};
  for (const app2 of applicantRoles) {
    try {
      const roles = JSON.parse(app2.preferredRoles);
      for (const role of roles) {
        const normalized = role.toLowerCase().trim();
        roleCounts[normalized] = (roleCounts[normalized] || 0) + 1;
      }
    } catch {
      const normalized = app2.preferredRoles.toLowerCase().trim();
      roleCounts[normalized] = (roleCounts[normalized] || 0) + 1;
    }
  }
  const activeWorkers = await db.select({
    workerRoles: users.workerRoles
  }).from(users).where(
    and4(
      eq4(users.role, "worker"),
      eq4(users.isActive, true)
    )
  );
  const workerRoleCounts = {};
  for (const worker of activeWorkers) {
    if (worker.workerRoles) {
      try {
        const roles = JSON.parse(worker.workerRoles);
        for (const role of roles) {
          const normalized = role.toLowerCase().trim();
          workerRoleCounts[normalized] = (workerRoleCounts[normalized] || 0) + 1;
        }
      } catch {
        const normalized = worker.workerRoles.toLowerCase().trim();
        workerRoleCounts[normalized] = (workerRoleCounts[normalized] || 0) + 1;
      }
    }
  }
  const unfilledShifts = await db.select({
    roleType: shifts.roleType,
    cnt: count2()
  }).from(shifts).where(
    and4(
      eq4(shifts.status, "scheduled"),
      isNull3(shifts.workerUserId),
      gte3(shifts.date, now.toISOString().split("T")[0]),
      lte3(shifts.date, thirtyDaysFromNow.toISOString().split("T")[0])
    )
  ).groupBy(shifts.roleType);
  const unfilledByRole = {};
  for (const s of unfilledShifts) {
    if (s.roleType) {
      const normalized = s.roleType.toLowerCase().trim();
      unfilledByRole[normalized] = Number(s.cnt);
    }
  }
  const allRoles = /* @__PURE__ */ new Set([
    ...Object.keys(roleCounts),
    ...Object.keys(workerRoleCounts),
    ...Object.keys(unfilledByRole)
  ]);
  return Array.from(allRoles).map((role) => {
    const applicantCount = roleCounts[role] || 0;
    const activeWorkerCount = workerRoleCounts[role] || 0;
    const unfilledShiftCount = unfilledByRole[role] || 0;
    return {
      role,
      applicantCount,
      activeWorkerCount,
      unfilledShiftCount,
      gap: unfilledShiftCount - applicantCount
    };
  });
}
async function computeChronicShortageRoles() {
  const sixtyDaysAgo = /* @__PURE__ */ new Date();
  sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);
  const unfilledShifts = await db.select({
    roleType: shifts.roleType,
    cnt: count2()
  }).from(shifts).where(
    and4(
      isNull3(shifts.workerUserId),
      gte3(shifts.date, sixtyDaysAgo.toISOString().split("T")[0])
    )
  ).groupBy(shifts.roleType);
  const activeWorkers = await db.select({
    workerRoles: users.workerRoles
  }).from(users).where(
    and4(
      eq4(users.role, "worker"),
      eq4(users.isActive, true)
    )
  );
  const workerRoleCounts = {};
  for (const worker of activeWorkers) {
    if (worker.workerRoles) {
      try {
        const roles = JSON.parse(worker.workerRoles);
        for (const role of roles) {
          const normalized = role.toLowerCase().trim();
          workerRoleCounts[normalized] = (workerRoleCounts[normalized] || 0) + 1;
        }
      } catch {
        const normalized = worker.workerRoles.toLowerCase().trim();
        workerRoleCounts[normalized] = (workerRoleCounts[normalized] || 0) + 1;
      }
    }
  }
  const applicantRoles = await db.select({
    preferredRoles: workerApplications.preferredRoles
  }).from(workerApplications).where(sql4`${workerApplications.status} IN ('pending', 'reviewed')`);
  const applicantRoleCounts = {};
  for (const app2 of applicantRoles) {
    try {
      const roles = JSON.parse(app2.preferredRoles);
      for (const role of roles) {
        const normalized = role.toLowerCase().trim();
        applicantRoleCounts[normalized] = (applicantRoleCounts[normalized] || 0) + 1;
      }
    } catch {
      const normalized = app2.preferredRoles.toLowerCase().trim();
      applicantRoleCounts[normalized] = (applicantRoleCounts[normalized] || 0) + 1;
    }
  }
  const shortages = [];
  for (const row of unfilledShifts) {
    if (!row.roleType) continue;
    const normalized = row.roleType.toLowerCase().trim();
    const unfilledCount = Number(row.cnt);
    const workerCount = workerRoleCounts[normalized] || 0;
    const applicantsInPipeline = applicantRoleCounts[normalized] || 0;
    const shortageScore = unfilledCount * 2 - workerCount - applicantsInPipeline;
    if (shortageScore > 0) {
      shortages.push({
        role: normalized,
        unfilledShiftCount: unfilledCount,
        activeWorkerCount: workerCount,
        applicantsInPipeline,
        shortageScore
      });
    }
  }
  return shortages.sort((a, b) => b.shortageScore - a.shortageScore);
}
async function computePipelineVelocity() {
  const eightWeeksAgo = /* @__PURE__ */ new Date();
  eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 56);
  const results = await db.select({
    week: sql4`to_char(date_trunc('week', ${workerApplications.createdAt}), 'YYYY-MM-DD')`,
    count: count2()
  }).from(workerApplications).where(gte3(workerApplications.createdAt, eightWeeksAgo)).groupBy(sql4`date_trunc('week', ${workerApplications.createdAt})`).orderBy(sql4`date_trunc('week', ${workerApplications.createdAt})`);
  const velocities = results.map((r, i) => {
    let trend = "stable";
    if (i > 0) {
      const prevCount = Number(results[i - 1].count);
      const currCount = Number(r.count);
      if (currCount > prevCount * 1.1) trend = "increasing";
      else if (currCount < prevCount * 0.9) trend = "decreasing";
    }
    return {
      week: r.week,
      applicationCount: Number(r.count),
      trend
    };
  });
  return velocities;
}
async function computeSummary() {
  const thirtyDaysAgo = /* @__PURE__ */ new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const [activeResult, approvedResult, rejectedResult, pendingResult, decisionTimeResult] = await Promise.all([
    db.select({ count: count2() }).from(workerApplications).where(sql4`${workerApplications.status} IN ('pending', 'reviewed')`),
    db.select({ count: count2() }).from(workerApplications).where(
      and4(
        eq4(workerApplications.status, "approved"),
        gte3(workerApplications.updatedAt, thirtyDaysAgo)
      )
    ),
    db.select({ count: count2() }).from(workerApplications).where(
      and4(
        eq4(workerApplications.status, "rejected"),
        gte3(workerApplications.updatedAt, thirtyDaysAgo)
      )
    ),
    db.select({ count: count2() }).from(workerApplications).where(eq4(workerApplications.status, "pending")),
    db.select({
      avgDays: sql4`COALESCE(AVG(EXTRACT(EPOCH FROM (${workerApplications.reviewedAt} - ${workerApplications.createdAt})) / 86400), 0)`
    }).from(workerApplications).where(isNotNull2(workerApplications.reviewedAt))
  ]);
  const totalActive = Number(activeResult[0]?.count || 0);
  const pendingCount = Number(pendingResult[0]?.count || 0);
  const approvedLast30 = Number(approvedResult[0]?.count || 0);
  const rejectedLast30 = Number(rejectedResult[0]?.count || 0);
  const avgTimeToDecision = Math.round((Number(decisionTimeResult[0]?.avgDays) || 0) * 10) / 10;
  const totalProcessed = approvedLast30 + rejectedLast30;
  const approvalRate = totalProcessed > 0 ? approvedLast30 / totalProcessed : 0;
  const stalledRatio = totalActive > 0 ? Math.max(0, 1 - pendingCount / (totalActive * 2)) : 1;
  const speedScore = avgTimeToDecision > 0 ? Math.max(0, 1 - avgTimeToDecision / 30) : 0.5;
  const pipelineHealthScore = Math.round(
    (approvalRate * 0.3 + stalledRatio * 0.3 + speedScore * 0.4) * 100
  );
  return {
    totalActive,
    pendingCount,
    approvedLast30Days: approvedLast30,
    rejectedLast30Days: rejectedLast30,
    averageTimeToDecision: avgTimeToDecision,
    pipelineHealthScore: Math.min(100, Math.max(0, pipelineHealthScore))
  };
}
function computeAverage(values) {
  if (values.length === 0) return 0;
  const sum2 = values.reduce((a, b) => a + b, 0);
  return Math.round(sum2 / values.length * 10) / 10;
}
function computeMedian(values) {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  return Math.round(median * 10) / 10;
}
var STAGES, STALLED_THRESHOLD_DAYS;
var init_recruitment = __esm({
  "server/services/clawd/analytics/recruitment.ts"() {
    "use strict";
    init_db();
    init_schema();
    STAGES = ["pending", "reviewed", "approved", "rejected"];
    STALLED_THRESHOLD_DAYS = 7;
  }
});

// server/services/clawd/assistants/recruitment.ts
async function analyzeRecruitment(userQuestion, userId, chatMessageId) {
  let metrics = getCachedAnalytics("recruitment");
  if (!metrics) {
    metrics = await getRecruitmentMetrics();
    setCachedAnalytics("recruitment", metrics);
  }
  return runAssistant(
    "recruitment",
    RECRUITMENT_SYSTEM_PROMPT,
    metrics,
    userQuestion,
    userId,
    chatMessageId
  );
}
var RECRUITMENT_SYSTEM_PROMPT;
var init_recruitment2 = __esm({
  "server/services/clawd/assistants/recruitment.ts"() {
    "use strict";
    init_recruitment();
    init_base_assistant();
    RECRUITMENT_SYSTEM_PROMPT = `You are an expert recruitment pipeline analyst for a staffing agency. Your role is to analyze recruitment data and provide actionable insights.

Focus areas:
- **Stalled Applicants**: Identify applicants stuck in pipeline stages too long, recommend follow-up actions
- **Conversion Rates**: Analyze stage-to-stage conversion rates, flag drop-off points, suggest improvements
- **Shortage Roles**: Highlight roles with chronic staffing shortages, recommend targeted recruitment strategies
- **Pipeline Velocity**: Assess weekly application volume trends, predict future pipeline health
- **Pipeline Health**: Evaluate overall recruitment efficiency using timing metrics and approval rates

When analyzing data:
- Flag any applicants stalled for more than 7 days as needing immediate attention
- Highlight conversion rates below 50% as areas of concern
- Identify roles where unfilled shifts significantly exceed available workers and applicants
- Note trends in pipeline velocity that may indicate seasonal patterns or recruitment gaps
- Consider the pipeline health score and suggest concrete steps to improve it`;
  }
});

// server/payroll-hours.ts
import { eq as eq5, and as and5, gte as gte4, lte as lte4, inArray as inArray2 } from "drizzle-orm";
import * as XLSX from "xlsx";
import * as archiver from "archiver";
function checkAdminRole() {
  return (req, res, next) => {
    const role = req.headers["x-user-role"];
    if (role !== "admin") {
      res.status(403).json({ error: "Forbidden: Admin access required" });
      return;
    }
    next();
  };
}
function calculatePayableHours(timeIn, timeOut) {
  if (!timeIn || !timeOut) {
    return { rawMinutes: 0, rawHours: 0, deductionHours: 0, netHours: 0, netHoursRounded: 0, isIncomplete: true };
  }
  const rawMinutes = (timeOut.getTime() - timeIn.getTime()) / (1e3 * 60);
  if (rawMinutes <= 0) {
    return { rawMinutes: 0, rawHours: 0, deductionHours: 0, netHours: 0, netHoursRounded: 0, isIncomplete: true };
  }
  const rawHours = rawMinutes / 60;
  const deductionHours = rawHours >= 5 ? 0.5 : 0;
  const netHours = Math.max(0, rawHours - deductionHours);
  const netHoursRounded = Math.round(netHours * 4) / 4;
  return { rawMinutes, rawHours: Math.round(rawHours * 100) / 100, deductionHours, netHours: Math.round(netHours * 100) / 100, netHoursRounded, isIncomplete: false };
}
function getCutoffPeriods(year) {
  if (year !== 2026) {
    return [];
  }
  const periods = [
    [1, "2025-12-27", "2026-01-09"],
    [2, "2026-01-10", "2026-01-23"],
    [3, "2026-01-24", "2026-02-06"],
    [4, "2026-02-07", "2026-02-20"],
    [5, "2026-02-21", "2026-03-06"],
    [6, "2026-03-07", "2026-03-20"],
    [7, "2026-03-21", "2026-04-03"],
    [8, "2026-04-04", "2026-04-17"],
    [9, "2026-04-18", "2026-05-01"],
    [10, "2026-05-02", "2026-05-15"],
    [11, "2026-05-16", "2026-05-29"],
    [12, "2026-05-30", "2026-06-12"],
    [13, "2026-06-13", "2026-06-26"],
    [14, "2026-06-27", "2026-07-10"],
    [15, "2026-07-11", "2026-07-24"],
    [16, "2026-07-25", "2026-08-07"],
    [17, "2026-08-08", "2026-08-21"],
    [18, "2026-08-22", "2026-09-04"],
    [19, "2026-09-05", "2026-09-18"],
    [20, "2026-09-19", "2026-10-02"],
    [21, "2026-10-03", "2026-10-16"],
    [22, "2026-10-17", "2026-10-30"],
    [23, "2026-10-31", "2026-11-13"],
    [24, "2026-11-17", "2026-11-27"],
    [25, "2026-11-28", "2026-12-11"],
    [26, "2026-12-12", "2026-12-25"]
  ];
  return periods.map(([period, startDate, endDate]) => ({
    period,
    startDate,
    endDate,
    label: `Period ${period}: ${formatDateLabel(startDate)} - ${formatDateLabel(endDate)}`
  }));
}
function formatDateLabel(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[m - 1]} ${d}`;
}
function getWeeklyWindow(weekStartStr) {
  const startDate = /* @__PURE__ */ new Date(weekStartStr + "T00:00:00");
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6);
  const end = endDate.toISOString().split("T")[0];
  return { start: weekStartStr, end };
}
function getMondaysForYear(year) {
  const mondays = [];
  const date2 = new Date(year, 0, 1);
  while (date2.getDay() !== 1) {
    date2.setDate(date2.getDate() + 1);
  }
  while (date2.getFullYear() <= year) {
    const iso = date2.toISOString().split("T")[0];
    mondays.push(iso);
    date2.setDate(date2.getDate() + 7);
    if (date2.getFullYear() > year && date2.getMonth() > 0) break;
  }
  return mondays;
}
async function fetchLogsInRange(startDate, endDate, hotelId) {
  const startTs = /* @__PURE__ */ new Date(startDate + "T00:00:00.000Z");
  const endTs = /* @__PURE__ */ new Date(endDate + "T23:59:59.999Z");
  let conditions = [
    eq5(titoLogs.status, "approved"),
    gte4(titoLogs.timeIn, startTs),
    lte4(titoLogs.timeIn, endTs)
  ];
  if (hotelId && hotelId !== "all") {
    conditions.push(eq5(titoLogs.workplaceId, hotelId));
  }
  const rows = await db.select({
    logId: titoLogs.id,
    workerId: titoLogs.workerId,
    workerName: users.fullName,
    workerEmail: users.email,
    workplaceId: titoLogs.workplaceId,
    workplaceName: workplaces.name,
    timeIn: titoLogs.timeIn,
    timeOut: titoLogs.timeOut,
    status: titoLogs.status
  }).from(titoLogs).innerJoin(users, eq5(titoLogs.workerId, users.id)).leftJoin(workplaces, eq5(titoLogs.workplaceId, workplaces.id)).where(and5(...conditions)).orderBy(titoLogs.timeIn);
  return rows.map((r) => ({
    logId: r.logId,
    workerId: r.workerId,
    workerName: r.workerName,
    workerEmail: r.workerEmail,
    workplaceId: r.workplaceId,
    workplaceName: r.workplaceName || "Unassigned",
    timeIn: r.timeIn,
    timeOut: r.timeOut,
    logDate: r.timeIn ? r.timeIn.toISOString().split("T")[0] : "",
    status: r.status
  }));
}
async function fetchPaymentProfiles(workerIds) {
  const map = /* @__PURE__ */ new Map();
  if (workerIds.length === 0) return map;
  const profiles = await db.select().from(paymentProfiles).where(inArray2(paymentProfiles.workerUserId, workerIds));
  for (const p of profiles) {
    let bankRef = null;
    if (p.bankInstitution || p.bankTransit || p.bankAccount) {
      bankRef = [p.bankInstitution, p.bankTransit, p.bankAccount ? `****${p.bankAccount.slice(-4)}` : null].filter(Boolean).join("-");
    }
    if (p.voidChequeFileId) {
      bankRef = bankRef ? `${bankRef} (VC: ${p.voidChequeFileId})` : `VC: ${p.voidChequeFileId}`;
    }
    map.set(p.workerUserId, { etransferEmail: p.etransferEmail, bankRef });
  }
  return map;
}
async function fetchPaymentProfilesFull(workerIds) {
  const map = /* @__PURE__ */ new Map();
  if (workerIds.length === 0) return map;
  const profiles = await db.select().from(paymentProfiles).where(inArray2(paymentProfiles.workerUserId, workerIds));
  for (const p of profiles) {
    let bankRef = null;
    if (p.bankInstitution || p.bankTransit || p.bankAccount) {
      bankRef = [p.bankInstitution, p.bankTransit, p.bankAccount].filter(Boolean).join("-");
    }
    if (p.voidChequeFileId) {
      bankRef = bankRef ? `${bankRef} (VC: ${p.voidChequeFileId})` : `VC: ${p.voidChequeFileId}`;
    }
    map.set(p.workerUserId, { etransferEmail: p.etransferEmail, bankRef });
  }
  return map;
}
function aggregateByHotel(logs, paymentMap) {
  const hotelMap = /* @__PURE__ */ new Map();
  for (const log2 of logs) {
    const hKey = log2.workplaceId || "unassigned";
    if (!hotelMap.has(hKey)) {
      hotelMap.set(hKey, { workplaceId: hKey, workplaceName: log2.workplaceName, workers: /* @__PURE__ */ new Map() });
    }
    const hotel = hotelMap.get(hKey);
    if (!hotel.workers.has(log2.workerId)) {
      const payment = paymentMap.get(log2.workerId);
      hotel.workers.set(log2.workerId, {
        workerId: log2.workerId,
        workerName: log2.workerName,
        workerEmail: log2.workerEmail,
        totalHoursRounded: 0,
        totalRawHours: 0,
        logsCount: 0,
        incompleteLogs: 0,
        datesWorked: [],
        etransferEmail: payment?.etransferEmail || null,
        bankRef: payment?.bankRef || null,
        logs: []
      });
    }
    const worker = hotel.workers.get(log2.workerId);
    const calc = calculatePayableHours(log2.timeIn, log2.timeOut);
    worker.totalHoursRounded += calc.netHoursRounded;
    worker.totalRawHours += calc.rawHours;
    worker.logsCount += 1;
    if (calc.isIncomplete) worker.incompleteLogs += 1;
    if (log2.logDate && !worker.datesWorked.includes(log2.logDate)) {
      worker.datesWorked.push(log2.logDate);
    }
    worker.logs.push({
      logId: log2.logId,
      date: log2.logDate,
      timeIn: log2.timeIn ? log2.timeIn.toISOString() : null,
      timeOut: log2.timeOut ? log2.timeOut.toISOString() : null,
      rawHours: calc.rawHours,
      deductionHours: calc.deductionHours,
      netHoursRounded: calc.netHoursRounded,
      isIncomplete: calc.isIncomplete
    });
  }
  const groups = [];
  for (const [, hotel] of hotelMap) {
    const workers = Array.from(hotel.workers.values()).map((w) => ({
      ...w,
      totalHoursRounded: Math.round(w.totalHoursRounded * 100) / 100,
      totalRawHours: Math.round(w.totalRawHours * 100) / 100,
      datesWorked: w.datesWorked.sort()
    }));
    groups.push({
      workplaceId: hotel.workplaceId,
      workplaceName: hotel.workplaceName,
      workers,
      totalHours: workers.reduce((s, w) => s + w.totalHoursRounded, 0),
      totalLogs: workers.reduce((s, w) => s + w.logsCount, 0)
    });
  }
  return groups.sort((a, b) => a.workplaceName.localeCompare(b.workplaceName));
}
function generateTimesheetRows(groups, windowLabel, startDate, endDate, generatedAt) {
  const header = ["Hotel", "Period", "PeriodStart", "PeriodEnd", "WorkerName", "WorkerId", "DatesWorked", "HoursWorked", "ShiftsWorked", "EtransferEmail", "VoidChequeOrBankRef", "GeneratedAt"];
  const rows = [header];
  for (const hotel of groups) {
    for (const worker of hotel.workers) {
      rows.push([
        hotel.workplaceName,
        windowLabel,
        startDate,
        endDate,
        worker.workerName,
        worker.workerId,
        worker.datesWorked.join(", "),
        worker.totalHoursRounded,
        worker.logsCount,
        worker.etransferEmail || "",
        worker.bankRef || "",
        generatedAt
      ]);
    }
  }
  return rows;
}
function generateDetailedRows(groups, windowLabel, startDate, endDate, generatedAt) {
  const header = ["Hotel", "Period", "PeriodStart", "PeriodEnd", "WorkerName", "WorkerId", "Date", "TimeIn", "TimeOut", "RawHours", "BreakDeduction", "NetHoursRounded", "Incomplete", "GeneratedAt"];
  const rows = [header];
  for (const hotel of groups) {
    for (const worker of hotel.workers) {
      for (const log2 of worker.logs) {
        rows.push([
          hotel.workplaceName,
          windowLabel,
          startDate,
          endDate,
          worker.workerName,
          worker.workerId,
          log2.date,
          log2.timeIn || "",
          log2.timeOut || "",
          log2.rawHours,
          log2.deductionHours,
          log2.netHoursRounded,
          log2.isIncomplete ? "Yes" : "No",
          generatedAt
        ]);
      }
    }
  }
  return rows;
}
function generatePaymentSummaryRows(groups, windowLabel, startDate, endDate, generatedAt) {
  const header = ["Hotel", "Period", "PeriodStart", "PeriodEnd", "WorkerName", "WorkerId", "TotalHours", "ShiftsWorked", "EtransferEmail", "VoidChequeOrBankRef", "GeneratedAt"];
  const rows = [header];
  for (const hotel of groups) {
    for (const worker of hotel.workers) {
      rows.push([
        hotel.workplaceName,
        windowLabel,
        startDate,
        endDate,
        worker.workerName,
        worker.workerId,
        worker.totalHoursRounded,
        worker.logsCount,
        worker.etransferEmail || "",
        worker.bankRef || "",
        generatedAt
      ]);
    }
    rows.push([
      hotel.workplaceName,
      windowLabel,
      startDate,
      endDate,
      "=== HOTEL TOTAL ===",
      "",
      hotel.totalHours,
      hotel.totalLogs,
      "",
      "",
      generatedAt
    ]);
  }
  return rows;
}
function generateInvoiceSummaryRows(groups, weekStart, weekEnd, generatedAt) {
  const header = ["Hotel", "WeekStart", "WeekEnd", "WorkerName", "WorkerId", "TotalHours", "LogsCount", "GeneratedAt"];
  const rows = [header];
  for (const hotel of groups) {
    for (const worker of hotel.workers) {
      rows.push([
        hotel.workplaceName,
        weekStart,
        weekEnd,
        worker.workerName,
        worker.workerId,
        worker.totalHoursRounded,
        worker.logsCount,
        generatedAt
      ]);
    }
    rows.push([
      hotel.workplaceName,
      weekStart,
      weekEnd,
      "=== HOTEL TOTAL ===",
      "",
      hotel.totalHours,
      hotel.totalLogs,
      generatedAt
    ]);
  }
  return rows;
}
function rowsToBuffer(rows, format2, sheetName = "Sheet1") {
  if (format2 === "csv") {
    const csvContent = rows.map(
      (row) => row.map((cell) => {
        const str = String(cell ?? "");
        if (str.includes(",") || str.includes('"') || str.includes("\n")) {
          return `"${str.replace(/"/g, '""')}"`;
        }
        return str;
      }).join(",")
    ).join("\n");
    return Buffer.from(csvContent, "utf-8");
  }
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(rows);
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  return Buffer.from(XLSX.write(wb, { bookType: "xlsx", type: "buffer" }));
}
function sanitizeFileName(name) {
  return name.replace(/[^a-zA-Z0-9_-]/g, "_").replace(/_+/g, "_");
}
function registerPayrollHoursRoutes(app2) {
  app2.get("/api/admin/hours/cutoffs", checkAdminRole(), async (req, res) => {
    try {
      const year = parseInt(req.query.year) || 2026;
      const periods = getCutoffPeriods(year);
      res.json({ year, periods });
    } catch (error) {
      console.error("Error fetching cutoffs:", error);
      res.status(500).json({ error: "Failed to fetch cutoff periods" });
    }
  });
  app2.get("/api/admin/hours/weeks", checkAdminRole(), async (req, res) => {
    try {
      const year = parseInt(req.query.year) || 2026;
      const mondays = getMondaysForYear(year);
      const weeks = mondays.map((monday, i) => {
        const window = getWeeklyWindow(monday);
        return {
          weekNumber: i + 1,
          startDate: window.start,
          endDate: window.end,
          label: `Week ${i + 1}: ${formatDateLabel(window.start)} - ${formatDateLabel(window.end)}`
        };
      });
      res.json({ year, weeks });
    } catch (error) {
      console.error("Error fetching weeks:", error);
      res.status(500).json({ error: "Failed to fetch weeks" });
    }
  });
  app2.get("/api/admin/hours/hotels", checkAdminRole(), async (_req, res) => {
    try {
      const hotels = await db.select({ id: workplaces.id, name: workplaces.name, isActive: workplaces.isActive }).from(workplaces).orderBy(workplaces.name);
      res.json({ hotels });
    } catch (error) {
      console.error("Error fetching hotels:", error);
      res.status(500).json({ error: "Failed to fetch hotels" });
    }
  });
  app2.get("/api/admin/hours/aggregate", checkAdminRole(), async (req, res) => {
    try {
      const mode = req.query.mode;
      const hotelId = req.query.hotelId || "all";
      let startDate, endDate, windowLabel;
      if (mode === "weekly") {
        const weekStart = req.query.weekStart;
        if (!weekStart) {
          res.status(400).json({ error: "weekStart is required for weekly mode" });
          return;
        }
        const window = getWeeklyWindow(weekStart);
        startDate = window.start;
        endDate = window.end;
        windowLabel = `Week: ${formatDateLabel(startDate)} - ${formatDateLabel(endDate)}`;
      } else if (mode === "cutoff") {
        const year = parseInt(req.query.year) || 2026;
        const period = parseInt(req.query.period);
        if (!period || period < 1 || period > 26) {
          res.status(400).json({ error: "period (1-26) is required for cutoff mode" });
          return;
        }
        const periods = getCutoffPeriods(year);
        const p = periods.find((pp) => pp.period === period);
        if (!p) {
          res.status(400).json({ error: `Period ${period} not found for year ${year}` });
          return;
        }
        startDate = p.startDate;
        endDate = p.endDate;
        windowLabel = `Period ${period}: ${formatDateLabel(startDate)} - ${formatDateLabel(endDate)}`;
      } else {
        res.status(400).json({ error: "mode must be 'weekly' or 'cutoff'" });
        return;
      }
      const logs = await fetchLogsInRange(startDate, endDate, hotelId);
      const workerIds = [...new Set(logs.map((l) => l.workerId))];
      const paymentMap = await fetchPaymentProfiles(workerIds);
      const groups = aggregateByHotel(logs, paymentMap);
      const grandTotalHours = groups.reduce((s, g) => s + g.totalHours, 0);
      const grandTotalLogs = groups.reduce((s, g) => s + g.totalLogs, 0);
      res.json({
        mode,
        startDate,
        endDate,
        windowLabel,
        hotelId,
        hotels: groups,
        grandTotalHours: Math.round(grandTotalHours * 100) / 100,
        grandTotalLogs
      });
    } catch (error) {
      console.error("Error in aggregation:", error);
      res.status(500).json({ error: "Failed to aggregate hours data" });
    }
  });
  app2.get("/api/admin/hours/export", checkAdminRole(), async (req, res) => {
    try {
      const mode = req.query.mode;
      const format2 = req.query.format || "csv";
      const type = req.query.type;
      const hotelId = req.query.hotelId || "all";
      if (!["csv", "xlsx"].includes(format2)) {
        res.status(400).json({ error: "format must be csv or xlsx" });
        return;
      }
      let startDate, endDate, windowLabel, filePrefix;
      let periodYear = 2026, periodNumber = 0;
      if (mode === "weekly") {
        const weekStart = req.query.weekStart;
        if (!weekStart) {
          res.status(400).json({ error: "weekStart required" });
          return;
        }
        const window = getWeeklyWindow(weekStart);
        startDate = window.start;
        endDate = window.end;
        windowLabel = `Week: ${formatDateLabel(startDate)} - ${formatDateLabel(endDate)}`;
        filePrefix = `WFC_Weekly_${weekStart}`;
        periodYear = parseInt(weekStart.substring(0, 4));
      } else if (mode === "cutoff") {
        const year = parseInt(req.query.year) || 2026;
        const period = parseInt(req.query.period);
        const periods = getCutoffPeriods(year);
        const p = periods.find((pp) => pp.period === period);
        if (!p) {
          res.status(400).json({ error: `Period ${period} not found` });
          return;
        }
        startDate = p.startDate;
        endDate = p.endDate;
        windowLabel = `Period ${period}`;
        filePrefix = `WFC_Payroll_${year}_Period-${String(period).padStart(2, "0")}`;
        periodYear = year;
        periodNumber = period;
      } else {
        res.status(400).json({ error: "mode must be weekly or cutoff" });
        return;
      }
      const logs = await fetchLogsInRange(startDate, endDate, hotelId);
      const workerIds = [...new Set(logs.map((l) => l.workerId))];
      const paymentMap = await fetchPaymentProfilesFull(workerIds);
      const groups = aggregateByHotel(logs, paymentMap);
      const generatedAt = (/* @__PURE__ */ new Date()).toISOString();
      let rows;
      let sheetName;
      let typeSuffix;
      switch (type) {
        case "invoiceSummary":
          rows = generateInvoiceSummaryRows(groups, startDate, endDate, generatedAt);
          sheetName = "Invoice Summary";
          typeSuffix = "InvoiceSummary";
          break;
        case "invoiceDetailed":
          rows = generateDetailedRows(groups, windowLabel, startDate, endDate, generatedAt);
          sheetName = "Invoice Detailed";
          typeSuffix = "InvoiceDetailed";
          break;
        case "payrollTimesheet":
          rows = generateTimesheetRows(groups, windowLabel, startDate, endDate, generatedAt);
          sheetName = "Payroll Timesheet";
          typeSuffix = "Timesheet";
          break;
        case "payrollPaymentSummary":
          rows = generatePaymentSummaryRows(groups, windowLabel, startDate, endDate, generatedAt);
          sheetName = "Payment Summary";
          typeSuffix = "PaymentSummary";
          break;
        default:
          res.status(400).json({ error: "type must be invoiceSummary, invoiceDetailed, payrollTimesheet, or payrollPaymentSummary" });
          return;
      }
      const hotelName = hotelId === "all" ? "AllHotels" : sanitizeFileName(groups[0]?.workplaceName || "Hotel");
      const fileName = `${filePrefix}_${hotelName}_${typeSuffix}.${format2}`;
      const buffer = rowsToBuffer(rows, format2, sheetName);
      try {
        await db.insert(exportAuditLogs).values({
          adminUserId: req.headers["x-user-id"] || "unknown",
          exportType: type,
          fileFormat: format2,
          periodYear,
          periodNumber,
          workplaceId: hotelId === "all" ? null : hotelId,
          workplaceName: hotelId === "all" ? "All Hotels" : groups[0]?.workplaceName || null,
          fileName
        });
      } catch (auditErr) {
        console.error("Audit log error (non-blocking):", auditErr);
      }
      const contentType = format2 === "csv" ? "text/csv" : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      res.setHeader("Content-Type", contentType);
      res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
      res.send(buffer);
    } catch (error) {
      console.error("Error in export:", error);
      res.status(500).json({ error: "Failed to generate export" });
    }
  });
  app2.post("/api/admin/hours/email", checkAdminRole(), async (req, res) => {
    try {
      const { to, mode, format: fmt, type, hotelId: hId, weekStart, year: yr, period: pd, subject } = req.body;
      const format2 = fmt || "csv";
      if (!to || typeof to !== "string" || !to.includes("@")) {
        res.status(400).json({ error: "Valid email address is required" });
        return;
      }
      if (!["csv", "xlsx"].includes(format2)) {
        res.status(400).json({ error: "format must be csv or xlsx" });
        return;
      }
      const hotelId = hId || "all";
      let startDate, endDate, windowLabel, filePrefix;
      let periodYear = 2026, periodNumber = 0;
      if (mode === "weekly") {
        if (!weekStart) {
          res.status(400).json({ error: "weekStart required" });
          return;
        }
        const window = getWeeklyWindow(weekStart);
        startDate = window.start;
        endDate = window.end;
        windowLabel = `Week: ${formatDateLabel(startDate)} - ${formatDateLabel(endDate)}`;
        filePrefix = `WFC_Weekly_${weekStart}`;
        periodYear = parseInt(weekStart.substring(0, 4));
      } else if (mode === "cutoff") {
        const year = parseInt(yr) || 2026;
        const period = parseInt(pd);
        const periods = getCutoffPeriods(year);
        const p = periods.find((pp) => pp.period === period);
        if (!p) {
          res.status(400).json({ error: `Period ${period} not found` });
          return;
        }
        startDate = p.startDate;
        endDate = p.endDate;
        windowLabel = `Period ${period}`;
        filePrefix = `WFC_Payroll_${year}_Period-${String(period).padStart(2, "0")}`;
        periodYear = year;
        periodNumber = period;
      } else {
        res.status(400).json({ error: "mode must be weekly or cutoff" });
        return;
      }
      const logs = await fetchLogsInRange(startDate, endDate, hotelId);
      const workerIds = [...new Set(logs.map((l) => l.workerId))];
      const paymentMap = await fetchPaymentProfilesFull(workerIds);
      const groups = aggregateByHotel(logs, paymentMap);
      const generatedAt = (/* @__PURE__ */ new Date()).toISOString();
      let rows;
      let sheetName;
      let typeSuffix;
      switch (type) {
        case "invoiceSummary":
          rows = generateInvoiceSummaryRows(groups, startDate, endDate, generatedAt);
          sheetName = "Invoice Summary";
          typeSuffix = "InvoiceSummary";
          break;
        case "invoiceDetailed":
          rows = generateDetailedRows(groups, windowLabel, startDate, endDate, generatedAt);
          sheetName = "Invoice Detailed";
          typeSuffix = "InvoiceDetailed";
          break;
        case "payrollTimesheet":
          rows = generateTimesheetRows(groups, windowLabel, startDate, endDate, generatedAt);
          sheetName = "Payroll Timesheet";
          typeSuffix = "Timesheet";
          break;
        case "payrollPaymentSummary":
          rows = generatePaymentSummaryRows(groups, windowLabel, startDate, endDate, generatedAt);
          sheetName = "Payment Summary";
          typeSuffix = "PaymentSummary";
          break;
        default:
          res.status(400).json({ error: "type must be invoiceSummary, invoiceDetailed, payrollTimesheet, or payrollPaymentSummary" });
          return;
      }
      const hotelName = hotelId === "all" ? "AllHotels" : sanitizeFileName(groups[0]?.workplaceName || "Hotel");
      const fileName = `${filePrefix}_${hotelName}_${typeSuffix}.${format2}`;
      const buffer = rowsToBuffer(rows, format2, sheetName);
      const emailSubject = subject || `WFConnect ${sheetName} - ${windowLabel} (${startDate} to ${endDate})`;
      const bodyText = `Please find attached the ${sheetName} report for ${windowLabel} (${startDate} to ${endDate}).

- WFConnect`;
      let result;
      if (format2 === "csv") {
        result = await sendCSVEmail(to, emailSubject, bodyText, buffer.toString(), fileName);
      } else {
        result = await sendXLSXEmail(to, emailSubject, bodyText, buffer, fileName);
      }
      if (result.success) {
        try {
          await db.insert(exportAuditLogs).values({
            adminUserId: req.headers["x-user-id"] || "unknown",
            exportType: type,
            fileFormat: format2,
            periodYear,
            periodNumber,
            workplaceId: hotelId === "all" ? null : hotelId,
            workplaceName: hotelId === "all" ? "All Hotels" : groups[0]?.workplaceName || null,
            fileName: `[EMAILED] ${fileName}`
          });
        } catch (auditErr) {
          console.error("Audit log error (non-blocking):", auditErr);
        }
        res.json({ success: true, message: `${sheetName} sent to ${to}` });
      } else {
        res.status(500).json({ error: result.error || "Failed to send email" });
      }
    } catch (error) {
      console.error("Error emailing hours export:", error);
      res.status(500).json({ error: "Failed to email hours export" });
    }
  });
  app2.get("/api/admin/hours/export/all", checkAdminRole(), async (req, res) => {
    try {
      const mode = req.query.mode;
      const format2 = req.query.format || "csv";
      const type = req.query.type;
      let startDate, endDate, windowLabel, filePrefix;
      let periodYear = 2026, periodNumber = 0;
      if (mode === "weekly") {
        const weekStart = req.query.weekStart;
        if (!weekStart) {
          res.status(400).json({ error: "weekStart required" });
          return;
        }
        const window = getWeeklyWindow(weekStart);
        startDate = window.start;
        endDate = window.end;
        windowLabel = `Week: ${formatDateLabel(startDate)} - ${formatDateLabel(endDate)}`;
        filePrefix = `WFC_Weekly_${weekStart}`;
        periodYear = parseInt(weekStart.substring(0, 4));
      } else if (mode === "cutoff") {
        const year = parseInt(req.query.year) || 2026;
        const period = parseInt(req.query.period);
        const periods = getCutoffPeriods(year);
        const p = periods.find((pp) => pp.period === period);
        if (!p) {
          res.status(400).json({ error: `Period ${period} not found` });
          return;
        }
        startDate = p.startDate;
        endDate = p.endDate;
        windowLabel = `Period ${period}`;
        filePrefix = `WFC_Payroll_${year}_Period-${String(period).padStart(2, "0")}`;
        periodYear = year;
        periodNumber = period;
      } else {
        res.status(400).json({ error: "mode must be weekly or cutoff" });
        return;
      }
      const allLogs = await fetchLogsInRange(startDate, endDate);
      const workerIds = [...new Set(allLogs.map((l) => l.workerId))];
      const paymentMap = await fetchPaymentProfilesFull(workerIds);
      const allGroups = aggregateByHotel(allLogs, paymentMap);
      const generatedAt = (/* @__PURE__ */ new Date()).toISOString();
      res.setHeader("Content-Type", "application/zip");
      res.setHeader("Content-Disposition", `attachment; filename="${filePrefix}_AllHotels.zip"`);
      const archive = archiver.default("zip", { zlib: { level: 9 } });
      archive.pipe(res);
      for (const hotel of allGroups) {
        const singleGroup = [hotel];
        let rows;
        let typeSuffix;
        switch (type) {
          case "invoiceSummary":
            rows = generateInvoiceSummaryRows(singleGroup, startDate, endDate, generatedAt);
            typeSuffix = "InvoiceSummary";
            break;
          case "invoiceDetailed":
            rows = generateDetailedRows(singleGroup, windowLabel, startDate, endDate, generatedAt);
            typeSuffix = "InvoiceDetailed";
            break;
          case "payrollTimesheet":
            rows = generateTimesheetRows(singleGroup, windowLabel, startDate, endDate, generatedAt);
            typeSuffix = "Timesheet";
            break;
          case "payrollPaymentSummary":
            rows = generatePaymentSummaryRows(singleGroup, windowLabel, startDate, endDate, generatedAt);
            typeSuffix = "PaymentSummary";
            break;
          default:
            rows = generateTimesheetRows(singleGroup, windowLabel, startDate, endDate, generatedAt);
            typeSuffix = "Timesheet";
        }
        const hotelFileName = `${filePrefix}_${sanitizeFileName(hotel.workplaceName)}_${typeSuffix}.${format2}`;
        const buffer = rowsToBuffer(rows, format2, "Sheet1");
        archive.append(buffer, { name: hotelFileName });
      }
      try {
        await db.insert(exportAuditLogs).values({
          adminUserId: req.headers["x-user-id"] || "unknown",
          exportType: `${type}_allHotels`,
          fileFormat: "zip",
          periodYear,
          periodNumber,
          workplaceId: null,
          workplaceName: "All Hotels (ZIP)",
          fileName: `${filePrefix}_AllHotels.zip`
        });
      } catch (auditErr) {
        console.error("Audit log error (non-blocking):", auditErr);
      }
      await archive.finalize();
    } catch (error) {
      console.error("Error in ZIP export:", error);
      res.status(500).json({ error: "Failed to generate ZIP export" });
    }
  });
}
var init_payroll_hours = __esm({
  "server/payroll-hours.ts"() {
    "use strict";
    init_db();
    init_schema();
    init_email();
  }
});

// server/services/clawd/analytics/payroll.ts
import { eq as eq6, and as and6, gte as gte5, lte as lte5, isNotNull as isNotNull3, ne as ne2, count as count3 } from "drizzle-orm";
function getWindowDates2(window) {
  const end = /* @__PURE__ */ new Date();
  const start = /* @__PURE__ */ new Date();
  start.setDate(start.getDate() - window.days);
  return { start, end };
}
function getCurrentWeekBounds() {
  const now = /* @__PURE__ */ new Date();
  const day = now.getDay();
  const diff = day === 0 ? 6 : day - 1;
  const start = new Date(now);
  start.setDate(now.getDate() - diff);
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  end.setHours(23, 59, 59, 999);
  return { start, end };
}
function estimateShiftHours(startTime, endTime) {
  if (!endTime) return 8;
  const [sh, sm] = startTime.split(":").map(Number);
  const [eh, em] = endTime.split(":").map(Number);
  let hours = (eh * 60 + em - sh * 60 - sm) / 60;
  if (hours <= 0) hours += 24;
  return hours;
}
async function getPayrollMetrics(windowKey = "30d") {
  const window = TIME_WINDOWS[windowKey] || TIME_WINDOWS["30d"];
  const { start, end } = getWindowDates2(window);
  const [
    hoursComparisonByWorker,
    hoursComparisonBySite,
    missingTimesheets,
    overtimeRisks,
    suspiciousPatterns,
    duplicateTitoEntries,
    pendingCorrections,
    payrollExposure
  ] = await Promise.all([
    computeHoursComparisonByWorker(start, end),
    computeHoursComparisonBySite(start, end),
    computeMissingTimesheets(start, end),
    computeOvertimeRisks(),
    computeSuspiciousPatterns(start, end),
    computeDuplicateTitoEntries(start, end),
    computePendingCorrections(),
    computePayrollExposure(start, end, window.label)
  ]);
  return {
    hoursComparisonByWorker,
    hoursComparisonBySite,
    missingTimesheets,
    overtimeRisks,
    suspiciousPatterns,
    duplicateTitoEntries,
    pendingCorrections,
    payrollExposure,
    generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    windowDays: window.days
  };
}
async function computeHoursComparisonByWorker(start, end) {
  const startStr = start.toISOString().split("T")[0];
  const endStr = end.toISOString().split("T")[0];
  const scheduledShifts = await db.select({
    workerId: shifts.workerUserId,
    workerName: users.fullName,
    startTime: shifts.startTime,
    endTime: shifts.endTime
  }).from(shifts).innerJoin(users, eq6(shifts.workerUserId, users.id)).where(
    and6(
      gte5(shifts.date, startStr),
      lte5(shifts.date, endStr),
      isNotNull3(shifts.workerUserId),
      ne2(shifts.status, "cancelled")
    )
  );
  const scheduledByWorker = /* @__PURE__ */ new Map();
  for (const s of scheduledShifts) {
    if (!s.workerId) continue;
    const existing = scheduledByWorker.get(s.workerId) || { name: s.workerName, hours: 0 };
    existing.hours += estimateShiftHours(s.startTime, s.endTime);
    scheduledByWorker.set(s.workerId, existing);
  }
  const titoRecords = await db.select({
    workerId: titoLogs.workerId,
    workerName: users.fullName,
    timeIn: titoLogs.timeIn,
    timeOut: titoLogs.timeOut
  }).from(titoLogs).innerJoin(users, eq6(titoLogs.workerId, users.id)).where(
    and6(
      gte5(titoLogs.timeIn, start),
      lte5(titoLogs.timeIn, end),
      eq6(titoLogs.status, "approved")
    )
  );
  const actualByWorker = /* @__PURE__ */ new Map();
  for (const t of titoRecords) {
    const calc = calculatePayableHours(t.timeIn, t.timeOut);
    const existing = actualByWorker.get(t.workerId) || { name: t.workerName, hours: 0 };
    existing.hours += calc.netHoursRounded;
    actualByWorker.set(t.workerId, existing);
  }
  const allWorkerIds = /* @__PURE__ */ new Set([...scheduledByWorker.keys(), ...actualByWorker.keys()]);
  const results = [];
  for (const wid of allWorkerIds) {
    const scheduled = scheduledByWorker.get(wid);
    const actual = actualByWorker.get(wid);
    const scheduledHours = scheduled?.hours || 0;
    const actualHours = actual?.hours || 0;
    const variance = actualHours - scheduledHours;
    const variancePercent = scheduledHours > 0 ? variance / scheduledHours * 100 : 0;
    results.push({
      workerId: wid,
      workerName: scheduled?.name || actual?.name || "Unknown",
      scheduledHours: Math.round(scheduledHours * 100) / 100,
      actualHours: Math.round(actualHours * 100) / 100,
      variance: Math.round(variance * 100) / 100,
      variancePercent: Math.round(variancePercent * 10) / 10
    });
  }
  return results.sort((a, b) => Math.abs(b.variance) - Math.abs(a.variance));
}
async function computeHoursComparisonBySite(start, end) {
  const startStr = start.toISOString().split("T")[0];
  const endStr = end.toISOString().split("T")[0];
  const scheduledShifts = await db.select({
    workplaceId: shifts.workplaceId,
    workplaceName: workplaces.name,
    startTime: shifts.startTime,
    endTime: shifts.endTime
  }).from(shifts).innerJoin(workplaces, eq6(shifts.workplaceId, workplaces.id)).where(
    and6(
      gte5(shifts.date, startStr),
      lte5(shifts.date, endStr),
      ne2(shifts.status, "cancelled")
    )
  );
  const scheduledBySite = /* @__PURE__ */ new Map();
  for (const s of scheduledShifts) {
    const existing = scheduledBySite.get(s.workplaceId) || { name: s.workplaceName, hours: 0 };
    existing.hours += estimateShiftHours(s.startTime, s.endTime);
    scheduledBySite.set(s.workplaceId, existing);
  }
  const titoRecords = await db.select({
    workplaceId: titoLogs.workplaceId,
    workplaceName: workplaces.name,
    timeIn: titoLogs.timeIn,
    timeOut: titoLogs.timeOut
  }).from(titoLogs).leftJoin(workplaces, eq6(titoLogs.workplaceId, workplaces.id)).where(
    and6(
      gte5(titoLogs.timeIn, start),
      lte5(titoLogs.timeIn, end),
      eq6(titoLogs.status, "approved"),
      isNotNull3(titoLogs.workplaceId)
    )
  );
  const actualBySite = /* @__PURE__ */ new Map();
  for (const t of titoRecords) {
    if (!t.workplaceId) continue;
    const calc = calculatePayableHours(t.timeIn, t.timeOut);
    const existing = actualBySite.get(t.workplaceId) || { name: t.workplaceName || "Unknown", hours: 0 };
    existing.hours += calc.netHoursRounded;
    actualBySite.set(t.workplaceId, existing);
  }
  const allSiteIds = /* @__PURE__ */ new Set([...scheduledBySite.keys(), ...actualBySite.keys()]);
  const results = [];
  for (const sid of allSiteIds) {
    const scheduled = scheduledBySite.get(sid);
    const actual = actualBySite.get(sid);
    const scheduledHours = scheduled?.hours || 0;
    const actualHours = actual?.hours || 0;
    const variance = actualHours - scheduledHours;
    const variancePercent = scheduledHours > 0 ? variance / scheduledHours * 100 : 0;
    results.push({
      workplaceId: sid,
      workplaceName: scheduled?.name || actual?.name || "Unknown",
      scheduledHours: Math.round(scheduledHours * 100) / 100,
      actualHours: Math.round(actualHours * 100) / 100,
      variance: Math.round(variance * 100) / 100,
      variancePercent: Math.round(variancePercent * 10) / 10
    });
  }
  return results.sort((a, b) => Math.abs(b.variance) - Math.abs(a.variance));
}
async function computeMissingTimesheets(start, end) {
  const startStr = start.toISOString().split("T")[0];
  const endStr = end.toISOString().split("T")[0];
  const completedShifts = await db.select({
    workerId: shifts.workerUserId,
    workerName: users.fullName,
    shiftCount: count3()
  }).from(shifts).innerJoin(users, eq6(shifts.workerUserId, users.id)).where(
    and6(
      gte5(shifts.date, startStr),
      lte5(shifts.date, endStr),
      eq6(shifts.status, "completed"),
      isNotNull3(shifts.workerUserId)
    )
  ).groupBy(shifts.workerUserId, users.fullName);
  const approvedTimesheets = await db.select({
    workerId: timesheets.workerUserId,
    tsCount: count3()
  }).from(timesheets).where(
    and6(
      eq6(timesheets.status, "approved")
    )
  ).groupBy(timesheets.workerUserId);
  const tsMap = /* @__PURE__ */ new Map();
  for (const ts of approvedTimesheets) {
    tsMap.set(ts.workerId, Number(ts.tsCount));
  }
  const results = [];
  for (const cs of completedShifts) {
    if (!cs.workerId) continue;
    const completedCount = Number(cs.shiftCount);
    const approvedCount = tsMap.get(cs.workerId) || 0;
    if (completedCount > approvedCount) {
      results.push({
        workerId: cs.workerId,
        workerName: cs.workerName,
        completedShiftsCount: completedCount,
        approvedTimesheetCount: approvedCount,
        missingCount: completedCount - approvedCount
      });
    }
  }
  return results.sort((a, b) => b.missingCount - a.missingCount);
}
async function computeOvertimeRisks() {
  const { start, end } = getCurrentWeekBounds();
  const titoRecords = await db.select({
    workerId: titoLogs.workerId,
    workerName: users.fullName,
    timeIn: titoLogs.timeIn,
    timeOut: titoLogs.timeOut
  }).from(titoLogs).innerJoin(users, eq6(titoLogs.workerId, users.id)).where(
    and6(
      gte5(titoLogs.timeIn, start),
      lte5(titoLogs.timeIn, end),
      eq6(titoLogs.status, "approved")
    )
  );
  const hoursByWorker = /* @__PURE__ */ new Map();
  for (const t of titoRecords) {
    const calc = calculatePayableHours(t.timeIn, t.timeOut);
    const existing = hoursByWorker.get(t.workerId) || { name: t.workerName, hours: 0 };
    existing.hours += calc.netHoursRounded;
    hoursByWorker.set(t.workerId, existing);
  }
  const results = [];
  for (const [wid, data] of hoursByWorker) {
    const hoursRemaining = OVERTIME_THRESHOLD_WEEKLY - data.hours;
    const atRisk = hoursRemaining <= 8;
    if (atRisk || data.hours >= OVERTIME_THRESHOLD_WEEKLY * 0.75) {
      results.push({
        workerId: wid,
        workerName: data.name,
        currentWeekHours: Math.round(data.hours * 100) / 100,
        overtimeThreshold: OVERTIME_THRESHOLD_WEEKLY,
        hoursRemaining: Math.round(Math.max(0, hoursRemaining) * 100) / 100,
        atRisk
      });
    }
  }
  return results.sort((a, b) => a.hoursRemaining - b.hoursRemaining);
}
async function computeSuspiciousPatterns(start, end) {
  const titoRecords = await db.select({
    workerId: titoLogs.workerId,
    workerName: users.fullName,
    timeIn: titoLogs.timeIn,
    timeOut: titoLogs.timeOut
  }).from(titoLogs).innerJoin(users, eq6(titoLogs.workerId, users.id)).where(
    and6(
      gte5(titoLogs.timeIn, start),
      lte5(titoLogs.timeIn, end),
      eq6(titoLogs.status, "approved"),
      isNotNull3(titoLogs.timeOut)
    )
  );
  const workerShifts = /* @__PURE__ */ new Map();
  for (const t of titoRecords) {
    const calc = calculatePayableHours(t.timeIn, t.timeOut);
    if (calc.isIncomplete) continue;
    const existing = workerShifts.get(t.workerId) || { name: t.workerName, hours: [] };
    existing.hours.push(calc.netHoursRounded);
    workerShifts.set(t.workerId, existing);
  }
  const patterns = [];
  for (const [wid, data] of workerShifts) {
    if (data.hours.length < 3) continue;
    const hourCounts = /* @__PURE__ */ new Map();
    for (const h of data.hours) {
      hourCounts.set(h, (hourCounts.get(h) || 0) + 1);
    }
    for (const [hours, occCount] of hourCounts) {
      if (occCount >= 5 && occCount / data.hours.length >= 0.8) {
        patterns.push({
          type: "identical_hours",
          workerId: wid,
          workerName: data.name,
          detail: `Logged exactly ${hours}h on ${occCount} of ${data.hours.length} shifts`,
          occurrences: occCount
        });
      }
    }
    const shortShifts = data.hours.filter((h) => h < 3);
    if (shortShifts.length >= 3 && shortShifts.length / data.hours.length >= 0.5) {
      patterns.push({
        type: "consistently_short",
        workerId: wid,
        workerName: data.name,
        detail: `${shortShifts.length} of ${data.hours.length} shifts under 3 hours`,
        occurrences: shortShifts.length
      });
    }
  }
  for (const t of titoRecords) {
    if (!t.timeIn || !t.timeOut) continue;
    const diffMinutes = (t.timeOut.getTime() - t.timeIn.getTime()) / (1e3 * 60);
    if (diffMinutes > 0 && diffMinutes < 15) {
      const existing = patterns.find((p) => p.type === "rapid_clockout" && p.workerId === t.workerId);
      if (existing) {
        existing.occurrences += 1;
        existing.detail = `${existing.occurrences} clock-ins followed by clock-out within 15 minutes`;
      } else {
        const workerData = workerShifts.get(t.workerId);
        patterns.push({
          type: "rapid_clockout",
          workerId: t.workerId,
          workerName: workerData?.name || "Unknown",
          detail: "1 clock-in followed by clock-out within 15 minutes",
          occurrences: 1
        });
      }
    }
  }
  return patterns.sort((a, b) => b.occurrences - a.occurrences);
}
async function computeDuplicateTitoEntries(start, end) {
  const titoRecords = await db.select({
    workerId: titoLogs.workerId,
    workerName: users.fullName,
    timeIn: titoLogs.timeIn,
    workplaceId: titoLogs.workplaceId,
    workplaceName: workplaces.name
  }).from(titoLogs).innerJoin(users, eq6(titoLogs.workerId, users.id)).leftJoin(workplaces, eq6(titoLogs.workplaceId, workplaces.id)).where(
    and6(
      gte5(titoLogs.timeIn, start),
      lte5(titoLogs.timeIn, end),
      isNotNull3(titoLogs.timeIn)
    )
  );
  const keyMap = /* @__PURE__ */ new Map();
  for (const t of titoRecords) {
    if (!t.timeIn) continue;
    const dateStr = t.timeIn.toISOString().split("T")[0];
    const key = `${t.workerId}:${dateStr}:${t.workplaceId || "none"}`;
    const existing = keyMap.get(key);
    if (existing) {
      existing.count += 1;
    } else {
      keyMap.set(key, {
        workerId: t.workerId,
        workerName: t.workerName,
        date: dateStr,
        workplaceId: t.workplaceId,
        workplaceName: t.workplaceName || "Unassigned",
        count: 1
      });
    }
  }
  const duplicates = [];
  for (const entry of keyMap.values()) {
    if (entry.count > 1) {
      duplicates.push(entry);
    }
  }
  return duplicates.sort((a, b) => b.count - a.count);
}
async function computePendingCorrections() {
  const corrections = await db.select({
    correctionId: titoCorrections.id,
    titoLogId: titoCorrections.titoLogId,
    requesterId: titoCorrections.requesterId,
    requesterName: users.fullName,
    reason: titoCorrections.reason,
    createdAt: titoCorrections.createdAt
  }).from(titoCorrections).innerJoin(users, eq6(titoCorrections.requesterId, users.id)).where(eq6(titoCorrections.status, "pending")).orderBy(titoCorrections.createdAt);
  return corrections.map((c) => ({
    correctionId: c.correctionId,
    titoLogId: c.titoLogId,
    requesterId: c.requesterId,
    requesterName: c.requesterName,
    reason: c.reason,
    createdAt: c.createdAt
  }));
}
async function computePayrollExposure(start, end, periodLabel) {
  const startStr = start.toISOString().split("T")[0];
  const endStr = end.toISOString().split("T")[0];
  const scheduledResult = await db.select({
    startTime: shifts.startTime,
    endTime: shifts.endTime
  }).from(shifts).where(
    and6(
      gte5(shifts.date, startStr),
      lte5(shifts.date, endStr),
      ne2(shifts.status, "cancelled")
    )
  );
  let totalScheduledHours = 0;
  for (const s of scheduledResult) {
    totalScheduledHours += estimateShiftHours(s.startTime, s.endTime);
  }
  const titoRecords = await db.select({
    timeIn: titoLogs.timeIn,
    timeOut: titoLogs.timeOut
  }).from(titoLogs).where(
    and6(
      gte5(titoLogs.timeIn, start),
      lte5(titoLogs.timeIn, end),
      eq6(titoLogs.status, "approved")
    )
  );
  let totalActualHours = 0;
  for (const t of titoRecords) {
    const calc = calculatePayableHours(t.timeIn, t.timeOut);
    totalActualHours += calc.netHoursRounded;
  }
  const approvedTs = await db.select({
    totalHours: timesheets.totalHours
  }).from(timesheets).where(eq6(timesheets.status, "approved"));
  let totalApprovedTimesheetHours = 0;
  for (const ts of approvedTs) {
    totalApprovedTimesheetHours += parseFloat(String(ts.totalHours || "0"));
  }
  const totalUnapprovedHours = Math.max(0, totalActualHours - totalApprovedTimesheetHours);
  return {
    totalScheduledHours: Math.round(totalScheduledHours * 100) / 100,
    totalActualHours: Math.round(totalActualHours * 100) / 100,
    totalApprovedTimesheetHours: Math.round(totalApprovedTimesheetHours * 100) / 100,
    totalUnapprovedHours: Math.round(totalUnapprovedHours * 100) / 100,
    periodLabel
  };
}
var OVERTIME_THRESHOLD_WEEKLY;
var init_payroll = __esm({
  "server/services/clawd/analytics/payroll.ts"() {
    "use strict";
    init_db();
    init_schema();
    init_payroll_hours();
    init_types();
    OVERTIME_THRESHOLD_WEEKLY = 44;
  }
});

// server/services/clawd/assistants/payroll.ts
async function analyzePayroll(userQuestion, userId, chatMessageId) {
  let metrics = getCachedAnalytics("payroll");
  if (!metrics) {
    metrics = await getPayrollMetrics();
    setCachedAnalytics("payroll", metrics);
  }
  return runAssistant(
    "payroll",
    PAYROLL_SYSTEM_PROMPT,
    metrics,
    userQuestion,
    userId,
    chatMessageId
  );
}
var PAYROLL_SYSTEM_PROMPT;
var init_payroll2 = __esm({
  "server/services/clawd/assistants/payroll.ts"() {
    "use strict";
    init_payroll();
    init_base_assistant();
    PAYROLL_SYSTEM_PROMPT = `You are Clawd, an AI payroll and hours integrity analyst for a workforce management platform.

Your role is to analyze payroll data and detect issues with hours tracking, timesheet accuracy, and compensation integrity.

Key areas of focus:
- **Hours Integrity**: Compare scheduled hours vs actually worked hours per worker and per site. Flag significant variances that may indicate time theft, buddy punching, or scheduling errors.
- **Overtime Risks**: Identify workers approaching or exceeding weekly overtime thresholds. Highlight cost exposure and recommend proactive scheduling adjustments.
- **Suspicious Patterns**: Detect anomalies such as identical logged hours across many shifts, consistently short shifts, rapid clock-in/clock-out sequences, or duplicate time entries.
- **Missing Timesheets**: Identify workers who have completed shifts but lack corresponding approved timesheets, indicating payroll processing gaps.
- **Payroll Exposure**: Summarize total scheduled vs actual vs approved hours to quantify financial exposure from unapproved or discrepant hours.
- **Pending Corrections**: Review outstanding time correction requests that need administrative attention.

When analyzing data:
- Prioritize findings by financial impact and urgency
- Distinguish between systemic issues (affecting multiple workers/sites) and isolated incidents
- Consider operational context (e.g., short shifts may be legitimate for certain roles)
- Provide actionable recommendations with clear ownership and priority`;
  }
});

// server/services/clawd/analytics/client-risk.ts
import { eq as eq7, and as and7, gte as gte6, lte as lte6, sql as sql7, count as count4, isNull as isNull5, isNotNull as isNotNull4, ne as ne3 } from "drizzle-orm";
function getWindowStart(days) {
  const d = /* @__PURE__ */ new Date();
  d.setDate(d.getDate() - days);
  return d;
}
async function computeSiteRiskScores(days) {
  const windowStart = getWindowStart(days);
  const now = /* @__PURE__ */ new Date();
  const windowStartStr = windowStart.toISOString().split("T")[0];
  const nowStr = now.toISOString().split("T")[0];
  const allWorkplaces = await db.select({ id: workplaces.id, name: workplaces.name, isActive: workplaces.isActive }).from(workplaces);
  const results = [];
  for (const wp of allWorkplaces) {
    const totalShiftsResult = await db.select({ cnt: count4() }).from(shifts).where(and7(eq7(shifts.workplaceId, wp.id), gte6(shifts.date, windowStartStr), lte6(shifts.date, nowStr)));
    const totalShifts = totalShiftsResult[0]?.cnt ?? 0;
    if (totalShifts === 0) {
      results.push({
        workplaceId: wp.id,
        workplaceName: wp.name,
        riskScore: 0,
        cancellationRate: 0,
        noShowRate: 0,
        fillRate: 0,
        gpsFailureRate: 0,
        totalShifts: 0,
        isActive: wp.isActive ?? true
      });
      continue;
    }
    const cancelledResult = await db.select({ cnt: count4() }).from(shifts).where(and7(eq7(shifts.workplaceId, wp.id), eq7(shifts.status, "cancelled"), gte6(shifts.date, windowStartStr), lte6(shifts.date, nowStr)));
    const cancelledCount = cancelledResult[0]?.cnt ?? 0;
    const cancellationRate = totalShifts > 0 ? cancelledCount / totalShifts : 0;
    const completedWithNoClockIn = await db.select({ cnt: count4() }).from(shifts).leftJoin(titoLogs, and7(eq7(titoLogs.shiftId, shifts.id), isNotNull4(titoLogs.timeIn))).where(
      and7(
        eq7(shifts.workplaceId, wp.id),
        eq7(shifts.status, "completed"),
        gte6(shifts.date, windowStartStr),
        lte6(shifts.date, nowStr),
        isNull5(titoLogs.id)
      )
    );
    const scheduledNonCancelledResult = await db.select({ cnt: count4() }).from(shifts).where(
      and7(
        eq7(shifts.workplaceId, wp.id),
        ne3(shifts.status, "cancelled"),
        gte6(shifts.date, windowStartStr),
        lte6(shifts.date, nowStr)
      )
    );
    const scheduledNonCancelled = scheduledNonCancelledResult[0]?.cnt ?? 0;
    const noShowCount = completedWithNoClockIn[0]?.cnt ?? 0;
    const noShowRate = scheduledNonCancelled > 0 ? noShowCount / scheduledNonCancelled : 0;
    const filledResult = await db.select({ cnt: count4() }).from(shifts).where(
      and7(
        eq7(shifts.workplaceId, wp.id),
        isNotNull4(shifts.workerUserId),
        ne3(shifts.status, "cancelled"),
        gte6(shifts.date, windowStartStr),
        lte6(shifts.date, nowStr)
      )
    );
    const filledCount = filledResult[0]?.cnt ?? 0;
    const fillRate = scheduledNonCancelled > 0 ? filledCount / scheduledNonCancelled : 0;
    const totalClockInsResult = await db.select({ cnt: count4() }).from(titoLogs).where(and7(eq7(titoLogs.workplaceId, wp.id), isNotNull4(titoLogs.timeIn), gte6(titoLogs.timeIn, windowStart)));
    const totalClockIns = totalClockInsResult[0]?.cnt ?? 0;
    const gpsFailuresResult = await db.select({ cnt: count4() }).from(titoLogs).where(
      and7(
        eq7(titoLogs.workplaceId, wp.id),
        eq7(titoLogs.timeInGpsVerified, false),
        isNotNull4(titoLogs.timeIn),
        gte6(titoLogs.timeIn, windowStart)
      )
    );
    const gpsFailureCount = gpsFailuresResult[0]?.cnt ?? 0;
    const gpsFailureRate = totalClockIns > 0 ? gpsFailureCount / totalClockIns : 0;
    const riskScore = cancellationRate * 25 + noShowRate * 30 + (1 - fillRate) * 25 + gpsFailureRate * 20;
    results.push({
      workplaceId: wp.id,
      workplaceName: wp.name,
      riskScore: Math.round(riskScore * 100) / 100,
      cancellationRate: Math.round(cancellationRate * 1e3) / 1e3,
      noShowRate: Math.round(noShowRate * 1e3) / 1e3,
      fillRate: Math.round(fillRate * 1e3) / 1e3,
      gpsFailureRate: Math.round(gpsFailureRate * 1e3) / 1e3,
      totalShifts,
      isActive: wp.isActive ?? true
    });
  }
  return results.sort((a, b) => b.riskScore - a.riskScore);
}
async function computeSiteCancellations(days) {
  const windowStart = getWindowStart(days);
  const windowStartStr = windowStart.toISOString().split("T")[0];
  const nowStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const label = TIME_WINDOWS[`${days}d`]?.label ?? `${days}-day`;
  const result = await db.select({
    workplaceId: shifts.workplaceId,
    workplaceName: workplaces.name,
    totalShifts: count4(),
    cancelledCount: sql7`count(*) filter (where ${shifts.status} = 'cancelled')`
  }).from(shifts).innerJoin(workplaces, eq7(shifts.workplaceId, workplaces.id)).where(and7(gte6(shifts.date, windowStartStr), lte6(shifts.date, nowStr))).groupBy(shifts.workplaceId, workplaces.name);
  return result.map((r) => ({
    workplaceId: r.workplaceId,
    workplaceName: r.workplaceName,
    cancellationCount: Number(r.cancelledCount),
    totalShifts: r.totalShifts,
    cancellationRate: r.totalShifts > 0 ? Math.round(Number(r.cancelledCount) / r.totalShifts * 1e3) / 1e3 : 0,
    period: label
  })).sort((a, b) => b.cancellationRate - a.cancellationRate);
}
async function computeSiteNoShows(days) {
  const windowStart = getWindowStart(days);
  const windowStartStr = windowStart.toISOString().split("T")[0];
  const nowStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const scheduledShifts = await db.select({
    workplaceId: shifts.workplaceId,
    workplaceName: workplaces.name,
    totalScheduled: count4()
  }).from(shifts).innerJoin(workplaces, eq7(shifts.workplaceId, workplaces.id)).where(
    and7(
      isNotNull4(shifts.workerUserId),
      ne3(shifts.status, "cancelled"),
      gte6(shifts.date, windowStartStr),
      lte6(shifts.date, nowStr)
    )
  ).groupBy(shifts.workplaceId, workplaces.name);
  const shiftsWithClockIn = await db.select({
    workplaceId: shifts.workplaceId,
    clockedIn: count4()
  }).from(shifts).innerJoin(titoLogs, and7(eq7(titoLogs.shiftId, shifts.id), isNotNull4(titoLogs.timeIn))).where(
    and7(
      isNotNull4(shifts.workerUserId),
      ne3(shifts.status, "cancelled"),
      gte6(shifts.date, windowStartStr),
      lte6(shifts.date, nowStr)
    )
  ).groupBy(shifts.workplaceId);
  const clockInMap = new Map(shiftsWithClockIn.map((s) => [s.workplaceId, s.clockedIn]));
  return scheduledShifts.map((s) => {
    const clockedIn = clockInMap.get(s.workplaceId) ?? 0;
    const noShowCount = Math.max(0, s.totalScheduled - clockedIn);
    return {
      workplaceId: s.workplaceId,
      workplaceName: s.workplaceName,
      noShowCount,
      totalScheduledShifts: s.totalScheduled,
      noShowRate: s.totalScheduled > 0 ? Math.round(noShowCount / s.totalScheduled * 1e3) / 1e3 : 0
    };
  }).sort((a, b) => b.noShowRate - a.noShowRate);
}
async function computeGpsFailures(days) {
  const windowStart = getWindowStart(days);
  const result = await db.select({
    workplaceId: titoLogs.workplaceId,
    workplaceName: workplaces.name,
    totalClockIns: count4(),
    gpsFailures: sql7`count(*) filter (where ${titoLogs.timeInGpsVerified} = false)`
  }).from(titoLogs).innerJoin(workplaces, eq7(titoLogs.workplaceId, workplaces.id)).where(and7(isNotNull4(titoLogs.timeIn), gte6(titoLogs.timeIn, windowStart))).groupBy(titoLogs.workplaceId, workplaces.name);
  return result.map((r) => ({
    workplaceId: r.workplaceId,
    workplaceName: r.workplaceName,
    totalClockIns: r.totalClockIns,
    gpsFailures: Number(r.gpsFailures),
    failureRate: r.totalClockIns > 0 ? Math.round(Number(r.gpsFailures) / r.totalClockIns * 1e3) / 1e3 : 0
  })).sort((a, b) => b.failureRate - a.failureRate);
}
async function computeReliabilityTrends2(days) {
  const currentStart = getWindowStart(days);
  const previousStart = getWindowStart(days * 2);
  const currentStartStr = currentStart.toISOString().split("T")[0];
  const previousStartStr = previousStart.toISOString().split("T")[0];
  const nowStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const allWorkplaces = await db.select({ id: workplaces.id, name: workplaces.name }).from(workplaces);
  const results = [];
  for (const wp of allWorkplaces) {
    const currentShifts = await db.select({
      total: count4(),
      cancelled: sql7`count(*) filter (where ${shifts.status} = 'cancelled')`,
      filled: sql7`count(*) filter (where ${shifts.workerUserId} is not null and ${shifts.status} != 'cancelled')`
    }).from(shifts).where(and7(eq7(shifts.workplaceId, wp.id), gte6(shifts.date, currentStartStr), lte6(shifts.date, nowStr)));
    const prevShifts = await db.select({
      total: count4(),
      cancelled: sql7`count(*) filter (where ${shifts.status} = 'cancelled')`,
      filled: sql7`count(*) filter (where ${shifts.workerUserId} is not null and ${shifts.status} != 'cancelled')`
    }).from(shifts).where(and7(eq7(shifts.workplaceId, wp.id), gte6(shifts.date, previousStartStr), lte6(shifts.date, currentStartStr)));
    const curTotal = currentShifts[0]?.total ?? 0;
    const prevTotal = prevShifts[0]?.total ?? 0;
    if (curTotal === 0 && prevTotal === 0) continue;
    const curNonCancelled = curTotal - Number(currentShifts[0]?.cancelled ?? 0);
    const prevNonCancelled = prevTotal - Number(prevShifts[0]?.cancelled ?? 0);
    const curFillRate = curNonCancelled > 0 ? Number(currentShifts[0]?.filled ?? 0) / curNonCancelled : 0;
    const prevFillRate = prevNonCancelled > 0 ? Number(prevShifts[0]?.filled ?? 0) / prevNonCancelled : 0;
    const curCancelRate = curTotal > 0 ? Number(currentShifts[0]?.cancelled ?? 0) / curTotal : 0;
    const prevCancelRate = prevTotal > 0 ? Number(prevShifts[0]?.cancelled ?? 0) / prevTotal : 0;
    const currentScore = curFillRate * 50 + (1 - curCancelRate) * 50;
    const previousScore = prevFillRate * 50 + (1 - prevCancelRate) * 50;
    const change = previousScore > 0 ? (currentScore - previousScore) / previousScore * 100 : 0;
    let trend = "stable";
    if (change > 5) trend = "improving";
    else if (change < -5) trend = "declining";
    results.push({
      workplaceId: wp.id,
      workplaceName: wp.name,
      currentPeriodScore: Math.round(currentScore * 100) / 100,
      previousPeriodScore: Math.round(previousScore * 100) / 100,
      trend,
      changePercent: Math.round(change * 100) / 100
    });
  }
  return results;
}
async function computeEscalations(riskScores, trends) {
  const trendMap = new Map(trends.map((t) => [t.workplaceId, t]));
  const escalations = [];
  for (const site of riskScores) {
    if (site.riskScore < 15 || site.totalShifts === 0) continue;
    const trend = trendMap.get(site.workplaceId);
    const sitetrend = trend?.trend === "declining" ? "declining" : "stable";
    if (site.riskScore >= 30 || site.riskScore >= 15 && sitetrend === "declining") {
      const reasons = [];
      if (site.cancellationRate > 0.15) reasons.push(`High cancellation rate: ${(site.cancellationRate * 100).toFixed(1)}%`);
      if (site.noShowRate > 0.1) reasons.push(`High no-show rate: ${(site.noShowRate * 100).toFixed(1)}%`);
      if (site.fillRate < 0.8) reasons.push(`Low fill rate: ${(site.fillRate * 100).toFixed(1)}%`);
      if (site.gpsFailureRate > 0.2) reasons.push(`High GPS failure rate: ${(site.gpsFailureRate * 100).toFixed(1)}%`);
      if (sitetrend === "declining") reasons.push("Worsening trend compared to previous period");
      if (reasons.length === 0) reasons.push(`Elevated composite risk score: ${site.riskScore}`);
      escalations.push({
        workplaceId: site.workplaceId,
        workplaceName: site.workplaceName,
        riskScore: site.riskScore,
        trend: sitetrend,
        reasons
      });
    }
  }
  return escalations.sort((a, b) => b.riskScore - a.riskScore);
}
async function computeClientActivity(days) {
  const windowStart = getWindowStart(days);
  const windowStartStr = windowStart.toISOString().split("T")[0];
  const nowStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const allSites = await db.select({ cnt: count4() }).from(workplaces);
  const activeSites = await db.select({ cnt: count4() }).from(workplaces).where(eq7(workplaces.isActive, true));
  const inactiveSites = await db.select({ cnt: count4() }).from(workplaces).where(eq7(workplaces.isActive, false));
  const sitesWithShifts = await db.select({ cnt: sql7`count(distinct ${shifts.workplaceId})` }).from(shifts).where(and7(gte6(shifts.date, windowStartStr), lte6(shifts.date, nowStr)));
  const totalSites = allSites[0]?.cnt ?? 0;
  const withShifts = Number(sitesWithShifts[0]?.cnt ?? 0);
  return {
    totalSites,
    activeSites: activeSites[0]?.cnt ?? 0,
    inactiveSites: inactiveSites[0]?.cnt ?? 0,
    sitesWithRecentShifts: withShifts,
    sitesWithNoRecentShifts: totalSites - withShifts
  };
}
async function getClientRiskMetrics(windowDays = 14) {
  const [
    siteRiskScores,
    siteCancellations,
    siteNoShows,
    gpsFailures,
    reliabilityTrends,
    clientActivity
  ] = await Promise.all([
    computeSiteRiskScores(windowDays),
    computeSiteCancellations(windowDays),
    computeSiteNoShows(windowDays),
    computeGpsFailures(windowDays),
    computeReliabilityTrends2(windowDays),
    computeClientActivity(windowDays)
  ]);
  const sitesNeedingEscalation = await computeEscalations(siteRiskScores, reliabilityTrends);
  return {
    siteRiskScores,
    siteCancellations,
    siteNoShows,
    gpsFailures,
    reliabilityTrends,
    sitesNeedingEscalation,
    clientActivity,
    generatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
var init_client_risk = __esm({
  "server/services/clawd/analytics/client-risk.ts"() {
    "use strict";
    init_db();
    init_schema();
    init_types();
  }
});

// server/services/clawd/assistants/client-risk.ts
async function analyzeClientRisk(userQuestion, userId, chatMessageId) {
  let metrics = getCachedAnalytics("client_risk");
  if (!metrics) {
    metrics = await getClientRiskMetrics();
    setCachedAnalytics("client_risk", metrics);
  }
  return runAssistant(
    "client_risk",
    CLIENT_RISK_SYSTEM_PROMPT,
    metrics,
    userQuestion,
    userId,
    chatMessageId
  );
}
var CLIENT_RISK_SYSTEM_PROMPT;
var init_client_risk2 = __esm({
  "server/services/clawd/assistants/client-risk.ts"() {
    "use strict";
    init_client_risk();
    init_base_assistant();
    CLIENT_RISK_SYSTEM_PROMPT = `You are Clawd, an AI client and site risk analyst for a workforce management platform.

Your role is to assess operational risk across client sites, identify service reliability issues, and prioritize escalation actions.

Key areas of focus:
- **Site-Level Risk Scores**: Analyze composite risk scores that factor in cancellation rates, no-show rates, fill rates, and GPS verification failures. Explain what drives high-risk scores and which sites need immediate attention.
- **Cancellation Trends**: Identify sites with elevated cancellation rates, distinguish between client-initiated and worker-initiated cancellations, and detect worsening trends.
- **GPS Failures**: Flag sites with high GPS clock-in verification failure rates, which may indicate workers not being physically present or geofencing configuration issues.
- **Service Reliability**: Evaluate fill rates and no-show patterns to assess overall service delivery quality per site. Identify sites where reliability is declining.
- **Escalation Priorities**: Recommend which sites require immediate management intervention based on risk scores, declining trends, and the severity of identified issues.
- **Client Activity**: Monitor site activity levels to identify dormant or at-risk client relationships.

When analyzing data:
- Rank sites by urgency and business impact
- Distinguish between sites with temporary issues vs chronic problems
- Consider the volume of shifts when evaluating rates (a high cancellation rate on 3 shifts is less concerning than on 30)
- Provide specific, actionable escalation recommendations with clear next steps`;
  }
});

// server/services/discord.ts
var discord_exports = {};
__export(discord_exports, {
  acknowledgeAlert: () => acknowledgeAlert,
  sendDiscordNotification: () => sendDiscordNotification
});
import { eq as eq8 } from "drizzle-orm";
async function getWebhookUrl() {
  try {
    const [row] = await db.select().from(appConfig).where(eq8(appConfig.key, "discord_webhook_url"));
    if (row?.value) return row.value;
  } catch {
  }
  return process.env.DISCORD_WEBHOOK_URL || null;
}
async function sendDiscordNotification(opts) {
  const alertId = `WFC-${Date.now().toString(36).toUpperCase()}`;
  const webhookUrl = await getWebhookUrl();
  if (!webhookUrl) {
    console.log("[DISCORD] Webhook URL not configured, skipping notification");
    return { success: false, error: "Webhook URL not configured" };
  }
  try {
    const embed = {
      title: opts.title,
      description: opts.message,
      color: COLOR_MAP[opts.color || "blue"] || COLOR_MAP.blue,
      fields: opts.fields || [],
      footer: { text: `Alert ID: ${alertId} | Reply "ACK ${alertId}" to acknowledge` },
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    const fetchUrl = webhookUrl.includes("?") ? `${webhookUrl}&wait=true` : `${webhookUrl}?wait=true`;
    const response = await fetch(fetchUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Oscar \u2014 WFConnect AI",
        embeds: [embed]
      })
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[DISCORD] Send failed (${response.status}):`, errorText);
      return { success: false, alertId, error: `HTTP ${response.status}` };
    }
    let discordMessageId = null;
    let discordChannelId = null;
    try {
      const resJson = await response.clone().json();
      discordMessageId = resJson?.id || null;
      discordChannelId = resJson?.channel_id || null;
    } catch {
    }
    try {
      await db.insert(discordAlerts).values({
        alertId,
        type: opts.type || "general",
        title: opts.title,
        message: opts.message,
        sourcePhone: opts.sourcePhone || null,
        sourceWorkerId: opts.sourceWorkerId || null,
        workerId: opts.workerId || null,
        clientId: opts.clientId || null,
        workplaceId: opts.workplaceId || null,
        shiftId: opts.shiftId || null,
        originalMessage: opts.originalMessage || null,
        discordMessageId,
        discordChannelId,
        status: "pending",
        actionsTaken: opts.actionsTaken || null
      });
    } catch (dbErr) {
      console.error("[DISCORD] Failed to log alert:", dbErr?.message);
    }
    console.log(`[DISCORD] Notification sent: ${opts.title} (${alertId})`);
    return { success: true, alertId };
  } catch (error) {
    console.error("[DISCORD] Send error:", error?.message || error);
    return { success: false, alertId, error: error?.message || "Unknown error" };
  }
}
async function acknowledgeAlert(alertId, acknowledgedBy, responseNote) {
  try {
    const [alert] = await db.select().from(discordAlerts).where(eq8(discordAlerts.alertId, alertId));
    if (!alert) {
      console.log(`[DISCORD] Alert ${alertId} not found`);
      return false;
    }
    await db.update(discordAlerts).set({
      status: "acknowledged",
      acknowledgedBy,
      acknowledgedAt: /* @__PURE__ */ new Date(),
      responseNote: responseNote || null
    }).where(eq8(discordAlerts.alertId, alertId));
    console.log(`[DISCORD] Alert ${alertId} acknowledged by ${acknowledgedBy}`);
    return true;
  } catch (err) {
    console.error("[DISCORD] Acknowledge error:", err?.message);
    return false;
  }
}
var COLOR_MAP;
var init_discord = __esm({
  "server/services/discord.ts"() {
    "use strict";
    init_db();
    init_schema();
    COLOR_MAP = {
      red: 15680580,
      blue: 3900150,
      green: 2278750,
      amber: 16096779,
      purple: 9133302
    };
  }
});

// server/services/discord-actions.ts
import { eq as eq9, and as and8, ilike, sql as sql8 } from "drizzle-orm";
async function executeDiscordAction(ctx) {
  switch (ctx.intent) {
    case "acknowledge":
      return handleAcknowledge(ctx);
    case "assign_worker":
      return handleAssignWorker(ctx);
    case "list_available":
      return handleListAvailable(ctx);
    case "resend_sms":
      return handleResendSms(ctx);
    case "notify_gm_lilee":
      return handleNotifyGmLilee(ctx);
    case "notify_client":
      return handleNotifyClient(ctx);
    case "mark_resolved":
      return handleMarkResolved(ctx);
    case "mark_unresolved":
      return handleMarkUnresolved(ctx);
    case "escalate":
      return handleEscalate(ctx);
    case "summarize":
      return handleSummarize(ctx);
    default:
      return { success: false, message: `**Understood:** ${ctx.intent}
**Blocked:** Unknown action type
**Fallback:** No action taken
**Still needed:** Try \`/clawd help\` for available commands` };
  }
}
async function handleAcknowledge(ctx) {
  if (!ctx.alertId) {
    return { success: false, message: "**Understood:** Acknowledge alert\n**Blocked:** No alert ID found in context\n**Fallback:** No action taken\n**Still needed:** Reply to a specific alert message or include the WFC-XXXX ID" };
  }
  const success = await acknowledgeAlert(ctx.alertId, ctx.discordUsername, `Acknowledged via Discord by ${ctx.discordUsername}`);
  if (success) {
    return { success: true, message: `**Understood:** Acknowledge alert ${ctx.alertId}
**Action:** Status updated to acknowledged
**Result:** Alert ${ctx.alertId} acknowledged by ${ctx.discordUsername}
**Still needed:** Review and take action on the underlying issue` };
  }
  return { success: false, message: `**Understood:** Acknowledge alert ${ctx.alertId}
**Blocked:** Alert not found in system
**Fallback:** No action taken
**Still needed:** Verify the alert ID is correct` };
}
async function handleAssignWorker(ctx) {
  const workerQuery = ctx.args.workerQuery;
  if (!workerQuery) {
    return { success: false, message: "**Understood:** Assign a worker\n**Blocked:** No worker name provided\n**Fallback:** No action taken\n**Still needed:** Specify who to assign, e.g. `assign Nino`" };
  }
  const workers = await db.select({
    id: users.id,
    fullName: users.fullName,
    phone: users.phone,
    workerRoles: users.workerRoles
  }).from(users).where(and8(
    eq9(users.role, "worker"),
    eq9(users.isActive, true),
    ilike(users.fullName, `%${workerQuery}%`)
  )).limit(5);
  if (workers.length === 0) {
    return { success: false, message: `**Understood:** Assign "${workerQuery}"
**Blocked:** No worker found matching "${workerQuery}"
**Fallback:** No action taken
**Still needed:** Try a different name or check spelling` };
  }
  if (workers.length > 1) {
    const list = workers.map((w) => `- ${w.fullName} (${w.phone || "no phone"})`).join("\n");
    return { success: false, message: `**Understood:** Assign "${workerQuery}"
**Blocked:** Multiple matches found:
${list}
**Fallback:** No action taken
**Still needed:** Be more specific with the name` };
  }
  const worker = workers[0];
  const alertInfo = ctx.alert ? `
Alert: ${ctx.alertId} \u2014 ${ctx.alert.title}` : "";
  const actions = [];
  if (ctx.alert?.workplaceId && ctx.alert?.shiftId) {
    try {
      const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA", { timeZone: "America/Toronto" });
      const [adminUser] = await db.select({ id: users.id }).from(users).where(and8(eq9(users.role, "admin"), eq9(users.isActive, true))).limit(1);
      if (adminUser) {
        const [newRequest] = await db.insert(shiftRequests).values({
          clientId: adminUser.id,
          workplaceId: ctx.alert.workplaceId,
          roleType: worker.workerRoles || "general",
          date: today,
          startTime: "08:00",
          endTime: "16:00",
          notes: `Auto-created via Discord assign command by ${ctx.discordUsername}`,
          status: "submitted"
        }).returning();
        actions.push(`Shift request created (ID: ${newRequest.id})`);
      }
    } catch (err) {
      console.error("[DISCORD ACTIONS] Shift request creation failed:", err?.message);
    }
  }
  if (worker.phone) {
    const smsBody = `Hi ${worker.fullName.split(" ")[0]}, you've been assigned to cover a shift. Please check WFConnect for details or reply to confirm. \u2014 WFConnect`;
    try {
      await sendSMS(worker.phone, smsBody);
      await logSMS({ phoneNumber: worker.phone, message: smsBody, direction: "outbound", workerId: String(worker.id), status: "sent" });
      actions.push("SMS notification sent");
    } catch (smsErr) {
      console.error("[DISCORD ACTIONS] SMS send failed:", smsErr?.message);
      actions.push("SMS send failed");
    }
  }
  if (ctx.alertId) {
    try {
      await db.update(discordAlerts).set({ status: "acknowledged", acknowledgedBy: ctx.discordUsername, acknowledgedAt: /* @__PURE__ */ new Date(), responseNote: `Assigned ${worker.fullName} via Discord` }).where(eq9(discordAlerts.alertId, ctx.alertId));
      actions.push("Alert acknowledged");
    } catch {
    }
  }
  const actionSummary = actions.length > 0 ? actions.join(", ") : "Worker identified";
  return {
    success: true,
    message: `**Understood:** Assign ${worker.fullName} to coverage${alertInfo}
**Action:** ${actionSummary}
**Result:** ${worker.fullName} (${worker.phone || "no phone"}) has been notified
**Still needed:** Worker needs to confirm availability`
  };
}
async function handleListAvailable(ctx) {
  const workplaceId = ctx.alert?.workplaceId;
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA", { timeZone: "America/Toronto" });
  if (!workplaceId) {
    const allWorkers = await db.select({
      id: users.id,
      fullName: users.fullName,
      phone: users.phone
    }).from(users).where(and8(eq9(users.role, "worker"), eq9(users.isActive, true))).limit(15);
    if (allWorkers.length === 0) {
      return { success: true, message: "**Understood:** List available workers\n**Action:** Searched active worker roster\n**Result:** No active workers found in the system\n**Still needed:** Check admin panel for worker roster" };
    }
    const busyRows2 = await db.select({ workerUserId: shifts.workerUserId }).from(shifts).where(and8(eq9(shifts.date, today), sql8`${shifts.status} != 'cancelled'`));
    const busyIds2 = new Set(busyRows2.map((r) => r.workerUserId).filter(Boolean));
    const available = allWorkers.filter((w) => !busyIds2.has(w.id));
    const busy = allWorkers.filter((w) => busyIds2.has(w.id));
    const list2 = available.map((w) => `- ${w.fullName} (${w.phone || "no phone"})`).join("\n");
    return { success: true, message: `**Understood:** List available workers for ${today}
**Action:** Checked schedules against active roster
**Result:** ${available.length} available (${busy.length} already scheduled):
${list2}
**Still needed:** Assign workers as needed` };
  }
  const assignments = await db.select({
    workerUserId: workplaceAssignments.workerUserId
  }).from(workplaceAssignments).where(and8(
    eq9(workplaceAssignments.workplaceId, workplaceId),
    eq9(workplaceAssignments.status, "active")
  ));
  if (assignments.length === 0) {
    return { success: true, message: `**Understood:** List available workers for workplace
**Action:** Checked workplace assignments
**Result:** No workers assigned to this workplace
**Still needed:** Assign workers to the workplace first` };
  }
  const assignedIds = assignments.map((a) => a.workerUserId);
  const busyRows = await db.select({ workerUserId: shifts.workerUserId }).from(shifts).where(and8(eq9(shifts.date, today), sql8`${shifts.workerUserId} = ANY(${assignedIds})`, sql8`${shifts.status} != 'cancelled'`));
  const busyIds = new Set(busyRows.map((r) => r.workerUserId).filter(Boolean));
  const availableIds = assignedIds.filter((id) => !busyIds.has(id));
  if (availableIds.length === 0) {
    return { success: true, message: `**Understood:** List available workers
**Result:** All ${assignedIds.length} assigned worker(s) are already scheduled on ${today}
**Still needed:** Consider checking other dates or sending a shift offer blast` };
  }
  const workerDetails = await db.select({
    id: users.id,
    fullName: users.fullName,
    phone: users.phone
  }).from(users).where(and8(eq9(users.isActive, true), sql8`${users.id} = ANY(${availableIds})`));
  const list = workerDetails.map((w) => `- ${w.fullName} (${w.phone || "no phone"})`).join("\n");
  return { success: true, message: `**Understood:** List available workers for workplace on ${today}
**Action:** Checked schedules against workplace roster
**Result:** ${workerDetails.length} available (${busyIds.size} already scheduled):
${list}
**Still needed:** Assign workers as needed` };
}
async function handleResendSms(ctx) {
  if (!ctx.alert) {
    return { success: false, message: "**Understood:** Resend SMS\n**Blocked:** No alert context found\n**Fallback:** No action taken\n**Still needed:** Reply to a specific alert message" };
  }
  const phone = ctx.alert.sourcePhone;
  if (!phone) {
    return { success: false, message: `**Understood:** Resend SMS for ${ctx.alertId}
**Blocked:** No phone number associated with this alert
**Fallback:** No action taken
**Still needed:** This alert doesn't have a source phone number` };
  }
  const body = `WFConnect Update: Your message regarding "${ctx.alert.title}" has been received and is being handled. We'll follow up shortly.`;
  try {
    await sendSMS(phone, body);
    await logSMS({ phoneNumber: phone, message: body, direction: "outbound", workerId: ctx.alert.sourceWorkerId || void 0, status: "sent" });
    return { success: true, message: `**Understood:** Resend SMS for ${ctx.alertId}
**Action:** SMS sent to ${phone}
**Result:** Acknowledgment message sent
**Still needed:** Await reply from recipient` };
  } catch (err) {
    return { success: false, message: `**Understood:** Resend SMS for ${ctx.alertId}
**Blocked:** SMS send failed: ${err?.message}
**Fallback:** No action taken
**Still needed:** Check OpenPhone configuration` };
  }
}
async function handleNotifyGmLilee(ctx) {
  const alertInfo = ctx.alert ? `Alert ${ctx.alertId}: ${ctx.alert.title}
${ctx.alert.message}` : "Escalation requested via Discord";
  const smsBody = `[WFConnect] ${alertInfo}

Escalated by: ${ctx.discordUsername} via Discord`;
  try {
    await sendSMS(GM_LILEE_PHONE, smsBody);
    await logSMS({ phoneNumber: GM_LILEE_PHONE, message: smsBody, direction: "outbound", status: "sent" });
    return { success: true, message: `**Understood:** Notify GM Lilee
**Action:** SMS sent to GM Lilee (+14166028038)
**Result:** Alert forwarded successfully
**Still needed:** Await GM Lilee response` };
  } catch (err) {
    return { success: false, message: `**Understood:** Notify GM Lilee
**Blocked:** SMS failed: ${err?.message}
**Fallback:** No action taken
**Still needed:** Check OpenPhone configuration` };
  }
}
async function handleNotifyClient(ctx) {
  if (!ctx.alert) {
    return { success: false, message: "**Understood:** Notify client\n**Blocked:** No alert context found\n**Fallback:** No action taken\n**Still needed:** Reply to a specific alert to identify the client" };
  }
  const clientId = ctx.alert.clientId;
  if (!clientId) {
    return { success: false, message: `**Understood:** Notify client for ${ctx.alertId}
**Blocked:** No client ID linked to this alert
**Fallback:** No action taken
**Still needed:** Send a manual message through the WFConnect app instead` };
  }
  const [client2] = await db.select({ id: users.id, fullName: users.fullName, phone: users.phone }).from(users).where(eq9(users.id, clientId)).limit(1);
  if (!client2) {
    return { success: false, message: `**Understood:** Notify client for ${ctx.alertId}
**Blocked:** Client user not found in system
**Fallback:** No action taken
**Still needed:** Verify client data in admin panel` };
  }
  const messageBody = `Update regarding your staffing request: We are working on coverage for you. We'll confirm details shortly. \u2014 WFConnect Team`;
  try {
    const [adminUser] = await db.select({ id: users.id }).from(users).where(and8(eq9(users.role, "admin"), eq9(users.isActive, true))).limit(1);
    const senderUserId = adminUser?.id || clientId;
    let [conversation] = await db.select().from(conversations2).where(and8(eq9(conversations2.workerUserId, clientId), eq9(conversations2.isArchived, false))).limit(1);
    if (!conversation) {
      const [newConv] = await db.insert(conversations2).values({ workerUserId: clientId, hrUserId: senderUserId, lastMessageAt: /* @__PURE__ */ new Date(), lastMessagePreview: messageBody.slice(0, 100) }).returning();
      conversation = newConv;
    }
    await db.insert(messages2).values({
      conversationId: conversation.id,
      senderUserId,
      recipientUserId: clientId,
      body: messageBody,
      messageType: "text",
      status: "delivered"
    });
    await db.update(conversations2).set({ lastMessageAt: /* @__PURE__ */ new Date(), lastMessagePreview: messageBody.slice(0, 100) }).where(eq9(conversations2.id, conversation.id));
    return { success: true, message: `**Understood:** Notify client for ${ctx.alertId}
**Action:** Internal message sent to ${client2.fullName} via WFConnect messaging
**Result:** Client has been notified through the app
**Still needed:** Await client response` };
  } catch (err) {
    if (client2.phone) {
      try {
        const smsBody = `[WFConnect] ${messageBody}`;
        await sendSMS(client2.phone, smsBody);
        await logSMS({ phoneNumber: client2.phone, message: smsBody, direction: "outbound", workerId: String(clientId), status: "sent" });
        return { success: true, message: `**Understood:** Notify client for ${ctx.alertId}
**Action:** Internal messaging failed, sent SMS to ${client2.fullName} (${client2.phone}) as fallback
**Result:** Client has been notified via SMS
**Still needed:** Await client response` };
      } catch {
      }
    }
    return { success: false, message: `**Understood:** Notify client for ${ctx.alertId}
**Blocked:** Failed to send message: ${err?.message}
**Fallback:** No action taken
**Still needed:** Notify client manually via the app` };
  }
}
async function handleMarkResolved(ctx) {
  if (!ctx.alertId) {
    return { success: false, message: "**Understood:** Mark resolved\n**Blocked:** No alert ID found\n**Fallback:** No action taken\n**Still needed:** Reply to a specific alert message" };
  }
  try {
    await db.update(discordAlerts).set({ status: "resolved", acknowledgedBy: ctx.discordUsername, acknowledgedAt: /* @__PURE__ */ new Date(), responseNote: `Resolved via Discord by ${ctx.discordUsername}` }).where(eq9(discordAlerts.alertId, ctx.alertId));
    return { success: true, message: `**Understood:** Mark ${ctx.alertId} resolved
**Action:** Status updated
**Result:** Alert ${ctx.alertId} marked as resolved by ${ctx.discordUsername}
**Still needed:** None \u2014 issue closed` };
  } catch (err) {
    return { success: false, message: `**Understood:** Mark resolved
**Blocked:** Database update failed: ${err?.message}
**Fallback:** No action taken
**Still needed:** Try again or resolve manually in app` };
  }
}
async function handleMarkUnresolved(ctx) {
  if (!ctx.alertId) {
    return { success: false, message: "**Understood:** Mark unresolved\n**Blocked:** No alert ID found\n**Fallback:** No action taken\n**Still needed:** Reply to a specific alert message" };
  }
  try {
    await db.update(discordAlerts).set({ status: "pending", responseNote: `Reopened via Discord by ${ctx.discordUsername}` }).where(eq9(discordAlerts.alertId, ctx.alertId));
    return { success: true, message: `**Understood:** Reopen ${ctx.alertId}
**Action:** Status updated to pending
**Result:** Alert ${ctx.alertId} reopened
**Still needed:** Investigate and take action on the reopened issue` };
  } catch (err) {
    return { success: false, message: `**Understood:** Mark unresolved
**Blocked:** Database update failed: ${err?.message}
**Fallback:** No action taken
**Still needed:** Try again` };
  }
}
async function handleEscalate(ctx) {
  const alertInfo = ctx.alert ? `ESCALATION: ${ctx.alert.title}
${ctx.alert.message}
Escalated by ${ctx.discordUsername} via Discord` : `ESCALATION requested by ${ctx.discordUsername} via Discord`;
  try {
    await sendSMS(GM_LILEE_PHONE, `[WFConnect URGENT] ${alertInfo}`);
    await logSMS({ phoneNumber: GM_LILEE_PHONE, message: alertInfo, direction: "outbound", status: "sent" });
  } catch {
  }
  await sendDiscordNotification({
    title: `ESCALATION \u2014 ${ctx.alert?.title || "Manual Escalation"}`,
    message: `Escalated by ${ctx.discordUsername}
${ctx.alert?.message || "No additional details"}`,
    color: "red",
    type: "escalation"
  });
  if (ctx.alertId) {
    try {
      await db.update(discordAlerts).set({ status: "pending", responseNote: `Escalated via Discord by ${ctx.discordUsername}` }).where(eq9(discordAlerts.alertId, ctx.alertId));
    } catch {
    }
  }
  return { success: true, message: `**Understood:** Escalate${ctx.alertId ? ` ${ctx.alertId}` : ""}
**Action:** GM Lilee notified via SMS + Discord re-alert sent
**Result:** Issue escalated to management
**Still needed:** Await GM response` };
}
async function handleSummarize(ctx) {
  if (!ctx.alert) {
    return { success: false, message: "**Understood:** Summarize alert\n**Blocked:** No alert context found\n**Fallback:** No action taken\n**Still needed:** Reply to a specific alert message or include the WFC-XXXX ID" };
  }
  const a = ctx.alert;
  const parts = [
    `**Alert Summary: ${a.alertId}**`,
    `**Type:** ${a.type}`,
    `**Status:** ${a.status}`,
    `**Title:** ${a.title}`
  ];
  if (a.sourcePhone) parts.push(`**Source Phone:** ${a.sourcePhone}`);
  if (a.originalMessage) parts.push(`**Original Message:** "${a.originalMessage}"`);
  if (a.acknowledgedBy) parts.push(`**Acknowledged By:** ${a.acknowledgedBy} at ${a.acknowledgedAt?.toLocaleString() || "unknown"}`);
  if (a.responseNote) parts.push(`**Notes:** ${a.responseNote}`);
  if (a.actionsTaken) {
    try {
      const actions = JSON.parse(a.actionsTaken);
      if (Array.isArray(actions)) {
        parts.push(`**Actions Taken:** ${actions.join(", ")}`);
      } else {
        parts.push(`**Actions Taken:** ${a.actionsTaken}`);
      }
    } catch {
      parts.push(`**Actions Taken:** ${a.actionsTaken}`);
    }
  }
  parts.push(`**Created:** ${a.createdAt.toLocaleString()}`);
  return { success: true, message: parts.join("\n") };
}
var GM_LILEE_PHONE;
var init_discord_actions = __esm({
  "server/services/discord-actions.ts"() {
    "use strict";
    init_db();
    init_schema();
    init_openphone();
    init_discord();
    GM_LILEE_PHONE = "+14166028038";
  }
});

// server/services/discord-bot.ts
var discord_bot_exports = {};
__export(discord_bot_exports, {
  INTENT_PATTERNS: () => INTENT_PATTERNS,
  getDiscordBot: () => getDiscordBot,
  getGuildMembers: () => getGuildMembers,
  parseNaturalLanguage: () => parseNaturalLanguage,
  parseSlashCommand: () => parseSlashCommand,
  startDiscordBot: () => startDiscordBot
});
import { Client, GatewayIntentBits, PresenceUpdateStatus } from "discord.js";
import { eq as eq10, desc as desc4, inArray as inArray3 } from "drizzle-orm";
function getDiscordBot() {
  return botClient;
}
async function getGuildMembers(query, limit) {
  if (!botClient) return [];
  const guild = botClient.guilds.cache.first();
  if (!guild) return [];
  try {
    await guild.members.fetch({ time: 1e4 });
  } catch (err) {
    console.warn("[DISCORD BOT] Failed to fetch guild members, using cache:", err?.message);
  }
  let members = Array.from(guild.members.cache.values());
  if (query) {
    const q = query.toLowerCase();
    members = members.filter(
      (m) => m.user.username.toLowerCase().includes(q) || m.displayName.toLowerCase().includes(q) || m.nickname?.toLowerCase().includes(q)
    );
  }
  const maxResults = limit && limit > 0 ? Math.min(limit, 200) : 50;
  return members.slice(0, maxResults).map((m) => ({
    discordId: m.user.id,
    username: m.user.username,
    displayName: m.displayName,
    roles: m.roles.cache.filter((r) => r.name !== "@everyone").map((r) => r.name),
    joinedAt: m.joinedAt?.toISOString() || null,
    isBot: m.user.bot
  }));
}
function parseSlashCommand(content) {
  const m = content.match(/^\/clawd\s+(\w+)\s*(.*)?$/i);
  if (!m) return null;
  const cmd = m[1].toLowerCase();
  const rest = (m[2] || "").trim();
  const cmdMap = {
    assign: "assign_worker",
    resolve: "mark_resolved",
    resolved: "mark_resolved",
    unresolve: "mark_unresolved",
    escalate: "escalate",
    whoisavailable: "list_available",
    available: "list_available",
    options: "list_available",
    summary: "summarize",
    summarize: "summarize",
    help: "help",
    ack: "acknowledge",
    notify: "notify_client",
    notifyclient: "notify_client",
    notifylilee: "notify_gm_lilee",
    lilee: "notify_gm_lilee",
    resend: "resend_sms"
  };
  const intent = cmdMap[cmd];
  if (!intent) return null;
  const args = {};
  if (intent === "assign_worker" && rest) {
    args.workerQuery = rest;
  }
  return { intent, args };
}
function parseNaturalLanguage(content) {
  for (const { intent, patterns, extractArgs } of INTENT_PATTERNS) {
    for (const pattern of patterns) {
      if (pattern.test(content)) {
        const args = extractArgs ? extractArgs(content) : {};
        return { intent, args };
      }
    }
  }
  return null;
}
async function refreshDiscordConfig() {
  try {
    const rows = await db.select().from(appConfig).where(inArray3(appConfig.key, ["discord_open_to_all", "discord_authorized_users"]));
    const openRow = rows.find((r) => r.key === "discord_open_to_all");
    const authRow = rows.find((r) => r.key === "discord_authorized_users");
    _configCache = {
      openToAll: openRow ? openRow.value !== "false" : true,
      authorizedIds: authRow?.value ? new Set(authRow.value.split(",").map((id) => id.trim()).filter(Boolean)) : /* @__PURE__ */ new Set()
    };
  } catch {
    _configCache = { openToAll: true, authorizedIds: /* @__PURE__ */ new Set() };
  }
}
function getDiscordConfig() {
  return _configCache;
}
function startConfigRefresh() {
  refreshDiscordConfig();
  setInterval(refreshDiscordConfig, 6e4);
}
async function findAlertByDiscordMessageId(messageId) {
  try {
    const [alert] = await db.select().from(discordAlerts).where(eq10(discordAlerts.discordMessageId, messageId));
    return alert || null;
  } catch {
    return null;
  }
}
async function findAlertByAlertId(alertId) {
  try {
    const [alert] = await db.select().from(discordAlerts).where(eq10(discordAlerts.alertId, alertId));
    return alert || null;
  } catch {
    return null;
  }
}
async function parseCommand(message) {
  const content = message.content.trim();
  const result = {
    intent: "unknown",
    args: {},
    alertId: null,
    alertContext: null,
    raw: content
  };
  const slashParsed = parseSlashCommand(content);
  if (slashParsed) {
    result.intent = slashParsed.intent;
    result.args = slashParsed.args;
  } else {
    const nlParsed = parseNaturalLanguage(content);
    if (nlParsed) {
      result.intent = nlParsed.intent;
      result.args = nlParsed.args;
    }
  }
  if (message.reference?.messageId) {
    const alert = await findAlertByDiscordMessageId(message.reference.messageId);
    if (alert) {
      result.alertId = alert.alertId;
      result.alertContext = alert;
    }
  }
  if (!result.alertContext) {
    const alertIdMatch = content.match(/WFC-[A-Z0-9]+/i);
    if (alertIdMatch) {
      const alert = await findAlertByAlertId(alertIdMatch[0].toUpperCase());
      if (alert) {
        result.alertId = alert.alertId;
        result.alertContext = alert;
      }
    }
  }
  const contextFreeIntents = /* @__PURE__ */ new Set(["help", "unknown", "list_available", "notify_gm_lilee"]);
  if (!result.alertContext && !contextFreeIntents.has(result.intent)) {
  }
  return result;
}
async function logAction(alertId, discordUserId, discordUsername, actionType, rawMessage, parsedIntent, result, success, failureReason) {
  try {
    await db.insert(discordActionLogs).values({
      alertId,
      discordUserId,
      discordUsername,
      actionType,
      rawMessage,
      parsedIntent,
      result,
      success,
      failureReason: failureReason || null
    });
  } catch (err) {
    console.error("[DISCORD BOT] Failed to log action:", err?.message);
  }
}
async function handleMessage(message) {
  if (message.author.bot) return;
  if (!message.content.trim()) return;
  const content = message.content.trim();
  const isMention = botClient?.user ? message.mentions.users.has(botClient.user.id) : false;
  const isClawdCommand = content.startsWith("/clawd") || !!message.reference?.messageId;
  const hasAlertId = /WFC-[A-Z0-9]+/i.test(content);
  const hasKnownCommand = INTENT_PATTERNS.some((ip) => ip.patterns.some((p) => p.test(content)));
  if (!isClawdCommand && !hasAlertId && !hasKnownCommand && !isMention) return;
  const { openToAll, authorizedIds } = await getDiscordConfig();
  if (!openToAll && !isMention) {
    if (authorizedIds.size === 0 || !authorizedIds.has(message.author.id)) {
      await message.reply("Not authorized to use Oscar. Contact an admin to add your Discord user ID in System Settings, or ask them to enable open access for all channel members.");
      await logAction(null, message.author.id, message.author.username, "unauthorized", content, "unauthorized", "rejected", false, authorizedIds.size === 0 ? "No authorized users configured" : "User not in authorized list");
      return;
    }
  }
  if (isMention && !content.startsWith("/clawd")) {
    const cleanContent = content.replace(/<@!?\d+>/g, "").trim();
    if (!cleanContent) {
      try {
        await message.react("\u{1F44B}");
      } catch {
      }
      await message.reply("Hey! I'm Oscar, WFConnect's AI assistant. Ask me anything \u2014 shifts, workers, availability, operations. Or type `/clawd help` for the command list.");
      await logAction(null, message.author.id, message.author.username, "mention_empty", content, "mention", "greeting sent", true);
      return;
    }
    try {
      await message.react("\u{1F440}");
    } catch {
    }
    const simpleGreetings = /^(hi|hey|hello|yo|sup|test|ping|hiya|heya|howdy|what'?s up)[\s!?.]*$/i;
    if (simpleGreetings.test(cleanContent)) {
      const greeting = `Hey ${message.author.displayName || message.author.username}! I'm Oscar, WFConnect's AI assistant. Ask me anything \u2014 shifts, workers, availability, SMS alerts, or daily reports. What can I do for you?`;
      await message.reply(greeting);
      await logAction(null, message.author.id, message.author.username, "mention_greeting", content, "mention", greeting, true);
      return;
    }
    try {
      try {
        await message.react("\u{1F914}");
      } catch {
      }
      const imageUrls = message.attachments.filter((a) => {
        if (a.contentType?.startsWith("image/")) return true;
        if (!a.contentType && a.url && /\.(jpg|jpeg|png|gif|webp|bmp)$/i.test(a.url)) return true;
        return false;
      }).map((a) => a.url);
      if (imageUrls.length > 0) {
        console.log(`[DISCORD BOT] @mention includes ${imageUrls.length} image attachment(s)`);
      }
      if (!cleanContent && imageUrls.length === 0) {
        console.log(`[DISCORD BOT] @mention with no text or images, ignoring`);
        return;
      }
      console.log(`[DISCORD BOT] @mention from ${message.author.username}: "${cleanContent?.slice(0, 80) || "(image only)"}"`);
      const response = await orchestrate({
        userMessage: cleanContent || (imageUrls.length > 0 ? "Analyze this image" : ""),
        conversationHistory: [],
        userId: `discord-${message.author.id}`,
        forceActionMode: true,
        imageUrls: imageUrls.length > 0 ? imageUrls : void 0
      });
      const reply = response.response || "I couldn't process that right now. Try `/clawd help` for available commands.";
      await message.reply(reply.slice(0, 2e3));
      await logAction(null, message.author.id, message.author.username, "mention_ai", content, "mention_ai", reply.slice(0, 500), true);
    } catch (err) {
      console.error("[DISCORD BOT] Clawd AI error on mention:", err?.message);
      await message.reply("Something went wrong processing that. Try again or use `/clawd help` for commands.");
      await logAction(null, message.author.id, message.author.username, "mention_ai", content, "mention_ai", err?.message || "error", false, err?.message);
    }
    return;
  }
  const parsed = await parseCommand(message);
  if (parsed.intent === "help") {
    await message.reply(HELP_MESSAGE);
    await logAction(null, message.author.id, message.author.username, "help", content, "help", "help sent", true);
    return;
  }
  if (parsed.intent === "unknown") {
    await message.reply("I didn't understand that command. Reply `/clawd help` to see what Oscar can do.");
    await logAction(null, message.author.id, message.author.username, "unknown", content, "unknown", "unrecognized", false, "No matching intent");
    return;
  }
  const actionContext = {
    intent: parsed.intent,
    args: parsed.args,
    alertId: parsed.alertId,
    alert: parsed.alertContext,
    discordUserId: message.author.id,
    discordUsername: message.author.username,
    rawMessage: content
  };
  try {
    const result = await executeDiscordAction(actionContext);
    await message.reply(result.message);
    await logAction(
      parsed.alertId,
      message.author.id,
      message.author.username,
      parsed.intent,
      content,
      parsed.intent,
      result.message.slice(0, 500),
      result.success,
      result.success ? void 0 : result.message
    );
  } catch (err) {
    const errorMsg = `**Understood:** ${parsed.intent}
**Blocked:** ${err?.message || "Unknown error"}
**Fallback:** No action taken
**Still needed:** Manual intervention required`;
    await message.reply(errorMsg);
    await logAction(parsed.alertId, message.author.id, message.author.username, parsed.intent, content, parsed.intent, err?.message || "error", false, err?.message);
  }
}
function setOnlinePresence(client2) {
  try {
    client2.user?.setPresence({
      status: PresenceUpdateStatus.Online,
      activities: []
    });
    console.log("[DISCORD BOT] Presence set to online");
  } catch (err) {
    console.error("[DISCORD BOT] Failed to set presence:", err?.message);
  }
}
async function startDiscordBot() {
  if (process.env.DISCORD_BOT_ENABLED === "false") {
    console.log("[DISCORD BOT] DISCORD_BOT_ENABLED=false, skipping bot startup (production-only mode)");
    return false;
  }
  const token = process.env.DISCORD_BOT_TOKEN;
  if (!token) {
    console.log("[DISCORD BOT] No DISCORD_BOT_TOKEN set, skipping bot startup");
    return false;
  }
  const MAX_RETRIES2 = 3;
  const BASE_DELAY_MS = 5e3;
  for (let attempt = 1; attempt <= MAX_RETRIES2; attempt++) {
    try {
      const client2 = new Client({
        intents: [
          GatewayIntentBits.Guilds,
          GatewayIntentBits.GuildMessages,
          GatewayIntentBits.MessageContent,
          GatewayIntentBits.GuildMembers
        ]
      });
      client2.on("clientReady", () => {
        console.log(`[DISCORD BOT] Logged in as ${client2.user?.tag}`);
        setOnlinePresence(client2);
        startConfigRefresh();
      });
      client2.on("messageCreate", handleMessage);
      client2.on("error", (error) => {
        console.error("[DISCORD BOT] Client error:", error.message);
      });
      client2.on("shardDisconnect", (event, shardId) => {
        console.warn(`[DISCORD BOT] Shard ${shardId} disconnected (code ${event.code}). Will auto-reconnect.`);
      });
      client2.on("shardReconnecting", (shardId) => {
        console.log(`[DISCORD BOT] Shard ${shardId} reconnecting...`);
      });
      client2.on("shardResume", (shardId, replayedEvents) => {
        console.log(`[DISCORD BOT] Shard ${shardId} resumed (replayed ${replayedEvents} events)`);
        setOnlinePresence(client2);
      });
      client2.on("shardError", (error, shardId) => {
        console.error(`[DISCORD BOT] Shard ${shardId} error:`, error.message);
      });
      await client2.login(token);
      botClient = client2;
      console.log("[DISCORD BOT] Bot started successfully");
      return true;
    } catch (err) {
      const delay = BASE_DELAY_MS * Math.pow(2, attempt - 1);
      console.error(`[DISCORD BOT] Login attempt ${attempt}/${MAX_RETRIES2} failed:`, err?.message);
      if (attempt < MAX_RETRIES2) {
        console.log(`[DISCORD BOT] Retrying in ${delay / 1e3}s...`);
        await new Promise((r) => setTimeout(r, delay));
      }
    }
  }
  console.error("[DISCORD BOT] All login attempts failed");
  return false;
}
var botClient, INTENT_PATTERNS, _configCache, HELP_MESSAGE;
var init_discord_bot = __esm({
  "server/services/discord-bot.ts"() {
    "use strict";
    init_db();
    init_schema();
    init_discord_actions();
    init_orchestrator();
    botClient = null;
    INTENT_PATTERNS = [
      {
        intent: "acknowledge",
        patterns: [
          /^\s*(ack|acknowledged?|got\s*it|noted|roger|copy)\s*$/i,
          /\back\s+(WFC-[A-Z0-9]+)/i
        ]
      },
      {
        intent: "assign_worker",
        patterns: [
          /\b(assign|send|put|give|book)\s+(\w[\w\s]*?)$/i,
          /\bassign\s+(\w+)/i,
          /\bsend\s+(\w+)\s*(to|for|there)?\s*$/i
        ],
        extractArgs: (msg) => {
          const m = msg.match(/\b(?:assign|send|put|give|book)\s+(.+?)(?:\s+(?:to|for|there))?$/i);
          return m ? { workerQuery: m[1].trim() } : {};
        }
      },
      {
        intent: "list_available",
        patterns: [
          /\bwho\s+is\s+available/i,
          /\bwho\s*(?:'s|is)\s*available/i,
          /\bavailable\s+workers?\b/i,
          /\blist\s+available\b/i,
          /\bwho\s+can\s+cover/i,
          /\bwho\s+can\s+work/i,
          /\boptions\b/i
        ]
      },
      {
        intent: "resend_sms",
        patterns: [
          /\bresend\s+(sms|text|message)/i,
          /\bsend\s+again\b/i,
          /\bretry\s+(sms|text|alert)\b/i
        ]
      },
      {
        intent: "notify_gm_lilee",
        patterns: [
          /\bnotify\s+(?:gm\s+)?lilee\b/i,
          /\b(?:resend|send)\s+to\s+(?:gm\s+)?lilee\b/i,
          /\blilee\b/i,
          /\bnotify\s+gm\b/i,
          /\balert\s+(?:gm\s+)?lilee\b/i
        ]
      },
      {
        intent: "notify_client",
        patterns: [
          /\bnotify\s+(?:the\s+)?client\b/i,
          /\bmessage\s+(?:the\s+)?client\b/i,
          /\btell\s+(?:the\s+)?client\b/i,
          /\bupdate\s+(?:the\s+)?client\b/i
        ]
      },
      {
        intent: "mark_resolved",
        patterns: [
          /\bmark\s+resolved\b/i,
          /\bresolve(?:d)?\s*$/i,
          /\bclose\s+(?:this|it|alert|issue)\b/i,
          /\bdone\s*$/i,
          /\bcovered\s*$/i,
          /\bhandled\s*$/i
        ]
      },
      {
        intent: "mark_unresolved",
        patterns: [
          /\bmark\s+unresolved\b/i,
          /\breopen\b/i,
          /\bnot\s+resolved\b/i,
          /\bno\s+coverage\s+found\b/i
        ]
      },
      {
        intent: "escalate",
        patterns: [
          /\bescalate\b/i,
          /\burgent\b/i,
          /\bneed\s+help\b/i
        ]
      },
      {
        intent: "summarize",
        patterns: [
          /\bsummar(?:y|ize)\b/i,
          /\bwhat\s+(?:happened|is\s+this|site|shift)\b/i,
          /\bdetails?\b/i,
          /\bcontext\b/i,
          /\bwho\s+called\s+off\b/i
        ]
      },
      {
        intent: "help",
        patterns: [
          /\bhelp\b/i,
          /\bcommands?\b/i,
          /\bwhat\s+can\s+(?:you|i)\b/i
        ]
      }
    ];
    _configCache = {
      openToAll: true,
      authorizedIds: /* @__PURE__ */ new Set()
    };
    HELP_MESSAGE = `**Oscar \u2014 WFConnect AI Assistant**

**Reply to any alert** with:
- \`assign [name]\` \u2014 Assign a worker to cover
- \`who is available?\` \u2014 List available workers
- \`mark resolved\` / \`done\` \u2014 Close the alert
- \`escalate\` \u2014 Flag as urgent + notify GM
- \`notify client\` \u2014 Send update to the client
- \`notify lilee\` / \`lilee\` \u2014 Alert GM Lilee
- \`resend sms\` \u2014 Resend the SMS alert
- \`summary\` / \`details\` \u2014 Get alert context
- \`ack\` / \`acknowledged\` \u2014 Acknowledge alert

**Slash-style commands:**
\`/clawd assign Nino\`
\`/clawd resolve\`
\`/clawd whoisavailable\`
\`/clawd help\`

Reply to an alert message for context-linked actions.`;
  }
});

// server/services/google-calendar.ts
import { google } from "googleapis";
async function getAccessToken() {
  if (cachedAccessToken && Date.now() < cachedExpiresAt) {
    return cachedAccessToken;
  }
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME || "connectors.replit.com";
  const xReplitToken = process.env.REPL_IDENTITY ? "repl " + process.env.REPL_IDENTITY : process.env.WEB_REPL_RENEWAL ? "depl " + process.env.WEB_REPL_RENEWAL : null;
  if (!xReplitToken) {
    throw new Error("No Replit token available for connector authentication");
  }
  try {
    const url = `https://${hostname}/api/connectors/get?connector_names=google-calendar`;
    const res = await fetch(url, {
      headers: { "X-Replit-Token": xReplitToken }
    });
    if (!res.ok) {
      throw new Error(`Connector API error: ${res.statusText}`);
    }
    const data = await res.json();
    const connection = data?.connections?.[0];
    if (!connection) {
      throw new Error("No Google Calendar connection found");
    }
    const credentials = connection.settings?.oauth?.credentials || connection.settings;
    const accessToken = credentials?.access_token;
    if (!accessToken) {
      throw new Error("No access token in Calendar credentials");
    }
    cachedAccessToken = accessToken;
    cachedExpiresAt = Date.now() + 3500 * 1e3;
    return accessToken;
  } catch (err) {
    console.error("[GOOGLE-CALENDAR] Token fetch error:", err?.message);
    throw err;
  }
}
async function getUncachableGoogleCalendarClient() {
  const accessToken = await getAccessToken();
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });
  return google.calendar({ version: "v3", auth: oauth2Client });
}
async function createCalendarEvent(input) {
  try {
    const calendar = await getUncachableGoogleCalendarClient();
    const event = {
      summary: input.summary,
      description: input.description || "",
      start: { dateTime: input.startDateTime },
      end: { dateTime: input.endDateTime },
      attendees: (input.attendees || []).map((email) => ({ email }))
    };
    const res = await calendar.events.insert({
      calendarId: "primary",
      requestBody: event
    });
    console.log(`[GOOGLE-CALENDAR] Event created: ${res.data.id} \u2014 ${input.summary}`);
    return {
      eventId: res.data.id || "",
      htmlLink: res.data.htmlLink || ""
    };
  } catch (err) {
    console.error("[GOOGLE-CALENDAR] Create event failed:", err?.message);
    throw err;
  }
}
async function listCalendarEvents(maxResults = 10, timeMin) {
  try {
    const calendar = await getUncachableGoogleCalendarClient();
    const now = /* @__PURE__ */ new Date();
    const queryTimeMin = timeMin || now.toISOString();
    const res = await calendar.events.list({
      calendarId: "primary",
      timeMin: queryTimeMin,
      singleEvents: true,
      orderBy: "startTime",
      maxResults
    });
    const events = res.data.items || [];
    const results = events.map((e) => ({
      id: e.id || "",
      summary: e.summary || "(No title)",
      start: e.start?.dateTime || e.start?.date || "",
      end: e.end?.dateTime || e.end?.date || "",
      htmlLink: e.htmlLink || ""
    }));
    console.log(`[GOOGLE-CALENDAR] Listed ${results.length} events`);
    return results;
  } catch (err) {
    console.error("[GOOGLE-CALENDAR] List events failed:", err?.message);
    throw err;
  }
}
var cachedAccessToken, cachedExpiresAt;
var init_google_calendar = __esm({
  "server/services/google-calendar.ts"() {
    "use strict";
    cachedAccessToken = null;
    cachedExpiresAt = 0;
  }
});

// server/services/google-gmail.ts
import { google as google2 } from "googleapis";
async function getAccessToken2() {
  if (cachedAccessToken2 && Date.now() < cachedExpiresAt2) {
    return cachedAccessToken2;
  }
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME || "connectors.replit.com";
  const xReplitToken = process.env.REPL_IDENTITY ? "repl " + process.env.REPL_IDENTITY : process.env.WEB_REPL_RENEWAL ? "depl " + process.env.WEB_REPL_RENEWAL : null;
  if (!xReplitToken) {
    throw new Error("No Replit token available for connector authentication");
  }
  try {
    const url = `https://${hostname}/api/connectors/get?connector_names=google-mail`;
    const res = await fetch(url, {
      headers: { "X-Replit-Token": xReplitToken }
    });
    if (!res.ok) {
      throw new Error(`Connector API error: ${res.statusText}`);
    }
    const data = await res.json();
    const connection = data?.connections?.[0];
    if (!connection) {
      throw new Error("No Gmail connection found");
    }
    const credentials = connection.settings?.oauth?.credentials || connection.settings;
    const accessToken = credentials?.access_token;
    if (!accessToken) {
      throw new Error("No access token in Gmail credentials");
    }
    cachedAccessToken2 = accessToken;
    cachedExpiresAt2 = Date.now() + 3500 * 1e3;
    return accessToken;
  } catch (err) {
    console.error("[GOOGLE-GMAIL] Token fetch error:", err?.message);
    throw err;
  }
}
async function getUncachableGmailClient() {
  const accessToken = await getAccessToken2();
  const oauth2Client = new google2.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });
  return google2.gmail({ version: "v1", auth: oauth2Client });
}
async function sendGmail(input) {
  try {
    const gmail = await getUncachableGmailClient();
    const contentType = input.isHtml ? "text/html" : "text/plain";
    const message = [
      `To: ${input.to}`,
      `Subject: ${input.subject}`,
      `Content-Type: ${contentType}; charset=utf-8`,
      "",
      input.body
    ].join("\n");
    const encodedMessage = Buffer.from(message).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    const res = await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw: encodedMessage }
    });
    console.log(`[GOOGLE-GMAIL] Email sent to ${input.to} \u2014 ${input.subject}`);
    return {
      messageId: res.data.id || "",
      success: true
    };
  } catch (err) {
    console.error("[GOOGLE-GMAIL] Send email failed:", err?.message);
    throw err;
  }
}
async function readRecentGmailEmails(maxResults = 10, query) {
  try {
    const gmail = await getUncachableGmailClient();
    const listRes = await gmail.users.messages.list({
      userId: "me",
      maxResults,
      q: query || "is:unread"
    });
    const messageIds = listRes.data.messages || [];
    if (messageIds.length === 0) {
      console.log("[GOOGLE-GMAIL] No emails found");
      return [];
    }
    const messages3 = await Promise.all(
      messageIds.map(
        (m) => gmail.users.messages.get({
          userId: "me",
          id: m.id,
          format: "metadata",
          metadataHeaders: ["From", "Subject", "Date"]
        })
      )
    );
    const results = messages3.map((res) => {
      const headers = res.data.payload?.headers || [];
      const from = headers.find((h) => h.name === "From")?.value || "Unknown";
      const subject = headers.find((h) => h.name === "Subject")?.value || "(No subject)";
      const date2 = headers.find((h) => h.name === "Date")?.value || "";
      return {
        id: res.data.id || "",
        from,
        subject,
        snippet: res.data.snippet || "",
        date: date2
      };
    });
    console.log(`[GOOGLE-GMAIL] Read ${results.length} emails`);
    return results;
  } catch (err) {
    console.error("[GOOGLE-GMAIL] Read emails failed:", err?.message);
    throw err;
  }
}
var cachedAccessToken2, cachedExpiresAt2;
var init_google_gmail = __esm({
  "server/services/google-gmail.ts"() {
    "use strict";
    cachedAccessToken2 = null;
    cachedExpiresAt2 = 0;
  }
});

// server/services/weekdays-crm.ts
var weekdays_crm_exports = {};
__export(weekdays_crm_exports, {
  createCrmHotelRequest: () => createCrmHotelRequest,
  createCrmWorkplace: () => createCrmWorkplace,
  getBoard: () => getBoard,
  getBoards: () => getBoards,
  getConfirmedShifts: () => getConfirmedShifts,
  getDutyDays: () => getDutyDays,
  getHotelRequests: () => getHotelRequests,
  getWorkplaces: () => getWorkplaces,
  isConfigured: () => isConfigured,
  testConnection: () => testConnection,
  updateCrmConfirmedShift: () => updateCrmConfirmedShift,
  updateCrmHotelRequest: () => updateCrmHotelRequest,
  updateCrmWorkplace: () => updateCrmWorkplace
});
function createCrmError(message, statusCode) {
  const error = new Error(message);
  error.statusCode = statusCode;
  error.isRetryable = statusCode !== void 0 && (statusCode >= 500 || statusCode === 408 || statusCode === 429);
  return error;
}
function getApiKey() {
  const key = process.env.WEEKDAYS_API_KEY;
  if (!key) {
    throw createCrmError("WEEKDAYS_API_KEY environment variable is not set");
  }
  return key;
}
function getTeamId() {
  const teamId = process.env.WEEKDAYS_TEAM_ID;
  if (!teamId) {
    throw createCrmError("WEEKDAYS_TEAM_ID environment variable is not set");
  }
  return teamId;
}
function isConfigured() {
  return !!(process.env.WEEKDAYS_API_KEY && process.env.WEEKDAYS_TEAM_ID);
}
async function sleep(ms) {
  return new Promise((resolve2) => setTimeout(resolve2, ms));
}
async function fetchWithRetry(path2, options) {
  const apiKey = getApiKey();
  const url = new URL(path2, CRM_BASE_URL).toString();
  let lastError = null;
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3e4);
      const response = await fetch(url, {
        ...options,
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          ...options?.headers || {}
        },
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      if (!response.ok) {
        const body = await response.text().catch(() => "");
        const error = createCrmError(
          `CRM API ${response.status}: ${body || response.statusText}`,
          response.status
        );
        if (!error.isRetryable || attempt === MAX_RETRIES - 1) {
          throw error;
        }
        lastError = error;
        const backoff = INITIAL_BACKOFF_MS * Math.pow(2, attempt);
        console.warn(`[CRM] Retryable error on attempt ${attempt + 1}/${MAX_RETRIES}, retrying in ${backoff}ms: ${error.message}`);
        await sleep(backoff);
        continue;
      }
      return await response.json();
    } catch (err) {
      if (err.name === "AbortError") {
        lastError = createCrmError("CRM API request timed out", 408);
        lastError.isRetryable = true;
      } else if (err.isRetryable !== void 0) {
        lastError = err;
      } else {
        lastError = createCrmError(err.message || "Unknown network error");
        lastError.isRetryable = true;
      }
      if (!lastError.isRetryable || attempt === MAX_RETRIES - 1) {
        throw lastError;
      }
      const backoff = INITIAL_BACKOFF_MS * Math.pow(2, attempt);
      console.warn(`[CRM] Error on attempt ${attempt + 1}/${MAX_RETRIES}, retrying in ${backoff}ms: ${lastError.message}`);
      await sleep(backoff);
    }
  }
  throw lastError ?? createCrmError("All retry attempts exhausted");
}
async function testConnection() {
  try {
    if (!isConfigured()) {
      return { connected: false, error: "CRM environment variables not configured" };
    }
    const teamId = getTeamId();
    await fetchWithRetry(`/api/teams/${teamId}/workplaces?limit=1`);
    return { connected: true };
  } catch (err) {
    console.error("[CRM] Connection test failed:", err.message);
    return { connected: false, error: err.message };
  }
}
async function getWorkplaces() {
  const teamId = getTeamId();
  const data = await fetchWithRetry(
    `/api/teams/${teamId}/workplaces`
  );
  return Array.isArray(data) ? data : data.data || [];
}
async function getConfirmedShifts() {
  const teamId = getTeamId();
  const data = await fetchWithRetry(
    `/api/teams/${teamId}/confirmed-shifts`
  );
  return Array.isArray(data) ? data : data.data || [];
}
async function getHotelRequests() {
  const teamId = getTeamId();
  const data = await fetchWithRetry(
    `/api/teams/${teamId}/hotel-requests`
  );
  return Array.isArray(data) ? data : data.data || [];
}
async function getDutyDays() {
  const teamId = getTeamId();
  const data = await fetchWithRetry(
    `/api/teams/${teamId}/duty-days`
  );
  return Array.isArray(data) ? data : data.data || [];
}
async function getBoards() {
  const teamId = getTeamId();
  const data = await fetchWithRetry(
    `/api/teams/${teamId}/boards`
  );
  return Array.isArray(data) ? data : data.data || [];
}
async function getBoard(boardId) {
  const teamId = getTeamId();
  return await fetchWithRetry(
    `/api/teams/${teamId}/boards/${boardId}`
  );
}
async function createCrmWorkplace(input) {
  const teamId = getTeamId();
  const body = {
    name: input.name,
    address: input.address || "",
    location: input.location || "",
    province: input.province || "",
    latitude: input.latitude,
    longitude: input.longitude,
    contactPerson: input.contactPerson || "",
    notes: input.notes || "",
    isActive: input.isActive !== false
  };
  console.log(`[CRM-SYNC] Creating workplace in CRM: "${input.name}"`);
  const result = await fetchWithRetry(
    `/api/teams/${teamId}/workplaces`,
    { method: "POST", body: JSON.stringify(body) }
  );
  console.log(`[CRM-SYNC] Workplace created in CRM: "${input.name}" \u2192 ID ${result.id}`);
  return result;
}
async function updateCrmWorkplace(crmId, input) {
  const teamId = getTeamId();
  const body = {};
  if (input.name !== void 0) body.name = input.name;
  if (input.address !== void 0) body.address = input.address;
  if (input.location !== void 0) body.location = input.location;
  if (input.province !== void 0) body.province = input.province;
  if (input.latitude !== void 0) body.latitude = input.latitude;
  if (input.longitude !== void 0) body.longitude = input.longitude;
  if (input.contactPerson !== void 0) body.contactPerson = input.contactPerson;
  if (input.notes !== void 0) body.notes = input.notes;
  if (input.isActive !== void 0) body.isActive = input.isActive;
  console.log(`[CRM-SYNC] Updating workplace in CRM: ID ${crmId}`);
  const result = await fetchWithRetry(
    `/api/teams/${teamId}/workplaces/${crmId}`,
    { method: "PATCH", body: JSON.stringify(body) }
  );
  console.log(`[CRM-SYNC] Workplace updated in CRM: ID ${crmId}`);
  return result;
}
async function createCrmHotelRequest(input) {
  const teamId = getTeamId();
  const body = {
    hotelName: input.hotelName,
    location: input.location || "",
    address: input.address || "",
    roleNeeded: input.roleNeeded,
    quantityNeeded: input.quantityNeeded || 1,
    shiftStartAt: input.shiftStartAt,
    shiftEndAt: input.shiftEndAt,
    payRate: input.payRate,
    notes: input.notes || ""
  };
  console.log(`[CRM-SYNC] Creating hotel request in CRM: "${input.hotelName}" - ${input.roleNeeded}`);
  const result = await fetchWithRetry(
    `/api/teams/${teamId}/hotel-requests`,
    { method: "POST", body: JSON.stringify(body) }
  );
  console.log(`[CRM-SYNC] Hotel request created in CRM: ID ${result.id}`);
  return result;
}
async function updateCrmHotelRequest(crmId, input) {
  const teamId = getTeamId();
  const body = {};
  if (input.hotelName !== void 0) body.hotelName = input.hotelName;
  if (input.location !== void 0) body.location = input.location;
  if (input.address !== void 0) body.address = input.address;
  if (input.roleNeeded !== void 0) body.roleNeeded = input.roleNeeded;
  if (input.quantityNeeded !== void 0) body.quantityNeeded = input.quantityNeeded;
  if (input.shiftStartAt !== void 0) body.shiftStartAt = input.shiftStartAt;
  if (input.shiftEndAt !== void 0) body.shiftEndAt = input.shiftEndAt;
  if (input.payRate !== void 0) body.payRate = input.payRate;
  if (input.notes !== void 0) body.notes = input.notes;
  if (input.status !== void 0) body.status = input.status;
  console.log(`[CRM-SYNC] Updating hotel request in CRM: ID ${crmId}`);
  const result = await fetchWithRetry(
    `/api/teams/${teamId}/hotel-requests/${crmId}`,
    { method: "PATCH", body: JSON.stringify(body) }
  );
  console.log(`[CRM-SYNC] Hotel request updated in CRM: ID ${crmId}`);
  return result;
}
async function updateCrmConfirmedShift(crmId, input) {
  const teamId = getTeamId();
  const body = {};
  if (input.confirmStatus !== void 0) body.confirmStatus = input.confirmStatus;
  if (input.checkedInAt !== void 0) body.checkedInAt = input.checkedInAt;
  if (input.completedAt !== void 0) body.completedAt = input.completedAt;
  if (input.notes !== void 0) body.notes = input.notes;
  console.log(`[CRM-SYNC] Updating confirmed shift in CRM: ID ${crmId}`);
  const result = await fetchWithRetry(
    `/api/teams/${teamId}/confirmed-shifts/${crmId}`,
    { method: "PATCH", body: JSON.stringify(body) }
  );
  console.log(`[CRM-SYNC] Confirmed shift updated in CRM: ID ${crmId}`);
  return result;
}
var CRM_BASE_URL, MAX_RETRIES, INITIAL_BACKOFF_MS;
var init_weekdays_crm = __esm({
  "server/services/weekdays-crm.ts"() {
    "use strict";
    CRM_BASE_URL = "https://weekdays.wfconnect.org";
    MAX_RETRIES = 3;
    INITIAL_BACKOFF_MS = 1e3;
  }
});

// server/services/crm-sync.ts
var crm_sync_exports = {};
__export(crm_sync_exports, {
  backfillWorkplacesToCrm: () => backfillWorkplacesToCrm,
  clearAutoSyncError: () => clearAutoSyncError,
  enqueueCrmPush: () => enqueueCrmPush,
  getCachedConnectionStatus: () => getCachedConnectionStatus,
  getCrmPushQueueStats: () => getCrmPushQueueStats,
  getLastAutoSyncError: () => getLastAutoSyncError,
  getLastPushCompletedAt: () => getLastPushCompletedAt,
  getLastSyncCompletedAt: () => getLastSyncCompletedAt,
  getLastSyncCompletedAtFromDb: () => getLastSyncCompletedAtFromDb,
  getSyncLogs: () => getSyncLogs,
  getSyncStatus: () => getSyncStatus,
  isSyncRunning: () => isSyncRunning,
  markSyncCompleted: () => markSyncCompleted,
  processCrmPushQueue: () => processCrmPushQueue,
  syncAll: () => syncAll,
  syncConfirmedShifts: () => syncConfirmedShifts,
  syncHotelRequests: () => syncHotelRequests,
  syncWorkplaces: () => syncWorkplaces
});
import { eq as eq11, and as and9, sql as sql9, isNull as isNull6, ne as ne4, notInArray, lte as lte7, gte as gte7, count as count5 } from "drizzle-orm";
function emptySyncResult() {
  return { created: 0, updated: 0, skipped: 0, errors: 0, errorMessages: [] };
}
function acquireLock() {
  if (syncRunning) return false;
  syncRunning = true;
  return true;
}
function releaseLock() {
  syncRunning = false;
}
function isSyncRunning() {
  return syncRunning;
}
function getLastAutoSyncError() {
  return lastAutoSyncError;
}
function getLastSyncCompletedAt() {
  return lastSyncCompletedAt;
}
async function getLastSyncCompletedAtFromDb() {
  if (lastSyncCompletedAt) return lastSyncCompletedAt;
  try {
    const [lastLog] = await db.select({ completedAt: crmSyncLogs.completedAt }).from(crmSyncLogs).where(eq11(crmSyncLogs.status, "completed")).orderBy(sql9`${crmSyncLogs.completedAt} DESC`).limit(1);
    if (lastLog?.completedAt) {
      lastSyncCompletedAt = lastLog.completedAt;
      return lastLog.completedAt;
    }
  } catch {
  }
  return null;
}
function getLastPushCompletedAt() {
  return lastPushCompletedAt;
}
function markSyncCompleted() {
  lastSyncCompletedAt = /* @__PURE__ */ new Date();
}
function clearAutoSyncError() {
  lastAutoSyncError = null;
}
async function sendCrmNewRequestAlerts(crmReq) {
  const alertMsg = `New CRM Hotel Request: ${crmReq.hotelName} needs ${crmReq.quantityNeeded || 1} ${crmReq.roleNeeded || "worker(s)"} \u2014 ${crmReq.shiftStartAt || "TBD"} to ${crmReq.shiftEndAt || "TBD"}`;
  try {
    const { sendDiscordNotification: sendDiscordNotification2 } = await Promise.resolve().then(() => (init_discord(), discord_exports));
    await sendDiscordNotification2({
      title: "New CRM Hotel Request (Sync)",
      message: alertMsg,
      color: "blue"
    });
  } catch (err) {
    console.error("[CRM-SYNC] Discord alert failed:", err?.message);
  }
  try {
    const GM_PHONE2 = "+14166028038";
    const { sendSMS: sendSMS2, logSMS: logSMS2 } = await Promise.resolve().then(() => (init_openphone(), openphone_exports));
    await sendSMS2(GM_PHONE2, alertMsg);
    await logSMS2({ phoneNumber: GM_PHONE2, direction: "outbound", message: alertMsg, status: "sent" });
  } catch (err) {
    console.error("[CRM-SYNC] SMS alert failed:", err?.message);
  }
}
async function getCachedConnectionStatus() {
  const now = Date.now();
  if (cachedConnectionStatus && now - cachedConnectionStatus.checkedAt < CONNECTION_CACHE_TTL) {
    return { connected: cachedConnectionStatus.connected, error: cachedConnectionStatus.error };
  }
  const result = await testConnection();
  cachedConnectionStatus = { connected: result.connected, error: result.error, checkedAt: now };
  return result;
}
async function createSyncLog(syncType, dryRun) {
  const [log2] = await db.insert(crmSyncLogs).values({
    syncType,
    status: "running",
    dryRun,
    startedAt: /* @__PURE__ */ new Date()
  }).returning({ id: crmSyncLogs.id });
  return log2.id;
}
async function completeSyncLog(logId, status, result) {
  await db.update(crmSyncLogs).set({
    status,
    createdCount: result.created,
    updatedCount: result.updated,
    skippedCount: result.skipped,
    errorCount: result.errors,
    errorMessages: result.errorMessages.length > 0 ? result.errorMessages.join("\n") : null,
    completedAt: /* @__PURE__ */ new Date()
  }).where(eq11(crmSyncLogs.id, logId));
}
function normalizeString(s) {
  return (s || "").trim().toLowerCase().replace(/\s+/g, " ");
}
function normalizePhone(phone) {
  if (!phone) return null;
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) return digits.slice(1);
  if (digits.length === 10) return digits;
  return digits;
}
function crmToLocal(isoString) {
  const raw = (isoString || "").replace(/Z$/, "").replace(/[+-]\d{2}:\d{2}$/, "");
  const [datePart, timePart = ""] = raw.split("T");
  return {
    date: datePart || "",
    time: timePart.substring(0, 5) || ""
  };
}
async function syncWorkplaces(dryRun = false, _skipLock = false) {
  if (!_skipLock && !acquireLock()) {
    throw new Error("A sync is already running. Please wait for it to complete.");
  }
  const result = emptySyncResult();
  const logId = await createSyncLog("workplaces", dryRun);
  try {
    const crmWorkplaces = await getWorkplaces();
    const existingWorkplaces = await db.select().from(workplaces);
    const byExternalId = new Map(
      existingWorkplaces.filter((w) => w.crmExternalId).map((w) => [w.crmExternalId, w])
    );
    const byNameAddress = new Map(
      existingWorkplaces.map((w) => [
        `${normalizeString(w.name)}|${normalizeString(w.addressLine1)}`,
        w
      ])
    );
    for (const crmWp of crmWorkplaces) {
      try {
        let existing = byExternalId.get(crmWp.id);
        if (!existing) {
          const key = `${normalizeString(crmWp.name)}|${normalizeString(crmWp.address)}`;
          existing = byNameAddress.get(key);
        }
        if (existing) {
          const needsUpdate = existing.name !== crmWp.name || existing.addressLine1 !== (crmWp.address || null) || existing.latitude !== (crmWp.latitude || null) || existing.longitude !== (crmWp.longitude || null) || existing.isActive !== crmWp.isActive || existing.crmExternalId !== crmWp.id;
          if (needsUpdate) {
            if (!dryRun) {
              await db.update(workplaces).set({
                name: crmWp.name,
                addressLine1: crmWp.address || existing.addressLine1,
                city: crmWp.location || existing.city,
                province: crmWp.province || existing.province,
                latitude: crmWp.latitude ?? existing.latitude,
                longitude: crmWp.longitude ?? existing.longitude,
                isActive: crmWp.isActive,
                crmExternalId: crmWp.id,
                crmSource: existing.crmSource || true,
                updatedAt: /* @__PURE__ */ new Date()
              }).where(eq11(workplaces.id, existing.id));
            }
            result.updated++;
          } else {
            result.skipped++;
          }
        } else {
          if (!dryRun) {
            await db.insert(workplaces).values({
              name: crmWp.name,
              addressLine1: crmWp.address || null,
              city: crmWp.location || null,
              province: crmWp.province || null,
              latitude: crmWp.latitude ?? null,
              longitude: crmWp.longitude ?? null,
              isActive: crmWp.isActive,
              crmExternalId: crmWp.id,
              crmSource: true
            });
          }
          result.created++;
        }
      } catch (err) {
        result.errors++;
        result.errorMessages.push(`Workplace "${crmWp.name}": ${err.message}`);
      }
    }
    await completeSyncLog(logId, "completed", result);
    console.log(`[CRM-SYNC] Workplaces: ${result.created} created, ${result.updated} updated, ${result.skipped} skipped, ${result.errors} errors${dryRun ? " (dry run)" : ""}`);
  } catch (err) {
    result.errors++;
    result.errorMessages.push(`Fatal: ${err.message}`);
    await completeSyncLog(logId, "failed", result);
    console.error("[CRM-SYNC] Workplaces sync failed:", err.message);
  } finally {
    if (!_skipLock) releaseLock();
  }
  return result;
}
async function syncConfirmedShifts(dryRun = false, _skipLock = false) {
  if (!_skipLock && !acquireLock()) {
    throw new Error("A sync is already running. Please wait for it to complete.");
  }
  const result = emptySyncResult();
  const logId = await createSyncLog("shifts", dryRun);
  try {
    const crmShifts = await getConfirmedShifts();
    const existingShifts = await db.select().from(shifts);
    const existingWorkplacesList = await db.select().from(workplaces);
    const allUsers = await db.select({ id: users.id, phone: users.phone, fullName: users.fullName }).from(users);
    const shiftByCrmId = new Map(
      existingShifts.filter((s) => s.crmShiftId).map((s) => [s.crmShiftId, s])
    );
    const workplaceByName = new Map(
      existingWorkplacesList.map((w) => [normalizeString(w.name), w])
    );
    const workplaceByExternalId = new Map(
      existingWorkplacesList.filter((w) => w.crmExternalId).map((w) => [w.crmExternalId, w])
    );
    const userByPhone = new Map(
      allUsers.filter((u) => u.phone).map((u) => [normalizePhone(u.phone), u])
    );
    for (const crmShift of crmShifts) {
      try {
        let workplace = workplaceByName.get(normalizeString(crmShift.request.hotelName));
        if (!workplace) {
          for (const [, wp] of workplaceByExternalId) {
            if (normalizeString(wp.name) === normalizeString(crmShift.request.hotelName)) {
              workplace = wp;
              break;
            }
          }
        }
        if (!workplace) {
          if (!dryRun) {
            const [newWp] = await db.insert(workplaces).values({
              name: crmShift.request.hotelName,
              addressLine1: crmShift.request.address || null,
              city: crmShift.request.location || null,
              crmSource: true
            }).returning();
            workplace = newWp;
            workplaceByName.set(normalizeString(newWp.name), newWp);
          } else {
            result.created++;
            continue;
          }
        }
        const start = crmToLocal(crmShift.scheduledStartAt);
        const end = crmToLocal(crmShift.scheduledEndAt);
        let workerUserId = null;
        if (crmShift.quoContactPhoneSnapshot) {
          const normalizedPhone = normalizePhone(crmShift.quoContactPhoneSnapshot);
          if (normalizedPhone) {
            const matchedUser = userByPhone.get(normalizedPhone);
            if (matchedUser) workerUserId = matchedUser.id;
          }
        }
        const statusMap = {
          CONFIRMED: "scheduled",
          COMPLETED: "completed"
        };
        const mappedStatus = statusMap[crmShift.confirmStatus] || "scheduled";
        const existing = shiftByCrmId.get(crmShift.id);
        if (existing) {
          if (!dryRun) {
            await db.update(shifts).set({
              title: crmShift.request.hotelName,
              date: start.date,
              startTime: start.time,
              endTime: end.time,
              roleType: crmShift.request.roleNeeded,
              status: mappedStatus,
              workplaceId: workplace.id,
              workerUserId,
              category: "hotel",
              updatedAt: /* @__PURE__ */ new Date()
            }).where(eq11(shifts.id, existing.id));
          }
          result.updated++;
        } else {
          if (!dryRun) {
            await db.insert(shifts).values({
              title: crmShift.request.hotelName,
              date: start.date,
              startTime: start.time,
              endTime: end.time,
              roleType: crmShift.request.roleNeeded,
              status: mappedStatus,
              workplaceId: workplace.id,
              workerUserId,
              category: "hotel",
              crmShiftId: crmShift.id,
              crmSource: true
            });
          }
          result.created++;
        }
      } catch (err) {
        result.errors++;
        result.errorMessages.push(`Shift "${crmShift.request?.hotelName || crmShift.id}": ${err.message}`);
      }
    }
    try {
      const activeCrmShiftIds = crmShifts.map((s) => s.id);
      const staleShifts = await db.select({ id: shifts.id, title: shifts.title }).from(shifts).where(
        and9(
          eq11(shifts.crmSource, true),
          ne4(shifts.status, "cancelled"),
          ne4(shifts.status, "completed"),
          // crmShiftId must be set (non-null) and not in the active set
          sql9`${shifts.crmShiftId} IS NOT NULL`,
          activeCrmShiftIds.length > 0 ? notInArray(shifts.crmShiftId, activeCrmShiftIds) : sql9`true`
        )
      );
      for (const stale of staleShifts) {
        if (!dryRun) {
          await db.update(shifts).set({ status: "cancelled", updatedAt: /* @__PURE__ */ new Date() }).where(eq11(shifts.id, stale.id));
        }
        result.updated++;
        console.log(`[CRM-SYNC] Cancelled stale shift: "${stale.title}" (id=${stale.id})${dryRun ? " (dry run)" : ""}`);
      }
    } catch (err) {
      result.errorMessages.push(`Stale shift cleanup: ${err.message}`);
    }
    await completeSyncLog(logId, "completed", result);
    console.log(`[CRM-SYNC] Shifts: ${result.created} created, ${result.updated} updated, ${result.skipped} skipped, ${result.errors} errors${dryRun ? " (dry run)" : ""}`);
  } catch (err) {
    result.errors++;
    result.errorMessages.push(`Fatal: ${err.message}`);
    await completeSyncLog(logId, "failed", result);
    console.error("[CRM-SYNC] Shifts sync failed:", err.message);
  } finally {
    if (!_skipLock) releaseLock();
  }
  return result;
}
async function syncHotelRequests(dryRun = false, _skipLock = false) {
  if (!_skipLock && !acquireLock()) {
    throw new Error("A sync is already running. Please wait for it to complete.");
  }
  const result = emptySyncResult();
  const logId = await createSyncLog("hotel-requests", dryRun);
  try {
    const crmRequests = await getHotelRequests();
    const existingRequests = await db.select().from(shiftRequests);
    const existingWorkplacesList = await db.select().from(workplaces);
    const adminUsers = await db.select({ id: users.id }).from(users).where(eq11(users.role, "admin")).limit(1);
    const adminId = adminUsers[0]?.id;
    if (!adminId) {
      throw new Error("No admin user found to assign as client for CRM shift requests");
    }
    const requestByCrmId = new Map(
      existingRequests.filter((r) => r.crmRequestId).map((r) => [r.crmRequestId, r])
    );
    const workplaceByName = new Map(
      existingWorkplacesList.map((w) => [normalizeString(w.name), w])
    );
    const activeRequests = crmRequests.filter((r) => !r.isDeleted);
    const deletedRequestIds = new Set(
      crmRequests.filter((r) => r.isDeleted).map((r) => r.id)
    );
    for (const [crmId, existingReq] of requestByCrmId) {
      if (deletedRequestIds.has(crmId) && existingReq.status !== "cancelled") {
        if (!dryRun) {
          await db.update(shiftRequests).set({ status: "cancelled", updatedAt: /* @__PURE__ */ new Date() }).where(eq11(shiftRequests.id, existingReq.id));
        }
        result.updated++;
      }
    }
    for (const crmReq of activeRequests) {
      try {
        let workplace = workplaceByName.get(normalizeString(crmReq.hotelName));
        if (!workplace) {
          if (!dryRun) {
            const [newWp] = await db.insert(workplaces).values({
              name: crmReq.hotelName,
              addressLine1: crmReq.address || null,
              city: crmReq.location || null,
              crmSource: true
            }).returning();
            workplace = newWp;
            workplaceByName.set(normalizeString(newWp.name), newWp);
          } else {
            result.created++;
            continue;
          }
        }
        const start = crmToLocal(crmReq.shiftStartAt);
        const end = crmToLocal(crmReq.shiftEndAt);
        const statusMap = {
          NEW: "submitted",
          CONFIRMED: "filled"
        };
        const mappedStatus = statusMap[crmReq.status] || "submitted";
        const existing = requestByCrmId.get(crmReq.id);
        if (existing) {
          const needsUpdate = existing.status !== mappedStatus || existing.roleType !== crmReq.roleNeeded;
          if (needsUpdate) {
            if (!dryRun) {
              await db.update(shiftRequests).set({
                roleType: crmReq.roleNeeded,
                date: start.date,
                startTime: start.time,
                endTime: end.time,
                status: mappedStatus,
                notes: [crmReq.hotelName, crmReq.notes].filter(Boolean).join(" - "),
                updatedAt: /* @__PURE__ */ new Date()
              }).where(eq11(shiftRequests.id, existing.id));
            }
            result.updated++;
          } else {
            result.skipped++;
          }
        } else {
          if (!dryRun) {
            await db.insert(shiftRequests).values({
              clientId: adminId,
              workplaceId: workplace.id,
              roleType: crmReq.roleNeeded,
              date: start.date,
              startTime: start.time,
              endTime: end.time,
              notes: [crmReq.hotelName, crmReq.notes].filter(Boolean).join(" - "),
              status: mappedStatus,
              crmRequestId: crmReq.id,
              crmSource: true
            });
            sendCrmNewRequestAlerts(crmReq).catch(
              (err) => console.error("[CRM-SYNC] Alert failed for new hotel request:", err?.message)
            );
          }
          result.created++;
        }
      } catch (err) {
        result.errors++;
        result.errorMessages.push(`Hotel request "${crmReq.hotelName}": ${err.message}`);
      }
    }
    await completeSyncLog(logId, "completed", result);
    console.log(`[CRM-SYNC] Hotel requests: ${result.created} created, ${result.updated} updated, ${result.skipped} skipped, ${result.errors} errors${dryRun ? " (dry run)" : ""}`);
  } catch (err) {
    result.errors++;
    result.errorMessages.push(`Fatal: ${err.message}`);
    await completeSyncLog(logId, "failed", result);
    console.error("[CRM-SYNC] Hotel requests sync failed:", err.message);
  } finally {
    if (!_skipLock) releaseLock();
  }
  return result;
}
async function syncAll(dryRun = false) {
  if (!acquireLock()) {
    throw new Error("A sync is already running. Please wait for it to complete.");
  }
  try {
    if (!dryRun) {
      try {
        await processCrmPushQueue();
      } catch (pushErr) {
        console.error("[CRM-SYNC] Push queue processing failed during syncAll:", pushErr?.message);
      }
    }
    const wpResult = await syncWorkplaces(dryRun, true);
    const shiftResult = await syncConfirmedShifts(dryRun, true);
    const hrResult = await syncHotelRequests(dryRun, true);
    const fullResult = {
      workplaces: wpResult,
      shifts: shiftResult,
      hotelRequests: hrResult,
      totalCreated: wpResult.created + shiftResult.created + hrResult.created,
      totalUpdated: wpResult.updated + shiftResult.updated + hrResult.updated,
      totalErrors: wpResult.errors + shiftResult.errors + hrResult.errors
    };
    if (fullResult.totalErrors > 0) {
      lastAutoSyncError = [
        ...wpResult.errorMessages,
        ...shiftResult.errorMessages,
        ...hrResult.errorMessages
      ].join("; ");
    } else {
      lastAutoSyncError = null;
    }
    lastSyncCompletedAt = /* @__PURE__ */ new Date();
    return fullResult;
  } finally {
    releaseLock();
  }
}
async function getSyncStatus() {
  const connectionTest = isConfigured() ? await getCachedConnectionStatus() : { connected: false, error: "Not configured" };
  const recentLogs = await db.select().from(crmSyncLogs).orderBy(sql9`${crmSyncLogs.startedAt} DESC`).limit(10);
  const lastSyncs = {};
  for (const syncType of ["workplaces", "shifts", "hotel-requests", "all"]) {
    const log2 = recentLogs.find((l) => l.syncType === syncType);
    if (log2) {
      lastSyncs[syncType] = {
        status: log2.status,
        startedAt: log2.startedAt,
        completedAt: log2.completedAt,
        created: log2.createdCount,
        updated: log2.updatedCount,
        skipped: log2.skippedCount,
        errors: log2.errorCount,
        dryRun: log2.dryRun
      };
    }
  }
  return {
    configured: isConfigured(),
    connected: connectionTest.connected,
    connectionError: connectionTest.error,
    lastSyncError: lastAutoSyncError,
    syncRunning,
    lastSyncs
  };
}
async function getSyncLogs(limit = 50) {
  return await db.select().from(crmSyncLogs).orderBy(sql9`${crmSyncLogs.startedAt} DESC`).limit(limit);
}
async function backfillWorkplacesToCrm() {
  const result = { pushed: 0, matched: 0, failed: 0, details: [] };
  if (!isConfigured()) {
    result.details.push("CRM not configured \u2014 skipping backfill");
    return result;
  }
  try {
    const unlinked = await db.select().from(workplaces).where(
      and9(
        isNull6(workplaces.crmExternalId),
        eq11(workplaces.crmSource, false)
      )
    );
    if (unlinked.length === 0) {
      result.details.push("No unlinked workplaces found \u2014 nothing to backfill");
      console.log("[CRM-SYNC] Backfill: no unlinked workplaces");
      return result;
    }
    console.log(`[CRM-SYNC] Backfill: found ${unlinked.length} unlinked workplace(s)`);
    let crmWorkplaces;
    try {
      crmWorkplaces = await getWorkplaces();
    } catch (err) {
      result.details.push(`Failed to fetch CRM workplaces: ${err.message}`);
      result.failed = unlinked.length;
      return result;
    }
    const crmByName = new Map(
      crmWorkplaces.map((w) => [normalizeString(w.name), w])
    );
    for (const wp of unlinked) {
      const normalizedName = normalizeString(wp.name);
      const existingCrm = crmByName.get(normalizedName);
      if (existingCrm) {
        try {
          await db.update(workplaces).set({ crmExternalId: existingCrm.id, updatedAt: /* @__PURE__ */ new Date() }).where(eq11(workplaces.id, wp.id));
          result.matched++;
          result.details.push(`Matched "${wp.name}" \u2192 CRM ID ${existingCrm.id}`);
          console.log(`[CRM-SYNC] Backfill matched: "${wp.name}" \u2192 CRM ${existingCrm.id}`);
        } catch (err) {
          result.failed++;
          result.details.push(`Failed to link "${wp.name}": ${err.message}`);
        }
      } else {
        try {
          const fullAddress = [wp.addressLine1, wp.city, wp.province, wp.postalCode].filter(Boolean).join(", ");
          const crmResult = await createCrmWorkplace({
            name: wp.name,
            address: fullAddress,
            location: wp.city || "",
            province: wp.province || "",
            latitude: wp.latitude ? Number(wp.latitude) : void 0,
            longitude: wp.longitude ? Number(wp.longitude) : void 0,
            isActive: wp.isActive !== false
          });
          await db.update(workplaces).set({ crmExternalId: crmResult.id, updatedAt: /* @__PURE__ */ new Date() }).where(eq11(workplaces.id, wp.id));
          result.pushed++;
          result.details.push(`Pushed "${wp.name}" \u2192 CRM ID ${crmResult.id}`);
          console.log(`[CRM-SYNC] Backfill pushed: "${wp.name}" \u2192 CRM ${crmResult.id}`);
        } catch (err) {
          result.failed++;
          result.details.push(`Failed to push "${wp.name}" to CRM: ${err.message}`);
          console.error(`[CRM-SYNC] Backfill failed for "${wp.name}":`, err.message);
        }
      }
    }
    console.log(`[CRM-SYNC] Backfill complete: ${result.pushed} pushed, ${result.matched} matched, ${result.failed} failed`);
    return result;
  } catch (err) {
    result.details.push(`Backfill error: ${err.message}`);
    console.error("[CRM-SYNC] Backfill error:", err.message);
    return result;
  }
}
async function enqueueCrmPush(entityType, entityId, action, payload) {
  try {
    await db.insert(crmPushQueue).values({
      entityType,
      entityId,
      action,
      payload: JSON.stringify(payload),
      status: "pending",
      attempts: 0,
      nextRetryAt: /* @__PURE__ */ new Date()
    });
    console.log(`[CRM-PUSH] Enqueued ${action} for ${entityType}/${entityId}`);
  } catch (err) {
    console.error(`[CRM-PUSH] Failed to enqueue ${action} for ${entityType}/${entityId}:`, err.message);
  }
}
async function processCrmPushQueue() {
  const result = { processed: 0, succeeded: 0, failed: 0 };
  if (!isConfigured()) return result;
  try {
    const pending = await db.select().from(crmPushQueue).where(
      and9(
        eq11(crmPushQueue.status, "pending"),
        lte7(crmPushQueue.nextRetryAt, /* @__PURE__ */ new Date())
      )
    ).limit(20);
    for (const item of pending) {
      const [claimed] = await db.update(crmPushQueue).set({ status: "processing" }).where(and9(eq11(crmPushQueue.id, item.id), eq11(crmPushQueue.status, "pending"))).returning();
      if (!claimed) continue;
      result.processed++;
      try {
        const payload = JSON.parse(item.payload);
        await executeCrmPushAction(item.entityType, item.action, item.entityId, payload);
        await db.update(crmPushQueue).set({ status: "completed", completedAt: /* @__PURE__ */ new Date() }).where(eq11(crmPushQueue.id, item.id));
        result.succeeded++;
        console.log(`[CRM-PUSH] Completed ${item.action} for ${item.entityType}/${item.entityId}`);
      } catch (err) {
        const newAttempts = item.attempts + 1;
        const backoffMs = Math.min(6e4 * Math.pow(2, newAttempts), 36e5);
        const nextRetry = new Date(Date.now() + backoffMs);
        if (newAttempts >= item.maxAttempts) {
          await db.update(crmPushQueue).set({ status: "failed", attempts: newAttempts, lastError: err.message, completedAt: /* @__PURE__ */ new Date() }).where(eq11(crmPushQueue.id, item.id));
          result.failed++;
          console.error(`[CRM-PUSH] Permanently failed ${item.action} for ${item.entityType}/${item.entityId}: ${err.message}`);
        } else {
          await db.update(crmPushQueue).set({ status: "pending", attempts: newAttempts, lastError: err.message, nextRetryAt: nextRetry }).where(eq11(crmPushQueue.id, item.id));
          console.warn(`[CRM-PUSH] Retry ${newAttempts}/${item.maxAttempts} for ${item.entityType}/${item.entityId}, next at ${nextRetry.toISOString()}`);
        }
      }
    }
  } catch (err) {
    console.error("[CRM-PUSH] Queue processing error:", err.message);
  }
  if (result.processed > 0) {
    lastPushCompletedAt = /* @__PURE__ */ new Date();
  }
  return result;
}
async function executeCrmPushAction(entityType, action, _entityId, payload) {
  switch (`${entityType}:${action}`) {
    case "confirmed_shift:update": {
      const crmId = payload.crmExternalId;
      if (!crmId) throw new Error("Missing crmExternalId");
      const shiftUpdate = {};
      if (payload.confirmStatus) shiftUpdate.confirmStatus = payload.confirmStatus;
      if (payload.checkedInAt) shiftUpdate.checkedInAt = payload.checkedInAt;
      if (payload.completedAt) shiftUpdate.completedAt = payload.completedAt;
      if (payload.notes) shiftUpdate.notes = payload.notes;
      await updateCrmConfirmedShift(crmId, shiftUpdate);
      break;
    }
    case "hotel_request:create": {
      const hrInput = {
        hotelName: payload.hotelName,
        roleNeeded: payload.roleNeeded,
        shiftStartAt: payload.shiftStartAt,
        shiftEndAt: payload.shiftEndAt,
        location: payload.location,
        address: payload.address,
        quantityNeeded: payload.quantityNeeded,
        payRate: payload.payRate,
        notes: payload.notes
      };
      await createCrmHotelRequest(hrInput);
      break;
    }
    case "hotel_request:update": {
      const crmId = payload.crmExternalId;
      if (!crmId) throw new Error("Missing crmExternalId");
      const hrUpdate = {};
      if (payload.hotelName) hrUpdate.hotelName = payload.hotelName;
      if (payload.roleNeeded) hrUpdate.roleNeeded = payload.roleNeeded;
      if (payload.quantityNeeded !== void 0) hrUpdate.quantityNeeded = payload.quantityNeeded;
      if (payload.shiftStartAt) hrUpdate.shiftStartAt = payload.shiftStartAt;
      if (payload.shiftEndAt) hrUpdate.shiftEndAt = payload.shiftEndAt;
      if (payload.payRate !== void 0) hrUpdate.payRate = payload.payRate;
      if (payload.notes) hrUpdate.notes = payload.notes;
      if (payload.status) hrUpdate.status = payload.status;
      await updateCrmHotelRequest(crmId, hrUpdate);
      break;
    }
    case "workplace:update": {
      const crmId = payload.crmExternalId;
      if (!crmId) throw new Error("Missing crmExternalId");
      const wpUpdate = {};
      if (payload.name) wpUpdate.name = payload.name;
      if (payload.address) wpUpdate.address = payload.address;
      if (payload.location) wpUpdate.location = payload.location;
      if (payload.province) wpUpdate.province = payload.province;
      if (payload.isActive !== void 0) wpUpdate.isActive = payload.isActive;
      await updateCrmWorkplace(crmId, wpUpdate);
      break;
    }
    default:
      throw new Error(`Unknown CRM push action: ${entityType}:${action}`);
  }
}
async function getCrmPushQueueStats() {
  try {
    const todayStart = /* @__PURE__ */ new Date();
    todayStart.setHours(0, 0, 0, 0);
    const [pendingResult] = await db.select({ count: count5() }).from(crmPushQueue).where(eq11(crmPushQueue.status, "pending"));
    const [failedResult] = await db.select({ count: count5() }).from(crmPushQueue).where(eq11(crmPushQueue.status, "failed"));
    const [completedResult] = await db.select({ count: count5() }).from(crmPushQueue).where(
      and9(
        eq11(crmPushQueue.status, "completed"),
        gte7(crmPushQueue.completedAt, todayStart)
      )
    );
    return {
      pending: pendingResult?.count ?? 0,
      failed: failedResult?.count ?? 0,
      completedToday: completedResult?.count ?? 0,
      lastPushAt: lastPushCompletedAt?.toISOString() || null,
      lastSyncAt: lastSyncCompletedAt?.toISOString() || null
    };
  } catch {
    return { pending: 0, failed: 0, completedToday: 0, lastPushAt: null, lastSyncAt: null };
  }
}
var syncRunning, lastAutoSyncError, lastSyncCompletedAt, lastPushCompletedAt, cachedConnectionStatus, CONNECTION_CACHE_TTL;
var init_crm_sync = __esm({
  "server/services/crm-sync.ts"() {
    "use strict";
    init_db();
    init_schema();
    init_weekdays_crm();
    syncRunning = false;
    lastAutoSyncError = null;
    lastSyncCompletedAt = null;
    lastPushCompletedAt = null;
    cachedConnectionStatus = null;
    CONNECTION_CACHE_TTL = 6e4;
  }
});

// server/services/clawd/tools.ts
import { eq as eq12, and as and10, ilike as ilike2, or, desc as desc5, gte as gte8, lte as lte8, sql as sql10 } from "drizzle-orm";
async function executeTool(toolName, input, callerUserId) {
  switch (toolName) {
    case "lookup_workers":
      return lookupWorkers(input);
    case "lookup_workplaces":
      return lookupWorkplaces(input);
    case "lookup_shifts":
      return lookupShifts(input);
    case "lookup_shift_requests":
      return lookupShiftRequests(input);
    case "read_recent_sms":
      return readRecentSms(input);
    case "find_available_workers":
      return findAvailableWorkers(input);
    case "check_discord_alerts":
      return checkDiscordAlerts(input);
    case "send_sms":
      return toolSendSms(input);
    case "notify_gm_lilee":
      return notifyGmLilee(input);
    case "send_discord_notification":
      return toolSendDiscord(input);
    case "send_worker_internal_message":
      return sendWorkerInternalMessage(input, callerUserId);
    case "create_shift_request":
      return toolCreateShiftRequest(input);
    case "create_workplace":
      return toolCreateWorkplace(input);
    case "update_workplace":
      return toolUpdateWorkplace(input);
    case "lookup_discord_members":
      return lookupDiscordMembers(input);
    case "create_calendar_event":
      return (async () => {
        try {
          const r = await createCalendarEvent({
            summary: input.summary,
            startDateTime: input.startDateTime,
            endDateTime: input.endDateTime,
            description: input.description,
            attendees: input.attendees
          });
          return { success: true, ...r };
        } catch (e) {
          return { success: false, error: e?.message };
        }
      })();
    case "list_calendar_events":
      return (async () => {
        try {
          const r = await listCalendarEvents(Math.min(input.maxResults || 10, 100), input.timeMin);
          return { success: true, events: r };
        } catch (e) {
          return { success: false, error: e?.message };
        }
      })();
    case "send_email_gmail":
      return (async () => {
        try {
          const r = await sendGmail({
            to: input.to,
            subject: input.subject,
            body: input.body,
            isHtml: input.isHtml
          });
          return { success: true, ...r };
        } catch (e) {
          return { success: false, error: e?.message };
        }
      })();
    case "read_recent_emails":
      return (async () => {
        try {
          const r = await readRecentGmailEmails(Math.min(input.maxResults || 10, 50), input.query);
          return { success: true, emails: r };
        } catch (e) {
          return { success: false, error: e?.message };
        }
      })();
    case "generate_replit_prompt":
      return generateReplitPrompt(input);
    case "lookup_crm_workplaces":
      return lookupCrmWorkplaces(input);
    case "lookup_crm_shifts":
      return lookupCrmShifts(input);
    case "lookup_crm_hotel_requests":
      return lookupCrmHotelRequests(input);
    case "create_crm_hotel_request":
      return toolCreateCrmHotelRequest(input);
    case "update_crm_hotel_request":
      return toolUpdateCrmHotelRequest(input);
    case "update_crm_confirmed_shift":
      return toolUpdateCrmConfirmedShift(input);
    default:
      throw new Error(`Unknown tool: ${toolName}`);
  }
}
function tokenizeName(query) {
  const cleaned = query.replace(/^\s*(try|find|search|look\s*up)\s+/i, "").trim();
  const spaceParts = cleaned.split(/\s+/).filter(Boolean);
  const allTokens = /* @__PURE__ */ new Set();
  for (const part of spaceParts) {
    allTokens.add(part);
    const camel = part.split(/(?=[A-Z][a-z])|(?<=[a-z])(?=[A-Z])/).filter((t) => t.length >= 2);
    camel.forEach((t) => allTokens.add(t));
    if (part.length > 4) allTokens.add(part.slice(0, 5));
  }
  return Array.from(allTokens).filter((t) => t.length >= 2);
}
async function lookupWorkers(input) {
  const query = input.query;
  const phone = input.phone;
  const workplaceId = input.workplaceId;
  const role = input.role;
  const limit = input.limit || 10;
  const baseSelect = {
    id: users.id,
    fullName: users.fullName,
    email: users.email,
    phone: users.phone,
    role: users.role,
    workerRoles: users.workerRoles,
    isActive: users.isActive
  };
  const workerActiveConditions = [eq12(users.role, "worker"), eq12(users.isActive, true)];
  if (phone) {
    const normalizedInput = phone.replace(/[^\d]/g, "");
    const allWorkers = await db.select(baseSelect).from(users).where(and10(...workerActiveConditions));
    const phoneMatches = allWorkers.filter((w) => {
      if (!w.phone) return false;
      const wNorm = w.phone.replace(/[^\d]/g, "");
      return wNorm === normalizedInput || wNorm.endsWith(normalizedInput) || normalizedInput.endsWith(wNorm) || normalizedInput.length >= 10 && wNorm.includes(normalizedInput.slice(-10));
    });
    if (phoneMatches.length > 0) {
      return { workers: phoneMatches.slice(0, limit), count: phoneMatches.length, searchedBy: "phone" };
    }
    return { workers: [], count: 0, searchedBy: "phone", message: "No worker found with that phone number" };
  }
  if (query) {
    const primaryConditions = [...workerActiveConditions, ilike2(users.fullName, `%${query}%`)];
    if (role) primaryConditions.push(ilike2(users.workerRoles, `%${role}%`));
    let results2 = await db.select(baseSelect).from(users).where(and10(...primaryConditions)).limit(limit);
    if (results2.length === 0) {
      const tokens = tokenizeName(query);
      const seen = /* @__PURE__ */ new Set();
      for (const token of tokens) {
        if (token.length < 2) continue;
        const tokenConditions = [...workerActiveConditions, ilike2(users.fullName, `%${token}%`)];
        const tokenResults = await db.select(baseSelect).from(users).where(and10(...tokenConditions)).limit(10);
        for (const r of tokenResults) {
          if (!seen.has(r.id)) {
            seen.add(r.id);
            results2.push(r);
          }
        }
        if (results2.length >= limit) break;
      }
      if (results2.length > 0) {
        console.log(`[tools] Fuzzy worker lookup for "${query}" found ${results2.length} via tokens: ${tokens.join(", ")}`);
      }
    }
    if (workplaceId && results2.length > 0) {
      const assigned = await db.select({ workerUserId: workplaceAssignments.workerUserId }).from(workplaceAssignments).where(and10(eq12(workplaceAssignments.workplaceId, workplaceId), eq12(workplaceAssignments.status, "active")));
      const assignedIds = new Set(assigned.map((a) => a.workerUserId));
      results2 = results2.filter((w) => assignedIds.has(w.id));
    }
    return {
      workers: results2.slice(0, limit),
      count: results2.length,
      searchedBy: "name",
      searchQuery: query,
      note: results2.length === 0 ? `No worker found matching "${query}". Try providing a phone number instead.` : void 0
    };
  }
  const conditions = [...workerActiveConditions];
  if (role) conditions.push(ilike2(users.workerRoles, `%${role}%`));
  let results = await db.select(baseSelect).from(users).where(and10(...conditions)).limit(limit);
  if (workplaceId) {
    const assigned = await db.select({ workerUserId: workplaceAssignments.workerUserId }).from(workplaceAssignments).where(and10(eq12(workplaceAssignments.workplaceId, workplaceId), eq12(workplaceAssignments.status, "active")));
    const assignedIds = new Set(assigned.map((a) => a.workerUserId));
    results = results.filter((w) => assignedIds.has(w.id));
  }
  return { workers: results, count: results.length };
}
async function lookupWorkplaces(input) {
  const rawQuery = input.query;
  const selectFields = {
    id: workplaces.id,
    name: workplaces.name,
    addressLine1: workplaces.addressLine1,
    city: workplaces.city
  };
  if (!rawQuery || !rawQuery.trim()) {
    const results = await db.select(selectFields).from(workplaces).where(eq12(workplaces.isActive, true)).limit(20);
    return { workplaces: results, count: results.length };
  }
  let normalizedQuery = rawQuery.trim();
  for (const [pattern, replacement] of WORKPLACE_ALIAS_PAIRS) {
    normalizedQuery = normalizedQuery.replace(pattern, replacement).trim();
  }
  const primary = await db.select(selectFields).from(workplaces).where(and10(eq12(workplaces.isActive, true), ilike2(workplaces.name, `%${normalizedQuery}%`))).limit(20);
  if (primary.length > 0) return { workplaces: primary, count: primary.length };
  if (normalizedQuery.toLowerCase() !== rawQuery.toLowerCase().trim()) {
    const original = await db.select(selectFields).from(workplaces).where(and10(eq12(workplaces.isActive, true), ilike2(workplaces.name, `%${rawQuery.trim()}%`))).limit(20);
    if (original.length > 0) return { workplaces: original, count: original.length };
  }
  const tokens = normalizedQuery.split(/\s+/).filter((t) => t.length >= 3);
  const seen = /* @__PURE__ */ new Set();
  const tokenResults = [];
  for (const token of tokens) {
    const rows = await db.select(selectFields).from(workplaces).where(and10(eq12(workplaces.isActive, true), ilike2(workplaces.name, `%${token}%`))).limit(20);
    for (const row of rows) {
      const key = String(row.id);
      if (!seen.has(key)) {
        seen.add(key);
        tokenResults.push(row);
      }
    }
  }
  return { workplaces: tokenResults.slice(0, 20), count: tokenResults.length };
}
async function lookupShifts(input) {
  const limit = input.limit || 10;
  const conditions = [];
  if (input.workplaceId) conditions.push(eq12(shifts.workplaceId, input.workplaceId));
  if (input.status) conditions.push(eq12(shifts.status, input.status));
  if (input.workerUserId) conditions.push(eq12(shifts.workerUserId, input.workerUserId));
  if (input.date) conditions.push(eq12(shifts.date, input.date));
  const results = await db.select({
    id: shifts.id,
    title: shifts.title,
    date: shifts.date,
    startTime: shifts.startTime,
    endTime: shifts.endTime,
    status: shifts.status,
    roleType: shifts.roleType,
    workplaceId: shifts.workplaceId,
    workerUserId: shifts.workerUserId
  }).from(shifts).where(conditions.length > 0 ? and10(...conditions) : void 0).orderBy(desc5(shifts.date)).limit(limit);
  return { shifts: results, count: results.length };
}
async function lookupShiftRequests(input) {
  const limit = input.limit || 10;
  const conditions = [];
  if (input.workplaceId) conditions.push(eq12(shiftRequests.workplaceId, input.workplaceId));
  if (input.status) conditions.push(eq12(shiftRequests.status, input.status));
  if (input.date) conditions.push(eq12(shiftRequests.date, input.date));
  const results = await db.select().from(shiftRequests).where(conditions.length > 0 ? and10(...conditions) : void 0).orderBy(desc5(shiftRequests.createdAt)).limit(limit);
  return { shiftRequests: results, count: results.length };
}
async function readRecentSms(input) {
  const direction = input.direction || "all";
  const limit = input.limit || 20;
  const phoneNumber = input.phoneNumber;
  const since = input.since;
  const conditions = [];
  if (direction !== "all") conditions.push(eq12(smsLogs.direction, direction));
  if (phoneNumber) conditions.push(eq12(smsLogs.phoneNumber, phoneNumber));
  if (since) conditions.push(gte8(smsLogs.createdAt, new Date(since)));
  const results = await db.select({
    id: smsLogs.id,
    phoneNumber: smsLogs.phoneNumber,
    direction: smsLogs.direction,
    message: smsLogs.message,
    workerId: smsLogs.workerId,
    classification: smsLogs.classification,
    status: smsLogs.status,
    createdAt: smsLogs.createdAt
  }).from(smsLogs).where(conditions.length > 0 ? and10(...conditions) : void 0).orderBy(desc5(smsLogs.createdAt)).limit(limit);
  const workerIds = [...new Set(results.map((r) => r.workerId).filter(Boolean))];
  const workerMap = {};
  if (workerIds.length > 0) {
    const workers = await db.select({ id: users.id, fullName: users.fullName }).from(users).where(sql10`${users.id} = ANY(${workerIds})`);
    workers.forEach((w) => {
      workerMap[w.id] = w.fullName;
    });
  }
  return {
    messages: results.map((r) => ({ ...r, workerName: r.workerId ? workerMap[r.workerId] || "Unknown" : null })),
    count: results.length
  };
}
async function findAvailableWorkers(input) {
  const workplaceId = input.workplaceId;
  const date2 = input.date;
  const assignedWorkers = await db.select({ workerUserId: workplaceAssignments.workerUserId }).from(workplaceAssignments).where(and10(eq12(workplaceAssignments.workplaceId, workplaceId), eq12(workplaceAssignments.status, "active")));
  const assignedIds = assignedWorkers.map((a) => a.workerUserId);
  if (assignedIds.length === 0) {
    return {
      availableWorkers: [],
      count: 0,
      message: `No workers are assigned to workplace ${workplaceId}. Use lookup_workplaces to verify the workplace ID, or check workplace assignments in the admin panel.`
    };
  }
  const busyWorkerRows = await db.select({ workerUserId: shifts.workerUserId }).from(shifts).where(and10(eq12(shifts.date, date2), sql10`${shifts.workerUserId} = ANY(${assignedIds})`, sql10`${shifts.status} != 'cancelled'`));
  const busyIds = new Set(busyWorkerRows.map((r) => r.workerUserId).filter(Boolean));
  const availableIds = assignedIds.filter((id) => !busyIds.has(id));
  if (availableIds.length === 0) {
    return {
      availableWorkers: [],
      count: 0,
      message: `All ${assignedIds.length} worker(s) assigned to this workplace are already scheduled on ${date2}. Consider checking other dates or sending a shift offer blast to workers not assigned here.`
    };
  }
  const workers = await db.select({ id: users.id, fullName: users.fullName, phone: users.phone, workerRoles: users.workerRoles, isActive: users.isActive }).from(users).where(and10(sql10`${users.id} = ANY(${availableIds})`, eq12(users.isActive, true)));
  return { availableWorkers: workers, count: workers.length };
}
async function checkDiscordAlerts(input) {
  const status = input.status || "all";
  const type = input.type;
  const limit = input.limit || 10;
  const conditions = [];
  if (status !== "all") conditions.push(eq12(discordAlerts.status, status));
  if (type) conditions.push(eq12(discordAlerts.type, type));
  const results = await db.select().from(discordAlerts).where(conditions.length > 0 ? and10(...conditions) : void 0).orderBy(desc5(discordAlerts.createdAt)).limit(limit);
  return { alerts: results, count: results.length };
}
async function toolSendSms(input) {
  const phoneNumber = input.phoneNumber;
  const message = input.message;
  const workerId = input.workerId;
  const result = await sendSMS(phoneNumber, message);
  await logSMS({
    phoneNumber,
    direction: "outbound",
    message,
    workerId,
    status: result.success ? "sent" : "failed",
    openphoneMessageId: result.messageId
  });
  return { success: result.success, messageId: result.messageId, error: result.error };
}
async function notifyGmLilee(input) {
  const message = `[WFConnect] ${input.message}`;
  const result = await sendSMS(GM_LILEE_PHONE2, message);
  await logSMS({
    phoneNumber: GM_LILEE_PHONE2,
    direction: "outbound",
    message,
    status: result.success ? "sent" : "failed",
    openphoneMessageId: result.messageId
  });
  return { success: result.success, recipient: "GM Lilee", error: result.error };
}
async function toolSendDiscord(input) {
  const urgencyToColor = {
    urgent: "red",
    warning: "amber",
    info: "blue",
    success: "green"
  };
  const urgency = input.urgency || "info";
  const color = urgencyToColor[urgency] || "blue";
  const result = await sendDiscordNotification({
    title: input.title,
    message: input.message,
    color,
    type: input.type,
    workerId: input.workerId != null ? String(input.workerId) : void 0,
    clientId: input.clientId != null ? String(input.clientId) : void 0,
    workplaceId: input.workplaceId != null ? String(input.workplaceId) : void 0,
    shiftId: input.shiftId != null ? String(input.shiftId) : void 0
  });
  return { success: result.success, alertId: result.alertId, error: result.error };
}
async function sendWorkerInternalMessage(input, callerUserId) {
  const workerId = input.workerId;
  const messageBody = input.message;
  const senderUserId = input.senderUserId || callerUserId;
  if (!senderUserId) return { success: false, error: "senderUserId required" };
  try {
    let [conversation] = await db.select().from(conversations2).where(and10(eq12(conversations2.workerUserId, workerId), eq12(conversations2.isArchived, false))).limit(1);
    if (!conversation) {
      const [newConv] = await db.insert(conversations2).values({ workerUserId: workerId, hrUserId: senderUserId, lastMessageAt: /* @__PURE__ */ new Date(), lastMessagePreview: messageBody.slice(0, 100) }).returning();
      conversation = newConv;
    }
    await db.insert(messages2).values({
      conversationId: conversation.id,
      senderUserId,
      recipientUserId: workerId,
      body: messageBody,
      messageType: "text",
      status: "delivered"
    });
    await db.update(conversations2).set({ lastMessageAt: /* @__PURE__ */ new Date(), lastMessagePreview: messageBody.slice(0, 100) }).where(eq12(conversations2.id, conversation.id));
    return { success: true, conversationId: conversation.id };
  } catch (err) {
    return { success: false, error: err?.message };
  }
}
async function toolCreateShiftRequest(input) {
  const workplaceId = input.workplaceId;
  const date2 = input.date;
  const clientId = input.clientId;
  const roleType = input.roleType;
  const startTime = input.startTime;
  const endTime = input.endTime;
  try {
    const existing = await db.select().from(shiftRequests).where(
      and10(
        eq12(shiftRequests.workplaceId, workplaceId),
        eq12(shiftRequests.date, date2),
        or(
          eq12(shiftRequests.startTime, startTime),
          and10(
            lte8(shiftRequests.startTime, endTime),
            gte8(shiftRequests.endTime, startTime)
          )
        ),
        or(
          eq12(shiftRequests.status, "submitted"),
          eq12(shiftRequests.status, "accepted")
        )
      )
    ).limit(3);
    if (existing.length > 0) {
      const dup = existing[0];
      const isExact = dup.startTime === startTime && dup.endTime === endTime;
      return {
        success: false,
        duplicate: true,
        error: isExact ? `Exact duplicate: a ${dup.status} shift request already exists for this workplace on ${date2} at ${startTime}\u2013${endTime} (ID: ${dup.id}). Use the existing one or cancel it first.` : `Overlapping shift: a ${dup.status} shift request exists for this workplace on ${date2} at ${dup.startTime}\u2013${dup.endTime} (ID: ${dup.id}). The requested time ${startTime}\u2013${endTime} overlaps. Adjust the time or cancel the existing request.`,
        existingShiftId: dup.id,
        existingShift: { id: dup.id, status: dup.status, startTime: dup.startTime, endTime: dup.endTime }
      };
    }
    const [newRequest] = await db.insert(shiftRequests).values({
      clientId,
      workplaceId,
      roleType,
      date: date2,
      startTime,
      endTime,
      notes: input.notes,
      status: "submitted"
    }).returning();
    return { success: true, shiftRequestId: newRequest.id, shiftRequest: newRequest };
  } catch (err) {
    const msg = err?.message || "Unknown database error";
    if (msg.includes("foreign key")) {
      return { success: false, error: `Invalid workplace ID "${workplaceId}" or client ID "${clientId}" \u2014 one or both don't exist in the system. Use lookup_workplaces to find valid IDs.` };
    }
    if (msg.includes("not null") || msg.includes("violates")) {
      const missingFields = [];
      if (!date2) missingFields.push("date");
      if (!startTime) missingFields.push("startTime");
      if (!endTime) missingFields.push("endTime");
      if (!workplaceId) missingFields.push("workplaceId");
      if (!clientId) missingFields.push("clientId");
      if (!roleType) missingFields.push("roleType");
      return { success: false, error: missingFields.length > 0 ? `Missing required fields: ${missingFields.join(", ")}. All six fields are needed to create a shift request.` : `Database constraint error: ${msg}` };
    }
    return { success: false, error: `Shift creation failed: ${msg}. Try again or use generate_replit_prompt to escalate.` };
  }
}
async function lookupDiscordMembers(input) {
  const query = input.query;
  const limit = input.limit;
  const members = await getGuildMembers(query, limit);
  if (members.length === 0) {
    return {
      members: [],
      count: 0,
      message: query ? `No Discord members found matching "${query}". The bot may not have the Server Members intent enabled, or the member list hasn't been cached yet.` : "No Discord members found. The bot may not be connected or the Server Members intent may not be enabled in the Discord Developer Portal."
    };
  }
  const nonBotMembers = members.filter((m) => !m.isBot);
  return {
    members: nonBotMembers,
    count: nonBotMembers.length,
    botMembers: members.filter((m) => m.isBot).length,
    searchedBy: query ? "name" : "all"
  };
}
async function geocodeAddress(address, city, province, postalCode, country) {
  const parts = [address, city, province, postalCode, country || "Canada"].filter(Boolean);
  const fullAddress = parts.join(", ");
  try {
    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.searchParams.set("q", fullAddress);
    url.searchParams.set("format", "json");
    url.searchParams.set("limit", "1");
    const res = await fetch(url.toString(), {
      headers: { "User-Agent": "WFConnect/1.0" }
    });
    if (!res.ok) {
      console.log(`[tools] Nominatim returned HTTP ${res.status} for "${fullAddress}"`);
      return null;
    }
    const data = await res.json();
    if (data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lng = parseFloat(data[0].lon);
      console.log(`[tools] Geocoded "${fullAddress}" \u2192 ${lat}, ${lng}`);
      return { lat, lng };
    }
    console.log(`[tools] Nominatim returned no results for "${fullAddress}"`);
    return null;
  } catch (err) {
    console.error("[tools] Geocoding error:", err?.message);
    return null;
  }
}
async function toolCreateWorkplace(input) {
  const name = input.name;
  const address = input.address;
  const city = input.city;
  const province = input.province;
  const postalCode = input.postalCode;
  const country = input.country || "Canada";
  const geofenceRadius = input.geofenceRadiusMeters;
  if (!name || !address || !city || !province || !postalCode) {
    const missing = [];
    if (!name) missing.push("name");
    if (!address) missing.push("address");
    if (!city) missing.push("city");
    if (!province) missing.push("province");
    if (!postalCode) missing.push("postalCode");
    return { success: false, error: `Missing required fields: ${missing.join(", ")}` };
  }
  try {
    const existing = await db.select({ id: workplaces.id, name: workplaces.name }).from(workplaces).where(ilike2(workplaces.name, name)).limit(1);
    if (existing.length > 0) {
      return {
        success: false,
        duplicate: true,
        error: `A workplace named "${existing[0].name}" already exists (ID: ${existing[0].id}). Use update_workplace to modify it.`,
        existingWorkplaceId: existing[0].id
      };
    }
    if (isConfigured()) {
      try {
        const crmWorkplaces = await getWorkplaces();
        const normalizedName = name.trim().toLowerCase().replace(/\s+/g, " ");
        const crmMatch = crmWorkplaces.find(
          (w) => w.name.trim().toLowerCase().replace(/\s+/g, " ") === normalizedName
        );
        if (crmMatch) {
          return {
            success: false,
            duplicate: true,
            error: `A workplace named "${crmMatch.name}" already exists in the CRM (CRM ID: ${crmMatch.id}). It may not be in the local DB yet \u2014 run /api/admin/workplaces/sync-to-crm or wait for the next sync cycle.`
          };
        }
      } catch (crmErr) {
        console.warn(`[CRM-SYNC] CRM duplicate check failed (proceeding): ${crmErr?.message}`);
      }
    }
    const geo = await geocodeAddress(address, city, province, postalCode, country);
    const [newWorkplace] = await db.insert(workplaces).values({
      name,
      addressLine1: address,
      city,
      province,
      postalCode,
      country,
      latitude: geo?.lat ?? null,
      longitude: geo?.lng ?? null,
      geofenceRadiusMeters: geofenceRadius || 150
    }).returning();
    let crmSynced = false;
    let crmNote = "";
    if (isConfigured()) {
      try {
        const fullAddress = [address, city, province, postalCode].filter(Boolean).join(", ");
        const crmResult = await createCrmWorkplace({
          name,
          address: fullAddress,
          location: city,
          province,
          latitude: geo?.lat,
          longitude: geo?.lng,
          isActive: true
        });
        await db.update(workplaces).set({ crmExternalId: crmResult.id, updatedAt: /* @__PURE__ */ new Date() }).where(eq12(workplaces.id, newWorkplace.id));
        crmSynced = true;
        crmNote = `Created in mobile app and CRM (CRM ID: ${crmResult.id}).`;
        console.log(`[CRM-SYNC] Workplace "${name}" linked: local=${newWorkplace.id} \u2192 CRM=${crmResult.id}`);
      } catch (crmErr) {
        crmNote = `Created in mobile app only \u2014 CRM sync pending: ${crmErr?.message}. Use /api/admin/workplaces/sync-to-crm to retry.`;
        console.error(`[CRM-SYNC] Failed to push workplace "${name}" to CRM:`, crmErr?.message);
      }
    } else {
      crmNote = "Created in mobile app only \u2014 CRM not configured.";
    }
    const geoNote = geo ? `Coordinates resolved: ${geo.lat}, ${geo.lng}.` : "Address could not be geocoded \u2014 coordinates not set.";
    return {
      success: true,
      workplaceId: newWorkplace.id,
      workplace: {
        id: newWorkplace.id,
        name: newWorkplace.name,
        address: newWorkplace.addressLine1,
        city: newWorkplace.city,
        province: newWorkplace.province,
        postalCode: newWorkplace.postalCode,
        latitude: newWorkplace.latitude,
        longitude: newWorkplace.longitude,
        geofenceRadiusMeters: newWorkplace.geofenceRadiusMeters
      },
      geocoded: !!geo,
      crmSynced,
      note: `${geoNote} ${crmNote}`
    };
  } catch (err) {
    return { success: false, error: `Failed to create workplace: ${err?.message}` };
  }
}
async function toolUpdateWorkplace(input) {
  const workplaceId = input.workplaceId;
  if (!workplaceId) {
    return { success: false, error: "Missing required field: workplaceId. Use lookup_workplaces to find the ID." };
  }
  try {
    const [existing] = await db.select().from(workplaces).where(eq12(workplaces.id, workplaceId));
    if (!existing) {
      return { success: false, error: `Workplace "${workplaceId}" not found. Use lookup_workplaces to find valid IDs.` };
    }
    const updates = { updatedAt: /* @__PURE__ */ new Date() };
    if (input.name) updates.name = input.name;
    if (input.address) updates.addressLine1 = input.address;
    if (input.city) updates.city = input.city;
    if (input.province) updates.province = input.province;
    if (input.postalCode) updates.postalCode = input.postalCode;
    if (input.country) updates.country = input.country;
    if (input.geofenceRadiusMeters !== void 0) updates.geofenceRadiusMeters = input.geofenceRadiusMeters;
    if (input.isActive !== void 0) updates.isActive = input.isActive;
    const addressChanged = input.address || input.city || input.province || input.postalCode;
    let geocoded = false;
    if (addressChanged) {
      const addr = input.address || existing.addressLine1 || "";
      const city = input.city || existing.city || "";
      const prov = input.province || existing.province || "";
      const postal = input.postalCode || existing.postalCode || "";
      const country = input.country || existing.country || "Canada";
      const geo = await geocodeAddress(addr, city, prov, postal, country);
      if (geo) {
        updates.latitude = geo.lat;
        updates.longitude = geo.lng;
        geocoded = true;
      }
    }
    const [updated] = await db.update(workplaces).set(updates).where(eq12(workplaces.id, workplaceId)).returning();
    let crmSyncNote = "";
    if (updated.crmExternalId && isConfigured()) {
      try {
        const crmUpdates = {};
        if (input.name) crmUpdates.name = input.name;
        if (addressChanged) {
          const fullAddress = [
            updated.addressLine1,
            updated.city,
            updated.province,
            updated.postalCode
          ].filter(Boolean).join(", ");
          crmUpdates.address = fullAddress;
          crmUpdates.location = updated.city || void 0;
          crmUpdates.province = updated.province || void 0;
        }
        if (geocoded) {
          crmUpdates.latitude = updated.latitude ? Number(updated.latitude) : void 0;
          crmUpdates.longitude = updated.longitude ? Number(updated.longitude) : void 0;
        }
        if (input.isActive !== void 0) crmUpdates.isActive = input.isActive;
        const hasUpdates = Object.values(crmUpdates).some((v) => v !== void 0);
        if (hasUpdates) {
          await updateCrmWorkplace(updated.crmExternalId, crmUpdates);
          crmSyncNote = " CRM record updated.";
          console.log(`[CRM-SYNC] Workplace "${updated.name}" synced to CRM (${updated.crmExternalId})`);
        }
      } catch (crmErr) {
        crmSyncNote = ` CRM sync failed: ${crmErr?.message}.`;
        console.error(`[CRM-SYNC] Failed to update workplace "${updated.name}" in CRM:`, crmErr?.message);
      }
    }
    const baseNote = addressChanged ? geocoded ? `Coordinates updated: ${updated.latitude}, ${updated.longitude}.` : "Address changed but geocoding failed \u2014 coordinates not updated." : "Updated successfully.";
    return {
      success: true,
      workplace: {
        id: updated.id,
        name: updated.name,
        address: updated.addressLine1,
        city: updated.city,
        province: updated.province,
        postalCode: updated.postalCode,
        latitude: updated.latitude,
        longitude: updated.longitude,
        geofenceRadiusMeters: updated.geofenceRadiusMeters,
        isActive: updated.isActive
      },
      geocoded,
      note: baseNote + crmSyncNote
    };
  } catch (err) {
    return { success: false, error: `Failed to update workplace: ${err?.message}` };
  }
}
async function lookupCrmWorkplaces(input) {
  if (!isConfigured()) {
    return { success: false, error: "CRM is not configured. WEEKDAYS_API_KEY and WEEKDAYS_TEAM_ID are required." };
  }
  try {
    const crmAll = await getWorkplaces();
    const localAll = await db.select({ id: workplaces.id, crmExternalId: workplaces.crmExternalId }).from(workplaces);
    const localByCrmId = new Map(localAll.filter((w) => w.crmExternalId).map((w) => [w.crmExternalId, w]));
    let results = crmAll;
    const searchTerm = input.searchTerm?.toLowerCase();
    if (searchTerm) {
      results = results.filter(
        (w) => w.name.toLowerCase().includes(searchTerm) || (w.location || "").toLowerCase().includes(searchTerm) || (w.address || "").toLowerCase().includes(searchTerm)
      );
    }
    const limit = Math.min(input.limit || 20, 50);
    return {
      success: true,
      count: results.length,
      workplaces: results.slice(0, limit).map((w) => ({
        crmId: w.id,
        name: w.name,
        address: w.address,
        location: w.location,
        province: w.province,
        isActive: w.isActive,
        latitude: w.latitude,
        longitude: w.longitude,
        localMatch: localByCrmId.has(w.id),
        missingLocally: !localByCrmId.has(w.id)
      }))
    };
  } catch (err) {
    return { success: false, error: `CRM lookup failed: ${err?.message}` };
  }
}
async function lookupCrmShifts(input) {
  if (!isConfigured()) {
    return { success: false, error: "CRM is not configured." };
  }
  try {
    const allShifts = await getConfirmedShifts();
    let results = allShifts;
    const workplaceName = input.workplaceName?.toLowerCase();
    const workerName = input.workerName?.toLowerCase();
    const dateFrom = input.dateFrom;
    const dateTo = input.dateTo;
    const status = input.status?.toUpperCase();
    if (workplaceName) {
      results = results.filter(
        (s) => (s.request?.hotelName || "").toLowerCase().includes(workplaceName)
      );
    }
    if (workerName) {
      results = results.filter(
        (s) => (s.quoContactNameSnapshot || "").toLowerCase().includes(workerName)
      );
    }
    if (dateFrom) {
      results = results.filter((s) => s.scheduledStartAt >= dateFrom);
    }
    if (dateTo) {
      results = results.filter((s) => s.scheduledStartAt <= dateTo);
    }
    if (status) {
      results = results.filter((s) => s.confirmStatus === status);
    }
    const limit = Math.min(input.limit || 20, 50);
    return {
      success: true,
      count: results.length,
      shifts: results.slice(0, limit).map((s) => ({
        crmId: s.id,
        hotelName: s.request?.hotelName || "",
        roleNeeded: s.request?.roleNeeded || "",
        location: s.request?.location || "",
        workerContact: s.quoContactNameSnapshot || "",
        scheduledStart: s.scheduledStartAt,
        scheduledEnd: s.scheduledEndAt,
        confirmStatus: s.confirmStatus,
        confirmedAt: s.confirmedAt,
        checkedInAt: s.checkedInAt,
        completedAt: s.completedAt
      }))
    };
  } catch (err) {
    return { success: false, error: `CRM lookup failed: ${err?.message}` };
  }
}
async function lookupCrmHotelRequests(input) {
  if (!isConfigured()) {
    return { success: false, error: "CRM is not configured." };
  }
  try {
    const allRequests = await getHotelRequests();
    let results = allRequests;
    const hotelName = input.hotelName?.toLowerCase();
    const status = input.status?.toUpperCase();
    const location = input.location?.toLowerCase();
    const dateFrom = input.dateFrom;
    const dateTo = input.dateTo;
    if (hotelName) {
      results = results.filter((r) => (r.hotelName || "").toLowerCase().includes(hotelName));
    }
    if (status) {
      results = results.filter((r) => r.status === status);
    }
    if (location) {
      results = results.filter((r) => (r.location || "").toLowerCase().includes(location));
    }
    if (dateFrom) {
      results = results.filter((r) => r.shiftStartAt >= dateFrom);
    }
    if (dateTo) {
      results = results.filter((r) => r.shiftStartAt <= dateTo);
    }
    const limit = Math.min(input.limit || 20, 50);
    return {
      success: true,
      count: results.length,
      hotelRequests: results.slice(0, limit).map((r) => ({
        crmId: r.id,
        hotelName: r.hotelName,
        roleNeeded: r.roleNeeded,
        quantityNeeded: r.quantityNeeded,
        location: r.location,
        address: r.address,
        shiftStartAt: r.shiftStartAt,
        shiftEndAt: r.shiftEndAt,
        payRate: r.payRate,
        status: r.status,
        notes: r.notes
      }))
    };
  } catch (err) {
    return { success: false, error: `CRM lookup failed: ${err?.message}` };
  }
}
async function toolCreateCrmHotelRequest(input) {
  if (!isConfigured()) {
    return { success: false, error: "CRM is not configured." };
  }
  const hotelName = input.hotelName;
  const roleNeeded = input.roleNeeded;
  const shiftStartAt = input.shiftStartAt;
  const shiftEndAt = input.shiftEndAt;
  if (!hotelName || !roleNeeded || !shiftStartAt || !shiftEndAt) {
    return { success: false, error: "Missing required fields: hotelName, roleNeeded, shiftStartAt, shiftEndAt" };
  }
  try {
    const result = await createCrmHotelRequest({
      hotelName,
      roleNeeded,
      location: input.location,
      address: input.address,
      quantityNeeded: input.quantityNeeded,
      shiftStartAt,
      shiftEndAt,
      payRate: input.payRate,
      notes: input.notes
    });
    return {
      success: true,
      hotelRequest: {
        crmId: result.id,
        hotelName: result.hotelName,
        roleNeeded: result.roleNeeded,
        status: result.status
      },
      note: `Hotel request created in CRM with ID ${result.id}`
    };
  } catch (err) {
    await enqueueCrmPush("hotel_request", "new", "create", {
      hotelName,
      roleNeeded,
      shiftStartAt,
      shiftEndAt,
      location: input.location,
      address: input.address,
      quantityNeeded: input.quantityNeeded,
      payRate: input.payRate,
      notes: input.notes
    });
    return { success: false, error: `CRM push failed (queued for retry): ${err?.message}` };
  }
}
async function toolUpdateCrmHotelRequest(input) {
  if (!isConfigured()) {
    return { success: false, error: "CRM is not configured." };
  }
  const crmId = input.crmId;
  if (!crmId) {
    return { success: false, error: "Missing required field: crmId. Use lookup_crm_hotel_requests to find the ID." };
  }
  try {
    const updates = {};
    if (input.hotelName) updates.hotelName = input.hotelName;
    if (input.roleNeeded) updates.roleNeeded = input.roleNeeded;
    if (input.quantityNeeded !== void 0) updates.quantityNeeded = input.quantityNeeded;
    if (input.shiftStartAt) updates.shiftStartAt = input.shiftStartAt;
    if (input.shiftEndAt) updates.shiftEndAt = input.shiftEndAt;
    if (input.payRate !== void 0) updates.payRate = input.payRate;
    if (input.notes) updates.notes = input.notes;
    if (input.status) updates.status = input.status;
    const result = await updateCrmHotelRequest(crmId, updates);
    return {
      success: true,
      hotelRequest: {
        crmId: result.id,
        hotelName: result.hotelName,
        status: result.status
      },
      note: `Hotel request ${crmId} updated in CRM`
    };
  } catch (err) {
    await enqueueCrmPush("hotel_request", crmId, "update", { crmExternalId: crmId, ...input });
    return { success: false, error: `CRM update failed (queued for retry): ${err?.message}` };
  }
}
async function toolUpdateCrmConfirmedShift(input) {
  if (!isConfigured()) {
    return { success: false, error: "CRM is not configured." };
  }
  const crmId = input.crmId;
  if (!crmId) {
    return { success: false, error: "Missing required field: crmId. Use lookup_crm_shifts to find the ID." };
  }
  try {
    const updates = {};
    if (input.confirmStatus) updates.confirmStatus = input.confirmStatus;
    if (input.checkedInAt) updates.checkedInAt = input.checkedInAt;
    if (input.completedAt) updates.completedAt = input.completedAt;
    if (input.notes) updates.notes = input.notes;
    const result = await updateCrmConfirmedShift(crmId, updates);
    return {
      success: true,
      shift: {
        crmId: result.id,
        confirmStatus: result.confirmStatus
      },
      note: `Confirmed shift ${crmId} updated in CRM`
    };
  } catch (err) {
    await enqueueCrmPush("confirmed_shift", crmId, "update", { crmExternalId: crmId, ...input });
    return { success: false, error: `CRM update failed (queued for retry): ${err?.message}` };
  }
}
function generateReplitPrompt(input) {
  const userRequest = input.userRequest;
  const whatWasAttempted = input.whatWasAttempted;
  const suggestedSolution = input.suggestedSolution;
  const affectedFiles = input.affectedFiles;
  const additionalContext = input.additionalContext;
  const prompt = `# Replit AI Task Request

## What the user wants
${userRequest}

## Background / Context
This is the WFConnect workforce management app. It has:
- Express.js backend (TypeScript) in \`server/\`
- React Native (Expo) frontend in \`client/\`
- PostgreSQL database with Drizzle ORM, schema in \`shared/schema.ts\`
- Clawd AI multi-agent system in \`server/services/clawd/\`
- OpenPhone SMS integration in \`server/services/openphone.ts\`
- Discord notifications in \`server/services/discord.ts\`
${additionalContext ? `
## Additional Context
${additionalContext}` : ""}
${whatWasAttempted ? `
## What was already attempted
${whatWasAttempted}` : ""}

## Suggested solution
${suggestedSolution}

${affectedFiles ? `## Files likely to be affected
${affectedFiles.split(",").map((f) => `- ${f.trim()}`).join("\n")}` : ""}

## Instructions
Please implement the above. Follow existing code patterns and conventions in the codebase. After implementing, restart the backend workflow to apply changes.`;
  return { prompt, isReplitAiPrompt: true };
}
var GM_LILEE_PHONE2, CLAWD_TOOLS, WORKPLACE_ALIAS_PAIRS;
var init_tools = __esm({
  "server/services/clawd/tools.ts"() {
    "use strict";
    init_db();
    init_schema();
    init_openphone();
    init_discord();
    init_discord_bot();
    init_google_calendar();
    init_google_gmail();
    init_weekdays_crm();
    init_crm_sync();
    GM_LILEE_PHONE2 = "+14166028038";
    CLAWD_TOOLS = [
      // ----- LOOKUP TOOLS -----
      {
        name: "lookup_workers",
        description: "Search for workers by name, phone number, role, or workplace. Supports fuzzy name matching \u2014 try partial names, first names, or camelCase compressed names like 'BergelMMJ'. Use phone parameter for phone number lookup.",
        input_schema: {
          type: "object",
          properties: {
            query: { type: "string", description: "Name or partial name to search for. Supports fuzzy matching \u2014 try first name alone, last name alone, or compressed names like 'BergelMMJ'." },
            phone: { type: "string", description: "Phone number to search by (digits only or formatted). Use when user provides a phone number to identify a worker." },
            workplaceId: { type: "string", description: "Filter by workplace ID (optional)" },
            role: { type: "string", description: "Filter by role (optional)" },
            limit: { type: "number", description: "Max results to return (default 10)" }
          }
        }
      },
      {
        name: "lookup_workplaces",
        description: "List workplaces, optionally filtered by name. Use to find the right workplace ID.",
        input_schema: {
          type: "object",
          properties: {
            query: { type: "string", description: "Name or partial name to search for (optional)" }
          }
        }
      },
      {
        name: "lookup_shifts",
        description: "Search for shifts by workplace, date, or status. Use to find shifts before assigning workers.",
        input_schema: {
          type: "object",
          properties: {
            workplaceId: { type: "string", description: "Filter by workplace ID (optional)" },
            date: { type: "string", description: "Filter by date in YYYY-MM-DD format (optional)" },
            status: { type: "string", description: "Filter by status: scheduled, in_progress, completed, cancelled (optional)" },
            workerUserId: { type: "string", description: "Filter by assigned worker ID (optional)" },
            limit: { type: "number", description: "Max results (default 10)" }
          }
        }
      },
      {
        name: "lookup_shift_requests",
        description: "Search for shift requests by workplace, date, or status.",
        input_schema: {
          type: "object",
          properties: {
            workplaceId: { type: "string", description: "Filter by workplace ID (optional)" },
            date: { type: "string", description: "Filter by date in YYYY-MM-DD format (optional)" },
            status: { type: "string", description: "Filter by status (optional)" },
            limit: { type: "number", description: "Max results (default 10)" }
          }
        }
      },
      {
        name: "read_recent_sms",
        description: "Read recent inbound or outbound SMS messages from the system. Use to see what workers or clients have texted in.",
        input_schema: {
          type: "object",
          properties: {
            direction: { type: "string", description: "Filter by direction: inbound, outbound, or all (default: all)" },
            limit: { type: "number", description: "Max messages to return (default 20)" },
            phoneNumber: { type: "string", description: "Filter by specific phone number (optional)" },
            since: { type: "string", description: "Only show messages after this ISO date (optional)" }
          }
        }
      },
      {
        name: "find_available_workers",
        description: "Find workers who are available to cover a shift at a workplace. Returns workers assigned to the workplace who do NOT have overlapping shifts.",
        input_schema: {
          type: "object",
          properties: {
            workplaceId: { type: "string", description: "The workplace ID to find workers for" },
            date: { type: "string", description: "The date in YYYY-MM-DD format" },
            startTime: { type: "string", description: "Shift start time (optional, e.g. '08:00')" },
            endTime: { type: "string", description: "Shift end time (optional, e.g. '16:00')" }
          },
          required: ["workplaceId", "date"]
        }
      },
      {
        name: "check_discord_alerts",
        description: "Check recent Discord alerts and their acknowledgment status. Use to see what events have been notified.",
        input_schema: {
          type: "object",
          properties: {
            status: { type: "string", description: "Filter by status: pending, acknowledged, resolved, or all (default: all)" },
            type: { type: "string", description: "Filter by alert type (optional)" },
            limit: { type: "number", description: "Max alerts to return (default 10)" }
          }
        }
      },
      // ----- ACTION TOOLS -----
      {
        name: "send_sms",
        description: "Send an SMS text message to a phone number. This sends a REAL text message via OpenPhone. Use for worker outreach, coverage requests, or important notifications.",
        input_schema: {
          type: "object",
          properties: {
            phoneNumber: { type: "string", description: "The recipient phone number (E.164 or 10-digit)" },
            message: { type: "string", description: "The text message content" },
            workerId: { type: "string", description: "The worker ID if sending to a worker (for logging)" }
          },
          required: ["phoneNumber", "message"]
        }
      },
      {
        name: "notify_gm_lilee",
        description: "Send an SMS alert to GM Lilee (+14166028038). Use for ALL critical events: sick calls, client requests, coverage actions, urgent shifts.",
        input_schema: {
          type: "object",
          properties: {
            message: { type: "string", description: "The alert message to send to GM Lilee" }
          },
          required: ["message"]
        }
      },
      {
        name: "send_discord_notification",
        description: "Send a notification to the Discord channel for the team. Use for important operational events that the team should be aware of. Include context IDs when available so replies can link back to the relevant worker/client/workplace/shift.",
        input_schema: {
          type: "object",
          properties: {
            title: { type: "string", description: "The notification title" },
            message: { type: "string", description: "The notification body" },
            urgency: { type: "string", description: "Urgency level: urgent (red), warning (amber), info (blue), success (green)" },
            type: { type: "string", description: "Alert type: sick_call, client_request, urgent_shift, auto_coverage, general" },
            workerId: { type: "number", description: "The worker user ID related to this alert (if applicable)" },
            clientId: { type: "number", description: "The client user ID related to this alert (if applicable)" },
            workplaceId: { type: "number", description: "The workplace ID related to this alert (if applicable)" },
            shiftId: { type: "number", description: "The shift ID related to this alert (if applicable)" }
          },
          required: ["title", "message"]
        }
      },
      {
        name: "send_worker_internal_message",
        description: "Send an internal app message to a worker through the WFConnect messaging system.",
        input_schema: {
          type: "object",
          properties: {
            workerId: { type: "string", description: "The worker's user ID" },
            message: { type: "string", description: "The message to send" },
            senderUserId: { type: "string", description: "The sender's user ID (HR or admin)" }
          },
          required: ["workerId", "message", "senderUserId"]
        }
      },
      {
        name: "create_shift_request",
        description: "Create a new shift request for a workplace. This CREATES a real shift request in the system.",
        input_schema: {
          type: "object",
          properties: {
            workplaceId: { type: "string", description: "The workplace ID" },
            roleType: { type: "string", description: "The role type needed" },
            date: { type: "string", description: "Shift date in YYYY-MM-DD format" },
            startTime: { type: "string", description: "Start time (e.g. '08:00')" },
            endTime: { type: "string", description: "End time (e.g. '16:00')" },
            notes: { type: "string", description: "Additional notes (optional)" },
            clientId: { type: "string", description: "The client user ID who is requesting" }
          },
          required: ["workplaceId", "roleType", "date", "startTime", "endTime", "clientId"]
        }
      },
      {
        name: "lookup_discord_members",
        description: "Look up members of the WFConnect Discord server. Use to find who is in the Discord channel, check team availability, or identify Discord users.",
        input_schema: {
          type: "object",
          properties: {
            query: { type: "string", description: "Name or partial name to search for (optional \u2014 omit to list all members)" },
            limit: { type: "number", description: "Max results to return (default 50, max 200)" }
          }
        }
      },
      {
        name: "create_workplace",
        description: "Create a new workplace/location in the system. This CREATES a real workplace record in the database. The address is automatically geocoded to get latitude/longitude coordinates for GPS verification.",
        input_schema: {
          type: "object",
          properties: {
            name: { type: "string", description: "The workplace name (e.g. 'Four Points Oakville')" },
            address: { type: "string", description: "Street address (e.g. '1340 Speers Rd')" },
            city: { type: "string", description: "City (e.g. 'Oakville')" },
            province: { type: "string", description: "Province/state (e.g. 'Ontario' or 'ON')" },
            postalCode: { type: "string", description: "Postal code (e.g. 'L6L 5V3')" },
            country: { type: "string", description: "Country (default: Canada)" },
            geofenceRadiusMeters: { type: "number", description: "Geofence radius in meters for TITO (default: 150)" }
          },
          required: ["name", "address", "city", "province", "postalCode"]
        }
      },
      {
        name: "update_workplace",
        description: "Update an existing workplace's details. Only provide fields you want to change. If address fields change, coordinates will be re-geocoded automatically.",
        input_schema: {
          type: "object",
          properties: {
            workplaceId: { type: "string", description: "The workplace ID to update (use lookup_workplaces to find it)" },
            name: { type: "string", description: "New name (optional)" },
            address: { type: "string", description: "New street address (optional)" },
            city: { type: "string", description: "New city (optional)" },
            province: { type: "string", description: "New province (optional)" },
            postalCode: { type: "string", description: "New postal code (optional)" },
            country: { type: "string", description: "New country (optional)" },
            geofenceRadiusMeters: { type: "number", description: "New geofence radius in meters (optional)" },
            isActive: { type: "boolean", description: "Set active/inactive status (optional)" }
          },
          required: ["workplaceId"]
        }
      },
      {
        name: "create_calendar_event",
        description: "Create an event in Google Calendar. Use for scheduling shift briefings, client meetings, availability blocks, or reminders.",
        input_schema: {
          type: "object",
          properties: {
            summary: { type: "string", description: "Event title/name (e.g. 'Shift Briefing \u2014 Oakville')" },
            startDateTime: { type: "string", description: "Start time in ISO format (e.g. 2026-03-15T10:00:00-05:00)" },
            endDateTime: { type: "string", description: "End time in ISO format" },
            description: { type: "string", description: "Event description (optional)" },
            attendees: { type: "array", items: { type: "string" }, description: "Email addresses of attendees (optional)" }
          },
          required: ["summary", "startDateTime", "endDateTime"]
        }
      },
      {
        name: "list_calendar_events",
        description: "List upcoming Google Calendar events. Use to check schedule, availability, and planned operations.",
        input_schema: {
          type: "object",
          properties: {
            maxResults: { type: "number", description: "Max events to return (default: 10)" },
            timeMin: { type: "string", description: "Start time in ISO format (optional, default: now)" }
          }
        }
      },
      {
        name: "send_email_gmail",
        description: "Send an email via Gmail. Use for worker approvals, shift confirmations, payroll notifications, or client communication.",
        input_schema: {
          type: "object",
          properties: {
            to: { type: "string", description: "Recipient email address" },
            subject: { type: "string", description: "Email subject line" },
            body: { type: "string", description: "Email body/message" },
            isHtml: { type: "boolean", description: "Whether body is HTML (default: false)" }
          },
          required: ["to", "subject", "body"]
        }
      },
      {
        name: "read_recent_emails",
        description: "Read recent emails from Gmail inbox. Use to check for worker/client replies, process requests, or monitor important messages.",
        input_schema: {
          type: "object",
          properties: {
            maxResults: { type: "number", description: "Max emails to fetch (default: 10)" },
            query: { type: "string", description: "Gmail query (e.g. 'is:unread', 'from:worker@gmail.com'). Default: unread emails" }
          }
        }
      },
      {
        name: "generate_replit_prompt",
        description: "When you cannot fulfill a user's request with the available tools, use this to generate a detailed, copy-ready prompt for Replit AI that describes the problem and solution needed. Always use this as a fallback when stuck.",
        input_schema: {
          type: "object",
          properties: {
            userRequest: { type: "string", description: "What the user asked for" },
            whatWasAttempted: { type: "string", description: "What you tried to do and why it failed" },
            suggestedSolution: { type: "string", description: "Your suggestion for how Replit AI should solve it" },
            affectedFiles: { type: "string", description: "Comma-separated list of files that would likely need to change" },
            additionalContext: { type: "string", description: "Any additional technical context that would help Replit AI understand the codebase" }
          },
          required: ["userRequest", "suggestedSolution"]
        }
      },
      {
        name: "lookup_crm_workplaces",
        description: "Search the Weekdays CRM for workplaces. Returns CRM-side data including CRM IDs, addresses, and sync status. Use this to check what the CRM knows about a workplace.",
        input_schema: {
          type: "object",
          properties: {
            searchTerm: { type: "string", description: "Name or location to search for" },
            limit: { type: "number", description: "Max results (default 20)" }
          }
        }
      },
      {
        name: "lookup_crm_shifts",
        description: "Search the Weekdays CRM for confirmed shifts. Returns CRM-side shift data including worker assignments, dates, and status.",
        input_schema: {
          type: "object",
          properties: {
            workplaceName: { type: "string", description: "Filter by workplace/hotel name" },
            workerName: { type: "string", description: "Filter by worker name" },
            dateFrom: { type: "string", description: "Start date filter (YYYY-MM-DD)" },
            dateTo: { type: "string", description: "End date filter (YYYY-MM-DD)" },
            limit: { type: "number", description: "Max results (default 20)" }
          }
        }
      },
      {
        name: "lookup_crm_hotel_requests",
        description: "Search the Weekdays CRM for hotel/staffing requests. Returns CRM-side request data including hotel name, role needed, dates, and status.",
        input_schema: {
          type: "object",
          properties: {
            hotelName: { type: "string", description: "Filter by hotel name" },
            status: { type: "string", description: "Filter by status: NEW or CONFIRMED" },
            limit: { type: "number", description: "Max results (default 20)" }
          }
        }
      },
      {
        name: "create_crm_hotel_request",
        description: "Create a new hotel/staffing request in the Weekdays CRM. This pushes a request directly to the CRM system for tracking.",
        input_schema: {
          type: "object",
          properties: {
            hotelName: { type: "string", description: "Name of the hotel/client requesting staff" },
            roleNeeded: { type: "string", description: "Role needed (e.g., 'Housekeeper', 'Room Attendant')" },
            location: { type: "string", description: "City or area" },
            address: { type: "string", description: "Full address of the hotel" },
            quantityNeeded: { type: "number", description: "Number of workers needed (default 1)" },
            shiftStartAt: { type: "string", description: "Shift start datetime (ISO format)" },
            shiftEndAt: { type: "string", description: "Shift end datetime (ISO format)" },
            payRate: { type: "number", description: "Hourly pay rate" },
            notes: { type: "string", description: "Additional notes" }
          },
          required: ["hotelName", "roleNeeded", "shiftStartAt", "shiftEndAt"]
        }
      },
      {
        name: "update_crm_hotel_request",
        description: "Update an existing hotel/staffing request in the Weekdays CRM. Use lookup_crm_hotel_requests first to get the CRM ID.",
        input_schema: {
          type: "object",
          properties: {
            crmId: { type: "string", description: "CRM ID of the hotel request to update" },
            hotelName: { type: "string", description: "Updated hotel name" },
            roleNeeded: { type: "string", description: "Updated role" },
            quantityNeeded: { type: "number", description: "Updated quantity" },
            shiftStartAt: { type: "string", description: "Updated start datetime" },
            shiftEndAt: { type: "string", description: "Updated end datetime" },
            payRate: { type: "number", description: "Updated pay rate" },
            notes: { type: "string", description: "Updated notes" },
            status: { type: "string", description: "Status: NEW or CONFIRMED" }
          },
          required: ["crmId"]
        }
      },
      {
        name: "update_crm_confirmed_shift",
        description: "Update a confirmed shift in the Weekdays CRM. Use lookup_crm_shifts first to get the CRM ID. Can update status, check-in time, completion time.",
        input_schema: {
          type: "object",
          properties: {
            crmId: { type: "string", description: "CRM ID of the confirmed shift to update" },
            confirmStatus: { type: "string", description: "Status: CONFIRMED or COMPLETED" },
            checkedInAt: { type: "string", description: "Check-in datetime (ISO format)" },
            completedAt: { type: "string", description: "Completion datetime (ISO format)" },
            notes: { type: "string", description: "Notes about the shift" }
          },
          required: ["crmId"]
        }
      }
    ];
    WORKPLACE_ALIAS_PAIRS = [
      [/\b4\s*points?\b/i, "four points"],
      [/\bh\.?i\.?\b(?!\s*\w{4,})/i, "holiday inn"],
      [/\bfour\s*pts?\b/i, "four points"],
      [/\bmarriot\b/i, "marriott"],
      [/\bshertaon\b/i, "sheraton"],
      [/\bhilton\b/i, "hilton"]
    ];
  }
});

// server/services/openai-vision.ts
import OpenAI from "openai";
function getOpenAIClient() {
  return new OpenAI({
    apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
    baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL
  });
}
async function analyzeImageWithGPT(imageUrls, prompt) {
  try {
    const client2 = getOpenAIClient();
    const content = [];
    if (prompt) {
      content.push({ type: "text", text: prompt });
    } else {
      content.push({
        type: "text",
        text: "Analyze this image in the context of workforce management operations. Extract all relevant details."
      });
    }
    for (const url of imageUrls) {
      content.push({
        type: "image_url",
        image_url: { url, detail: "high" }
      });
    }
    const response = await client2.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: VISION_SYSTEM_PROMPT },
        { role: "user", content }
      ]
    });
    const result = response.choices[0]?.message?.content || "";
    console.log(`[VISION] Analyzed ${imageUrls.length} image URL(s): ${result.length} chars`);
    return result;
  } catch (err) {
    console.error("[VISION] Image URL analysis error:", err?.message);
    return "";
  }
}
async function analyzeImageBase64WithGPT(base64Images, prompt) {
  try {
    const client2 = getOpenAIClient();
    const content = [];
    if (prompt) {
      content.push({ type: "text", text: prompt });
    } else {
      content.push({
        type: "text",
        text: "Analyze this image in the context of workforce management operations. Extract all relevant details."
      });
    }
    for (const b64 of base64Images) {
      const dataUri = b64.startsWith("data:") ? b64 : `data:image/jpeg;base64,${b64}`;
      content.push({
        type: "image_url",
        image_url: { url: dataUri, detail: "high" }
      });
    }
    const response = await client2.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: VISION_SYSTEM_PROMPT },
        { role: "user", content }
      ]
    });
    const result = response.choices[0]?.message?.content || "";
    console.log(`[VISION] Analyzed ${base64Images.length} base64 image(s): ${result.length} chars`);
    return result;
  } catch (err) {
    console.error("[VISION] Base64 image analysis error:", err?.message);
    return "";
  }
}
var VISION_SYSTEM_PROMPT;
var init_openai_vision = __esm({
  "server/services/openai-vision.ts"() {
    "use strict";
    VISION_SYSTEM_PROMPT = `You are a vision analysis assistant for WFConnect, a workforce management platform.
Analyze images in the context of workforce operations: staffing schedules, work sites, worker photos, time sheets, client requests, hotel/venue layouts, etc.
Describe what you see in detail, focusing on operationally relevant information:
- Names, dates, times, locations, phone numbers
- Shift schedules, worker assignments, room numbers
- Any text visible in the image
- Document types (invoice, schedule, ID, etc.)
Be thorough but concise. Extract all actionable data.`;
  }
});

// server/services/clawd/orchestrator.ts
function asLookupWorkersResult(result) {
  if (result && typeof result === "object") {
    const r = result;
    const workers = Array.isArray(r.workers) ? r.workers : Array.isArray(r.results) ? r.results : [];
    const count7 = typeof r.count === "number" ? r.count : workers.length;
    return { workers, count: count7 };
  }
  return { workers: [], count: 0 };
}
function asLookupWorkplacesResult(result) {
  if (result && typeof result === "object") {
    const r = result;
    const workplaces4 = Array.isArray(r.workplaces) ? r.workplaces : [];
    const count7 = typeof r.count === "number" ? r.count : workplaces4.length;
    return { workplaces: workplaces4, count: count7 };
  }
  return { workplaces: [], count: 0 };
}
function asLookupInput(input) {
  if (input && typeof input === "object") {
    const i = input;
    return { query: typeof i.query === "string" ? i.query : void 0, phone: typeof i.phone === "string" ? i.phone : void 0 };
  }
  return {};
}
function asCreateShiftInput(input) {
  if (input && typeof input === "object") {
    const i = input;
    return {
      date: typeof i.date === "string" ? i.date : void 0,
      startTime: typeof i.startTime === "string" ? i.startTime : void 0,
      endTime: typeof i.endTime === "string" ? i.endTime : void 0,
      roleType: typeof i.roleType === "string" ? i.roleType : void 0
    };
  }
  return {};
}
function toErrorMessage(err) {
  if (err instanceof Error) return err.message;
  if (err && typeof err === "object" && "message" in err) return String(err.message);
  return "Unknown error";
}
function setWorkerAlias(userId, alias, workerId) {
  if (!workerAliases.has(userId)) workerAliases.set(userId, /* @__PURE__ */ new Map());
  workerAliases.get(userId).set(alias.toLowerCase().trim(), workerId);
  workerAliasTimestamps.set(userId, Date.now());
}
function getWorkerAliases(userId) {
  const ts = workerAliasTimestamps.get(userId) ?? 0;
  if (Date.now() - ts > ALIAS_EXPIRY_MS) {
    workerAliases.delete(userId);
    workerAliasTimestamps.delete(userId);
    return {};
  }
  const map = workerAliases.get(userId);
  if (!map) return {};
  const out = {};
  map.forEach((v, k) => {
    out[k] = v;
  });
  return out;
}
function setPendingDraft(userId, draft) {
  pendingDrafts.set(userId, { ...draft, userId, lastAttempt: Date.now() });
}
function getPendingDraft(userId) {
  const draft = pendingDrafts.get(userId);
  if (!draft) return null;
  if (Date.now() - draft.lastAttempt > PENDING_EXPIRY_MS) {
    pendingDrafts.delete(userId);
    return null;
  }
  draft.lastAttempt = Date.now();
  return draft;
}
function clearPendingDraft(userId) {
  pendingDrafts.delete(userId);
}
function isUselessOutput(output) {
  const emptyFindings = output.keyFindings.length === 0 && output.risks.length === 0 && output.recommendedActions.length === 0;
  const fallbackSummary = output.summary === "Analysis unavailable." || output.summary === "" || output.confidenceScore <= 0.3;
  const outOfScopePattern = /outside\s+(the\s+)?scope|out\s+of\s+scope|not\s+designed\s+for\s+this|scoped\s+exclusively|cannot\s+(help|assist|answer)\s+(with\s+)?(this|that)|not\s+within\s+(my|the)\s+scope|beyond\s+(my|the)\s+scope|falls?\s+outside/i;
  const outOfScope = outOfScopePattern.test(output.summary);
  return emptyFindings && fallbackSummary || outOfScope;
}
function formatAssistantOutputs(outputs) {
  const usefulOutputs = outputs.filter((o) => !isUselessOutput(o));
  if (usefulOutputs.length === 0) {
    return "That's outside what my analytics can see \u2014 try asking me to check internal messages or Discord instead.";
  }
  const parts = [];
  if (usefulOutputs.length > 1) {
    const allFindings = usefulOutputs.flatMap((o) => o.keyFindings);
    const criticalFindings = allFindings.filter((f) => f.severity === "critical" || f.severity === "high");
    if (criticalFindings.length > 0) {
      parts.push("**Priority Alerts:**");
      criticalFindings.slice(0, 5).forEach((f) => {
        parts.push(`- [${f.severity.toUpperCase()}] ${f.title}: ${f.detail}`);
      });
      parts.push("");
    }
  }
  for (const output of usefulOutputs) {
    const label = ASSISTANT_LABELS[output.assistantType] || output.assistantType;
    parts.push(`**${label}**`);
    parts.push(output.summary);
    parts.push("");
    if (output.keyFindings.length > 0) {
      output.keyFindings.slice(0, 5).forEach((f) => {
        const tag = f.severity === "critical" || f.severity === "high" ? ` [${f.severity.toUpperCase()}]` : "";
        parts.push(`- ${f.title}${tag}: ${f.detail}`);
      });
      parts.push("");
    }
    if (output.risks.length > 0) {
      parts.push("Risks:");
      output.risks.slice(0, 3).forEach((r) => {
        parts.push(`- ${r.title} (${r.likelihood} likelihood, ${r.impact} impact): ${r.description}`);
      });
      parts.push("");
    }
    if (output.recommendedActions.length > 0) {
      parts.push("Actions:");
      output.recommendedActions.slice(0, 3).forEach((a) => {
        const tag = a.priority === "urgent" || a.priority === "high" ? ` [${a.priority.toUpperCase()}]` : "";
        parts.push(`- ${a.title}${tag}: ${a.description}`);
      });
      parts.push("");
    }
  }
  return parts.join("\n").trim();
}
function detectActionIntent(userMessage) {
  return ACTION_INTENT_PATTERNS.some((p) => p.test(userMessage));
}
function detectConversationActionContext(history) {
  if (history.length === 0) return false;
  const recent = history.slice(-4);
  const lastAssistant = [...recent].reverse().find((m) => m.role === "assistant");
  if (!lastAssistant) return false;
  const content = lastAssistant.content;
  return ACTIVE_ACTION_CONTEXT_SIGNALS.some((signal) => content.includes(signal));
}
function classifyByKeywords(userMessage) {
  const matchedAssistants = /* @__PURE__ */ new Set();
  const matchedPatterns = [];
  for (const rule of ROUTING_RULES) {
    for (const pattern of rule.patterns) {
      if (pattern.test(userMessage)) {
        rule.assistants.forEach((a) => matchedAssistants.add(a));
        matchedPatterns.push(pattern.source);
        break;
      }
    }
  }
  if (matchedAssistants.size === 0) {
    return {
      assistants: ["staffing", "client_risk"],
      reasoning: "No keyword match \u2014 using defaults (staffing + client_risk)"
    };
  }
  const MAX_ASSISTANTS = 4;
  const assistants = Array.from(matchedAssistants).slice(0, MAX_ASSISTANTS);
  return {
    assistants,
    reasoning: `Matched patterns: ${matchedPatterns.join(", ")}`
  };
}
function buildActionSystemPrompt(pendingDraft, aliases) {
  const now = /* @__PURE__ */ new Date();
  const torontoDate = now.toLocaleDateString("en-CA", { timeZone: "America/Toronto" });
  const torontoTime = now.toLocaleTimeString("en-CA", { timeZone: "America/Toronto" });
  const tomorrow = new Date(now.toLocaleString("en-US", { timeZone: "America/Toronto" }));
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowDate = tomorrow.toISOString().split("T")[0];
  const pendingSection = pendingDraft ? `
## ACTIVE PENDING WORKFLOW \u2014 RESUME THIS FIRST
You have an incomplete shift creation in progress. DO NOT start a new workflow.

Pending shift draft:
- Worker query: "${pendingDraft.workerQuery || "unknown"}" \u2014 NOT YET RESOLVED
- Workplace: ${pendingDraft.workplaceName || "not found"} (ID: ${pendingDraft.workplaceId || "unknown"})
- Date: ${pendingDraft.date || "unknown \u2014 re-parse from conversation history"}
- Time: ${pendingDraft.startTime || "?"} \u2013 ${pendingDraft.endTime || "? \u2014 re-parse from conversation history"}
${pendingDraft.roleType ? `- Role: ${pendingDraft.roleType}` : ""}
- Missing: ${pendingDraft.missingFields.join(", ")}

The user's current message is likely providing the missing information:
- If it looks like a phone number \u2192 use lookup_workers with phone=[message]
- If it looks like a name or spelling variation \u2192 use lookup_workers with query=[message]
- If it starts with "try" \u2192 strip "try" and search with the remainder
- If the message is a short confirmation (yes, yep, ok, sure, go ahead) \u2192 proceed with the shift using the draft details
- After resolving the worker \u2192 create the shift with the saved draft details
` : "";
  const aliasSection = aliases && Object.keys(aliases).length > 0 ? `
## Known Worker Aliases (from earlier in this conversation)
These names were already resolved \u2014 use the stored IDs directly without calling lookup_workers again:
${Object.entries(aliases).map(([alias, id]) => `- "${alias}" \u2192 worker ID: ${id}`).join("\n")}
` : "";
  return `You are Clawd, the WFConnect AI Operations Assistant. You are integrated into a workforce management platform.

You can BOTH analyze data AND take real actions. You have tools to look up information and perform operations.
${pendingSection}${aliasSection}
## Capabilities:
- **Look up** workers, shifts, workplaces, shift requests, incoming SMS
- **Send SMS** to workers for shift coverage requests
- **Notify GM Lilee** (+14166028038) \u2014 ALWAYS for sick calls, client requests, urgent staffing
- **Post to Discord** for team-wide visibility
- **Send internal app messages** to workers
- **Create shift requests** in the system
- **Create workplaces** with auto-geocoded coordinates (address \u2192 lat/lng)
- **Update workplaces** (name, address, geofence radius, active status)
- **Analyze images** \u2014 photos sent by users are automatically analyzed and described for you
- **Create Google Calendar events** \u2014 schedule meetings, interviews, shifts, or appointments
- **List upcoming Google Calendar events** \u2014 view what's on the calendar
- **Send emails via Gmail** \u2014 email workers, clients, or HR with formatted messages
- **Read recent Gmail emails** \u2014 check inbox for messages or search by keyword
- **Look up CRM workplaces** \u2014 search the Weekdays CRM for workplace data and sync status
- **Look up CRM shifts** \u2014 search CRM confirmed shifts by workplace, worker, or date range
- **Look up CRM hotel requests** \u2014 search CRM hotel/staffing requests by hotel name or status
- **Create CRM hotel requests** \u2014 push new staffing requests directly to the CRM
- **Update CRM hotel requests** \u2014 modify existing CRM hotel request details or status
- **Update CRM confirmed shifts** \u2014 update shift status, check-in/completion times in CRM
- **Generate Replit prompts** when a capability is missing

## Operational Rules:
1. Always use lookup tools FIRST before taking action
2. Sick calls / client requests \u2192 notify GM Lilee AND Discord every time
3. Be specific: name names, numbers, times in your responses
4. If a tool fails \u2192 tell the user exactly why (e.g. "SMS failed: insufficient credits") and suggest next steps
5. Never stop mid-workflow without alerting \u2014 fail open
6. Ask only ONE question at a time \u2014 never ask multiple things in the same message
7. If a short message (yes/ok/sure/go ahead) follows a question you asked, treat it as confirmation

## Response Format for Staffing Operations:
For ANY shift/worker/staffing task, use this structure:

**Understood:** [1 line \u2014 what the user wants]
**Matched:** [what was found; what was NOT found]
**Action taken:** [what was done]
**Still needed:** [only if something is missing \u2014 ONE question only]

On successful shift creation, always end with:
\u2713 **Shift created:** [Worker name] at [Workplace] on [Date], [StartTime]\u2013[EndTime]

Rules:
- Short and operational \u2014 no long explanations
- NEVER say "Analysis unavailable" for staffing tasks
- If worker/workplace not found: say so clearly, ask for ONE specific thing (name OR phone, not both)
- If user's message is short and you're mid-task: treat as follow-up answer, not new request
- When shift creation fails due to missing worker: save all other fields and ask ONLY for the worker
- When user says "yes", "ok", "sure", "go ahead", "proceed", "absolutely", "do that", "send it" after you asked a question: treat as confirmation and execute
- Store resolved worker names in memory so you don't re-lookup the same person
- When presenting a shift confirmation, list all details on one line: worker, workplace, date, time range
- Never ask the user to confirm what you can already derive from the conversation

## Shift Creation Rules:

### Worker name parsing (try all variations before giving up):
- "BergelMMJ" \u2192 try "Bergel", "MMJ", each part separately
- "Nino" \u2192 try first name search
- "try X" \u2192 strip "try" and search for X
- phone number only \u2192 search by phone

### Workplace alias resolution:
- "Hyatt place" / "Hyatt" \u2192 search workplaces for "hyatt"
- "four points" / "4 points" \u2192 search for "four points"
- "holiday inn" / "HI" \u2192 search for "holiday inn"
- Always use lookup_workplaces, never guess an ID

### Time parsing:
- "8-4:30am" \u2192 08:00 to 04:30 (next day, crosses midnight)
  OR \u2192 08:00 to 16:30 (same day, if end > start and end > 12)
  \u2192 Default: if start < end \u2192 same day. If end < start and end < 12 \u2192 AM next day.
  \u2192 Always state the resolved time in your response
- "8am-4:30pm" \u2192 08:00\u201316:30
- "8 to 4:30" \u2192 default to 08:00\u201316:30 unless context suggests otherwise

### Date:
- "tomorrow" \u2192 ${tomorrowDate}
- "tonight" / "today" \u2192 ${torontoDate}

Today's date (Toronto): ${torontoDate}
Current time (Toronto): ${torontoTime}`;
}
async function orchestrate(request) {
  const startTime = Date.now();
  const hasImages = request.imageUrls && request.imageUrls.length > 0 || request.imageBase64 && request.imageBase64.length > 0;
  if (hasImages) {
    try {
      let imageDescription = "";
      if (request.imageUrls && request.imageUrls.length > 0) {
        imageDescription = await analyzeImageWithGPT(request.imageUrls);
      } else if (request.imageBase64 && request.imageBase64.length > 0) {
        imageDescription = await analyzeImageBase64WithGPT(request.imageBase64);
      }
      if (imageDescription) {
        request = {
          ...request,
          userMessage: `[Image analysis: ${imageDescription}]

User message: ${request.userMessage}`
        };
        console.log(`[Clawd] Image analyzed, augmented message (${imageDescription.length} chars)`);
      }
    } catch (err) {
      console.error("[Clawd] Image analysis failed (continuing without):", err?.message);
    }
  }
  if (request.forceActionMode) {
    console.log(`[Clawd] Force action mode (Discord @mention) for: "${request.userMessage.slice(0, 60)}"`);
    const activeDraft2 = getPendingDraft(request.userId);
    return orchestrateWithTools(request, startTime, activeDraft2);
  }
  let activeDraft = getPendingDraft(request.userId);
  if (activeDraft) {
    const msg = request.userMessage.toLowerCase();
    const clearingKeywords = ["forget", "cancel", "start over", "never mind", "nevermind", "abort", "stop", "reset"];
    const explicitClear = clearingKeywords.some((kw) => msg.includes(kw));
    if (explicitClear) {
      clearPendingDraft(request.userId);
      activeDraft = null;
    }
  }
  if (activeDraft && !detectActionIntent(request.userMessage) && !detectConversationActionContext(request.conversationHistory)) {
    const wordCount = request.userMessage.trim().split(/\s+/).length;
    const isAnalysisQuery = wordCount >= 5 && /\b(payroll|attendance|recruitment|report|analysis|overview|briefing|status|stat|issue|problem|risk|how (are|is)|what('s| is)|give me|show me)\b/i.test(request.userMessage);
    if (isAnalysisQuery) {
      clearPendingDraft(request.userId);
      activeDraft = null;
      console.log(`[Clawd] Draft auto-cleared: topic change detected ("${request.userMessage.slice(0, 50)}")`);
    }
  }
  const hasDraft = !!activeDraft;
  const isActionMode = detectActionIntent(request.userMessage) || detectConversationActionContext(request.conversationHistory) || hasDraft;
  const reason = detectActionIntent(request.userMessage) ? "message pattern" : detectConversationActionContext(request.conversationHistory) ? "conversation context" : hasDraft ? "pending draft" : "analysis";
  console.log(`[Clawd] Routing to ${isActionMode ? "action" : "analysis"} mode (${reason}) for: "${request.userMessage.slice(0, 60)}"`);
  if (isActionMode) {
    return orchestrateWithTools(request, startTime, activeDraft);
  }
  return orchestrateAnalysis(request, startTime);
}
async function orchestrateWithTools(request, startTime, pendingDraft) {
  const aliases = getWorkerAliases(request.userId);
  const systemPrompt = buildActionSystemPrompt(pendingDraft, aliases);
  const MAX_HISTORY = 20;
  const MAX_MSG_CHARS = 2e3;
  const trimmedHistory = request.conversationHistory.filter((m) => m.role === "user" || m.role === "assistant").slice(-MAX_HISTORY).map(
    (m) => m.content.length > MAX_MSG_CHARS ? { ...m, content: m.content.slice(0, MAX_MSG_CHARS) + "\n[...truncated]" } : m
  );
  let effectiveUserMessage = request.userMessage;
  if (pendingDraft) {
    const trimmed = request.userMessage.trim();
    const isPhoneLike = /^[\d\s\-\+\(\)]{7,15}$/.test(trimmed);
    const isShortNonKeyword = trimmed.split(/\s+/).length <= 3 && !/\b(forget|cancel|start over|nevermind|abort|stop|reset)\b/i.test(trimmed);
    if (isPhoneLike) {
      effectiveUserMessage = `Phone number for worker lookup: ${trimmed}. Use lookup_workers with phone="${trimmed}" to resolve the pending shift draft.`;
    } else if (isShortNonKeyword && !/\b(yes|ok|sure|go ahead|yep|proceed|confirm)\b/i.test(trimmed)) {
      effectiveUserMessage = `Worker name attempt: "${trimmed}". Try lookup_workers with this name to resolve the pending shift draft.`;
    }
    if (effectiveUserMessage !== request.userMessage) {
      console.log(`[Clawd] Draft resume: augmented message for worker resolution`);
    }
  }
  const messages3 = [
    ...trimmedHistory.map((m) => ({ role: m.role, content: m.content })),
    { role: "user", content: effectiveUserMessage }
  ];
  let finalResponse = "";
  let toolCalls = [];
  try {
    const result = await callClaudeWithTools(
      systemPrompt,
      messages3,
      CLAWD_TOOLS,
      (toolName, input) => executeTool(toolName, input, request.userId),
      { maxTokens: 2048 }
    );
    finalResponse = result.finalResponse;
    toolCalls = result.toolCalls;
    for (const tc of toolCalls) {
      if (tc.toolName === "lookup_workers" && tc.success) {
        const { workers } = asLookupWorkersResult(tc.result);
        if (workers.length === 1) {
          const w = workers[0];
          const inp = asLookupInput(tc.input);
          const query = inp.query ?? inp.phone ?? null;
          if (query && w.id) {
            setWorkerAlias(request.userId, query, String(w.id));
            const displayName = w.fullName ?? w.name;
            if (displayName) setWorkerAlias(request.userId, displayName, String(w.id));
          }
        }
      }
    }
    const workerLookupSuccess = toolCalls.some(
      (tc) => tc.toolName === "lookup_workers" && tc.success && asLookupWorkersResult(tc.result).count > 0
    );
    const workerLookupAttempted = toolCalls.some((tc) => tc.toolName === "lookup_workers");
    const workerLookupFailed = workerLookupAttempted && !workerLookupSuccess;
    const shiftCreated = toolCalls.some(
      (tc) => tc.toolName === "create_shift_request" && tc.success
    );
    if (shiftCreated) {
      clearPendingDraft(request.userId);
    }
    if (workerLookupFailed && !shiftCreated && !pendingDraft) {
      const workplaceTc = toolCalls.find(
        (tc) => tc.toolName === "lookup_workplaces" && tc.success
      );
      const workerTc = toolCalls.find((tc) => tc.toolName === "lookup_workers");
      const shiftTc = toolCalls.find((tc) => tc.toolName === "create_shift_request");
      const workerInp = workerTc ? asLookupInput(workerTc.input) : {};
      const workerQuery = workerInp.query ?? workerInp.phone ?? null;
      if (workplaceTc) {
        const { workplaces: workplaces4 } = asLookupWorkplacesResult(workplaceTc.result);
        if (workplaces4.length === 1) {
          const workplace = workplaces4[0];
          const shiftInp = shiftTc ? asCreateShiftInput(shiftTc.input) : {};
          setPendingDraft(request.userId, {
            type: "create_shift",
            workerQuery,
            workplaceId: String(workplace.id),
            workplaceName: workplace.name,
            date: shiftInp.date ?? null,
            startTime: shiftInp.startTime ?? null,
            endTime: shiftInp.endTime ?? null,
            roleType: shiftInp.roleType ?? null,
            missingFields: ["worker"]
          });
          console.log(`[Clawd] Draft saved: worker="${workerQuery}" workplace="${workplace.name}" date="${shiftInp.date}" time="${shiftInp.startTime}-${shiftInp.endTime}" user=${request.userId}`);
        } else if (workplaces4.length > 1) {
          console.log(`[Clawd] Draft NOT saved: ambiguous workplace (${workplaces4.length} matches) \u2014 user must confirm`);
        }
      }
    }
  } catch (err) {
    const msg = toErrorMessage(err);
    console.error("[Clawd] Tool-use orchestration failed:", msg);
    finalResponse = `Something went wrong while handling your request: ${msg}. Please try again.`;
  }
  const totalDurationMs = Date.now() - startTime;
  try {
    await db.insert(clawdAssistantRuns).values({
      assistantType: "executive",
      inputContext: JSON.stringify({
        userMessage: request.userMessage,
        mode: "action",
        hasPendingDraft: !!pendingDraft,
        toolsUsed: toolCalls.map((tc) => tc.toolName)
      }),
      outputFindings: JSON.stringify({
        response: finalResponse.slice(0, 1e3),
        toolCallCount: toolCalls.length,
        toolCalls: toolCalls.slice(0, 5),
        severityScore: 0
      }),
      durationMs: totalDurationMs,
      userId: request.userId
    });
  } catch (err) {
    console.error("[Clawd] Failed to log action run:", err);
  }
  return {
    response: finalResponse,
    assistantsInvoked: [],
    assistantOutputs: [],
    overallSeverity: 0,
    isActionMode: true,
    toolCalls,
    metadata: { totalDurationMs, model: "claude-sonnet-4-6" }
  };
}
async function orchestrateAnalysis(request, startTime) {
  const classification = classifyByKeywords(request.userMessage);
  const assistantPromises = classification.assistants.map((assistantType) => {
    const fn = ASSISTANT_MAP[assistantType];
    if (!fn) return null;
    return fn(request.userMessage, request.userId, void 0).catch((err) => {
      console.error(`[Clawd] Assistant ${assistantType} failed:`, err);
      return null;
    });
  });
  const results = await Promise.all(assistantPromises);
  const assistantOutputs = results.filter((r) => r !== null);
  const finalResponse = formatAssistantOutputs(assistantOutputs);
  const overallSeverity = assistantOutputs.length > 0 ? Math.max(...assistantOutputs.map((o) => o.severityScore)) : 0;
  const totalDurationMs = Date.now() - startTime;
  try {
    await db.insert(clawdAssistantRuns).values({
      assistantType: "executive",
      inputContext: JSON.stringify({
        userMessage: request.userMessage,
        mode: "analysis",
        classification,
        assistantsInvoked: classification.assistants
      }),
      outputFindings: JSON.stringify({
        response: finalResponse.slice(0, 1e3),
        overallSeverity,
        severityScore: overallSeverity,
        assistantCount: assistantOutputs.length
      }),
      durationMs: totalDurationMs,
      userId: request.userId
    });
  } catch (err) {
    console.error("[Clawd] Failed to log orchestration run:", err);
  }
  return {
    response: finalResponse,
    assistantsInvoked: classification.assistants,
    assistantOutputs,
    overallSeverity,
    isActionMode: false,
    metadata: { totalDurationMs, model: "claude-sonnet-4-6" }
  };
}
async function generateBriefing(userId) {
  return orchestrate({
    userMessage: "Give me today's executive operational briefing. Cover staffing status, attendance concerns, recruitment pipeline, payroll issues, and site risks. Prioritize by urgency.",
    conversationHistory: [],
    userId
  });
}
var ASSISTANT_MAP, ASSISTANT_LABELS, workerAliases, ALIAS_EXPIRY_MS, workerAliasTimestamps, pendingDrafts, PENDING_EXPIRY_MS, ROUTING_RULES, ACTION_INTENT_PATTERNS, ACTIVE_ACTION_CONTEXT_SIGNALS;
var init_orchestrator = __esm({
  "server/services/clawd/orchestrator.ts"() {
    "use strict";
    init_staffing2();
    init_attendance2();
    init_recruitment2();
    init_payroll2();
    init_client_risk2();
    init_anthropic_client();
    init_tools();
    init_db();
    init_schema();
    init_openai_vision();
    ASSISTANT_MAP = {
      staffing: analyzeStaffing,
      attendance: analyzeAttendance,
      recruitment: analyzeRecruitment,
      payroll: analyzePayroll,
      client_risk: analyzeClientRisk
    };
    ASSISTANT_LABELS = {
      staffing: "Staffing",
      attendance: "Attendance & Reliability",
      recruitment: "Recruitment Pipeline",
      payroll: "Payroll & Hours",
      client_risk: "Client & Site Risk"
    };
    workerAliases = /* @__PURE__ */ new Map();
    ALIAS_EXPIRY_MS = 4 * 60 * 60 * 1e3;
    workerAliasTimestamps = /* @__PURE__ */ new Map();
    pendingDrafts = /* @__PURE__ */ new Map();
    PENDING_EXPIRY_MS = 30 * 60 * 1e3;
    ROUTING_RULES = [
      {
        patterns: [/executive\s*summary/i, /daily\s*briefing/i, /full\s*(report|overview|briefing)/i, /everything/i, /all\s*assistants/i, /complete\s*(analysis|overview)/i],
        assistants: ["staffing", "attendance", "client_risk", "recruitment", "payroll"]
      },
      {
        patterns: [/what\s*(should|do)\s*i\s*worry/i, /priorities?\s*today/i, /urgent|critical\s*(issue|concern)/i, /what('s|\s+is)\s*(going\s+on|happening)/i, /status\s*update/i, /how\s*(are|is)\s*(things|operations)/i],
        assistants: ["staffing", "attendance", "client_risk"]
      },
      {
        patterns: [/unfilled\s*shift/i, /fill\s*rate/i, /schedul(e|ing)/i, /staff(ing|ed)/i, /coverage/i, /allocation/i, /worker\s*(assign|deploy)/i, /shift\s*(gap|short)/i, /overuse/i, /burnout/i, /double.?book/i],
        assistants: ["staffing"]
      },
      {
        patterns: [/reliab(le|ility)/i, /no.?show/i, /late(ness)?/i, /attendance/i, /absent/i, /punctual/i, /clock.?in/i, /tardy/i, /risky\s*worker/i, /worker\s*risk/i, /cancel.*accept/i],
        assistants: ["attendance"]
      },
      {
        patterns: [/recruit/i, /applicant/i, /pipeline/i, /hiring/i, /application/i, /candidate/i, /onboard/i, /shortage/i, /stalled/i, /conversion\s*rate/i],
        assistants: ["recruitment"]
      },
      {
        patterns: [/payroll/i, /overtime/i, /hours?\s*(work|log|track)/i, /timesheet/i, /wage/i, /pay\s*(rate|period)/i, /suspicious\s*pattern/i, /hour\s*integrity/i, /tito\s*correct/i],
        assistants: ["payroll"]
      },
      {
        patterns: [/client\s*risk/i, /site\s*risk/i, /workplace\s*(issue|risk|problem)/i, /gps\s*fail/i, /service\s*reliab/i, /escalat/i, /account\s*health/i],
        assistants: ["client_risk"]
      },
      {
        patterns: [/worker.*(late|reliable|show)/i, /who\s*(is|are).*(late|unreliable|absent)/i],
        assistants: ["attendance", "staffing"]
      },
      {
        patterns: [/site.*(problem|issue|cancel|unstable)/i, /workplace.*(cancel|issue|problem)/i, /why\s*is\s*\w+\s*(unstable|failing|struggling)/i],
        assistants: ["client_risk", "staffing"]
      }
    ];
    ACTION_INTENT_PATTERNS = [
      /\b(assign|add|put)\b.*(worker|staff|person)/i,
      /\b(blast|broadcast|send.*offer|offer.*shift)\b/i,
      /\bcreate\b.*(shift|request|schedule)/i,
      /\bschedule\b.*(shift|worker)/i,
      /\bsend\b.*(sms|text|message|notification)/i,
      /\b(text|sms)\b.*(worker|staff|lilee|gm)/i,
      /\bnotify\b.*(discord|gm|lilee|team)/i,
      /\bcheck\b.*(discord|alert|incoming|sms|message)/i,
      /\bread\b.*(sms|text|message|incoming)/i,
      /\bwho\s+(texted|called|messaged)/i,
      /\bincoming\s+(sms|text|message)/i,
      /\b(sick\s*call|calling\s*in\s*sick|sick\s*day)\b/i,
      /\b(cover|coverage|replacement)\b.*shift/i,
      /\bfind\b.*(replacement|cover|backup|available)/i,
      /\b(remove|cancel|terminate)\b.*(worker|shift|request)/i,
      /\backnowledge\b.*(alert|discord)/i,
      /\bwhat.*(worker|staff)\s*(are|is)\s*available/i,
      /\bavailable\s*(worker|staff)\b/i,
      /\blilee\b/i,
      /\bdiscord\b/i,
      // Shift creation (natural language)
      /\b(book|set|put|schedule)\b.*(at|for)\b/i,
      /\bneed\s+\w+\s+at\s+\w/i,
      /\b(create|make|add)\s+a?\s*shift\b/i,
      // Follow-up replies and confirmations
      /^\s*try\s+\w+/i,
      /^\s*[\d\s\-\+\(\)]{7,15}\s*$/,
      // phone number as standalone reply
      /^\s*(yes|yep|yis|yeah|sure|ok|okay|go ahead|go|proceed|do it|confirm|correct|sounds good|perfect|great|absolutely|right|that's right|that works|approved|affirmative|done|send it|do that|exactly|yup)\s*[.!]?\s*$/i,
      // short confirmations
      /\bcan (i|you) have\b/i,
      /\bi need\s+\d*\s*(hk|housekeep|server|staff)/i,
      /\beven if (you can't|you cannot|there('s| is) no)\b/i,
      /\bapply (same|similar) logic\b/i,
      /\bstill (let us|notify|alert|report)\b/i,
      /\bneed .+ (for|at) (tomorrow|tonight|today)\b/i,
      // Worker/workplace lookup
      /\b(find|look up|search for)\s+(a\s+)?(worker|staff|workplace|hotel)\b/i,
      // Follow-up / update queries (route to action for message/Discord checks)
      /\b(any|get|check|ask\s+for)\b.*(update|reply|response|feedback)\b.*(from|about|on)\b/i,
      /\bany\b.*\breply\b/i,
      /\bfollow[\s\-]?up\b/i,
      /\bupdate\s+on\b/i,
      /\bcheck\s+(if|whether|for)\b.*\b(replied|responded|got\s+back)\b/i,
      // Google Calendar / Gmail
      /\b(send|write|draft|email|e-mail)\b.*(worker|staff|client|team|lilee|gm|hr)/i,
      /\b(email|e-mail|gmail)\b/i,
      /\b(create|add|schedule|book)\b.*(calendar|event|appointment|meeting)/i,
      /\b(list|check|show|what.*(on|in))\b.*(calendar|schedule|events|appointments)/i,
      /\bread\b.*(email|inbox|gmail|e-mail)/i,
      /\bcheck\b.*(email|inbox|gmail|e-mail)/i
    ];
    ACTIVE_ACTION_CONTEXT_SIGNALS = [
      "What I Need From You",
      "what I need from you",
      "Still needed",
      "still needed",
      "Need from you",
      "need from you",
      "Once I confirm",
      "once I confirm",
      "What's the correct",
      "what's the correct",
      "Can you help me",
      "please provide",
      "Please provide",
      "Worker Not Found",
      "worker not found",
      "Not found in system",
      "not found in system",
      "before I can proceed",
      "to proceed with",
      "I'll create the shift",
      "Draft saved",
      "draft saved",
      "just need the worker",
      "Just need the worker",
      "provide a name or phone",
      "phone number or",
      "another name",
      "try a different",
      "Try a different",
      "spelling variation",
      "which workplace",
      "Which workplace",
      // Confirmation-seeking signals — AI asked user to confirm
      "Shall I",
      "shall I",
      "go ahead and",
      "Go ahead and",
      "instead?",
      "instead \u2014",
      "Shall I proceed",
      "shall I proceed",
      "Would you like me to",
      "would you like me to",
      "Do you want me to",
      "do you want me to",
      "Should I",
      "should I",
      "Confirm and I'll",
      "confirm and I'll",
      "Say yes",
      "say yes",
      "Ready to send",
      "ready to send",
      "Want me to",
      "want me to",
      "I can also",
      "i can also",
      "Let me know",
      "let me know",
      "Does that look right",
      "does that look right",
      "Look correct",
      "look correct"
    ];
  }
});

// server/utils/time.ts
import { format, toZonedTime, fromZonedTime } from "date-fns-tz";
function nowToronto() {
  return toZonedTime(/* @__PURE__ */ new Date(), TORONTO_TZ);
}
function formatToronto(date2, fmt = "yyyy-MM-dd HH:mm") {
  const d = new Date(date2);
  return format(toZonedTime(d, TORONTO_TZ), fmt, { timeZone: TORONTO_TZ });
}
var TORONTO_TZ;
var init_time = __esm({
  "server/utils/time.ts"() {
    "use strict";
    TORONTO_TZ = "America/Toronto";
  }
});

// server/services/aiFollowupService.ts
var aiFollowupService_exports = {};
__export(aiFollowupService_exports, {
  logAiMessage: () => logAiMessage,
  markResponseReceived: () => markResponseReceived,
  runFollowupCheck: () => runFollowupCheck,
  startFollowupScheduler: () => startFollowupScheduler
});
import { eq as eq14, and as and11, lt as lt2 } from "drizzle-orm";
function pickFollowupMessage(recipientPhone) {
  const index2 = recipientPhone.split("").reduce((sum2, c) => sum2 + c.charCodeAt(0), 0) % FOLLOWUP_MESSAGES.length;
  return FOLLOWUP_MESSAGES[index2];
}
async function logAiMessage(opts) {
  const now = nowToronto();
  const [record] = await db.insert(aiMessageLog).values({
    recipientPhone: opts.recipientPhone,
    recipientName: opts.recipientName,
    message: opts.message,
    sentAt: now,
    responseReceived: false,
    followupSent: false,
    triggeredBy: opts.triggeredBy || "clawd",
    contextNote: opts.contextNote
  }).returning({ id: aiMessageLog.id });
  console.log(`[AI MESSAGE] Logged message to ${opts.recipientPhone} | id=${record.id} | at=${formatToronto(now)}`);
  return record.id;
}
async function markResponseReceived(recipientPhone) {
  const now = nowToronto();
  const result = await db.update(aiMessageLog).set({
    responseReceived: true,
    responseReceivedAt: now
  }).where(
    and11(
      eq14(aiMessageLog.recipientPhone, recipientPhone),
      eq14(aiMessageLog.responseReceived, false)
    )
  );
  if (result.rowCount && result.rowCount > 0) {
    console.log(`[AI MESSAGE] Response received from ${recipientPhone} \u2014 follow-up cancelled | at=${formatToronto(now)}`);
  }
}
async function runFollowupCheck() {
  const now = nowToronto();
  const twoHoursAgo = new Date(now.getTime() - TWO_HOURS_MS);
  console.log(`[FOLLOWUP CHECK] Running at ${formatToronto(now)}`);
  const pending = await db.select().from(aiMessageLog).where(
    and11(
      eq14(aiMessageLog.responseReceived, false),
      eq14(aiMessageLog.followupSent, false),
      lt2(aiMessageLog.sentAt, twoHoursAgo)
    )
  );
  if (pending.length === 0) {
    console.log(`[FOLLOWUP CHECK] No pending follow-ups needed`);
    return;
  }
  console.log(`[FOLLOWUP CHECK] Found ${pending.length} message(s) needing follow-up`);
  for (const record of pending) {
    const hoursSince = Math.floor((now.getTime() - record.sentAt.getTime()) / 36e5);
    console.log(`[FOLLOWUP CHECK] ${record.recipientPhone} | ${hoursSince}h since last message`);
    const followupMsg = pickFollowupMessage(record.recipientPhone);
    try {
      await sendSMS(record.recipientPhone, followupMsg);
      await db.update(aiMessageLog).set({
        followupSent: true,
        followupSentAt: now,
        followupMessage: followupMsg
      }).where(eq14(aiMessageLog.id, record.id));
      console.log(`[FOLLOWUP SENT] ${record.recipientPhone} | at=${formatToronto(now)} | msg="${followupMsg.slice(0, 60)}..."`);
    } catch (err) {
      console.error(`[FOLLOWUP ERROR] Failed to send follow-up to ${record.recipientPhone}:`, err?.message);
    }
  }
}
function startFollowupScheduler() {
  if (followupInterval) return;
  const CHECK_INTERVAL_MS = 15 * 60 * 1e3;
  console.log("[AI FOLLOWUP] Starting follow-up scheduler (checks every 15 min)");
  runFollowupCheck().catch((e) => console.error("[AI FOLLOWUP] Initial check error:", e?.message));
  followupInterval = setInterval(() => {
    runFollowupCheck().catch((e) => console.error("[AI FOLLOWUP] Scheduled check error:", e?.message));
  }, CHECK_INTERVAL_MS);
}
var TWO_HOURS_MS, FOLLOWUP_MESSAGES, followupInterval;
var init_aiFollowupService = __esm({
  "server/services/aiFollowupService.ts"() {
    "use strict";
    init_db();
    init_schema();
    init_openphone();
    init_time();
    TWO_HOURS_MS = 2 * 60 * 60 * 1e3;
    FOLLOWUP_MESSAGES = [
      "Hi! Just checking in \u2014 I sent a message a couple hours ago and wanted to make sure you saw it.",
      "Hey, just a quick follow-up in case my earlier message got buried. Let me know if you have any questions!",
      "Hi there \u2014 I reached out earlier and wanted to see if you had a chance to read my message.",
      "Just following up on my earlier message! Feel free to reply whenever convenient.",
      "Hey! Checking in to see if everything is okay and if you had a chance to read my last message."
    ];
    followupInterval = null;
  }
});

// server/services/ai-assistant/logger.ts
var logger_exports = {};
__export(logger_exports, {
  logAction: () => logAction2
});
async function logAction2(params) {
  try {
    await db.insert(aiActionLogs).values({
      monitorType: params.monitorType,
      signalId: params.signalId ?? null,
      signalSummary: params.signalSummary,
      actionTaken: params.actionTaken,
      alertSentTo: params.alertSentTo ?? null,
      errorMessage: params.errorMessage ?? null
    });
  } catch (err) {
    console.error("[AI] Logger failed to write:", err?.message);
  }
}
var init_logger = __esm({
  "server/services/ai-assistant/logger.ts"() {
    "use strict";
    init_db();
    init_schema();
  }
});

// server/services/ai-assistant/alerts.ts
async function sendContactLeadAlert(lead) {
  const subject = `New client inquiry \u2014 ${lead.name}${lead.company ? ` (${lead.company})` : ""}`;
  const text2 = [
    `New contact form submission received on WFConnect.`,
    ``,
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    lead.company ? `Company: ${lead.company}` : null,
    lead.phone ? `Phone: ${lead.phone}` : null,
    lead.cityProvince ? `Location: ${lead.cityProvince}` : null,
    lead.serviceNeeded ? `Service Needed: ${lead.serviceNeeded}` : null,
    ``,
    `Message:`,
    lead.message,
    ``,
    `Received: ${lead.createdAt.toLocaleString("en-CA", { timeZone: "America/Toronto" })}`,
    ``,
    `Review at: ${APP_URL}`
  ].filter((l) => l !== null).join("\n");
  const html = `
    <h2 style="color:#1E40AF">New Client Inquiry</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="padding:6px 12px 6px 0;color:#64748B;width:140px">Name</td><td style="padding:6px 0"><strong>${lead.name}</strong></td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#64748B">Email</td><td style="padding:6px 0">${lead.email}</td></tr>
      ${lead.company ? `<tr><td style="padding:6px 12px 6px 0;color:#64748B">Company</td><td style="padding:6px 0">${lead.company}</td></tr>` : ""}
      ${lead.phone ? `<tr><td style="padding:6px 12px 6px 0;color:#64748B">Phone</td><td style="padding:6px 0">${lead.phone}</td></tr>` : ""}
      ${lead.cityProvince ? `<tr><td style="padding:6px 12px 6px 0;color:#64748B">Location</td><td style="padding:6px 0">${lead.cityProvince}</td></tr>` : ""}
      ${lead.serviceNeeded ? `<tr><td style="padding:6px 12px 6px 0;color:#64748B">Service Needed</td><td style="padding:6px 0">${lead.serviceNeeded}</td></tr>` : ""}
    </table>
    <h3 style="color:#1E40AF;margin-top:20px">Message</h3>
    <p style="background:#F8FAFC;padding:16px;border-radius:8px;border-left:4px solid #1E40AF">${lead.message.replace(/\n/g, "<br>")}</p>
    <p style="color:#64748B;font-size:13px">Received: ${lead.createdAt.toLocaleString("en-CA", { timeZone: "America/Toronto" })}</p>
    <a href="${APP_URL}" style="background:#1E40AF;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;display:inline-block;margin-top:8px">Open WFConnect</a>
  `;
  return sendEmail({ to: ADMIN_EMAIL, subject, text: text2, html });
}
async function sendShiftRequestAlert(request, escalated) {
  const age = Math.round((Date.now() - request.createdAt.getTime()) / 6e4);
  const prefix = escalated ? "URGENT \u2014 " : "";
  const subject = `${prefix}Shift request needs attention \u2014 ${request.roleType} on ${request.date}`;
  const text2 = [
    escalated ? "URGENT: This shift request has been open for over 4 hours without a worker assigned." : "A shift request has been open for over 30 minutes without a worker assigned.",
    ``,
    `Role: ${request.roleType}`,
    `Date: ${request.date}`,
    `Time: ${request.startTime} \u2013 ${request.endTime}`,
    request.notes ? `Notes: ${request.notes}` : null,
    `Submitted: ${request.createdAt.toLocaleString("en-CA", { timeZone: "America/Toronto" })} (${age} min ago)`,
    ``,
    `Action required: Assign a worker or follow up with the client.`,
    ``,
    `Review at: ${APP_URL}`
  ].filter((l) => l !== null).join("\n");
  const urgentStyle = escalated ? "color:#EF4444" : "color:#F59E0B";
  const html = `
    <h2 style="${urgentStyle}">${escalated ? "URGENT: " : ""}Shift Request Needs Attention</h2>
    <p>${escalated ? "This request has been open for <strong>over 4 hours</strong> without a worker assigned." : "A shift request has been open for <strong>over 30 minutes</strong> without a worker assigned."}</p>
    <table style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="padding:6px 12px 6px 0;color:#64748B;width:140px">Role</td><td style="padding:6px 0"><strong>${request.roleType}</strong></td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#64748B">Date</td><td style="padding:6px 0">${request.date}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#64748B">Time</td><td style="padding:6px 0">${request.startTime} \u2013 ${request.endTime}</td></tr>
      ${request.notes ? `<tr><td style="padding:6px 12px 6px 0;color:#64748B">Notes</td><td style="padding:6px 0">${request.notes}</td></tr>` : ""}
      <tr><td style="padding:6px 12px 6px 0;color:#64748B">Submitted</td><td style="padding:6px 0">${request.createdAt.toLocaleString("en-CA", { timeZone: "America/Toronto" })} (${age} min ago)</td></tr>
    </table>
    <p style="font-weight:600;margin-top:16px">Action required: Assign a worker or follow up with the client.</p>
    <a href="${APP_URL}" style="background:#1E40AF;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;display:inline-block;margin-top:8px">Open WFConnect</a>
  `;
  return sendEmail({ to: ADMIN_EMAIL, subject, text: text2, html });
}
async function sendUnfilledShiftAlert(shift) {
  const subject = `URGENT \u2014 Unfilled shift starting within 4 hours \u2014 ${shift.date} at ${shift.startTime}`;
  const text2 = [
    `A scheduled shift has no worker assigned and starts within the next 4 hours.`,
    ``,
    `Date: ${shift.date}`,
    `Start: ${shift.startTime}`,
    shift.endTime ? `End: ${shift.endTime}` : null,
    shift.title ? `Title: ${shift.title}` : null,
    ``,
    `Immediate action required: Assign a worker now.`,
    ``,
    `Review at: ${APP_URL}`
  ].filter((l) => l !== null).join("\n");
  const html = `
    <h2 style="color:#EF4444">URGENT: Unfilled Shift Starting Soon</h2>
    <p>A scheduled shift has <strong>no worker assigned</strong> and starts within the next 4 hours.</p>
    <table style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="padding:6px 12px 6px 0;color:#64748B;width:140px">Date</td><td style="padding:6px 0"><strong>${shift.date}</strong></td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#64748B">Start Time</td><td style="padding:6px 0"><strong>${shift.startTime}</strong></td></tr>
      ${shift.endTime ? `<tr><td style="padding:6px 12px 6px 0;color:#64748B">End Time</td><td style="padding:6px 0">${shift.endTime}</td></tr>` : ""}
      ${shift.title ? `<tr><td style="padding:6px 12px 6px 0;color:#64748B">Title</td><td style="padding:6px 0">${shift.title}</td></tr>` : ""}
    </table>
    <p style="font-weight:600;color:#EF4444;margin-top:16px">Immediate action required: Assign a worker now.</p>
    <a href="${APP_URL}" style="background:#EF4444;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;display:inline-block;margin-top:8px">Open WFConnect \u2014 Assign Now</a>
  `;
  return sendEmail({ to: ADMIN_EMAIL, subject, text: text2, html });
}
async function sendPendingAccountsDigest(pendingUsers) {
  const subject = `Daily digest \u2014 ${pendingUsers.count} account${pendingUsers.count !== 1 ? "s" : ""} pending approval`;
  const oldestStr = pendingUsers.oldest ? pendingUsers.oldest.toLocaleDateString("en-CA", { timeZone: "America/Toronto" }) : "unknown";
  const text2 = [
    `Daily pending accounts digest from WFConnect.`,
    ``,
    `Pending accounts awaiting activation: ${pendingUsers.count}`,
    `  Workers: ${pendingUsers.workerCount}`,
    `  Clients: ${pendingUsers.clientCount}`,
    `  Oldest pending since: ${oldestStr}`,
    ``,
    `Review and approve at: ${APP_URL}`
  ].join("\n");
  const html = `
    <h2 style="color:#1E40AF">Daily Pending Accounts Digest</h2>
    <p>The following accounts are awaiting admin activation in WFConnect:</p>
    <table style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="padding:6px 12px 6px 0;color:#64748B;width:180px">Total Pending</td><td style="padding:6px 0"><strong>${pendingUsers.count}</strong></td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#64748B">Workers</td><td style="padding:6px 0">${pendingUsers.workerCount}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#64748B">Clients</td><td style="padding:6px 0">${pendingUsers.clientCount}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#64748B">Oldest pending since</td><td style="padding:6px 0">${oldestStr}</td></tr>
    </table>
    <a href="${APP_URL}" style="background:#1E40AF;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;display:inline-block;margin-top:16px">Review Pending Accounts</a>
  `;
  return sendEmail({ to: ADMIN_EMAIL, subject, text: text2, html });
}
var ADMIN_EMAIL, APP_URL;
var init_alerts = __esm({
  "server/services/ai-assistant/alerts.ts"() {
    "use strict";
    init_email();
    ADMIN_EMAIL = "admin@wfconnect.org";
    APP_URL = "https://app.wfconnect.org";
  }
});

// server/services/ai-assistant/monitor.ts
import { eq as eq15, and as and12, lt as lt3, gte as gte9, isNull as isNull7, sql as sql12, isNotNull as isNotNull5, inArray as inArray4 } from "drizzle-orm";
async function getOrSetActivationTimestamp() {
  if (activationTimestamp) return activationTimestamp;
  const [existing] = await db.select({ createdAt: aiActionLogs.createdAt }).from(aiActionLogs).where(and12(eq15(aiActionLogs.monitorType, "system"), eq15(aiActionLogs.actionTaken, "activated"))).orderBy(aiActionLogs.createdAt).limit(1);
  if (existing) {
    activationTimestamp = existing.createdAt;
    console.log(`[AI] Using existing activation timestamp: ${activationTimestamp.toISOString()}`);
    return activationTimestamp;
  }
  const now = /* @__PURE__ */ new Date();
  activationTimestamp = now;
  await logAction2({
    monitorType: "system",
    signalSummary: "AI operations assistant activated",
    actionTaken: "activated"
  });
  console.log(`[AI] First activation \u2014 timestamp set to: ${now.toISOString()}`);
  return now;
}
async function isAlreadyAlerted(entityType, entityId, alertType) {
  const [existing] = await db.select({ id: aiAlertState.id }).from(aiAlertState).where(
    and12(
      eq15(aiAlertState.entityType, entityType),
      eq15(aiAlertState.entityId, entityId),
      eq15(aiAlertState.alertType, alertType)
    )
  ).limit(1);
  return !!existing;
}
async function markAlerted(entityType, entityId, alertType) {
  await db.insert(aiAlertState).values({ entityType, entityId, alertType }).onConflictDoUpdate({
    target: [aiAlertState.entityType, aiAlertState.entityId, aiAlertState.alertType],
    set: {
      alertedAt: /* @__PURE__ */ new Date(),
      alertCount: sql12`${aiAlertState.alertCount} + 1`
    }
  });
}
async function sendGMSms(message) {
  try {
    await sendSMS(GM_PHONE, message);
    await logSMS({ phoneNumber: GM_PHONE, direction: "outbound", message, status: "sent" });
  } catch (e) {
    console.error("[AI] GM SMS failed:", e?.message);
  }
}
async function checkContactLeads(activationTs) {
  try {
    const leads = await db.select().from(contactLeads).where(gte9(contactLeads.createdAt, activationTs));
    for (const lead of leads) {
      const alreadyAlerted = await isAlreadyAlerted("contact_lead", lead.id, "new");
      if (alreadyAlerted) continue;
      const result = await sendContactLeadAlert({
        id: lead.id,
        name: lead.name,
        email: lead.email,
        company: lead.company,
        phone: lead.phone,
        cityProvince: lead.cityProvince ?? null,
        serviceNeeded: lead.serviceNeeded ?? null,
        message: lead.message,
        createdAt: lead.createdAt
      });
      if (result.success) {
        await markAlerted("contact_lead", lead.id, "new");
        await logAction2({
          monitorType: "contact_lead",
          signalId: lead.id,
          signalSummary: `New contact lead from ${lead.name} (${lead.email})${lead.company ? ` \u2014 ${lead.company}` : ""}`,
          actionTaken: "alert_sent",
          alertSentTo: "admin@wfconnect.org"
        });
        console.log(`[AI] Contact lead alert sent for ${lead.email}`);
        const contactInfo = lead.phone || lead.email;
        const smsMsg = `New Lead: ${lead.name}${lead.company ? ` from ${lead.company}` : ""}. ${contactInfo}`;
        await sendGMSms(smsMsg);
      } else {
        await logAction2({
          monitorType: "contact_lead",
          signalId: lead.id,
          signalSummary: `New contact lead from ${lead.name} (${lead.email})`,
          actionTaken: "error",
          errorMessage: result.error
        });
        console.error(`[AI] Failed to send contact lead alert: ${result.error}`);
      }
    }
  } catch (err) {
    console.error("[AI] checkContactLeads error:", err?.message);
    await logAction2({
      monitorType: "contact_lead",
      signalSummary: "Monitor check failed",
      actionTaken: "error",
      errorMessage: err?.message
    });
  }
}
async function checkShiftRequests(activationTs) {
  try {
    const thirtyMinAgo = new Date(Date.now() - 30 * 60 * 1e3);
    const fourHoursAgo = new Date(Date.now() - 4 * 60 * 60 * 1e3);
    const openRequests = await db.select().from(shiftRequests).where(
      and12(
        eq15(shiftRequests.status, "submitted"),
        gte9(shiftRequests.createdAt, activationTs),
        lt3(shiftRequests.createdAt, thirtyMinAgo)
      )
    );
    for (const req of openRequests) {
      const isEscalated = req.createdAt < fourHoursAgo;
      const dateStr = String(req.date);
      if (isEscalated) {
        const alreadyEscalated = await isAlreadyAlerted("shift_request", req.id, "unacknowledged_4h");
        if (!alreadyEscalated) {
          const result2 = await sendShiftRequestAlert(
            {
              id: req.id,
              roleType: req.roleType,
              date: dateStr,
              startTime: req.startTime,
              endTime: req.endTime,
              notes: req.notes,
              createdAt: req.createdAt
            },
            true
          );
          if (result2.success) {
            await markAlerted("shift_request", req.id, "unacknowledged_4h");
            await logAction2({
              monitorType: "shift_request",
              signalId: req.id,
              signalSummary: `ESCALATED: Shift request for ${req.roleType} on ${req.date} open 4+ hours`,
              actionTaken: "alert_sent",
              alertSentTo: "admin@wfconnect.org"
            });
            console.log(`[AI] Escalation alert sent for shift request ${req.id}`);
            await sendGMSms(`URGENT: Shift request for ${req.roleType} on ${dateStr} open 4+ hours`);
          } else {
            await logAction2({
              monitorType: "shift_request",
              signalId: req.id,
              signalSummary: `Escalation alert failed for ${req.roleType} request`,
              actionTaken: "error",
              errorMessage: result2.error
            });
          }
        }
        continue;
      }
      const already30min = await isAlreadyAlerted("shift_request", req.id, "unacknowledged_30min");
      if (already30min) continue;
      const result = await sendShiftRequestAlert(
        {
          id: req.id,
          roleType: req.roleType,
          date: dateStr,
          startTime: req.startTime,
          endTime: req.endTime,
          notes: req.notes,
          createdAt: req.createdAt
        },
        false
      );
      if (result.success) {
        await markAlerted("shift_request", req.id, "unacknowledged_30min");
        await logAction2({
          monitorType: "shift_request",
          signalId: req.id,
          signalSummary: `Shift request for ${req.roleType} on ${req.date} unacknowledged 30+ min`,
          actionTaken: "alert_sent",
          alertSentTo: "admin@wfconnect.org"
        });
        console.log(`[AI] 30-min alert sent for shift request ${req.id}`);
        await sendGMSms(`Alert: Shift request for ${req.roleType} on ${dateStr} open 30+ min`);
      } else {
        await logAction2({
          monitorType: "shift_request",
          signalId: req.id,
          signalSummary: `30-min alert failed for ${req.roleType} request`,
          actionTaken: "error",
          errorMessage: result.error
        });
      }
    }
  } catch (err) {
    console.error("[AI] checkShiftRequests error:", err?.message);
    await logAction2({
      monitorType: "shift_request",
      signalSummary: "Monitor check failed",
      actionTaken: "error",
      errorMessage: err?.message
    });
  }
}
async function checkUnfilledShifts() {
  try {
    const now = /* @__PURE__ */ new Date();
    const fourHoursFromNow = new Date(now.getTime() + 4 * 60 * 60 * 1e3);
    const todayStr = now.toISOString().split("T")[0];
    const nowTimeStr = now.toTimeString().substring(0, 5);
    const fourHourStr = fourHoursFromNow.toTimeString().substring(0, 5);
    const unfilledShifts = await db.select().from(shifts).where(
      and12(
        eq15(shifts.status, "scheduled"),
        isNull7(shifts.workerUserId),
        sql12`${shifts.date}::text = ${todayStr}`,
        sql12`${shifts.startTime} >= ${nowTimeStr}`,
        sql12`${shifts.startTime} <= ${fourHourStr}`
      )
    );
    for (const shift of unfilledShifts) {
      const alreadyAlerted = await isAlreadyAlerted("shift", shift.id, "unfilled_4h");
      if (alreadyAlerted) continue;
      const dateStr = String(shift.date);
      const result = await sendUnfilledShiftAlert({
        id: shift.id,
        title: shift.title ?? null,
        date: dateStr,
        startTime: shift.startTime,
        endTime: shift.endTime ?? null
      });
      if (result.success) {
        await markAlerted("shift", shift.id, "unfilled_4h");
        await logAction2({
          monitorType: "unfilled_shift",
          signalId: shift.id,
          signalSummary: `Unfilled shift on ${shift.date} starting at ${shift.startTime}`,
          actionTaken: "alert_sent",
          alertSentTo: "admin@wfconnect.org"
        });
        console.log(`[AI] Unfilled shift alert sent for shift ${shift.id}`);
        await sendGMSms(`URGENT: Unfilled shift on ${dateStr} at ${shift.startTime}`);
      } else {
        await logAction2({
          monitorType: "unfilled_shift",
          signalId: shift.id,
          signalSummary: `Unfilled shift alert failed for ${shift.date} ${shift.startTime}`,
          actionTaken: "error",
          errorMessage: result.error
        });
      }
    }
  } catch (err) {
    console.error("[AI] checkUnfilledShifts error:", err?.message);
    await logAction2({
      monitorType: "unfilled_shift",
      signalSummary: "Monitor check failed",
      actionTaken: "error",
      errorMessage: err?.message
    });
  }
}
async function checkPendingAccountsDigest() {
  try {
    const todayStart = /* @__PURE__ */ new Date();
    todayStart.setHours(0, 0, 0, 0);
    const [alreadySentToday] = await db.select({ id: aiActionLogs.id }).from(aiActionLogs).where(
      and12(
        eq15(aiActionLogs.monitorType, "pending_accounts_digest"),
        eq15(aiActionLogs.actionTaken, "alert_sent"),
        gte9(aiActionLogs.createdAt, todayStart)
      )
    ).limit(1);
    if (alreadySentToday) return;
    const pendingUsers = await db.select({ role: users.role, createdAt: users.createdAt }).from(users).where(eq15(users.isActive, false));
    if (pendingUsers.length === 0) return;
    const workerCount = pendingUsers.filter((u) => u.role === "worker").length;
    const clientCount = pendingUsers.filter((u) => u.role === "client").length;
    const oldest = pendingUsers.reduce((min, u) => {
      if (!min) return u.createdAt;
      return u.createdAt < min ? u.createdAt : min;
    }, null);
    const result = await sendPendingAccountsDigest({
      count: pendingUsers.length,
      workerCount,
      clientCount,
      oldest
    });
    if (result.success) {
      await logAction2({
        monitorType: "pending_accounts_digest",
        signalSummary: `Daily digest: ${pendingUsers.length} accounts pending (${workerCount} workers, ${clientCount} clients)`,
        actionTaken: "alert_sent",
        alertSentTo: "admin@wfconnect.org"
      });
      console.log(`[AI] Pending accounts digest sent: ${pendingUsers.length} accounts`);
    } else {
      await logAction2({
        monitorType: "pending_accounts_digest",
        signalSummary: `Digest send failed (${pendingUsers.length} accounts pending)`,
        actionTaken: "error",
        errorMessage: result.error
      });
    }
  } catch (err) {
    console.error("[AI] checkPendingAccountsDigest error:", err?.message);
    await logAction2({
      monitorType: "pending_accounts_digest",
      signalSummary: "Monitor check failed",
      actionTaken: "error",
      errorMessage: err?.message
    });
  }
}
function getTorontoHour() {
  const now = /* @__PURE__ */ new Date();
  const torontoStr = now.toLocaleString("en-US", { timeZone: "America/Toronto" });
  const torontoDate = new Date(torontoStr);
  const dateOnly = now.toLocaleDateString("en-CA", { timeZone: "America/Toronto" });
  return {
    hour: torontoDate.getHours(),
    dayOfWeek: torontoDate.getDay(),
    dateStr: dateOnly
  };
}
function getISOWeek(dateStr) {
  const d = /* @__PURE__ */ new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
  const week1 = new Date(d.getFullYear(), 0, 4);
  const weekNum = 1 + Math.round(((d.getTime() - week1.getTime()) / 864e5 - 3 + (week1.getDay() + 6) % 7) / 7);
  return `${d.getFullYear()}-W${String(weekNum).padStart(2, "0")}`;
}
async function checkDailyDeploymentReport() {
  try {
    const { hour, dateStr } = getTorontoHour();
    if (hour < 20 || hour >= 21) return;
    const alreadySent = await isAlreadyAlerted("gm_report", dateStr, "daily");
    if (alreadySent) return;
    await markAlerted("gm_report", dateStr, "daily");
    const todayShifts = await db.select({
      id: shifts.id,
      workplaceId: shifts.workplaceId,
      workerUserId: shifts.workerUserId
    }).from(shifts).where(
      and12(
        sql12`${shifts.date}::text = ${dateStr}`,
        inArray4(shifts.status, ["scheduled", "in_progress", "completed"]),
        isNotNull5(shifts.workerUserId)
      )
    );
    const titoResults = await db.select({ id: titoLogs.id }).from(titoLogs).where(
      sql12`DATE(${titoLogs.timeIn} AT TIME ZONE 'America/Toronto') = ${dateStr}::date`
    );
    const deploymentCount = titoResults.length;
    const shiftCount = todayShifts.length;
    const workplaceIds = [...new Set(todayShifts.map((s) => s.workplaceId).filter(Boolean))];
    let workplaceBreakdown = "";
    if (workplaceIds.length > 0) {
      const wpNames = await db.select({ id: workplaces.id, name: workplaces.name }).from(workplaces).where(inArray4(workplaces.id, workplaceIds));
      const wpMap = new Map(wpNames.map((w) => [w.id, w.name]));
      const wpCounts = {};
      for (const s of todayShifts) {
        const name = wpMap.get(s.workplaceId) || "Unknown";
        wpCounts[name] = (wpCounts[name] || 0) + 1;
      }
      const sorted = Object.entries(wpCounts).sort((a, b) => b[1] - a[1]);
      workplaceBreakdown = "\n" + sorted.map(([name, cnt]) => `${name}: ${cnt}`).join(", ");
    }
    const smsMsg = `WFConnect Daily Report - ${dateStr}
Workers Deployed: ${deploymentCount}
Shifts Today: ${shiftCount}${workplaceBreakdown}`;
    await sendSMS(GM_PHONE, smsMsg);
    await logSMS({ phoneNumber: GM_PHONE, direction: "outbound", message: smsMsg, status: "sent" });
    await logAction2({
      monitorType: "gm_daily_report",
      signalSummary: `Daily report sent: ${deploymentCount} deployed, ${shiftCount} shifts`,
      actionTaken: "alert_sent",
      alertSentTo: GM_PHONE
    });
    console.log(`[AI] Daily deployment report sent for ${dateStr}`);
  } catch (err) {
    console.error("[AI] checkDailyDeploymentReport error:", err?.message);
    await logAction2({
      monitorType: "gm_daily_report",
      signalSummary: "Daily report check failed",
      actionTaken: "error",
      errorMessage: err?.message
    });
  }
}
async function checkWeeklyReport() {
  try {
    const { hour, dayOfWeek, dateStr } = getTorontoHour();
    if (dayOfWeek !== 1 || hour < 8 || hour >= 9) return;
    const weekId = `week-${getISOWeek(dateStr)}`;
    const alreadySent = await isAlreadyAlerted("gm_report", weekId, "weekly");
    if (alreadySent) return;
    await markAlerted("gm_report", weekId, "weekly");
    const sevenDaysAgo = /* @__PURE__ */ new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const sevenDaysAgoStr = sevenDaysAgo.toISOString().split("T")[0];
    const weekShifts = await db.select({
      id: shifts.id,
      workplaceId: shifts.workplaceId,
      workerUserId: shifts.workerUserId,
      status: shifts.status
    }).from(shifts).where(
      and12(
        sql12`${shifts.date}::text >= ${sevenDaysAgoStr}`,
        sql12`${shifts.date}::text <= ${dateStr}`,
        inArray4(shifts.status, ["completed", "in_progress"])
      )
    );
    const completedShifts = weekShifts.filter((s) => s.status === "completed").length;
    const uniqueWorkers = new Set(weekShifts.map((s) => s.workerUserId).filter(Boolean)).size;
    const weekTitoLogs = await db.select({
      timeIn: titoLogs.timeIn,
      timeOut: titoLogs.timeOut
    }).from(titoLogs).where(
      and12(
        gte9(titoLogs.timeIn, sevenDaysAgo),
        isNotNull5(titoLogs.timeOut)
      )
    );
    let totalHours = 0;
    for (const log2 of weekTitoLogs) {
      if (log2.timeIn && log2.timeOut) {
        const diffMs = new Date(log2.timeOut).getTime() - new Date(log2.timeIn).getTime();
        totalHours += diffMs / (1e3 * 60 * 60);
      }
    }
    const wpCounts = {};
    const wpIds = [...new Set(weekShifts.map((s) => s.workplaceId).filter(Boolean))];
    let topSitesStr = "N/A";
    if (wpIds.length > 0) {
      const wpNames = await db.select({ id: workplaces.id, name: workplaces.name }).from(workplaces).where(inArray4(workplaces.id, wpIds));
      const wpMap = new Map(wpNames.map((w) => [w.id, w.name]));
      for (const s of weekShifts) {
        const name = wpMap.get(s.workplaceId) || "Unknown";
        wpCounts[name] = (wpCounts[name] || 0) + 1;
      }
      const sorted = Object.entries(wpCounts).sort((a, b) => b[1] - a[1]).slice(0, 3);
      topSitesStr = sorted.map(([name, cnt]) => `${name} (${cnt})`).join(", ");
    }
    const weekOfDate = sevenDaysAgoStr;
    const smsMsg = `WFConnect Weekly Report - Week of ${weekOfDate}
Total Deployments: ${weekShifts.length}
Total Workers: ${uniqueWorkers}
Est. Hours: ${Math.round(totalHours)}
Top Sites: ${topSitesStr}`;
    await sendSMS(GM_PHONE, smsMsg);
    await logSMS({ phoneNumber: GM_PHONE, direction: "outbound", message: smsMsg, status: "sent" });
    await logAction2({
      monitorType: "gm_weekly_report",
      signalSummary: `Weekly report sent: ${weekShifts.length} deployments, ${uniqueWorkers} workers, ${Math.round(totalHours)}h`,
      actionTaken: "alert_sent",
      alertSentTo: GM_PHONE
    });
    console.log(`[AI] Weekly report sent for ${weekId}`);
  } catch (err) {
    console.error("[AI] checkWeeklyReport error:", err?.message);
    await logAction2({
      monitorType: "gm_weekly_report",
      signalSummary: "Weekly report check failed",
      actionTaken: "error",
      errorMessage: err?.message
    });
  }
}
async function checkCrmSyncHealth() {
  try {
    const { getCrmPushQueueStats: getCrmPushQueueStats2, getLastSyncCompletedAtFromDb: getLastSyncCompletedAtFromDb2 } = await Promise.resolve().then(() => (init_crm_sync(), crm_sync_exports));
    const stats = await getCrmPushQueueStats2();
    if (stats.failed >= 5) {
      const alertKey = `crm_push_failed_${Math.floor(stats.failed / 5) * 5}`;
      const alreadyAlerted = await isAlreadyAlerted("crm_sync", alertKey, "push_failures");
      if (!alreadyAlerted) {
        const msg = `CRM Push Queue Critical: ${stats.failed} permanently failed item(s), ${stats.pending} pending`;
        console.warn(`[AI] ${msg}`);
        try {
          const { sendDiscordNotification: sendDiscordNotification2 } = await Promise.resolve().then(() => (init_discord(), discord_exports));
          await sendDiscordNotification2({
            title: "CRM Sync Health Critical",
            message: msg,
            color: "red"
          });
        } catch {
        }
        try {
          const smsMsg = `CRM Alert: ${stats.failed} push queue items permanently failed. Check admin panel.`;
          await sendSMS(GM_PHONE, smsMsg);
          await logSMS({ phoneNumber: GM_PHONE, direction: "outbound", message: smsMsg, status: "sent" });
        } catch {
        }
        await markAlerted("crm_sync", alertKey, "push_failures");
        await logAction2({
          monitorType: "crm_sync_health",
          signalSummary: msg,
          actionTaken: "alert_sent",
          alertSentTo: "discord,sms"
        });
      }
    } else if (stats.failed > 0) {
      console.warn(`[AI] CRM push queue has ${stats.failed} failed item(s) (below alert threshold of 5)`);
    }
    if (stats.pending > 10) {
      const backlogKey = `crm_backlog_${Math.floor(stats.pending / 10) * 10}`;
      const alreadyAlerted = await isAlreadyAlerted("crm_sync", backlogKey, "backlog");
      if (!alreadyAlerted) {
        console.warn(`[AI] CRM push queue backlog: ${stats.pending} pending items`);
        await markAlerted("crm_sync", backlogKey, "backlog");
        await logAction2({
          monitorType: "crm_sync_health",
          signalSummary: `Push queue backlog: ${stats.pending} pending`,
          actionTaken: "alert_sent"
        });
      }
    }
    const lastSync = await getLastSyncCompletedAtFromDb2();
    if (lastSync) {
      const minutesSinceSync = (Date.now() - lastSync.getTime()) / 6e4;
      if (minutesSinceSync > 10) {
        const staleKey = `crm_sync_stale_${Math.floor(minutesSinceSync / 10) * 10}min`;
        const alreadyAlerted = await isAlreadyAlerted("crm_sync", staleKey, "stale_sync");
        if (!alreadyAlerted) {
          const msg = `CRM Sync Stale: Last successful sync was ${Math.round(minutesSinceSync)} minutes ago`;
          console.warn(`[AI] ${msg}`);
          try {
            const { sendDiscordNotification: sendDiscordNotification2 } = await Promise.resolve().then(() => (init_discord(), discord_exports));
            await sendDiscordNotification2({
              title: "CRM Sync Stale Warning",
              message: msg,
              color: "amber"
            });
          } catch {
          }
          await markAlerted("crm_sync", staleKey, "stale_sync");
          await logAction2({
            monitorType: "crm_sync_health",
            signalSummary: msg,
            actionTaken: "alert_sent",
            alertSentTo: "discord"
          });
        }
      }
    }
  } catch (err) {
    console.error("[AI] checkCrmSyncHealth error:", err?.message);
  }
}
async function runMonitorCycle() {
  const activationTs = await getOrSetActivationTimestamp();
  await Promise.allSettled([
    checkContactLeads(activationTs),
    checkShiftRequests(activationTs),
    checkUnfilledShifts(),
    checkCrmSyncHealth()
  ]);
  const now = /* @__PURE__ */ new Date();
  if (now.getHours() === 9) {
    await checkPendingAccountsDigest();
  }
  await checkDailyDeploymentReport();
  await checkWeeklyReport();
}
var GM_PHONE, activationTimestamp;
var init_monitor = __esm({
  "server/services/ai-assistant/monitor.ts"() {
    "use strict";
    init_db();
    init_schema();
    init_logger();
    init_alerts();
    init_openphone();
    GM_PHONE = "+14166028038";
    activationTimestamp = null;
  }
});

// server/services/ai-assistant/index.ts
var ai_assistant_exports = {};
__export(ai_assistant_exports, {
  getStatus: () => getStatus,
  pause: () => pause,
  resume: () => resume,
  startAssistant: () => startAssistant,
  triggerManualCycle: () => triggerManualCycle
});
function getStatus() {
  return {
    running: intervalHandle !== null,
    paused: isPaused,
    lastCycleAt,
    lastCycleError,
    cycleCount,
    cycleIntervalMinutes: CYCLE_INTERVAL_MS / 6e4
  };
}
async function triggerManualCycle() {
  if (isRunning) {
    throw new Error("A monitor cycle is already in progress");
  }
  await executeCycle();
}
function pause() {
  isPaused = true;
}
function resume() {
  isPaused = false;
}
async function executeCycle() {
  if (isRunning) return;
  isRunning = true;
  try {
    await runMonitorCycle();
    lastCycleAt = /* @__PURE__ */ new Date();
    lastCycleError = null;
    cycleCount++;
  } catch (err) {
    lastCycleError = err?.message ?? "Unknown error";
    console.error("[AI] Monitor cycle error:", lastCycleError);
    await logAction2({
      monitorType: "system",
      signalSummary: "Monitor cycle failed",
      actionTaken: "error",
      errorMessage: lastCycleError
    });
  } finally {
    isRunning = false;
  }
}
async function startAssistant() {
  if (intervalHandle) {
    console.log("[AI] Assistant already started");
    return;
  }
  console.log("[AI] Starting operations assistant...");
  await executeCycle();
  intervalHandle = setInterval(async () => {
    if (isPaused) {
      console.log("[AI] Cycle skipped \u2014 assistant is paused");
      return;
    }
    await executeCycle();
  }, CYCLE_INTERVAL_MS);
  console.log(`[AI] Assistant started \u2014 cycling every ${CYCLE_INTERVAL_MS / 6e4} minutes`);
}
var CYCLE_INTERVAL_MS, intervalHandle, isPaused, isRunning, lastCycleAt, lastCycleError, cycleCount;
var init_ai_assistant = __esm({
  "server/services/ai-assistant/index.ts"() {
    "use strict";
    init_monitor();
    init_logger();
    CYCLE_INTERVAL_MS = 5 * 60 * 1e3;
    intervalHandle = null;
    isPaused = false;
    isRunning = false;
    lastCycleAt = null;
    lastCycleError = null;
    cycleCount = 0;
  }
});

// server/index.ts
import express from "express";

// server/routes.ts
import { createServer } from "node:http";

// server/websocket.ts
import { WebSocketServer, WebSocket } from "ws";
var clients = /* @__PURE__ */ new Set();
var wss;
function setupWebSocket(server) {
  wss = new WebSocketServer({ server, path: "/ws" });
  wss.on("connection", (ws) => {
    clients.add(ws);
    console.log(`[WS] Client connected (total: ${clients.size})`);
    ws.on("close", () => {
      clients.delete(ws);
      console.log(`[WS] Client disconnected (total: ${clients.size})`);
    });
    ws.on("error", (err) => {
      console.error("[WS] Error:", err.message);
      clients.delete(ws);
    });
    ws.send(JSON.stringify({ type: "connected", timestamp: (/* @__PURE__ */ new Date()).toISOString() }));
  });
  console.log("[WS] WebSocket server ready on /ws");
}
function broadcast(event) {
  const message = JSON.stringify({ ...event, timestamp: (/* @__PURE__ */ new Date()).toISOString() });
  let sent = 0;
  clients.forEach((client2) => {
    if (client2.readyState === WebSocket.OPEN) {
      client2.send(message);
      sent++;
    }
  });
  if (sent > 0) {
    console.log(`[WS] Broadcast ${event.type}:${event.entity} to ${sent} clients`);
  }
}
function getConnectedClientsCount() {
  return clients.size;
}

// server/routes.ts
init_db();
init_schema();

// shared/payPeriods2026.ts
var PAY_PERIODS_2026 = [
  { year: 2026, periodNumber: 1, startDate: "2025-12-27", endDate: "2026-01-09", label: "Period 1 (Dec 27 - Jan 9)" },
  { year: 2026, periodNumber: 2, startDate: "2026-01-10", endDate: "2026-01-23", label: "Period 2 (Jan 10 - Jan 23)" },
  { year: 2026, periodNumber: 3, startDate: "2026-01-24", endDate: "2026-02-06", label: "Period 3 (Jan 24 - Feb 6)" },
  { year: 2026, periodNumber: 4, startDate: "2026-02-07", endDate: "2026-02-20", label: "Period 4 (Feb 7 - Feb 20)" },
  { year: 2026, periodNumber: 5, startDate: "2026-02-21", endDate: "2026-03-06", label: "Period 5 (Feb 21 - Mar 6)" },
  { year: 2026, periodNumber: 6, startDate: "2026-03-07", endDate: "2026-03-20", label: "Period 6 (Mar 7 - Mar 20)" },
  { year: 2026, periodNumber: 7, startDate: "2026-03-21", endDate: "2026-04-03", label: "Period 7 (Mar 21 - Apr 3)" },
  { year: 2026, periodNumber: 8, startDate: "2026-04-04", endDate: "2026-04-17", label: "Period 8 (Apr 4 - Apr 17)" },
  { year: 2026, periodNumber: 9, startDate: "2026-04-18", endDate: "2026-05-01", label: "Period 9 (Apr 18 - May 1)" },
  { year: 2026, periodNumber: 10, startDate: "2026-05-02", endDate: "2026-05-15", label: "Period 10 (May 2 - May 15)" },
  { year: 2026, periodNumber: 11, startDate: "2026-05-16", endDate: "2026-05-29", label: "Period 11 (May 16 - May 29)" },
  { year: 2026, periodNumber: 12, startDate: "2026-05-30", endDate: "2026-06-12", label: "Period 12 (May 30 - Jun 12)" },
  { year: 2026, periodNumber: 13, startDate: "2026-06-13", endDate: "2026-06-26", label: "Period 13 (Jun 13 - Jun 26)" },
  { year: 2026, periodNumber: 14, startDate: "2026-06-27", endDate: "2026-07-10", label: "Period 14 (Jun 27 - Jul 10)" },
  { year: 2026, periodNumber: 15, startDate: "2026-07-11", endDate: "2026-07-24", label: "Period 15 (Jul 11 - Jul 24)" },
  { year: 2026, periodNumber: 16, startDate: "2026-07-25", endDate: "2026-08-07", label: "Period 16 (Jul 25 - Aug 7)" },
  { year: 2026, periodNumber: 17, startDate: "2026-08-08", endDate: "2026-08-21", label: "Period 17 (Aug 8 - Aug 21)" },
  { year: 2026, periodNumber: 18, startDate: "2026-08-22", endDate: "2026-09-04", label: "Period 18 (Aug 22 - Sep 4)" },
  { year: 2026, periodNumber: 19, startDate: "2026-09-05", endDate: "2026-09-18", label: "Period 19 (Sep 5 - Sep 18)" },
  { year: 2026, periodNumber: 20, startDate: "2026-09-19", endDate: "2026-10-02", label: "Period 20 (Sep 19 - Oct 2)" },
  { year: 2026, periodNumber: 21, startDate: "2026-10-03", endDate: "2026-10-16", label: "Period 21 (Oct 3 - Oct 16)" },
  { year: 2026, periodNumber: 22, startDate: "2026-10-17", endDate: "2026-10-30", label: "Period 22 (Oct 17 - Oct 30)" },
  { year: 2026, periodNumber: 23, startDate: "2026-10-31", endDate: "2026-11-13", label: "Period 23 (Oct 31 - Nov 13)" },
  { year: 2026, periodNumber: 24, startDate: "2026-11-14", endDate: "2026-11-27", label: "Period 24 (Nov 14 - Nov 27)" },
  { year: 2026, periodNumber: 25, startDate: "2026-11-28", endDate: "2026-12-11", label: "Period 25 (Nov 28 - Dec 11)" },
  { year: 2026, periodNumber: 26, startDate: "2026-12-12", endDate: "2026-12-25", label: "Period 26 (Dec 12 - Dec 25)" }
];
function getPayPeriodsForYear(year) {
  if (year === 2026) {
    return PAY_PERIODS_2026;
  }
  return [];
}
function getPayPeriod(year, periodNumber) {
  const periods = getPayPeriodsForYear(year);
  return periods.find((p) => p.periodNumber === periodNumber);
}
function getCurrentPayPeriod(date2 = /* @__PURE__ */ new Date()) {
  const dateStr = date2.toISOString().slice(0, 10);
  const year = date2.getFullYear();
  const yearsToCheck = [year, year + 1];
  for (const y of yearsToCheck) {
    const periods = getPayPeriodsForYear(y);
    for (const period of periods) {
      if (dateStr >= period.startDate && dateStr <= period.endDate) {
        return period;
      }
    }
  }
  return void 0;
}

// server/routes.ts
init_openphone();
init_email();
import bcrypt from "bcryptjs";
import * as OTPAuth from "otpauth";
import crypto2 from "crypto";
import { eq as eq16, and as and13, or as or2, desc as desc6, isNull as isNull8, sql as sql13, inArray as inArray5, ne as ne5, gte as gte10, lte as lte10, not, asc } from "drizzle-orm";

// server/services/clawd/index.ts
init_orchestrator();

// server/routes.ts
init_schema();
init_discord();

// server/services/clawd/auto-responder.ts
init_anthropic_client();
init_tools();
init_discord();
init_openphone();
init_db();
init_schema();
import { eq as eq13 } from "drizzle-orm";
var GM_LILEE_PHONE3 = "+14166028038";
function buildSickCallPrompt(senderMatched) {
  const unknownInstructions = senderMatched ? "" : `
## IMPORTANT: UNMATCHED SENDER \u2014 FAIL-OPEN RULES
The sender's phone number is NOT in the system. Do NOT skip or fail.

Follow these steps IMMEDIATELY for unmatched senders:
1. Call notify_gm_lilee with:
   "POSSIBLE CALLOFF from unmatched number [phone]. Message: '[full message]'. Worker may be using personal/alternate number. Manual identification required."
2. Call send_discord_notification with urgency="urgent":
   Title: "Possible Calloff \u2014 Unmatched Sender"
   Message: "\u{1F534} POSSIBLE CALLOFF\\nSender: Unmatched number [phone]\\nWorker mentioned: [name if any in message, else 'unknown']\\nReason: [extracted from message]\\nMessage: \\"[full message]\\"\\nAction: Manual review needed \u2014 worker not in system"
3. Then try find_available_workers at any relevant workplace as a precaution
   - If a workplace is mentioned in the message, look it up first
   - If no workplace, use lookup_workplaces to list options and pick the most likely
4. DO NOT call lookup_shifts \u2014 the worker isn't in the system, no shifts to find

Do NOT return "unknown sender, cannot process". Always alert and act.`;
  return `You are Clawd, the WFConnect AI operations assistant. An inbound SMS has been classified as a staff absence or sick call.

Your job is to respond automatically. Always complete ALL applicable steps.${unknownInstructions}

## For KNOWN workers (Worker ID provided):
1. Use lookup_shifts to find this worker's upcoming shifts today AND tomorrow
2. Use find_available_workers to find replacements at the same workplace(s)
3. Use send_sms to text each available worker (limit 5) asking if they can cover
4. Use notify_gm_lilee with a clear summary:
   "CALLOFF: [worker name] ([phone]) called in sick for shift at [workplace] on [date] at [time]. [N] replacement workers contacted."
5. Use send_discord_notification with urgency="urgent":
   Title: "Staff Calloff \u2014 [Worker Name]"
   Message: "\u{1F534} STAFF CALLOFF\\nWorker: [name] ([phone])\\nShift: [date, time, workplace]\\nReason: [extracted or 'not specified']\\nMessage: \\"[original SMS]\\"\\nActions: Notified Lilee \xB7 Texted [N] replacement workers"

## Worker SMS template:
"Hi [name], [sick worker] is unable to make their shift at [workplace] on [date] at [time]. Are you available to cover? Reply ACCEPT SHIFT to confirm. - WFConnect"

## Response format to admin:
After completing all steps, summarize:
- Worker name and shift details found (or not found)
- Number of replacement workers contacted
- Whether GM Lilee and Discord were notified

Today's date (Toronto): ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-CA", { timeZone: "America/Toronto" })}
Current time (Toronto): ${(/* @__PURE__ */ new Date()).toLocaleTimeString("en-CA", { timeZone: "America/Toronto" })}`;
}
function buildClientRequestPrompt(senderMatched, classification) {
  const extractedContext = [
    classification.role_requested ? `Role requested: ${classification.role_requested}` : null,
    classification.quantity_requested ? `Quantity: ${classification.quantity_requested}` : null,
    classification.worker_name_mentioned ? `Specific worker requested: ${classification.worker_name_mentioned}` : null,
    classification.shift_date ? `Date: ${classification.shift_date}` : null,
    classification.shift_time ? `Time: ${classification.shift_time}` : null,
    classification.workplace_mentioned ? `Workplace mentioned: ${classification.workplace_mentioned}` : null
  ].filter(Boolean).join("\n");
  const unknownInstructions = senderMatched ? "" : `
## IMPORTANT: UNMATCHED SENDER \u2014 FAIL-OPEN RULES
The client's phone number is NOT in the system. Do NOT fail \u2014 still process as a valid request.

Steps for unmatched senders:
1. Call notify_gm_lilee:
   "CLIENT REQUEST from unmatched number [phone]: [qty] [role] requested on [date]. Message: '[full message]'. Manual assignment and client identification needed."
2. Call send_discord_notification with urgency="warning":
   Title: "Client Staffing Request \u2014 Unmatched Sender"
   Message: "\u{1F7E1} CLIENT REQUEST\\nSender: Unmatched number [phone]\\nRequest: [qty] [role] on [date] [time if any]\\nWorkplace: [if mentioned, else 'not confirmed']\\n[If specific worker named]: Requested worker: [name]\\nOriginal: \\"[full message]\\"\\nAction: Review & assign coverage \u2014 client not in system"
3. If a specific worker name is mentioned, use lookup_workers to try to find them
4. Use find_available_workers at the most likely workplace
5. DO NOT stop because the sender is unknown`;
  return `You are Clawd, the WFConnect AI operations assistant. An inbound SMS has been classified as a client staffing request.

## Pre-extracted entities from the message:
${extractedContext || "No entities extracted \u2014 use message content"}

Your job is to respond automatically. Always complete ALL applicable steps.${unknownInstructions}

## For known clients:
1. Use lookup_workplaces to identify the client's workplace (by phone match or name in message)
2. If a specific worker was requested by name, use lookup_workers to find them
3. Use find_available_workers at the relevant workplace for the requested date
4. Use send_sms to contact available workers about the opportunity (limit 5)
5. Use notify_gm_lilee with summary:
   "CLIENT REQUEST: [workplace/phone] needs [qty] [role] on [date]. [N] workers contacted."
6. Use send_discord_notification with urgency="warning":
   Title: "Client Staffing Request \u2014 [Workplace or phone]"
   Message with: quantity, role, date, time, specific worker if requested, workers contacted

## Worker SMS template:
"Hi [name], a client at [workplace] needs [role] coverage on [date] at [time]. Are you available? Reply ACCEPT SHIFT to confirm. - WFConnect"

## Response format:
Summarize: workplace found/not found, role and quantity, workers contacted, alerts sent.

Today's date (Toronto): ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-CA", { timeZone: "America/Toronto" })}
Current time (Toronto): ${(/* @__PURE__ */ new Date()).toLocaleTimeString("en-CA", { timeZone: "America/Toronto" })}`;
}
async function handleSickCall(params) {
  const senderMatched = params.senderMatched ?? !!params.workerId;
  console.log(
    `[AutoResponder] Sick call from ${params.workerName} (${params.workerPhone}) \u2014 matched=${senderMatched}`
  );
  const userMessage = `Staff absence SMS received:
- Worker: ${params.workerName}
- Phone: ${params.workerPhone}
- Worker ID: ${params.workerId || "NOT IN SYSTEM \u2014 unmatched sender"}
- Sender matched: ${senderMatched}
- Message: "${params.smsMessage}"
- Received: ${(/* @__PURE__ */ new Date()).toLocaleString("en-CA", { timeZone: "America/Toronto" })}
${params.classification?.reason ? `- Reason extracted: ${params.classification.reason}` : ""}
${params.classification?.shift_date ? `- Date mentioned: ${params.classification.shift_date}` : ""}

Please handle this ${senderMatched ? "sick call" : "possible calloff"} now. Follow ALL steps in your instructions.`;
  try {
    const { finalResponse, toolCalls } = await callClaudeWithTools(
      buildSickCallPrompt(senderMatched),
      [{ role: "user", content: userMessage }],
      CLAWD_TOOLS,
      (toolName, input) => executeTool(toolName, input, void 0),
      { maxTokens: 2048 }
    );
    const actionsSummary = toolCalls.filter((tc) => tc.success).map((tc) => `${tc.toolName}`).join(", ");
    console.log(`[AutoResponder] Sick call handled. Tools: ${actionsSummary}`);
    const discordCall = toolCalls.find((tc) => tc.toolName === "send_discord_notification" && tc.success);
    if (discordCall) {
      const alertId = discordCall.result?.alertId;
      if (alertId) {
        await db.update(discordAlerts).set({ actionsTaken: actionsSummary }).where(eq13(discordAlerts.alertId, alertId));
      }
    }
    return { success: true, toolCalls, summary: finalResponse };
  } catch (err) {
    console.error("[AutoResponder] Sick call handling failed:", err?.message);
    try {
      const label = senderMatched ? params.workerName : `Unmatched number ${params.workerPhone}`;
      const fallbackSms = `[WFConnect] ${senderMatched ? "CALLOFF" : "POSSIBLE CALLOFF"}: ${label} \u2014 "${params.smsMessage.slice(0, 120)}". Auto-response failed \u2014 handle manually.`;
      await sendSMS(GM_LILEE_PHONE3, fallbackSms);
      await logSMS({ phoneNumber: GM_LILEE_PHONE3, direction: "outbound", message: fallbackSms, status: "sent" });
      await sendDiscordNotification({
        title: senderMatched ? "Sick Call (Manual Action Required)" : "Possible Calloff \u2014 Unmatched Sender",
        message: `${senderMatched ? "\u{1F534}" : "\u{1F7E0}"} ${label} reported an absence.
"${params.smsMessage}"

Auto-response failed \u2014 handle manually.`,
        color: "red",
        type: "sick_call",
        sourcePhone: params.workerPhone,
        sourceWorkerId: params.workerId || void 0,
        workerId: params.workerId || void 0
      });
    } catch (fe) {
      console.error("[AutoResponder] Fallback notification failed:", fe?.message);
    }
    return { success: false, error: err?.message };
  }
}
async function handleClientRequest(params) {
  const senderMatched = params.senderMatched ?? false;
  console.log(
    `[AutoResponder] Client request from ${params.phoneNumber} \u2014 matched=${senderMatched}`
  );
  const classif = params.classification || {};
  const userMessage = `Client staffing request SMS received:
- From phone: ${params.phoneNumber}
- Sender matched to client record: ${senderMatched}
- Message: "${params.smsMessage}"
- Received: ${(/* @__PURE__ */ new Date()).toLocaleString("en-CA", { timeZone: "America/Toronto" })}
${classif.role_requested ? `- Role requested: ${classif.role_requested}` : ""}
${classif.quantity_requested ? `- Quantity: ${classif.quantity_requested}` : ""}
${classif.worker_name_mentioned ? `- Specific worker named: ${classif.worker_name_mentioned}` : ""}
${classif.shift_date ? `- Date: ${classif.shift_date}` : ""}
${classif.shift_time ? `- Time: ${classif.shift_time}` : ""}
${classif.workplace_mentioned ? `- Workplace mentioned: ${classif.workplace_mentioned}` : ""}
${params.knownWorkplaceId ? `- Known workplace ID: ${params.knownWorkplaceId}` : ""}

Please handle this staffing request now. Follow ALL steps in your instructions.`;
  try {
    const { finalResponse, toolCalls } = await callClaudeWithTools(
      buildClientRequestPrompt(senderMatched, classif),
      [{ role: "user", content: userMessage }],
      CLAWD_TOOLS,
      (toolName, input) => executeTool(toolName, input, void 0),
      { maxTokens: 2048 }
    );
    console.log(`[AutoResponder] Client request handled. Tools: ${toolCalls.map((tc) => tc.toolName).join(", ")}`);
    return { success: true, toolCalls, summary: finalResponse };
  } catch (err) {
    console.error("[AutoResponder] Client request handling failed:", err?.message);
    try {
      const fallbackSms = `[WFConnect] CLIENT REQUEST from ${params.phoneNumber}: "${params.smsMessage.slice(0, 120)}". Auto-response failed \u2014 handle manually.`;
      await sendSMS(GM_LILEE_PHONE3, fallbackSms);
      await logSMS({ phoneNumber: GM_LILEE_PHONE3, direction: "outbound", message: fallbackSms, status: "sent" });
      await sendDiscordNotification({
        title: `Client Request${senderMatched ? "" : " \u2014 Unmatched Sender"} (Manual Action Required)`,
        message: `\u{1F7E1} CLIENT REQUEST
Phone: ${params.phoneNumber}
${senderMatched ? "" : "\u26A0\uFE0F Sender not in system\n"}Message: "${params.smsMessage}"

Auto-response failed \u2014 handle manually.`,
        color: "amber",
        type: "client_request",
        sourcePhone: params.phoneNumber
      });
    } catch (fe) {
      console.error("[AutoResponder] Fallback notification failed:", fe?.message);
    }
    return { success: false, error: err?.message };
  }
}
async function handleLateArrival(params) {
  console.log(`[AutoResponder] Late arrival from ${params.workerName} (${params.workerPhone})`);
  const senderMatched = !!params.workerId;
  const userMessage = `Late arrival SMS received:
- Worker: ${params.workerName}
- Phone: ${params.workerPhone}
- Worker ID: ${params.workerId || "NOT IN SYSTEM"}
- Message: "${params.smsMessage}"
- Received: ${(/* @__PURE__ */ new Date()).toLocaleString("en-CA", { timeZone: "America/Toronto" })}
${params.classification?.shift_date ? `- Date: ${params.classification.shift_date}` : ""}

Please handle this late arrival:
1. Use notify_gm_lilee: "LATE ARRIVAL: [worker name] ([phone]) will be late. Message: '[SMS]'"
2. Use send_discord_notification with urgency="warning":
   Title: "Late Arrival \u2014 [Worker Name]"
   Message: "\u{1F7E1} LATE ARRIVAL
Worker: [name] ([phone])
Message: \\"[full SMS]\\"
Action: Monitoring \u2014 may need coverage if significantly late"
3. If worker found: use lookup_shifts to find today's shift details for context
4. Do NOT proactively text replacements unless shift is more than 1 hour away`;
  try {
    const { finalResponse, toolCalls } = await callClaudeWithTools(
      `You are Clawd, the WFConnect AI operations assistant. A worker is running late for their shift.

Today's date (Toronto): ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-CA", { timeZone: "America/Toronto" })}
Current time (Toronto): ${(/* @__PURE__ */ new Date()).toLocaleTimeString("en-CA", { timeZone: "America/Toronto" })}`,
      [{ role: "user", content: userMessage }],
      CLAWD_TOOLS,
      (toolName, input) => executeTool(toolName, input, void 0),
      { maxTokens: 1024 }
    );
    console.log(`[AutoResponder] Late arrival handled. Tools: ${toolCalls.map((tc) => tc.toolName).join(", ")}`);
    return { success: true, toolCalls, summary: finalResponse };
  } catch (err) {
    console.error("[AutoResponder] Late arrival handling failed:", err?.message);
    try {
      const fallbackMsg = `[WFConnect] LATE: ${params.workerName} (${params.workerPhone}): "${params.smsMessage.slice(0, 100)}"`;
      await sendSMS(GM_LILEE_PHONE3, fallbackMsg);
      await logSMS({ phoneNumber: GM_LILEE_PHONE3, direction: "outbound", message: fallbackMsg, status: "sent" });
    } catch {
    }
    return { success: false, error: err?.message };
  }
}

// server/services/clawd/sms-classifier.ts
var STAFF_ABSENCE_PATTERNS = [
  /\b(sick|unwell|not feeling (well|good|great|okay|ok))\b/i,
  /\b(can't|cannot|won't|will not)\s+(make it|come|attend|be there|come in|work|go)\b/i,
  /\b(calling in|call.*off|call.*sick|called in)\b/i,
  /\b(not coming|won't be coming|unable to (come|attend|make|work))\b/i,
  /\b(family emergency|personal emergency)\b/i,
  /\b(doctor|hospital|clinic|er\b|emergency room)\b/i,
  /\b(i'?m sick|i am sick|feeling sick|feeling ill|not well)\b/i,
  /\bi can'?t\s+(work|make|come|attend|go|be there)\b/i,
  /\b(won't be (able|in|at|there|coming))\b/i,
  /\b(have to\s+(miss|skip|cancel))\b/i,
  /\b(throwing up|vomiting|fever|flu|cold|migraine)\b/i,
  /\b(not going to (make it|be there|come))\b/i,
  /\bmy shift\b.*\b(can't|cannot|won't|won't be)\b/i,
  /\b(sorry|apologies).*\b(can't|cannot|won't|not (coming|making))\b/i
];
var LATE_ARRIVAL_PATTERNS = [
  /\brunning (a bit |little |very |super )?late\b/i,
  /\b(will be|going to be|gonna be|i'?m)\s+late\b/i,
  /\b(be there|arrive|coming|get there)\s+(in|at|around|by)\s+\d+/i,
  /\bdelayed\b/i,
  /\b(few|a couple|[\d]+)\s+minutes?\s+(late|behind|delayed)\b/i,
  /\b(traffic|subway|bus|transit|ttc|train|streetcar)\b.{0,40}\b(late|delay|slow|stuck|held)\b/i,
  /\b(stuck|held up|held back|running behind)\b/i,
  /\b([\d]+)\s*min(utes?)?\s+(behind|late)\b/i
];
var EMERGENCY_PATTERNS = [
  /\b(no.?show|noshow)\b/i,
  /\b(accident|injury|hurt|injured|in the hospital)\b/i,
  /\bnot going to make it (at all|today|tonight)\b/i,
  /\b(major emergency|urgent|asap)\b.*\b(shift|work|today|tonight)\b/i
];
var CLIENT_REQUEST_PATTERNS = [
  /\bcan i have\b/i,
  /\bcan you (have|send|get|spare|provide)\b/i,
  /\bi('d like| would like| need| want| require)\s+(\d+\s+)?(hk\b|housekeep\w*|server\b|bartender\b|cleaner\b|staff\b|worker\b|help\b|coverage\b|someone\b)/i,
  /\bneed\s+(\d+\s+)?(hk\b|housekeep\w*|server\b|bartender\b|cleaner\b|staff\b|worker\b|help\b|coverage\b|more\s+(staff|people|workers))/i,
  /\b(short staffed|need coverage|need someone)\b/i,
  /\bdo you have (someone|anyone|a worker|an extra|available)\b/i,
  /\bcan (someone|anyone) cover\b/i,
  /\b(extra (staff|worker|help|person|people))\b/i,
  /\b(send me|send over|send a|send an)\s+[a-z]/i,
  /\bavailable (for tomorrow|for tonight|tomorrow morning|tonight|for the shift)\b/i,
  /\bcoverage for\b/i,
  /\bcan i request\b/i,
  /\b(need|want|like)\s+(a|an|one|two|three|\d+)\s+(housekeeper|cleaner|server|bartender|worker|staff member|person)\b/i,
  /\bstaff for (tomorrow|tonight|today|monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/i,
  /\bworker for (tomorrow|tonight|today|monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/i,
  /\b(requesting|request)\s+(staff|coverage|worker|a worker|a person)\b/i
];
var ROLE_MAP = {
  hk: "housekeeping",
  housekeeper: "housekeeping",
  housekeep: "housekeeping",
  housekeeping: "housekeeping",
  cleaner: "housekeeping",
  cleaning: "housekeeping",
  server: "server",
  serving: "server",
  waitress: "server",
  waiter: "server",
  bartender: "bartender",
  "bar staff": "bartender",
  fb: "food & beverage",
  "f&b": "food & beverage",
  "food & beverage": "food & beverage",
  "food and beverage": "food & beverage",
  banquet: "banquet",
  security: "security",
  guard: "security",
  maintenance: "maintenance",
  porter: "porter",
  bellman: "porter",
  concierge: "concierge"
};
var WORD_TO_NUM = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  a: 1,
  an: 1
};
function extractQuantity(text2) {
  const m1 = text2.match(/\b(\d+)\s+(hk|housekeep|server|bartender|cleaner|staff|worker|person|people|more)\b/i);
  if (m1) return parseInt(m1[1]);
  const m2 = text2.match(/\b(one|two|three|four|five|six|seven|eight|nine|ten)\s+(hk|housekeep|server|bartender|cleaner|staff|worker|person|people)\b/i);
  if (m2) return WORD_TO_NUM[m2[1].toLowerCase()] || null;
  const m3 = text2.match(/\b(a|an)\s+(hk|housekeep|server|bartender|cleaner|staff|worker)\b/i);
  if (m3) return 1;
  return null;
}
function extractRole(text2) {
  const lower = text2.toLowerCase();
  for (const [keyword, role] of Object.entries(ROLE_MAP)) {
    if (lower.includes(keyword)) return role;
  }
  return null;
}
function extractDate(text2) {
  const torontoNow = new Date((/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: "America/Toronto" }));
  if (/\b(today|tonight|right now|this morning|this afternoon|this evening)\b/i.test(text2)) {
    return torontoNow.toISOString().split("T")[0];
  }
  if (/\btomorrow\b/i.test(text2)) {
    const d = new Date(torontoNow);
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const lower = text2.toLowerCase();
  for (let i = 0; i < days.length; i++) {
    if (lower.includes(days[i])) {
      const d = new Date(torontoNow);
      const diff = (i - d.getDay() + 7) % 7 || 7;
      d.setDate(d.getDate() + diff);
      return d.toISOString().split("T")[0];
    }
  }
  const explicit = text2.match(/\b(\d{1,2})[\/\-](\d{1,2})\b/);
  if (explicit) {
    const year = torontoNow.getFullYear();
    return `${year}-${String(parseInt(explicit[1])).padStart(2, "0")}-${String(parseInt(explicit[2])).padStart(2, "0")}`;
  }
  return null;
}
function extractTime(text2) {
  const range = text2.match(/(\d{1,2}(?::\d{2})?\s*(?:am|pm)?)\s*(?:-|to|–|until)\s*(\d{1,2}(?::\d{2})?\s*(?:am|pm)?)/i);
  if (range) return `${range[1].trim()}-${range[2].trim()}`;
  const single = text2.match(/\b(\d{1,2}:\d{2}\s*(?:am|pm)?|\d{1,2}\s*(?:am|pm))\b/i);
  if (single) return single[1].trim();
  return null;
}
function extractWorkerName(text2) {
  const SKIP_WORDS = /* @__PURE__ */ new Set([
    "a",
    "an",
    "the",
    "my",
    "our",
    "your",
    "some",
    "staff",
    "worker",
    "help",
    "coverage",
    "someone",
    "anyone",
    "person",
    "people",
    "more",
    "extra",
    "available",
    "please",
    "tomorrow",
    "today",
    "tonight",
    "morning",
    "afternoon",
    "evening"
  ]);
  const patterns = [
    /\bcan i have\s+([a-z]{3,}(?:\s+[a-z]{2,})?)\b/i,
    /\brequest\s+([a-z]{3,}(?:\s+[a-z]{2,})?)\s+(for|tomorrow|tonight|today)/i,
    /\bi need\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)\b/,
    /\bi('d like| would like)\s+([a-z]{3,}(?:\s+[a-z]{2,})?)\s+(for|tomorrow|tonight|today)/i,
    /\bfor\s+([A-Z][a-z]{2,}(?:\s+[A-Z][a-z]{2,})?)\b/
  ];
  for (const p of patterns) {
    const m = text2.match(p);
    if (m) {
      const candidates = [m[2], m[1]].filter(Boolean);
      for (const c of candidates) {
        const name = c.trim();
        if (name && !SKIP_WORDS.has(name.toLowerCase()) && name.length > 2) {
          return name;
        }
      }
    }
  }
  return null;
}
function extractWorkplace(text2) {
  const known = [
    "hyatt place",
    "hyatt",
    "hilton",
    "marriott",
    "sheraton",
    "westin",
    "holiday inn",
    "best western",
    "four points",
    "hampton inn",
    "courtyard",
    "doubletree",
    "residence inn",
    "delta hotels",
    "fairmont",
    "crowne plaza",
    "radisson",
    "novotel",
    "ibis",
    "quality inn",
    "comfort inn"
  ];
  const lower = text2.toLowerCase();
  for (const place of known) {
    if (lower.includes(place)) {
      return place.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    }
  }
  return null;
}
function extractReason(text2) {
  const direct = text2.match(
    /\b(sick|unwell|flu|fever|cold|stomach|vomiting|injury|accident|family emergency|personal emergency|doctor|hospital|migraine|covid|quarantine)\b/i
  );
  if (direct) return direct[1].toLowerCase();
  const because = text2.match(/(?:because|due to|since|as)\s+(.{5,60?})(?:\.|,|$)/i);
  if (because) return because[1].trim();
  return null;
}
function classifySms(messageBody) {
  const absenceHits = STAFF_ABSENCE_PATTERNS.filter((p) => p.test(messageBody)).length;
  const lateHits = LATE_ARRIVAL_PATTERNS.filter((p) => p.test(messageBody)).length;
  const emergencyHits = EMERGENCY_PATTERNS.filter((p) => p.test(messageBody)).length;
  const clientHits = CLIENT_REQUEST_PATTERNS.filter((p) => p.test(messageBody)).length;
  let intent = "general_inquiry";
  let confidence = "low";
  let urgency = "low";
  if (emergencyHits >= 1 && absenceHits >= 1) {
    intent = "emergency";
    confidence = "high";
    urgency = "critical";
  } else if (absenceHits >= 2) {
    intent = "staff_absence";
    confidence = "high";
    urgency = "critical";
  } else if (absenceHits === 1) {
    intent = "staff_absence";
    confidence = "moderate";
    urgency = "high";
  } else if (lateHits >= 1) {
    intent = "late_arrival";
    confidence = lateHits >= 2 ? "high" : "moderate";
    urgency = "high";
  } else if (clientHits >= 2) {
    intent = "client_request";
    confidence = "high";
    urgency = "high";
  } else if (clientHits === 1) {
    intent = "client_request";
    confidence = "moderate";
    urgency = "medium";
  } else {
    const generalStaffing = /\b(shift|work|staff|worker|schedule|cover|replace|available|roster|deployment)\b/i;
    if (generalStaffing.test(messageBody)) {
      intent = "unknown_staffing";
      confidence = "low";
      urgency = "medium";
    }
  }
  const isStaffingRelated = intent !== "general_inquiry";
  return {
    intent,
    confidence,
    urgency,
    worker_name_mentioned: extractWorkerName(messageBody),
    workplace_mentioned: extractWorkplace(messageBody),
    role_requested: extractRole(messageBody),
    quantity_requested: extractQuantity(messageBody),
    shift_date: extractDate(messageBody),
    shift_time: extractTime(messageBody),
    reason: extractReason(messageBody),
    raw_message: messageBody,
    is_staffing_related: isStaffingRelated
  };
}

// server/routes.ts
init_aiFollowupService();
function haversineDistance(lat1, lng1, lat2, lng2) {
  const R = 6371e3;
  const phi1 = lat1 * Math.PI / 180;
  const phi2 = lat2 * Math.PI / 180;
  const deltaPhi = (lat2 - lat1) * Math.PI / 180;
  const deltaLambda = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
async function sendPushNotifications(userIds, title, body, data) {
  try {
    const tokens = await db.select({ token: pushTokens.token }).from(pushTokens).where(and13(
      inArray5(pushTokens.userId, userIds),
      eq16(pushTokens.isActive, true)
    ));
    if (tokens.length === 0) return;
    const messages3 = tokens.map((t) => ({
      to: t.token,
      sound: "default",
      title,
      body,
      data: data || {}
    }));
    const chunks = [];
    for (let i = 0; i < messages3.length; i += 100) {
      chunks.push(messages3.slice(i, i + 100));
    }
    let pushSucceeded = 0;
    let pushFailed = 0;
    for (const chunk of chunks) {
      try {
        const pushRes = await fetch("https://exp.host/--/api/v2/push/send", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(chunk)
        });
        const pushResult = await pushRes.json();
        if (pushResult?.data) {
          for (const ticket of pushResult.data) {
            if (ticket.status === "ok") pushSucceeded++;
            else pushFailed++;
          }
        }
      } catch (err) {
        pushFailed += chunk.length;
        console.error("[PUSH] Notification error:", err);
      }
    }
    console.log(`[PUSH] Sent to ${userIds.length} users: ${pushSucceeded} succeeded, ${pushFailed} failed, ${tokens.length} tokens found`);
  } catch (error) {
    console.error("Failed to send push notifications:", error);
  }
}
var rateLimitMap = /* @__PURE__ */ new Map();
var RATE_LIMIT_WINDOW = 6e4;
var RATE_LIMIT_MAX = 5;
var titoRateLimitMap = /* @__PURE__ */ new Map();
var TITO_RATE_LIMIT_WINDOW = 6e4;
var TITO_RATE_LIMIT_MAX = 10;
function checkTitoRateLimit(userId) {
  const now = Date.now();
  const entry = titoRateLimitMap.get(userId);
  if (!entry || now > entry.resetTime) {
    titoRateLimitMap.set(userId, { count: 1, resetTime: now + TITO_RATE_LIMIT_WINDOW });
    return true;
  }
  if (entry.count >= TITO_RATE_LIMIT_MAX) {
    return false;
  }
  entry.count++;
  return true;
}
function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") {
    return forwarded.split(",")[0].trim();
  }
  return req.socket?.remoteAddress || "unknown";
}
function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }
  entry.count++;
  return true;
}
function checkRoles(...allowedRoles) {
  return (req, res, next) => {
    let role = req.headers["x-user-role"];
    let userId = req.headers["x-user-id"];
    if (!role || !userId) {
      const session = parseSessionCookie(req);
      if (session) {
        role = session.role;
        userId = session.userId;
        req.headers["x-user-role"] = role;
        req.headers["x-user-id"] = userId;
      }
    }
    if (!role || !allowedRoles.includes(role)) {
      console.log(`[AUTH REJECTED] ${req.method} ${req.path} - role="${role || "MISSING"}" userId="${userId || "MISSING"}" allowed=[${allowedRoles.join(",")}]`);
      res.status(403).json({ error: "Forbidden: Insufficient permissions" });
      return;
    }
    next();
  };
}
function expandSeriesOccurrences(series, exceptions, rangeStart, rangeEnd) {
  const occurrences = [];
  const startDate = new Date(Math.max(new Date(series.startDate).getTime(), new Date(rangeStart).getTime()));
  let endDate;
  if (series.endType === "date" && series.endDate) {
    endDate = new Date(Math.min(new Date(series.endDate).getTime(), new Date(rangeEnd).getTime()));
  } else {
    endDate = new Date(rangeEnd);
  }
  const days = series.recurringDays ? series.recurringDays.split(",") : [];
  const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const dayNums = days.map((d) => dayMap[d]).filter((n) => n !== void 0);
  const exceptionMap = /* @__PURE__ */ new Map();
  exceptions.forEach((ex) => exceptionMap.set(ex.date, ex));
  const current = new Date(startDate);
  let count7 = 0;
  const maxCount = series.endType === "count" ? series.endAfterCount || 999 : 999;
  while (current <= endDate && count7 < maxCount) {
    const dateStr = current.toISOString().split("T")[0];
    let include = false;
    if (series.frequency === "daily") {
      include = true;
    } else if (series.frequency === "weekly" || series.frequency === "biweekly") {
      include = dayNums.includes(current.getDay());
      if (series.frequency === "biweekly" && include) {
        const weeksSinceStart = Math.floor((current.getTime() - new Date(series.startDate).getTime()) / (7 * 24 * 60 * 60 * 1e3));
        include = weeksSinceStart % 2 === 0;
      }
    } else if (series.frequency === "monthly") {
      include = current.getDate() === new Date(series.startDate).getDate();
    }
    if (include && current >= new Date(series.startDate)) {
      const exception = exceptionMap.get(dateStr);
      if (exception && exception.type === "cancelled") {
        occurrences.push({
          seriesId: series.id,
          date: dateStr,
          startTime: series.startTime,
          endTime: series.endTime,
          status: "cancelled",
          isException: true,
          exceptionType: "cancelled",
          reason: exception.reason
        });
      } else if (exception && exception.type === "modified") {
        occurrences.push({
          seriesId: series.id,
          date: dateStr,
          startTime: exception.overrideStartTime || series.startTime,
          endTime: exception.overrideEndTime || series.endTime,
          workerUserId: exception.overrideWorkerUserId || series.workerUserId,
          notes: exception.overrideNotes || series.notes,
          status: "scheduled",
          isException: true,
          exceptionType: "modified"
        });
      } else {
        occurrences.push({
          seriesId: series.id,
          date: dateStr,
          startTime: series.startTime,
          endTime: series.endTime,
          workerUserId: series.workerUserId,
          notes: series.notes,
          status: "scheduled",
          isException: false
        });
      }
      count7++;
    }
    current.setDate(current.getDate() + 1);
  }
  return occurrences;
}
var SESSION_SECRET = process.env.SESSION_SECRET || "wfc-default-secret";
function createSessionToken(userId, role) {
  const payload = JSON.stringify({ userId, role, iat: Date.now() });
  const encoded = Buffer.from(payload).toString("base64url");
  const sig = crypto2.createHmac("sha256", SESSION_SECRET).update(encoded).digest("base64url");
  return `${encoded}.${sig}`;
}
function verifySessionToken(token) {
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [encoded, sig] = parts;
  const expectedSig = crypto2.createHmac("sha256", SESSION_SECRET).update(encoded).digest("base64url");
  if (sig !== expectedSig) return null;
  try {
    const payload = JSON.parse(Buffer.from(encoded, "base64url").toString());
    if (!payload.userId || !payload.role) return null;
    return { userId: payload.userId, role: payload.role };
  } catch {
    return null;
  }
}
function parseSessionCookie(req) {
  const cookieHeader = req.headers.cookie;
  if (!cookieHeader) return null;
  const match = cookieHeader.match(/(?:^|;\s*)wfc_session=([^;]+)/);
  if (!match) return null;
  return verifySessionToken(decodeURIComponent(match[1]));
}
function setSessionCookie(res, userId, role) {
  const token = createSessionToken(userId, role);
  res.setHeader("Set-Cookie", `wfc_session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`);
}
function clearSessionCookie(res) {
  res.setHeader("Set-Cookie", "wfc_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0");
}
async function registerRoutes(app2) {
  app2.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      version: "1.0.5",
      environment: process.env.DEMO_MODE === "false" ? "production" : "demo",
      dbIdentifier: process.env.PGDATABASE || "unknown",
      wsClients: getConnectedClientsCount(),
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  });
  app2.use("/api", (req, _res, next) => {
    const userId = req.headers["x-user-id"];
    const role = req.headers["x-user-role"];
    console.log(`[API] ${req.method} ${req.path} | userId=${userId || "NONE"} role=${role || "NONE"}`);
    next();
  });
  app2.get("/api/debug/auth-test", (req, res) => {
    const userId = req.headers["x-user-id"];
    const role = req.headers["x-user-role"];
    const contentType = req.headers["content-type"];
    const accept = req.headers["accept"];
    const userAgent = req.headers["user-agent"];
    console.log(`[DEBUG AUTH TEST] userId=${userId || "NONE"} role=${role || "NONE"} ua=${userAgent?.substring(0, 50) || "NONE"}`);
    res.json({
      authReceived: !!(userId && role),
      userId: userId || null,
      role: role || null,
      contentType: contentType || null,
      accept: accept || null,
      userAgent: userAgent?.substring(0, 100) || null,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  });
  app2.get(
    "/api/communications/workers",
    checkRoles("admin", "hr"),
    async (_req, res) => {
      try {
        const workers = await db.select({
          id: users.id,
          email: users.email,
          fullName: users.fullName,
          onboardingStatus: users.onboardingStatus,
          workerRoles: users.workerRoles,
          isActive: users.isActive
        }).from(users).where(eq16(users.role, "worker"));
        res.json(workers);
      } catch (error) {
        console.error("Error fetching workers:", error);
        res.status(500).json({ error: "Failed to fetch workers" });
      }
    }
  );
  app2.post(
    "/api/communications/conversations",
    checkRoles("admin", "hr"),
    async (req, res) => {
      try {
        const { workerUserId } = req.body;
        const hrUserId = req.headers["x-user-id"];
        if (!workerUserId) {
          res.status(400).json({ error: "workerUserId is required" });
          return;
        }
        const existing = await db.select().from(conversations2).where(eq16(conversations2.workerUserId, workerUserId)).limit(1);
        if (existing.length > 0) {
          res.json(existing[0]);
          return;
        }
        const [newConversation] = await db.insert(conversations2).values({
          type: "hr_worker",
          workerUserId,
          hrUserId: hrUserId || null
        }).returning();
        res.json(newConversation);
      } catch (error) {
        console.error("Error creating conversation:", error);
        res.status(500).json({ error: "Failed to create conversation" });
      }
    }
  );
  app2.get(
    "/api/communications/conversations",
    async (req, res) => {
      try {
        const role = req.headers["x-user-role"];
        const userId = req.headers["x-user-id"];
        if (!role || !userId) {
          res.status(401).json({ error: "Authentication required" });
          return;
        }
        let convos;
        if (role === "admin" || role === "hr") {
          convos = await db.select({
            id: conversations2.id,
            type: conversations2.type,
            workerUserId: conversations2.workerUserId,
            hrUserId: conversations2.hrUserId,
            lastMessageAt: conversations2.lastMessageAt,
            lastMessagePreview: conversations2.lastMessagePreview,
            isArchived: conversations2.isArchived,
            createdAt: conversations2.createdAt,
            updatedAt: conversations2.updatedAt,
            workerName: users.fullName,
            workerEmail: users.email
          }).from(conversations2).leftJoin(users, eq16(conversations2.workerUserId, users.id)).where(eq16(conversations2.isArchived, false)).orderBy(desc6(conversations2.lastMessageAt));
        } else if (role === "worker") {
          const workerConvos = await db.select({
            id: conversations2.id,
            type: conversations2.type,
            workerUserId: conversations2.workerUserId,
            hrUserId: conversations2.hrUserId,
            lastMessageAt: conversations2.lastMessageAt,
            lastMessagePreview: conversations2.lastMessagePreview,
            isArchived: conversations2.isArchived,
            createdAt: conversations2.createdAt,
            updatedAt: conversations2.updatedAt,
            hrName: users.fullName,
            hrEmail: users.email
          }).from(conversations2).leftJoin(users, eq16(conversations2.hrUserId, users.id)).where(and13(
            eq16(conversations2.workerUserId, userId),
            eq16(conversations2.isArchived, false)
          )).orderBy(desc6(conversations2.lastMessageAt));
          convos = workerConvos;
        } else {
          res.status(403).json({ error: "Access denied" });
          return;
        }
        const convosWithUnread = await Promise.all(convos.map(async (c) => {
          const unreadResult = await db.select({ count: sql13`count(*)` }).from(messages2).where(and13(
            eq16(messages2.conversationId, c.id),
            eq16(messages2.recipientUserId, userId),
            isNull8(messages2.readAt)
          ));
          return { ...c, unreadCount: Number(unreadResult[0]?.count || 0) };
        }));
        res.json(convosWithUnread);
      } catch (error) {
        console.error("Error fetching conversations:", error);
        res.status(500).json({ error: "Failed to fetch conversations" });
      }
    }
  );
  app2.get(
    "/api/communications/conversations/:id/messages",
    async (req, res) => {
      try {
        const role = req.headers["x-user-role"];
        const userId = req.headers["x-user-id"];
        const conversationId = req.params.id;
        const limit = parseInt(req.query.limit) || 50;
        const offset = parseInt(req.query.offset) || 0;
        if (!role || !userId) {
          res.status(401).json({ error: "Authentication required" });
          return;
        }
        const [convo] = await db.select().from(conversations2).where(eq16(conversations2.id, conversationId));
        if (!convo) {
          res.status(404).json({ error: "Conversation not found" });
          return;
        }
        if (role === "worker" && convo.workerUserId !== userId) {
          res.status(403).json({ error: "Access denied" });
          return;
        }
        const msgs = await db.select({
          id: messages2.id,
          conversationId: messages2.conversationId,
          senderUserId: messages2.senderUserId,
          recipientUserId: messages2.recipientUserId,
          body: messages2.body,
          messageType: messages2.messageType,
          mediaUrl: messages2.mediaUrl,
          readAt: messages2.readAt,
          status: messages2.status,
          createdAt: messages2.createdAt,
          senderName: users.fullName
        }).from(messages2).leftJoin(users, eq16(messages2.senderUserId, users.id)).where(and13(
          eq16(messages2.conversationId, conversationId),
          isNull8(messages2.deletedAt)
        )).orderBy(desc6(messages2.createdAt)).limit(limit).offset(offset);
        res.json(msgs.reverse());
      } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).json({ error: "Failed to fetch messages" });
      }
    }
  );
  app2.post(
    "/api/communications/conversations/:id/messages",
    async (req, res) => {
      try {
        const role = req.headers["x-user-role"];
        const userId = req.headers["x-user-id"];
        const conversationId = req.params.id;
        const { body, messageType = "text", mediaUrl } = req.body;
        if (!role || !userId) {
          res.status(401).json({ error: "Authentication required" });
          return;
        }
        if (!body || body.trim().length === 0) {
          res.status(400).json({ error: "Message body is required" });
          return;
        }
        const [convo] = await db.select().from(conversations2).where(eq16(conversations2.id, conversationId));
        if (!convo) {
          res.status(404).json({ error: "Conversation not found" });
          return;
        }
        if (role === "worker" && convo.workerUserId !== userId) {
          res.status(403).json({ error: "Access denied" });
          return;
        }
        let recipientUserId;
        if (role === "worker") {
          if (convo.hrUserId) {
            recipientUserId = convo.hrUserId;
          } else {
            const [hrUser] = await db.select({ id: users.id }).from(users).where(or2(eq16(users.role, "hr"), eq16(users.role, "admin"))).limit(1);
            if (!hrUser) {
              res.status(400).json({ error: "No HR available to receive message" });
              return;
            }
            recipientUserId = hrUser.id;
          }
        } else {
          recipientUserId = convo.workerUserId;
        }
        const [newMessage] = await db.insert(messages2).values({
          conversationId,
          senderUserId: userId,
          recipientUserId,
          body: body.trim(),
          messageType,
          mediaUrl,
          status: "delivered"
        }).returning();
        await db.insert(messageLogs).values({
          messageId: newMessage.id,
          event: "created",
          actorUserId: userId
        });
        await db.update(conversations2).set({
          lastMessageAt: /* @__PURE__ */ new Date(),
          lastMessagePreview: body.trim().substring(0, 100),
          updatedAt: /* @__PURE__ */ new Date()
        }).where(eq16(conversations2.id, conversationId));
        const [sender] = await db.select({ fullName: users.fullName }).from(users).where(eq16(users.id, userId));
        sendPushNotifications(
          [recipientUserId],
          sender?.fullName || "New Message",
          body.trim().length > 100 ? body.trim().substring(0, 97) + "..." : body.trim(),
          { conversationId, type: "message" }
        );
        res.json({ ...newMessage, senderName: sender?.fullName || "Unknown" });
      } catch (error) {
        console.error("Error sending message:", error);
        res.status(500).json({ error: "Failed to send message" });
      }
    }
  );
  app2.post(
    "/api/communications/conversations/:id/read",
    async (req, res) => {
      try {
        const userId = req.headers["x-user-id"];
        const conversationId = req.params.id;
        if (!userId) {
          res.status(401).json({ error: "Authentication required" });
          return;
        }
        const unreadMessages = await db.select({ id: messages2.id }).from(messages2).where(and13(
          eq16(messages2.conversationId, conversationId),
          eq16(messages2.recipientUserId, userId),
          isNull8(messages2.readAt)
        ));
        const now = /* @__PURE__ */ new Date();
        await db.update(messages2).set({ readAt: now, status: "read" }).where(and13(
          eq16(messages2.conversationId, conversationId),
          eq16(messages2.recipientUserId, userId),
          isNull8(messages2.readAt)
        ));
        for (const msg of unreadMessages) {
          await db.insert(messageLogs).values({
            messageId: msg.id,
            event: "read",
            actorUserId: userId
          });
        }
        res.json({ marked: unreadMessages.length });
      } catch (error) {
        console.error("Error marking messages as read:", error);
        res.status(500).json({ error: "Failed to mark messages as read" });
      }
    }
  );
  app2.post("/api/auth/register", async (req, res) => {
    try {
      const result = registerUserSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ error: result.error.errors[0].message });
        return;
      }
      const { email, password, fullName } = result.data;
      const existingUser = await db.select().from(users).where(eq16(users.email, email.toLowerCase()));
      if (existingUser.length > 0) {
        res.status(400).json({ error: "Email already registered" });
        return;
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const { role, businessName } = req.body;
      const allowedRole = role === "client" ? "client" : "worker";
      const [newUser] = await db.insert(users).values({
        email: email.toLowerCase(),
        password: hashedPassword,
        fullName,
        role: allowedRole,
        isActive: false,
        businessName: allowedRole === "client" ? businessName?.trim() || null : null,
        onboardingStatus: allowedRole === "worker" ? "NOT_APPLIED" : null
      }).returning();
      const { password: _, ...userWithoutPassword } = newUser;
      res.json({ user: userWithoutPassword });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ error: "Failed to register user" });
    }
  });
  app2.post("/api/push-tokens", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const { token, platform } = req.body;
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      if (!token) {
        res.status(400).json({ error: "Token is required" });
        return;
      }
      const existing = await db.select().from(pushTokens).where(eq16(pushTokens.token, token)).limit(1);
      if (existing.length > 0) {
        await db.update(pushTokens).set({ userId, platform: platform || "unknown", isActive: true, updatedAt: /* @__PURE__ */ new Date() }).where(eq16(pushTokens.token, token));
      } else {
        await db.insert(pushTokens).values({
          userId,
          token,
          platform: platform || "unknown"
        });
      }
      res.json({ success: true });
    } catch (error) {
      console.error("Error registering push token:", error);
      res.status(500).json({ error: "Failed to register push token" });
    }
  });
  app2.delete("/api/push-tokens", async (req, res) => {
    try {
      const { token } = req.body;
      if (!token) {
        res.status(400).json({ error: "Token is required" });
        return;
      }
      await db.update(pushTokens).set({ isActive: false, updatedAt: /* @__PURE__ */ new Date() }).where(eq16(pushTokens.token, token));
      res.json({ success: true });
    } catch (error) {
      console.error("Error deactivating push token:", error);
      res.status(500).json({ error: "Failed to deactivate push token" });
    }
  });
  app2.post("/api/auth/google", async (req, res) => {
    try {
      const { idToken } = req.body;
      if (!idToken) {
        res.status(400).json({ error: "ID token required" });
        return;
      }
      const tokenInfoUrl = `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken)}`;
      const tokenRes = await fetch(tokenInfoUrl);
      const tokenData = await tokenRes.json();
      if (!tokenRes.ok || tokenData.error) {
        res.status(401).json({ error: "Invalid Google token" });
        return;
      }
      const { sub: googleId, email, name } = tokenData;
      if (!email) {
        res.status(401).json({ error: "Could not retrieve email from Google account" });
        return;
      }
      let [user] = await db.select().from(users).where(eq16(users.googleId, googleId));
      if (!user) {
        const [byEmail] = await db.select().from(users).where(eq16(users.email, email.toLowerCase()));
        user = byEmail;
      }
      if (!user) {
        const fullName = name || email.split("@")[0];
        await db.insert(users).values({
          email: email.toLowerCase(),
          fullName,
          role: "worker",
          isActive: false,
          googleId,
          onboardingStatus: "NOT_APPLIED"
        }).returning();
        res.json({ registered: true, message: "Your account has been created and is pending admin approval. You will be notified when your account is activated." });
        return;
      }
      if (!user.isActive) {
        res.json({ pending: true, message: "Your account is pending admin approval. An admin will review and activate your account. You will be notified once access is granted." });
        return;
      }
      if (!user.googleId) {
        await db.update(users).set({ googleId }).where(eq16(users.id, user.id));
      }
      if (user.totpEnabled) {
        res.json({ requires2FA: true, userId: user.id });
        return;
      }
      const { password: _, totpSecret: __, recoveryCodes: ___, ...userWithoutSensitive } = user;
      setSessionCookie(res, user.id, user.role);
      res.json({ user: { ...userWithoutSensitive, mustChangePassword: user.mustChangePassword || false } });
    } catch (error) {
      console.error("Error with Google auth:", error);
      res.status(500).json({ error: "Failed to authenticate with Google" });
    }
  });
  app2.post("/api/auth/login", async (req, res) => {
    try {
      const result = loginUserSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ error: result.error.errors[0].message });
        return;
      }
      const { email, password } = result.data;
      const [user] = await db.select().from(users).where(eq16(users.email, email.toLowerCase()));
      if (!user) {
        res.status(401).json({ error: "Invalid email or password" });
        return;
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        res.status(401).json({ error: "Invalid email or password" });
        return;
      }
      if (!user.isActive) {
        res.json({ pending: true, message: "Your account is pending admin approval. An admin will review and activate your account shortly." });
        return;
      }
      if (user.totpEnabled) {
        res.json({ requires2FA: true, userId: user.id });
        return;
      }
      const { password: _, totpSecret: __, recoveryCodes: ___, ...userWithoutSensitive } = user;
      setSessionCookie(res, user.id, user.role);
      res.json({ user: { ...userWithoutSensitive, mustChangePassword: user.mustChangePassword || false } });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ error: "Failed to login" });
    }
  });
  app2.get("/api/auth/me", async (req, res) => {
    try {
      const session = parseSessionCookie(req);
      if (!session) {
        res.status(401).json({ error: "Not authenticated" });
        return;
      }
      const [user] = await db.select({
        id: users.id,
        email: users.email,
        fullName: users.fullName,
        role: users.role,
        isActive: users.isActive
      }).from(users).where(eq16(users.id, session.userId));
      if (!user || !user.isActive) {
        clearSessionCookie(res);
        res.status(401).json({ error: "Invalid or inactive user" });
        return;
      }
      if (user.role !== session.role) {
        clearSessionCookie(res);
        res.status(401).json({ error: "Session invalid" });
        return;
      }
      res.json({ user });
    } catch (error) {
      res.status(500).json({ error: "Failed to verify session" });
    }
  });
  app2.post("/api/auth/logout", (_req, res) => {
    clearSessionCookie(res);
    res.json({ success: true });
  });
  app2.get("/api/auth/verify", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const userRole = req.headers["x-user-role"];
      if (!userId || !userRole) {
        res.status(401).json({ error: "Not authenticated" });
        return;
      }
      const [user] = await db.select({
        id: users.id,
        email: users.email,
        fullName: users.fullName,
        role: users.role,
        isActive: users.isActive
      }).from(users).where(eq16(users.id, userId));
      if (!user || !user.isActive) {
        res.status(401).json({ error: "Invalid or inactive user" });
        return;
      }
      if (user.role !== userRole) {
        res.status(401).json({ error: "Role mismatch" });
        return;
      }
      res.json({ user });
    } catch (error) {
      res.status(500).json({ error: "Verification failed" });
    }
  });
  app2.post("/api/auth/change-password", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const { currentPassword, newPassword } = req.body;
      if (!currentPassword || !newPassword) {
        res.status(400).json({ error: "Current password and new password are required" });
        return;
      }
      if (newPassword.length < 8) {
        res.status(400).json({ error: "New password must be at least 8 characters" });
        return;
      }
      const [user] = await db.select().from(users).where(eq16(users.id, userId)).limit(1);
      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }
      const validPassword = await bcrypt.compare(currentPassword, user.password);
      if (!validPassword) {
        res.status(401).json({ error: "Current password is incorrect" });
        return;
      }
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await db.update(users).set({ password: hashedPassword, mustChangePassword: false, updatedAt: /* @__PURE__ */ new Date() }).where(eq16(users.id, userId));
      res.json({ success: true, message: "Password changed successfully" });
    } catch (error) {
      console.error("Error changing password:", error);
      res.status(500).json({ error: "Failed to change password" });
    }
  });
  function generateRecoveryCodes() {
    const codes = [];
    for (let i = 0; i < 8; i++) {
      codes.push(crypto2.randomBytes(4).toString("hex").toUpperCase());
    }
    return codes;
  }
  app2.post("/api/2fa/setup", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const [user] = await db.select().from(users).where(eq16(users.id, userId));
      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }
      if (user.totpEnabled) {
        res.status(400).json({ error: "2FA is already enabled" });
        return;
      }
      const secret = new OTPAuth.Secret({ size: 20 });
      const totp = new OTPAuth.TOTP({
        issuer: "Workforce Connect",
        label: user.email,
        algorithm: "SHA1",
        digits: 6,
        period: 30,
        secret
      });
      await db.update(users).set({ totpSecret: secret.base32, updatedAt: /* @__PURE__ */ new Date() }).where(eq16(users.id, userId));
      res.json({
        secret: secret.base32,
        uri: totp.toString()
      });
    } catch (error) {
      console.error("Error setting up 2FA:", error);
      res.status(500).json({ error: "Failed to setup 2FA" });
    }
  });
  app2.post("/api/2fa/verify-setup", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const { code } = req.body;
      if (!code) {
        res.status(400).json({ error: "Verification code is required" });
        return;
      }
      const [user] = await db.select().from(users).where(eq16(users.id, userId));
      if (!user || !user.totpSecret) {
        res.status(400).json({ error: "2FA setup not initiated" });
        return;
      }
      const totp = new OTPAuth.TOTP({
        issuer: "Workforce Connect",
        label: user.email,
        algorithm: "SHA1",
        digits: 6,
        period: 30,
        secret: OTPAuth.Secret.fromBase32(user.totpSecret)
      });
      const delta = totp.validate({ token: code, window: 1 });
      if (delta === null) {
        res.status(400).json({ error: "Invalid verification code" });
        return;
      }
      const recoveryCodes = generateRecoveryCodes();
      await db.update(users).set({
        totpEnabled: true,
        recoveryCodes: JSON.stringify(recoveryCodes),
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq16(users.id, userId));
      res.json({
        enabled: true,
        recoveryCodes
      });
    } catch (error) {
      console.error("Error verifying 2FA setup:", error);
      res.status(500).json({ error: "Failed to verify 2FA setup" });
    }
  });
  app2.post("/api/2fa/disable", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const { code } = req.body;
      if (!code) {
        res.status(400).json({ error: "Verification code is required" });
        return;
      }
      const [user] = await db.select().from(users).where(eq16(users.id, userId));
      if (!user || !user.totpEnabled || !user.totpSecret) {
        res.status(400).json({ error: "2FA is not enabled" });
        return;
      }
      const totp = new OTPAuth.TOTP({
        issuer: "Workforce Connect",
        label: user.email,
        algorithm: "SHA1",
        digits: 6,
        period: 30,
        secret: OTPAuth.Secret.fromBase32(user.totpSecret)
      });
      const delta = totp.validate({ token: code, window: 1 });
      if (delta === null) {
        res.status(400).json({ error: "Invalid verification code" });
        return;
      }
      await db.update(users).set({
        totpEnabled: false,
        totpSecret: null,
        recoveryCodes: null,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq16(users.id, userId));
      res.json({ disabled: true });
    } catch (error) {
      console.error("Error disabling 2FA:", error);
      res.status(500).json({ error: "Failed to disable 2FA" });
    }
  });
  app2.post("/api/2fa/verify", async (req, res) => {
    try {
      const { userId, code } = req.body;
      if (!userId || !code) {
        res.status(400).json({ error: "User ID and code are required" });
        return;
      }
      const [user] = await db.select().from(users).where(eq16(users.id, userId));
      if (!user || !user.totpEnabled || !user.totpSecret) {
        res.status(400).json({ error: "2FA is not enabled for this user" });
        return;
      }
      const totp = new OTPAuth.TOTP({
        issuer: "Workforce Connect",
        label: user.email,
        algorithm: "SHA1",
        digits: 6,
        period: 30,
        secret: OTPAuth.Secret.fromBase32(user.totpSecret)
      });
      const delta = totp.validate({ token: code, window: 1 });
      if (delta !== null) {
        const { password: _, totpSecret: __, recoveryCodes: ___, ...userWithoutSensitive } = user;
        setSessionCookie(res, user.id, user.role);
        res.json({ verified: true, user: userWithoutSensitive });
        return;
      }
      if (user.recoveryCodes) {
        const codes = JSON.parse(user.recoveryCodes);
        const codeIndex = codes.indexOf(code.toUpperCase());
        if (codeIndex !== -1) {
          codes.splice(codeIndex, 1);
          await db.update(users).set({ recoveryCodes: JSON.stringify(codes), updatedAt: /* @__PURE__ */ new Date() }).where(eq16(users.id, userId));
          const { password: _, totpSecret: __, recoveryCodes: ___, ...userWithoutSensitive } = user;
          setSessionCookie(res, user.id, user.role);
          res.json({ verified: true, user: userWithoutSensitive, remainingRecoveryCodes: codes.length });
          return;
        }
      }
      res.status(400).json({ error: "Invalid verification code" });
    } catch (error) {
      console.error("Error verifying 2FA:", error);
      res.status(500).json({ error: "Failed to verify 2FA" });
    }
  });
  app2.get("/api/2fa/status", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const [user] = await db.select({ totpEnabled: users.totpEnabled }).from(users).where(eq16(users.id, userId));
      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }
      res.json({ enabled: user.totpEnabled || false });
    } catch (error) {
      console.error("Error checking 2FA status:", error);
      res.status(500).json({ error: "Failed to check 2FA status" });
    }
  });
  app2.get("/api/users/workers", checkRoles("admin", "hr"), async (_req, res) => {
    try {
      const workers = await db.select({
        id: users.id,
        fullName: users.fullName
      }).from(users).where(and13(eq16(users.role, "worker"), eq16(users.isActive, true))).orderBy(asc(users.fullName));
      res.json(workers);
    } catch (error) {
      console.error("Error fetching workers list:", error);
      res.status(500).json({ error: "Failed to fetch workers" });
    }
  });
  app2.get("/api/users", checkRoles("admin"), async (_req, res) => {
    try {
      const allUsers = await db.select({
        id: users.id,
        email: users.email,
        fullName: users.fullName,
        role: users.role,
        timezone: users.timezone,
        onboardingStatus: users.onboardingStatus,
        workerRoles: users.workerRoles,
        businessName: users.businessName,
        phone: users.phone,
        isActive: users.isActive,
        createdAt: users.createdAt,
        updatedAt: users.updatedAt
      }).from(users);
      res.json(allUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  });
  app2.patch("/api/users/:id", checkRoles("admin"), async (req, res) => {
    try {
      const id = req.params.id;
      const { role, isActive, onboardingStatus, workerRoles, phone } = req.body;
      const updateData = { updatedAt: /* @__PURE__ */ new Date() };
      if (role !== void 0) updateData.role = role;
      if (isActive !== void 0) updateData.isActive = isActive;
      if (onboardingStatus !== void 0) updateData.onboardingStatus = onboardingStatus;
      if (workerRoles !== void 0) updateData.workerRoles = workerRoles;
      if (phone !== void 0) updateData.phone = phone;
      let existingUserBeforeUpdate = null;
      if (isActive === true) {
        const [fetched] = await db.select().from(users).where(eq16(users.id, id));
        existingUserBeforeUpdate = fetched || null;
        if (existingUserBeforeUpdate && existingUserBeforeUpdate.role === "worker" && onboardingStatus === void 0 && (existingUserBeforeUpdate.onboardingStatus === "APPLICATION_SUBMITTED" || existingUserBeforeUpdate.onboardingStatus === "NOT_APPLIED")) {
          updateData.onboardingStatus = "AGREEMENT_PENDING";
        }
      }
      const [updatedUser] = await db.update(users).set(updateData).where(eq16(users.id, id)).returning();
      if (!updatedUser) {
        res.status(404).json({ error: "User not found" });
        return;
      }
      if (isActive === true && existingUserBeforeUpdate?.isActive === false && updatedUser.email) {
        sendEmail({
          to: updatedUser.email,
          subject: "Your Workforce Connect account has been approved",
          text: `Hi ${updatedUser.fullName},

Great news! Your Workforce Connect account has been approved and is now active.

Sign in at: https://app.wfconnect.org

Welcome to the team!

The WFConnect Team`,
          html: `<p>Hi ${updatedUser.fullName},</p><p>Great news! Your <strong>Workforce Connect</strong> account has been approved and is now active.</p><p><a href="https://app.wfconnect.org" style="background:#2563EB;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;display:inline-block;">Sign In Now</a></p><p>Welcome to the team!</p><p>The WFConnect Team</p>`
        }).catch((err) => console.error("[EMAIL] Approval email error:", err));
      }
      const { password: _, ...userWithoutPassword } = updatedUser;
      res.json(userWithoutPassword);
      broadcast({ type: "updated", entity: "user", id: req.params.id });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "Failed to update user" });
    }
  });
  app2.patch("/api/users/me/profile", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const role = req.headers["x-user-role"];
      if (!userId || !role) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const { fullName, email, phone, timezone, businessName, businessAddress, businessPhone } = req.body;
      const updateData = { updatedAt: /* @__PURE__ */ new Date() };
      if (fullName !== void 0 && typeof fullName === "string" && fullName.trim().length >= 2) {
        updateData.fullName = fullName.trim();
      }
      if (phone !== void 0) {
        updateData.phone = phone ? phone.trim() : null;
      }
      if (timezone !== void 0 && typeof timezone === "string" && timezone.trim().length > 0) {
        updateData.timezone = timezone.trim();
      }
      if (email !== void 0 && typeof email === "string") {
        const trimmedEmail = email.trim().toLowerCase();
        if (trimmedEmail.length === 0 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
          res.status(400).json({ error: "Invalid email address" });
          return;
        }
        const [existingUser] = await db.select({ id: users.id }).from(users).where(and13(eq16(users.email, trimmedEmail), ne5(users.id, userId))).limit(1);
        if (existingUser) {
          res.status(409).json({ error: "Email is already in use by another account" });
          return;
        }
        updateData.email = trimmedEmail;
      }
      if (role === "client") {
        if (businessName !== void 0) updateData.businessName = businessName ? businessName.trim() : null;
        if (businessAddress !== void 0) updateData.businessAddress = businessAddress ? businessAddress.trim() : null;
        if (businessPhone !== void 0) updateData.businessPhone = businessPhone ? businessPhone.trim() : null;
      }
      const [updatedUser] = await db.update(users).set(updateData).where(eq16(users.id, userId)).returning();
      if (!updatedUser) {
        res.status(404).json({ error: "User not found" });
        return;
      }
      const { password: _, totpSecret: _ts, recoveryCodes: _rc, ...safeUser } = updatedUser;
      res.json(safeUser);
      broadcast({ type: "updated", entity: "user", id: userId });
    } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).json({ error: "Failed to update profile" });
    }
  });
  app2.patch("/api/users/me/onboarding-status", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const role = req.headers["x-user-role"];
      const { onboardingStatus } = req.body;
      console.log(`[ONBOARDING] Status update request: userId=${userId}, role=${role}, newStatus=${onboardingStatus}`);
      if (!userId || !role) {
        console.log(`[ONBOARDING] REJECTED: Missing auth headers (userId=${userId}, role=${role})`);
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      if (role !== "worker") {
        console.log(`[ONBOARDING] REJECTED: Non-worker role (${role}) tried to update status`);
        res.status(403).json({ error: "Only workers can update their onboarding status" });
        return;
      }
      const validStatuses = ["NOT_APPLIED", "APPLICATION_SUBMITTED", "AGREEMENT_PENDING", "AGREEMENT_ACCEPTED"];
      if (!onboardingStatus || !validStatuses.includes(onboardingStatus)) {
        console.log(`[ONBOARDING] REJECTED: Invalid status value: ${onboardingStatus}`);
        res.status(400).json({ error: "Invalid onboarding status" });
        return;
      }
      const [updatedUser] = await db.update(users).set({ onboardingStatus, updatedAt: /* @__PURE__ */ new Date() }).where(eq16(users.id, userId)).returning();
      if (!updatedUser) {
        console.log(`[ONBOARDING] REJECTED: User not found for id=${userId}`);
        res.status(404).json({ error: "User not found" });
        return;
      }
      console.log(`[ONBOARDING] SUCCESS: User ${updatedUser.email} (${userId}) status updated to ${updatedUser.onboardingStatus}`);
      res.json({
        id: updatedUser.id,
        onboardingStatus: updatedUser.onboardingStatus
      });
      broadcast({ type: "updated", entity: "onboarding", id: userId });
    } catch (error) {
      console.error("[ONBOARDING] ERROR updating onboarding status:", error);
      res.status(500).json({ error: "Failed to update onboarding status" });
    }
  });
  app2.delete("/api/users/:id", checkRoles("admin"), async (req, res) => {
    try {
      const id = req.params.id;
      const adminId = req.headers["x-user-id"];
      console.log(`[DELETE USER] Admin ${adminId} requesting to delete user ${id}`);
      if (id === adminId) {
        console.log(`[DELETE USER] REJECTED: Admin tried to delete themselves`);
        res.status(400).json({ error: "You cannot delete your own account" });
        return;
      }
      const [existingUser] = await db.select().from(users).where(eq16(users.id, id)).limit(1);
      if (!existingUser) {
        console.log(`[DELETE USER] REJECTED: User ${id} not found`);
        res.status(404).json({ error: "User not found" });
        return;
      }
      console.log(`[DELETE USER] Deleting user: ${existingUser.email} (${existingUser.role})`);
      await db.execute(sql13`DELETE FROM message_logs WHERE message_id IN (SELECT id FROM messages WHERE sender_user_id = ${id} OR recipient_user_id = ${id})`);
      await db.execute(sql13`DELETE FROM message_logs WHERE actor_user_id = ${id}`);
      await db.execute(sql13`DELETE FROM messages WHERE sender_user_id = ${id} OR recipient_user_id = ${id}`);
      await db.execute(sql13`DELETE FROM conversations WHERE worker_user_id = ${id} OR hr_user_id = ${id}`);
      await db.execute(sql13`DELETE FROM push_tokens WHERE user_id = ${id}`);
      await db.execute(sql13`DELETE FROM app_notifications WHERE user_id = ${id}`);
      await db.execute(sql13`DELETE FROM sent_reminders WHERE worker_id = ${id}`);
      await db.execute(sql13`DELETE FROM shift_checkins WHERE worker_id = ${id}`);
      await db.execute(sql13`DELETE FROM shift_offers WHERE worker_id = ${id}`);
      await db.execute(sql13`DELETE FROM payroll_batch_items WHERE worker_user_id = ${id}`);
      await db.execute(sql13`DELETE FROM timesheet_entries WHERE timesheet_id IN (SELECT id FROM timesheets WHERE worker_user_id = ${id})`);
      await db.execute(sql13`UPDATE timesheets SET approved_by_user_id = NULL WHERE approved_by_user_id = ${id}`);
      await db.execute(sql13`UPDATE timesheets SET disputed_by_user_id = NULL WHERE disputed_by_user_id = ${id}`);
      await db.execute(sql13`DELETE FROM timesheets WHERE worker_user_id = ${id}`);
      await db.execute(sql13`DELETE FROM tito_logs WHERE worker_id = ${id}`);
      await db.execute(sql13`UPDATE workplace_assignments SET invited_by_user_id = NULL WHERE invited_by_user_id = ${id}`);
      await db.execute(sql13`DELETE FROM workplace_assignments WHERE worker_user_id = ${id}`);
      await db.execute(sql13`DELETE FROM payment_profiles WHERE worker_user_id = ${id}`);
      await db.execute(sql13`DELETE FROM export_audit_logs WHERE admin_user_id = ${id}`);
      await db.execute(sql13`UPDATE payroll_batches SET created_by_user_id = ${adminId} WHERE created_by_user_id = ${id}`);
      await db.execute(sql13`UPDATE payroll_batches SET finalized_by_user_id = NULL WHERE finalized_by_user_id = ${id}`);
      await db.execute(sql13`DELETE FROM recurrence_exceptions WHERE override_worker_user_id = ${id} OR cancelled_by_user_id = ${id}`);
      await db.execute(sql13`UPDATE shift_series SET worker_user_id = NULL WHERE worker_user_id = ${id}`);
      await db.execute(sql13`UPDATE shift_series SET created_by_user_id = NULL WHERE created_by_user_id = ${id}`);
      await db.execute(sql13`UPDATE shifts SET worker_user_id = NULL WHERE worker_user_id = ${id}`);
      await db.execute(sql13`UPDATE shifts SET created_by_user_id = NULL WHERE created_by_user_id = ${id}`);
      await db.execute(sql13`UPDATE shift_requests SET requested_worker_id = NULL WHERE requested_worker_id = ${id}`);
      await db.execute(sql13`DELETE FROM shift_requests WHERE client_id = ${id}`);
      await db.execute(sql13`DELETE FROM user_photos WHERE user_id = ${id} OR reviewer_id = ${id}`);
      await db.execute(sql13`DELETE FROM audit_log WHERE user_id = ${id}`);
      await db.execute(sql13`DELETE FROM worker_applications WHERE email = ${existingUser.email}`);
      await db.execute(sql13`DELETE FROM users WHERE id = ${id}`);
      console.log(`[DELETE USER] SUCCESS: User ${existingUser.email} (${id}) deleted by admin ${adminId}`);
      res.json({ message: "User deleted successfully" });
      broadcast({ type: "deleted", entity: "user", id });
    } catch (error) {
      console.error("[DELETE USER] ERROR:", error);
      const detail = error?.message || "Failed to delete user";
      res.status(500).json({ error: `Failed to delete user: ${detail}` });
    }
  });
  app2.post("/api/users", checkRoles("admin"), async (req, res) => {
    try {
      const { email, password, fullName, role } = req.body;
      if (!email || !password || !fullName || !role) {
        res.status(400).json({ error: "Email, password, full name, and role are required" });
        return;
      }
      const validRoles = ["admin", "hr", "client", "worker"];
      if (!validRoles.includes(role)) {
        res.status(400).json({ error: "Invalid role. Must be one of: admin, hr, client, worker" });
        return;
      }
      const existingUser = await db.select().from(users).where(eq16(users.email, email.toLowerCase())).limit(1);
      if (existingUser.length > 0) {
        res.status(409).json({ error: "A user with this email already exists" });
        return;
      }
      const phone = req.body.phone;
      if (phone) {
        const [phoneDup] = await db.select({ id: users.id }).from(users).where(eq16(users.phone, phone)).limit(1);
        if (phoneDup) {
          res.status(409).json({ error: `A worker with phone ${phone} already exists.` });
          return;
        }
      }
      if (role === "worker") {
        const [nameDup] = await db.select({ id: users.id }).from(users).where(eq16(users.fullName, fullName.trim())).limit(1);
        if (nameDup) {
          res.status(409).json({ error: `A worker named "${fullName}" already exists.` });
          return;
        }
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const [newUser] = await db.insert(users).values({
        email: email.toLowerCase(),
        password: hashedPassword,
        fullName,
        role,
        isActive: true,
        onboardingStatus: role === "worker" ? "NOT_APPLIED" : null
      }).returning();
      if (newUser.email) {
        sendEmail({
          to: newUser.email,
          subject: "Welcome to Workforce Connect",
          text: `Hi ${newUser.fullName},

An admin has created a Workforce Connect account for you as a ${role}.

Sign in at: https://app.wfconnect.org

Please use the password provided to you by your admin. You can change it after logging in.

The WFConnect Team`,
          html: `<p>Hi ${newUser.fullName},</p><p>An admin has created a <strong>Workforce Connect</strong> account for you as a <strong>${role}</strong>.</p><p><a href="https://app.wfconnect.org" style="background:#2563EB;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;display:inline-block;">Sign In Now</a></p><p>Please use the password provided to you by your admin. You can change it after logging in.</p><p>The WFConnect Team</p>`
        }).catch((err) => console.error("[EMAIL] Welcome email error:", err));
      }
      const { password: _, ...userWithoutPassword } = newUser;
      res.status(201).json(userWithoutPassword);
      broadcast({ type: "created", entity: "user" });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Failed to create user" });
    }
  });
  app2.post("/public/contact", async (req, res) => {
    try {
      const ip = getClientIp(req);
      if (!checkRateLimit(ip)) {
        res.status(429).json({ ok: false, error: "Too many requests. Please try again later." });
        return;
      }
      const { name, email, company, phone, cityProvince, serviceNeeded, message } = req.body;
      if (!name || typeof name !== "string" || name.trim().length < 2) {
        res.status(400).json({ ok: false, error: "Name is required (minimum 2 characters)" });
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || typeof email !== "string" || !emailRegex.test(email)) {
        res.status(400).json({ ok: false, error: "Valid email is required" });
        return;
      }
      if (!message || typeof message !== "string" || message.trim().length < 10) {
        res.status(400).json({ ok: false, error: "Message is required (minimum 10 characters)" });
        return;
      }
      const userAgent = req.headers["user-agent"] || null;
      await db.insert(contactLeads).values({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        company: company?.trim() || null,
        phone: phone?.trim() || null,
        cityProvince: cityProvince?.trim() || null,
        serviceNeeded: serviceNeeded?.trim() || null,
        message: message.trim(),
        ip,
        userAgent
      });
      console.log(`Contact form submission from: ${email}`);
      res.json({ ok: true });
    } catch (error) {
      console.error("Error saving contact lead:", error);
      res.status(500).json({ ok: false, error: "Failed to submit form. Please try again." });
    }
  });
  app2.get("/api/public/positions", async (_req, res) => {
    try {
      const crmClient = await Promise.resolve().then(() => (init_weekdays_crm(), weekdays_crm_exports));
      if (crmClient.isConfigured()) {
        const workplaces4 = await crmClient.getWorkplaces();
        const positionSet = /* @__PURE__ */ new Set();
        for (const wp of workplaces4) {
          if (wp.jobPosition) positionSet.add(wp.jobPosition);
          if (wp.positions) {
            for (const p of wp.positions) {
              if (p.title) positionSet.add(p.title);
            }
          }
        }
        if (positionSet.size > 0) {
          const positions = Array.from(positionSet).sort((a, b) => a.localeCompare(b));
          res.json({ positions });
          return;
        }
      }
      res.json({ positions: ["Housekeeper", "Houseperson", "Server", "Event Staff", "Concierge", "Receptionist", "Hotel Staff", "Supervisor", "Other"] });
    } catch (error) {
      console.error("Error fetching positions:", error);
      res.json({ positions: ["Housekeeper", "Houseperson", "Server", "Event Staff", "Concierge", "Receptionist", "Hotel Staff", "Supervisor", "Other"] });
    }
  });
  app2.post("/api/public/apply", async (req, res) => {
    try {
      const ip = getClientIp(req);
      if (!checkRateLimit(ip)) {
        res.status(429).json({ error: "Too many requests. Please try again later." });
        return;
      }
      const userAgent = req.headers["user-agent"] || null;
      const applicationData = {
        ...req.body,
        ip,
        userAgent
      };
      const [newApplication] = await db.insert(workerApplications).values(applicationData).returning();
      console.log(`Worker application submitted from: ${req.body.email}`);
      res.json({ ok: true, id: newApplication.id });
    } catch (error) {
      console.error("Error saving worker application:", error);
      res.status(500).json({ error: "Failed to submit application. Please try again." });
    }
  });
  app2.get("/api/admin/applications", async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Basic ")) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const base64Credentials = authHeader.split(" ")[1];
      const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
      const [username, password] = credentials.split(":");
      if (username !== "wfconnect" || password !== "@2255Dundaswest") {
        res.status(401).json({ error: "Invalid credentials" });
        return;
      }
      const applications = await db.select().from(workerApplications).orderBy(desc6(workerApplications.createdAt));
      res.json(applications);
    } catch (error) {
      console.error("Error fetching applications:", error);
      res.status(500).json({ error: "Failed to fetch applications" });
    }
  });
  app2.get("/api/admin/applications/:id", async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Basic ")) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const base64Credentials = authHeader.split(" ")[1];
      const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
      const [username, password] = credentials.split(":");
      if (username !== "wfconnect" || password !== "@2255Dundaswest") {
        res.status(401).json({ error: "Invalid credentials" });
        return;
      }
      const [application] = await db.select().from(workerApplications).where(eq16(workerApplications.id, req.params.id));
      if (!application) {
        res.status(404).json({ error: "Application not found" });
        return;
      }
      res.json(application);
    } catch (error) {
      console.error("Error fetching application:", error);
      res.status(500).json({ error: "Failed to fetch application" });
    }
  });
  app2.patch("/api/admin/applications/:id", async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Basic ")) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const base64Credentials = authHeader.split(" ")[1];
      const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
      const [username, password] = credentials.split(":");
      if (username !== "wfconnect" || password !== "@2255Dundaswest") {
        res.status(401).json({ error: "Invalid credentials" });
        return;
      }
      const { status, notes } = req.body;
      const [updatedApplication] = await db.update(workerApplications).set({
        status,
        notes,
        reviewedAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq16(workerApplications.id, req.params.id)).returning();
      if (!updatedApplication) {
        res.status(404).json({ error: "Application not found" });
        return;
      }
      if (status === "approved" && updatedApplication.email) {
        try {
          const [existingUser] = await db.select({ id: users.id }).from(users).where(eq16(users.email, updatedApplication.email.toLowerCase())).limit(1);
          if (existingUser) {
            const updateData = {
              onboardingStatus: "AGREEMENT_PENDING",
              updatedAt: /* @__PURE__ */ new Date()
            };
            if (updatedApplication.phone) {
              updateData.phone = updatedApplication.phone;
            }
            await db.update(users).set(updateData).where(eq16(users.id, existingUser.id));
            console.log(`[APPROVAL] Updated existing user ${updatedApplication.email} to AGREEMENT_PENDING`);
          } else {
            if (updatedApplication.phone) {
              const [phoneDuplicate] = await db.select({ id: users.id }).from(users).where(eq16(users.phone, updatedApplication.phone)).limit(1);
              if (phoneDuplicate) {
                res.status(409).json({ error: `A worker with phone ${updatedApplication.phone} already exists.` });
                return;
              }
            }
            const fullNameToUse = updatedApplication.fullName || "Worker";
            const [fullNameDuplicate] = await db.select({ id: users.id }).from(users).where(eq16(users.fullName, fullNameToUse)).limit(1);
            if (fullNameDuplicate) {
              res.status(409).json({ error: `A worker named "${fullNameToUse}" already exists.` });
              return;
            }
            const firstName = fullNameToUse.split(" ")[0].toLowerCase().replace(/[^a-z]/g, "");
            const phoneLast4 = (updatedApplication.phone || "0000").replace(/\D/g, "").slice(-4);
            const tempPassword = `${firstName}${phoneLast4}`;
            const hashedPassword = await bcrypt.hash(tempPassword, 10);
            await db.insert(users).values({
              id: crypto2.randomUUID(),
              email: updatedApplication.email.toLowerCase(),
              password: hashedPassword,
              fullName: fullNameToUse,
              role: "worker",
              phone: updatedApplication.phone || void 0,
              isActive: true,
              onboardingStatus: "AGREEMENT_PENDING",
              workerRoles: updatedApplication.preferredRoles || void 0,
              mustChangePassword: true,
              timezone: "America/Toronto"
            });
            console.log(`[APPROVAL] Created user account for ${updatedApplication.email}`);
            if (updatedApplication.phone) {
              try {
                const smsMessage = `Welcome to WFConnect! Your application has been approved. Download the app and log in with:
Email: ${updatedApplication.email}
Password: ${tempPassword}
Please change your password after first login.`;
                await sendSMS(updatedApplication.phone, smsMessage);
                console.log(`[APPROVAL] Welcome SMS sent to ${updatedApplication.phone}`);
              } catch (smsError) {
                console.error("[APPROVAL] Failed to send welcome SMS:", smsError);
              }
            }
          }
        } catch (linkError) {
          console.error("Failed to create/update user on approval:", linkError);
        }
      }
      res.json(updatedApplication);
    } catch (error) {
      console.error("Error updating application:", error);
      res.status(500).json({ error: "Failed to update application" });
    }
  });
  app2.delete("/api/admin/applications/:id", async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Basic ")) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const base64Credentials = authHeader.split(" ")[1];
      const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
      const [username, password] = credentials.split(":");
      if (username !== "wfconnect" || password !== "@2255Dundaswest") {
        res.status(401).json({ error: "Invalid credentials" });
        return;
      }
      const [deletedApplication] = await db.delete(workerApplications).where(eq16(workerApplications.id, req.params.id)).returning();
      if (!deletedApplication) {
        res.status(404).json({ error: "Application not found" });
        return;
      }
      res.json({ success: true, message: "Application deleted successfully" });
    } catch (error) {
      console.error("Error deleting application:", error);
      res.status(500).json({ error: "Failed to delete application" });
    }
  });
  app2.post("/api/admin/send-app-instructions", async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      const userId = req.headers["x-user-id"];
      const userRole = req.headers["x-user-role"];
      let authenticated = false;
      if (userId && (userRole === "admin" || userRole === "hr")) {
        authenticated = true;
      } else if (authHeader && authHeader.startsWith("Basic ")) {
        const base64Credentials = authHeader.split(" ")[1];
        const creds = Buffer.from(base64Credentials, "base64").toString("utf-8");
        const [username, password] = creds.split(":");
        if (username === "wfconnect" && password === "@2255Dundaswest") {
          authenticated = true;
        }
      }
      if (!authenticated) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const allWorkers = await db.select({
        id: users.id,
        email: users.email,
        fullName: users.fullName,
        phone: users.phone,
        mustChangePassword: users.mustChangePassword
      }).from(users).where(eq16(users.role, "worker"));
      const alreadySent = await db.select({ workerId: smsLogs.workerId }).from(smsLogs).where(and13(
        eq16(smsLogs.direction, "outbound"),
        sql13`${smsLogs.message} LIKE '%WFConnect App%Download%'`
      ));
      const sentWorkerIds = new Set(alreadySent.map((s) => s.workerId));
      let sent = 0;
      let skipped = 0;
      let alreadyNotified = 0;
      for (const worker of allWorkers) {
        if (!worker.phone) {
          skipped++;
          continue;
        }
        if (sentWorkerIds.has(worker.id)) {
          alreadyNotified++;
          continue;
        }
        let smsMessage;
        if (worker.mustChangePassword) {
          smsMessage = `WFConnect App is now available! Download from App Store or Google Play. Log in with:
Email: ${worker.email}
Your temporary password was sent when your application was approved. Change your password after first login.`;
        } else {
          smsMessage = `WFConnect App is now available! Download from App Store or Google Play. Log in with your email: ${worker.email}`;
        }
        try {
          const result = await sendSMS(worker.phone, smsMessage);
          if (result.success) {
            await logSMS({
              phoneNumber: worker.phone,
              direction: "outbound",
              message: smsMessage,
              workerId: worker.id,
              status: "sent",
              openphoneMessageId: result.messageId
            });
            sent++;
          } else {
            skipped++;
          }
        } catch (smsErr) {
          console.error(`[BULK SMS] Failed for ${worker.email}:`, smsErr);
          skipped++;
        }
      }
      console.log(`[BULK SMS] Sent: ${sent}, Skipped: ${skipped}, Already notified: ${alreadyNotified}`);
      res.json({ success: true, sent, skipped, alreadyNotified, total: allWorkers.length });
    } catch (error) {
      console.error("Error sending bulk app instructions:", error);
      res.status(500).json({ error: "Failed to send app instructions" });
    }
  });
  app2.get("/api/admin/sync/status", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const userRole = req.headers["x-user-role"];
      if (!userId || userRole !== "admin" && userRole !== "hr") {
        res.status(403).json({ error: "Admin or HR access required" });
        return;
      }
      const { getSyncStatus: getSyncStatus2, getCrmPushQueueStats: getCrmPushQueueStats2 } = await Promise.resolve().then(() => (init_crm_sync(), crm_sync_exports));
      const status = await getSyncStatus2();
      const pushQueueStats = await getCrmPushQueueStats2();
      res.json({ ...status, pushQueue: pushQueueStats });
    } catch (error) {
      console.error("Error getting sync status:", error);
      res.status(500).json({ error: "Failed to get sync status" });
    }
  });
  app2.get("/api/admin/sync/logs", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const userRole = req.headers["x-user-role"];
      if (!userId || userRole !== "admin" && userRole !== "hr") {
        res.status(403).json({ error: "Admin or HR access required" });
        return;
      }
      const { getSyncLogs: getSyncLogs2 } = await Promise.resolve().then(() => (init_crm_sync(), crm_sync_exports));
      const limit = parseInt(req.query.limit) || 50;
      const logs = await getSyncLogs2(limit);
      res.json(logs);
    } catch (error) {
      console.error("Error getting sync logs:", error);
      res.status(500).json({ error: "Failed to get sync logs" });
    }
  });
  app2.post("/api/admin/sync/workplaces", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const userRole = req.headers["x-user-role"];
      if (!userId || userRole !== "admin" && userRole !== "hr") {
        res.status(403).json({ error: "Admin or HR access required" });
        return;
      }
      const { syncWorkplaces: syncWorkplaces2, isSyncRunning: isSyncRunning2 } = await Promise.resolve().then(() => (init_crm_sync(), crm_sync_exports));
      if (isSyncRunning2()) {
        res.status(409).json({ error: "A sync is already running" });
        return;
      }
      const dryRun = req.query.dryRun === "true";
      const result = await syncWorkplaces2(dryRun);
      res.json({ success: true, dryRun, ...result });
    } catch (error) {
      console.error("Error syncing workplaces:", error);
      res.status(500).json({ error: error.message || "Failed to sync workplaces" });
    }
  });
  app2.post("/api/admin/sync/shifts", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const userRole = req.headers["x-user-role"];
      if (!userId || userRole !== "admin" && userRole !== "hr") {
        res.status(403).json({ error: "Admin or HR access required" });
        return;
      }
      const { syncConfirmedShifts: syncConfirmedShifts2, isSyncRunning: isSyncRunning2 } = await Promise.resolve().then(() => (init_crm_sync(), crm_sync_exports));
      if (isSyncRunning2()) {
        res.status(409).json({ error: "A sync is already running" });
        return;
      }
      const dryRun = req.query.dryRun === "true";
      const result = await syncConfirmedShifts2(dryRun);
      res.json({ success: true, dryRun, ...result });
    } catch (error) {
      console.error("Error syncing shifts:", error);
      res.status(500).json({ error: error.message || "Failed to sync shifts" });
    }
  });
  app2.post("/api/admin/sync/hotel-requests", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const userRole = req.headers["x-user-role"];
      if (!userId || userRole !== "admin" && userRole !== "hr") {
        res.status(403).json({ error: "Admin or HR access required" });
        return;
      }
      const { syncHotelRequests: syncHotelRequests2, isSyncRunning: isSyncRunning2 } = await Promise.resolve().then(() => (init_crm_sync(), crm_sync_exports));
      if (isSyncRunning2()) {
        res.status(409).json({ error: "A sync is already running" });
        return;
      }
      const dryRun = req.query.dryRun === "true";
      const result = await syncHotelRequests2(dryRun);
      res.json({ success: true, dryRun, ...result });
    } catch (error) {
      console.error("Error syncing hotel requests:", error);
      res.status(500).json({ error: error.message || "Failed to sync hotel requests" });
    }
  });
  app2.post("/api/admin/sync/all", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const userRole = req.headers["x-user-role"];
      if (!userId || userRole !== "admin" && userRole !== "hr") {
        res.status(403).json({ error: "Admin or HR access required" });
        return;
      }
      const { syncAll: syncAll2 } = await Promise.resolve().then(() => (init_crm_sync(), crm_sync_exports));
      const dryRun = req.query.dryRun === "true";
      const result = await syncAll2(dryRun);
      res.json({ success: true, dryRun, ...result });
    } catch (error) {
      console.error("Error running full sync:", error);
      res.status(500).json({ error: error.message || "Failed to run full sync" });
    }
  });
  app2.post("/api/admin/workplaces/sync-to-crm", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const userRole = req.headers["x-user-role"];
      if (!userId || userRole !== "admin" && userRole !== "hr") {
        res.status(403).json({ error: "Admin or HR access required" });
        return;
      }
      const { backfillWorkplacesToCrm: backfillWorkplacesToCrm2 } = await Promise.resolve().then(() => (init_crm_sync(), crm_sync_exports));
      const result = await backfillWorkplacesToCrm2();
      res.json({ success: true, ...result });
    } catch (error) {
      console.error("Error running workplace CRM backfill:", error);
      res.status(500).json({ error: error.message || "Failed to run workplace CRM backfill" });
    }
  });
  app2.get("/api/admin/ai-assistant/status", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const userRole = req.headers["x-user-role"];
      if (!userId || userRole !== "admin" && userRole !== "hr") {
        res.status(403).json({ error: "Admin or HR access required" });
        return;
      }
      const { getStatus: getStatus2 } = await Promise.resolve().then(() => (init_ai_assistant(), ai_assistant_exports));
      res.json(getStatus2());
    } catch (error) {
      res.status(500).json({ error: error.message || "Failed to get AI assistant status" });
    }
  });
  app2.get("/api/admin/ai-assistant/logs", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const userRole = req.headers["x-user-role"];
      if (!userId || userRole !== "admin" && userRole !== "hr") {
        res.status(403).json({ error: "Admin or HR access required" });
        return;
      }
      const limit = Math.min(parseInt(req.query.limit) || 50, 200);
      const logs = await db.select().from(aiActionLogs).orderBy(desc6(aiActionLogs.createdAt)).limit(limit);
      res.json(logs);
    } catch (error) {
      res.status(500).json({ error: error.message || "Failed to get AI assistant logs" });
    }
  });
  app2.post("/api/admin/ai-assistant/trigger", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const userRole = req.headers["x-user-role"];
      if (!userId || userRole !== "admin") {
        res.status(403).json({ error: "Admin access required" });
        return;
      }
      const { triggerManualCycle: triggerManualCycle2 } = await Promise.resolve().then(() => (init_ai_assistant(), ai_assistant_exports));
      await triggerManualCycle2();
      res.json({ success: true, message: "Monitor cycle completed" });
    } catch (error) {
      res.status(500).json({ error: error.message || "Failed to trigger monitor cycle" });
    }
  });
  app2.post("/api/admin/ai-assistant/pause", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const userRole = req.headers["x-user-role"];
      if (!userId || userRole !== "admin") {
        res.status(403).json({ error: "Admin access required" });
        return;
      }
      const aiModule = await Promise.resolve().then(() => (init_ai_assistant(), ai_assistant_exports));
      const loggerModule = await Promise.resolve().then(() => (init_logger(), logger_exports));
      aiModule.pause();
      await loggerModule.logAction({ monitorType: "system", signalSummary: "Assistant paused by admin", actionTaken: "paused", alertSentTo: userId });
      res.json({ success: true, message: "Assistant paused" });
    } catch (error) {
      res.status(500).json({ error: error.message || "Failed to pause assistant" });
    }
  });
  app2.post("/api/admin/ai-assistant/resume", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const userRole = req.headers["x-user-role"];
      if (!userId || userRole !== "admin") {
        res.status(403).json({ error: "Admin access required" });
        return;
      }
      const aiModule = await Promise.resolve().then(() => (init_ai_assistant(), ai_assistant_exports));
      const loggerModule = await Promise.resolve().then(() => (init_logger(), logger_exports));
      aiModule.resume();
      await loggerModule.logAction({ monitorType: "system", signalSummary: "Assistant resumed by admin", actionTaken: "resumed", alertSentTo: userId });
      res.json({ success: true, message: "Assistant resumed" });
    } catch (error) {
      res.status(500).json({ error: error.message || "Failed to resume assistant" });
    }
  });
  app2.post("/api/clawd/chat", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const { message, imageBase64 } = req.body;
      if (!message || typeof message !== "string" || message.trim().length === 0) {
        res.status(400).json({ error: "message is required" });
        return;
      }
      const history = await db.select().from(clawdChatMessages).where(eq16(clawdChatMessages.userId, userId)).orderBy(asc(clawdChatMessages.createdAt));
      const conversationHistory = history.map((h) => ({ role: h.role, content: h.content }));
      const MAX_IMAGES = 4;
      const MAX_BASE64_SIZE = 5 * 1024 * 1024;
      let images = Array.isArray(imageBase64) ? imageBase64.filter((s) => typeof s === "string" && s.length <= MAX_BASE64_SIZE).slice(0, MAX_IMAGES) : void 0;
      const result = await orchestrate({
        userMessage: message.trim(),
        conversationHistory,
        userId,
        imageBase64: images && images.length > 0 ? images : void 0
      });
      const userContent = images && images.length > 0 ? `[User sent ${images.length} image(s)]
${message.trim()}` : message.trim();
      await db.insert(clawdChatMessages).values({
        userId,
        role: "user",
        content: userContent
      });
      await db.insert(clawdChatMessages).values({
        userId,
        role: "assistant",
        content: result.response,
        metadata: JSON.stringify({
          assistantsInvoked: result.assistantsInvoked,
          overallSeverity: result.overallSeverity,
          isActionMode: result.isActionMode || false,
          toolCalls: result.toolCalls || [],
          metadata: result.metadata
        })
      });
      res.json(result);
    } catch (error) {
      console.error("[CLAWD] Chat error:", error);
      res.status(500).json({ error: error.message || "Failed to process chat message" });
    }
  });
  app2.get("/api/clawd/history", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const messages3 = await db.select().from(clawdChatMessages).where(eq16(clawdChatMessages.userId, userId)).orderBy(asc(clawdChatMessages.createdAt));
      res.json(messages3);
    } catch (error) {
      console.error("[CLAWD] History error:", error);
      res.status(500).json({ error: error.message || "Failed to fetch chat history" });
    }
  });
  app2.delete("/api/clawd/history", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      await db.delete(clawdChatMessages).where(eq16(clawdChatMessages.userId, userId));
      res.json({ success: true, message: "Chat history cleared" });
    } catch (error) {
      console.error("[CLAWD] Delete history error:", error);
      res.status(500).json({ error: error.message || "Failed to delete chat history" });
    }
  });
  app2.get("/api/clawd/briefing", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const briefing = await generateBriefing(userId);
      res.json(briefing);
    } catch (error) {
      console.error("[CLAWD] Briefing error:", error);
      res.status(500).json({ error: error.message || "Failed to generate briefing" });
    }
  });
  app2.get("/api/clawd/runs", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const assistantType = req.query.assistantType;
      const conditions = [];
      if (assistantType) {
        conditions.push(eq16(clawdAssistantRuns.assistantType, assistantType));
      }
      const runs = await db.select().from(clawdAssistantRuns).where(conditions.length > 0 ? and13(...conditions) : void 0).orderBy(desc6(clawdAssistantRuns.createdAt)).limit(50);
      res.json(runs);
    } catch (error) {
      console.error("[CLAWD] Runs error:", error);
      res.status(500).json({ error: error.message || "Failed to fetch assistant runs" });
    }
  });
  app2.post("/api/discord/preview-announcement", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { rawText } = req.body;
      if (!rawText || typeof rawText !== "string" || rawText.trim().length === 0) {
        res.status(400).json({ error: "rawText is required" });
        return;
      }
      const { callClaude: callClaude2 } = await Promise.resolve().then(() => (init_anthropic_client(), anthropic_client_exports));
      const systemPrompt = `You are a professional communications assistant for WFConnect, a workforce management platform.
Your job is to take rough announcement drafts and polish them into clear, professional Discord announcements.

RULES:
- Keep it concise (2-4 sentences max for the body)
- Professional but warm in tone \u2014 avoid corporate jargon
- Choose a color that fits the tone: "blue" (info/general), "green" (success/positive news), "amber" (heads-up/reminder), "red" (urgent), "purple" (milestone/celebration)
- Return ONLY valid JSON, no extra text

Respond with exactly:
{"title":"Short headline (max 8 words)","body":"Polished announcement text here.","color":"blue"}`;
      const response = await callClaude2(systemPrompt, [
        { role: "user", content: `Polish this announcement draft:

${rawText.trim()}` }
      ], { maxTokens: 400, temperature: 0.5 });
      let parsed;
      try {
        const cleaned = response.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
        const firstBrace = cleaned.indexOf("{");
        const lastBrace = cleaned.lastIndexOf("}");
        parsed = JSON.parse(firstBrace !== -1 ? cleaned.slice(firstBrace, lastBrace + 1) : cleaned);
      } catch {
        parsed = { title: "Announcement", body: response.slice(0, 500), color: "blue" };
      }
      res.json({ title: parsed.title || "Announcement", body: parsed.body || rawText, color: parsed.color || "blue" });
    } catch (error) {
      console.error("[DISCORD ANNOUNCE] Preview error:", error);
      res.status(500).json({ error: error.message || "Failed to preview announcement" });
    }
  });
  app2.post("/api/discord/send-announcement", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { title, body, color } = req.body;
      if (!title || !body) {
        res.status(400).json({ error: "title and body are required" });
        return;
      }
      const result = await sendDiscordNotification({
        title: String(title),
        message: String(body),
        color: ["red", "blue", "green", "amber", "purple"].includes(color) ? color : "blue",
        type: "announcement"
      });
      if (!result.success) {
        res.status(502).json({ error: result.error || "Failed to send to Discord" });
        return;
      }
      res.json({ success: true, alertId: result.alertId });
    } catch (error) {
      console.error("[DISCORD ANNOUNCE] Send error:", error);
      res.status(500).json({ error: error.message || "Failed to send announcement" });
    }
  });
  app2.get("/api/discord-alerts", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const status = req.query.status;
      const type = req.query.type;
      const conditions = [];
      if (status && status !== "all") conditions.push(eq16(discordAlerts.status, status));
      if (type) conditions.push(eq16(discordAlerts.type, type));
      const alerts = await db.select().from(discordAlerts).where(conditions.length > 0 ? and13(...conditions) : void 0).orderBy(desc6(discordAlerts.createdAt)).limit(50);
      res.json(alerts);
    } catch (error) {
      console.error("[Discord Alerts] Fetch error:", error);
      res.status(500).json({ error: error.message || "Failed to fetch alerts" });
    }
  });
  app2.post("/api/discord-alerts/:alertId/acknowledge", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { alertId } = req.params;
      const { responseNote } = req.body;
      const userId = req.user?.id || "unknown";
      const [user] = await db.select({ fullName: users.fullName }).from(users).where(eq16(users.id, userId));
      const acknowledgedBy = user?.fullName || userId;
      const success = await acknowledgeAlert(alertId, acknowledgedBy, responseNote);
      if (!success) {
        return res.status(404).json({ error: "Alert not found" });
      }
      res.json({ success: true, acknowledgedBy });
    } catch (error) {
      console.error("[Discord Alerts] Acknowledge error:", error);
      res.status(500).json({ error: error.message || "Failed to acknowledge alert" });
    }
  });
  app2.post("/api/webhooks/discord", async (req, res) => {
    try {
      res.status(200).json({ received: true });
      const body = req.body;
      if (body?.type === 1) return;
      const content = body?.content || body?.message?.content || "";
      const ackMatch = content.match(/ACK\s+(WFC-[A-Z0-9]+)/i) || content.match(/ACKNOWLEDGE\s+(WFC-[A-Z0-9]+)/i);
      if (!ackMatch) {
        console.log("[Discord Webhook] No ACK pattern found in:", content.slice(0, 100));
        return;
      }
      const alertId = ackMatch[1].toUpperCase();
      const username = body?.author?.username || body?.username || "Discord User";
      const success = await acknowledgeAlert(alertId, username);
      console.log(`[Discord Webhook] Alert ${alertId} ${success ? "acknowledged" : "not found"} by ${username}`);
    } catch (error) {
      console.error("[Discord Webhook] Error:", error?.message);
    }
  });
  app2.post("/api/webhooks/crm", async (req, res) => {
    try {
      const webhookSecret = process.env.CRM_WEBHOOK_SECRET;
      if (!webhookSecret) {
        res.status(501).json({ error: "CRM webhook secret not configured. Set CRM_WEBHOOK_SECRET env var." });
        return;
      }
      const providedSecret = req.headers["x-crm-webhook-secret"];
      if (!providedSecret || providedSecret !== webhookSecret) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      }
      res.status(200).json({ received: true });
      const { event, data } = req.body || {};
      console.log(`[CRM Webhook] Received event: ${event || "unknown"}`);
      const { syncAll: syncAll2, isSyncRunning: isSyncRunning2 } = await Promise.resolve().then(() => (init_crm_sync(), crm_sync_exports));
      if (!isSyncRunning2()) {
        syncAll2(false).catch(
          (err) => console.error("[CRM Webhook] syncAll failed:", err?.message)
        );
      }
      if (event === "hotel_request.created" && data?.hotelName) {
        try {
          const { sendDiscordNotification: sendDiscordNotification2 } = await Promise.resolve().then(() => (init_discord(), discord_exports));
          await sendDiscordNotification2({
            title: "New CRM Hotel Request",
            message: `**${data.hotelName}** needs ${data.quantityNeeded || 1} ${data.roleNeeded || "worker(s)"}
Shift: ${data.shiftStartAt || "TBD"} - ${data.shiftEndAt || "TBD"}`,
            color: "blue"
          });
        } catch (discordErr) {
          console.error("[CRM Webhook] Discord alert failed:", discordErr?.message);
        }
        try {
          const GM_PHONE2 = "+14166028038";
          const { sendSMS: sendSMS2, logSMS: logSMS2 } = await Promise.resolve().then(() => (init_openphone(), openphone_exports));
          const msg = `CRM Alert: New hotel request from ${data.hotelName} - ${data.quantityNeeded || 1} ${data.roleNeeded || "worker(s)"} needed`;
          await sendSMS2(GM_PHONE2, msg);
          await logSMS2({ phoneNumber: GM_PHONE2, direction: "outbound", message: msg, status: "sent" });
        } catch (smsErr) {
          console.error("[CRM Webhook] SMS alert failed:", smsErr?.message);
        }
      }
    } catch (error) {
      console.error("[CRM Webhook] Error:", error?.message);
    }
  });
  app2.get("/api/appointments/upcoming", checkRoles("admin", "hr"), async (_req, res) => {
    try {
      const now = /* @__PURE__ */ new Date();
      const results = await db.select({
        id: appointments.id,
        title: appointments.title,
        companyName: appointments.companyName,
        contactName: appointments.contactName,
        contactPhone: appointments.contactPhone,
        contactEmail: appointments.contactEmail,
        appointmentDate: appointments.appointmentDate,
        location: appointments.location,
        address: appointments.address,
        latitude: appointments.latitude,
        longitude: appointments.longitude,
        leadSource: appointments.leadSource,
        status: appointments.status,
        assignedUserId: appointments.assignedUserId,
        notes: appointments.notes,
        outcome: appointments.outcome,
        crmAppointmentId: appointments.crmAppointmentId,
        crmSource: appointments.crmSource,
        createdBy: appointments.createdBy,
        createdAt: appointments.createdAt,
        updatedAt: appointments.updatedAt,
        assignedUserName: users.fullName
      }).from(appointments).leftJoin(users, eq16(appointments.assignedUserId, users.id)).where(and13(
        eq16(appointments.status, "scheduled"),
        gte10(appointments.appointmentDate, now)
      )).orderBy(asc(appointments.appointmentDate)).limit(20);
      res.json(results);
    } catch (error) {
      console.error("[APPOINTMENTS] Error fetching upcoming:", error);
      res.status(500).json({ error: "Failed to fetch upcoming appointments" });
    }
  });
  app2.get("/api/appointments", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { status, assignedUserId, startDate, endDate, leadSource } = req.query;
      const conditions = [];
      if (status) {
        conditions.push(eq16(appointments.status, status));
      }
      if (assignedUserId) {
        conditions.push(eq16(appointments.assignedUserId, assignedUserId));
      }
      if (startDate) {
        conditions.push(gte10(appointments.appointmentDate, new Date(startDate)));
      }
      if (endDate) {
        conditions.push(lte10(appointments.appointmentDate, new Date(endDate)));
      }
      if (leadSource) {
        conditions.push(eq16(appointments.leadSource, leadSource));
      }
      const results = await db.select({
        id: appointments.id,
        title: appointments.title,
        companyName: appointments.companyName,
        contactName: appointments.contactName,
        contactPhone: appointments.contactPhone,
        contactEmail: appointments.contactEmail,
        appointmentDate: appointments.appointmentDate,
        location: appointments.location,
        address: appointments.address,
        latitude: appointments.latitude,
        longitude: appointments.longitude,
        leadSource: appointments.leadSource,
        status: appointments.status,
        assignedUserId: appointments.assignedUserId,
        notes: appointments.notes,
        outcome: appointments.outcome,
        crmAppointmentId: appointments.crmAppointmentId,
        crmSource: appointments.crmSource,
        createdBy: appointments.createdBy,
        createdAt: appointments.createdAt,
        updatedAt: appointments.updatedAt,
        assignedUserName: users.fullName
      }).from(appointments).leftJoin(users, eq16(appointments.assignedUserId, users.id)).where(conditions.length > 0 ? and13(...conditions) : void 0).orderBy(desc6(appointments.appointmentDate));
      res.json(results);
    } catch (error) {
      console.error("[APPOINTMENTS] Error fetching:", error);
      res.status(500).json({ error: "Failed to fetch appointments" });
    }
  });
  app2.post("/api/appointments", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const body = { ...req.body, createdBy: userId };
      if (typeof body.appointmentDate === "string") {
        body.appointmentDate = new Date(body.appointmentDate);
      }
      const parsed = insertAppointmentSchema.safeParse(body);
      if (!parsed.success) {
        res.status(400).json({ error: "Validation failed", details: parsed.error.flatten() });
        return;
      }
      const [created] = await db.insert(appointments).values(parsed.data).returning();
      if (created.contactPhone) {
        const apptDate = new Date(created.appointmentDate);
        const dateLabel = apptDate.toLocaleDateString("en-CA", { timeZone: "America/Toronto" });
        const timeLabel = apptDate.toLocaleTimeString("en-CA", { timeZone: "America/Toronto", hour: "2-digit", minute: "2-digit" });
        const contactMsg = `Hi ${created.contactName}, this is WFConnect confirming your appointment on ${dateLabel} at ${timeLabel}. Location: ${created.location || "TBD"}. Questions? Reply to this message.`;
        try {
          const cRes = await sendSMS(created.contactPhone, contactMsg);
          await logSMS({ phoneNumber: created.contactPhone, direction: "outbound", message: contactMsg, status: cRes.success ? "sent" : "failed" });
        } catch (smsErr) {
          console.error("[APPOINTMENTS] Contact SMS failed:", smsErr);
        }
      }
      if (created.assignedUserId) {
        const [assignedUser] = await db.select({ phone: users.phone, fullName: users.fullName }).from(users).where(eq16(users.id, created.assignedUserId)).limit(1);
        if (assignedUser?.phone) {
          const apptDate = new Date(created.appointmentDate);
          const dateLabel = apptDate.toLocaleDateString("en-CA", { timeZone: "America/Toronto" });
          const timeLabel = apptDate.toLocaleTimeString("en-CA", { timeZone: "America/Toronto", hour: "2-digit", minute: "2-digit" });
          const assignMsg = `Appointment assigned to you: ${created.title || created.companyName} on ${dateLabel} at ${timeLabel}. Location: ${created.location || "TBD"}.`;
          try {
            const aRes = await sendSMS(assignedUser.phone, assignMsg);
            await logSMS({ phoneNumber: assignedUser.phone, direction: "outbound", message: assignMsg, status: aRes.success ? "sent" : "failed" });
          } catch (smsErr) {
            console.error("[APPOINTMENTS] Assignee SMS failed:", smsErr);
          }
        }
      }
      res.status(201).json(created);
    } catch (error) {
      console.error("[APPOINTMENTS] Error creating:", error);
      res.status(500).json({ error: "Failed to create appointment" });
    }
  });
  app2.post("/api/appointments/:id/send-sms", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { id } = req.params;
      const [appt] = await db.select().from(appointments).where(eq16(appointments.id, id)).limit(1);
      if (!appt) {
        res.status(404).json({ error: "Appointment not found" });
        return;
      }
      if (!appt.contactPhone) {
        res.status(400).json({ error: "No contact phone on this appointment" });
        return;
      }
      const apptDate = new Date(appt.appointmentDate);
      const dateLabel = apptDate.toLocaleDateString("en-CA", { timeZone: "America/Toronto" });
      const timeLabel = apptDate.toLocaleTimeString("en-CA", { timeZone: "America/Toronto", hour: "2-digit", minute: "2-digit" });
      const msg = `Hi ${appt.contactName}, this is WFConnect confirming your appointment on ${dateLabel} at ${timeLabel}. Location: ${appt.location || "TBD"}. Questions? Reply to this message.`;
      const smsRes = await sendSMS(appt.contactPhone, msg);
      await logSMS({ phoneNumber: appt.contactPhone, direction: "outbound", message: msg, status: smsRes.success ? "sent" : "failed" });
      res.json({ success: true, sent: smsRes.success });
    } catch (error) {
      console.error("[APPOINTMENTS] send-sms error:", error);
      res.status(500).json({ error: "Failed to send SMS" });
    }
  });
  app2.patch("/api/appointments/:id", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { id } = req.params;
      const [existing] = await db.select({ id: appointments.id }).from(appointments).where(eq16(appointments.id, id));
      if (!existing) {
        res.status(404).json({ error: "Appointment not found" });
        return;
      }
      const updateData = { ...req.body, updatedAt: /* @__PURE__ */ new Date() };
      if (typeof updateData.appointmentDate === "string") {
        updateData.appointmentDate = new Date(updateData.appointmentDate);
      }
      const [updated] = await db.update(appointments).set(updateData).where(eq16(appointments.id, id)).returning();
      res.json(updated);
    } catch (error) {
      console.error("[APPOINTMENTS] Error updating:", error);
      res.status(500).json({ error: "Failed to update appointment" });
    }
  });
  app2.delete("/api/appointments/:id", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { id } = req.params;
      const [existing] = await db.select({ id: appointments.id }).from(appointments).where(eq16(appointments.id, id));
      if (!existing) {
        res.status(404).json({ error: "Appointment not found" });
        return;
      }
      const [cancelled] = await db.update(appointments).set({ status: "cancelled", updatedAt: /* @__PURE__ */ new Date() }).where(eq16(appointments.id, id)).returning();
      res.json(cancelled);
    } catch (error) {
      console.error("[APPOINTMENTS] Error deleting:", error);
      res.status(500).json({ error: "Failed to delete appointment" });
    }
  });
  app2.get("/api/config", checkRoles("admin", "hr"), async (_req, res) => {
    try {
      const configs = await db.select().from(appConfig).orderBy(asc(appConfig.key));
      const result = {};
      configs.forEach((c) => {
        result[c.key] = c.value;
      });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch config" });
    }
  });
  app2.put("/api/config/:key", checkRoles("admin"), async (req, res) => {
    try {
      const { key } = req.params;
      const { value, description } = req.body;
      const userId = req.user?.id;
      if (!value && value !== "") {
        return res.status(400).json({ error: "value is required" });
      }
      await db.insert(appConfig).values({ key, value, description: description || null, updatedBy: userId || null }).onConflictDoUpdate({
        target: appConfig.key,
        set: { value, description: description || null, updatedAt: /* @__PURE__ */ new Date(), updatedBy: userId || null }
      });
      res.json({ success: true, key, value });
    } catch (error) {
      console.error("[CONFIG] Update error:", error);
      res.status(500).json({ error: "Failed to update config" });
    }
  });
  app2.delete("/api/config/:key", checkRoles("admin"), async (req, res) => {
    try {
      await db.delete(appConfig).where(eq16(appConfig.key, req.params.key));
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete config" });
    }
  });
  app2.post("/api/applicants", async (req, res) => {
    try {
      const {
        fullName,
        phone,
        addressFull,
        addressStreet,
        addressCity,
        addressProvince,
        addressPostalCode,
        addressCountry,
        applyingFor,
        jobPostingSource,
        photoData: photoDataIn,
        photoFilename,
        photoMimeType,
        photoFileSize,
        resumeData: resumeDataIn,
        resumeFilename,
        resumeMimeType,
        resumeFileSize
      } = req.body;
      if (!fullName?.trim()) return res.status(400).json({ error: "Full name required" });
      if (!phone?.trim()) return res.status(400).json({ error: "Phone required" });
      if (!addressFull?.trim()) return res.status(400).json({ error: "Address required" });
      if (!applyingFor?.trim()) return res.status(400).json({ error: "Position required" });
      if (!jobPostingSource?.trim()) return res.status(400).json({ error: "Job posting source required" });
      if (!photoDataIn) return res.status(400).json({ error: "Photo required" });
      if (!resumeDataIn) return res.status(400).json({ error: "Resume required" });
      const PHOTO_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
      const RESUME_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      const MAX_SIZE = 10 * 1024 * 1024;
      if (photoMimeType && !PHOTO_TYPES.includes(photoMimeType)) {
        return res.status(400).json({ error: "Invalid photo file type" });
      }
      if (resumeMimeType && !RESUME_TYPES.includes(resumeMimeType)) {
        return res.status(400).json({ error: "Invalid resume file type" });
      }
      if (photoFileSize && photoFileSize > MAX_SIZE) {
        return res.status(400).json({ error: "Photo exceeds 10 MB limit" });
      }
      if (resumeFileSize && resumeFileSize > MAX_SIZE) {
        return res.status(400).json({ error: "Resume exceeds 10 MB limit" });
      }
      const now = /* @__PURE__ */ new Date();
      const [applicant] = await db.insert(applicants).values({
        fullName: fullName.trim(),
        phone: phone.trim(),
        addressFull: addressFull.trim(),
        addressStreet: addressStreet?.trim() || null,
        addressCity: addressCity?.trim() || null,
        addressProvince: addressProvince?.trim() || null,
        addressPostalCode: addressPostalCode?.trim() || null,
        addressCountry: addressCountry?.trim() || "Canada",
        applyingFor: applyingFor.trim(),
        jobPostingSource: jobPostingSource.trim(),
        photoData: photoDataIn,
        photoFilename: photoFilename || null,
        photoMimeType: photoMimeType || null,
        photoFileSize: photoFileSize || null,
        resumeData: resumeDataIn,
        resumeFilename: resumeFilename || null,
        resumeMimeType: resumeMimeType || null,
        resumeFileSize: resumeFileSize || null,
        status: "new",
        submittedAt: now
      }).returning({ id: applicants.id });
      console.log(`[APPLICANTS] New submission: ${fullName} (${phone}) for ${applyingFor}`);
      res.json({ success: true, applicantId: applicant.id });
    } catch (error) {
      console.error("[APPLICANTS] Submission error:", error);
      res.status(500).json({ error: "Failed to submit application" });
    }
  });
  app2.get("/api/applicants", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { search, status, limit: limitParam } = req.query;
      const limitVal = Math.min(parseInt(limitParam) || 50, 200);
      const conditions = [];
      if (status && status !== "all") conditions.push(eq16(applicants.status, status));
      if (search) {
        const s = `%${search}%`;
        conditions.push(
          sql13`(${applicants.fullName} ILIKE ${s} OR ${applicants.phone} ILIKE ${s})`
        );
      }
      const rows = await db.select({
        id: applicants.id,
        fullName: applicants.fullName,
        phone: applicants.phone,
        addressFull: applicants.addressFull,
        addressCity: applicants.addressCity,
        addressProvince: applicants.addressProvince,
        applyingFor: applicants.applyingFor,
        jobPostingSource: applicants.jobPostingSource,
        photoFilename: applicants.photoFilename,
        photoMimeType: applicants.photoMimeType,
        resumeFilename: applicants.resumeFilename,
        resumeMimeType: applicants.resumeMimeType,
        status: applicants.status,
        submittedAt: applicants.submittedAt
      }).from(applicants).where(conditions.length > 0 ? and13(...conditions) : void 0).orderBy(desc6(applicants.submittedAt)).limit(limitVal);
      res.json(rows);
    } catch (error) {
      console.error("[APPLICANTS] List error:", error);
      res.status(500).json({ error: "Failed to fetch applicants" });
    }
  });
  app2.get("/api/applicants/:id", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const [row] = await db.select().from(applicants).where(eq16(applicants.id, req.params.id));
      if (!row) return res.status(404).json({ error: "Applicant not found" });
      const { photoData: _p, resumeData: _r, ...safe } = row;
      res.json({ ...safe, hasPhoto: !!_p, hasResume: !!_r });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch applicant" });
    }
  });
  app2.patch("/api/applicants/:id/status", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { status, adminNotes } = req.body;
      const VALID = ["new", "reviewing", "interviewed", "hired", "rejected"];
      if (!VALID.includes(status)) return res.status(400).json({ error: "Invalid status" });
      const [updated] = await db.update(applicants).set({ status, adminNotes: adminNotes || null, updatedAt: /* @__PURE__ */ new Date() }).where(eq16(applicants.id, req.params.id)).returning({ id: applicants.id, status: applicants.status });
      if (!updated) return res.status(404).json({ error: "Applicant not found" });
      res.json(updated);
    } catch (error) {
      res.status(500).json({ error: "Failed to update status" });
    }
  });
  app2.get("/api/applicants/:id/download/photo", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const [row] = await db.select({ photoData: applicants.photoData, photoFilename: applicants.photoFilename, photoMimeType: applicants.photoMimeType }).from(applicants).where(eq16(applicants.id, req.params.id));
      if (!row?.photoData) return res.status(404).json({ error: "Photo not found" });
      const base64 = row.photoData.split(",")[1] || row.photoData;
      const buffer = Buffer.from(base64, "base64");
      res.setHeader("Content-Type", row.photoMimeType || "image/jpeg");
      res.setHeader("Content-Disposition", `attachment; filename="${row.photoFilename || "photo.jpg"}"`);
      res.send(buffer);
    } catch (error) {
      res.status(500).json({ error: "Failed to download photo" });
    }
  });
  app2.get("/api/applicants/:id/download/resume", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const [row] = await db.select({ resumeData: applicants.resumeData, resumeFilename: applicants.resumeFilename, resumeMimeType: applicants.resumeMimeType }).from(applicants).where(eq16(applicants.id, req.params.id));
      if (!row?.resumeData) return res.status(404).json({ error: "Resume not found" });
      const base64 = row.resumeData.split(",")[1] || row.resumeData;
      const buffer = Buffer.from(base64, "base64");
      res.setHeader("Content-Type", row.resumeMimeType || "application/pdf");
      res.setHeader("Content-Disposition", `attachment; filename="${row.resumeFilename || "resume.pdf"}"`);
      res.send(buffer);
    } catch (error) {
      res.status(500).json({ error: "Failed to download resume" });
    }
  });
  app2.get("/api/ai-message-log", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const logs = await db.select().from(aiMessageLog).orderBy(desc6(aiMessageLog.sentAt)).limit(100);
      res.json(logs);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch AI message log" });
    }
  });
  app2.get("/api/admin/applications/:id/agreement-pdf", async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Basic ")) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const base64Credentials = authHeader.split(" ")[1];
      const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
      const [username, password] = credentials.split(":");
      if (username !== "wfconnect" || password !== "@2255Dundaswest") {
        res.status(401).json({ error: "Invalid credentials" });
        return;
      }
      const [application] = await db.select().from(workerApplications).where(eq16(workerApplications.id, req.params.id));
      if (!application) {
        res.status(404).json({ error: "Application not found" });
        return;
      }
      const PDFDocument = (await import("pdfkit")).default;
      const doc = new PDFDocument({ size: "LETTER", margins: { top: 50, bottom: 50, left: 60, right: 60 } });
      const fileName = `Subcontractor_Agreement_${application.fullName.replace(/\s+/g, "_")}.pdf`;
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
      doc.pipe(res);
      const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
      doc.fontSize(18).font("Helvetica-Bold").text("SUBCONTRACTOR AGREEMENT", { align: "center" });
      doc.moveDown(0.3);
      doc.fontSize(11).font("Helvetica").text("1001328662 Ontario Inc.", { align: "center" });
      doc.moveDown(0.2);
      doc.fontSize(9).fillColor("#666666").text("1900 Dundas St. West, Mississauga L5K 1P9", { align: "center" });
      doc.fillColor("#000000");
      doc.moveDown(1);
      doc.moveTo(doc.page.margins.left, doc.y).lineTo(doc.page.margins.left + pageWidth, doc.y).stroke("#cccccc");
      doc.moveDown(1);
      doc.fontSize(13).font("Helvetica-Bold").text("1. Contractor Information");
      doc.moveDown(0.5);
      const addField = (label, value) => {
        doc.fontSize(9).font("Helvetica-Bold").fillColor("#555555").text(label, { continued: true });
        doc.font("Helvetica").fillColor("#000000").text(`  ${value || "N/A"}`);
        doc.moveDown(0.2);
      };
      addField("Full Name:", application.fullName);
      addField("Email:", application.email);
      addField("Phone:", application.phone);
      addField("Address:", `${application.address}, ${application.city}, ${application.province} ${application.postalCode}`);
      if (application.dateOfBirth) addField("Date of Birth:", application.dateOfBirth);
      const workStatusMap = {
        citizen: "Canadian Citizen",
        permanent_resident: "Permanent Resident",
        work_permit: "Work Permit Holder"
      };
      addField("Work Status:", workStatusMap[application.workStatus] || application.workStatus);
      doc.moveDown(0.5);
      doc.fontSize(13).font("Helvetica-Bold").fillColor("#000000").text("2. Scope of Work");
      doc.moveDown(0.5);
      let roles = [];
      try {
        roles = JSON.parse(application.preferredRoles);
      } catch (e) {
        roles = [application.preferredRoles];
      }
      addField("Preferred Roles:", roles.join(", "));
      let days = [];
      try {
        days = JSON.parse(application.availableDays);
      } catch (e) {
        days = [application.availableDays];
      }
      addField("Available Days:", days.join(", "));
      let shifts3 = [];
      try {
        shifts3 = JSON.parse(application.preferredShifts);
      } catch (e) {
        shifts3 = [application.preferredShifts];
      }
      addField("Preferred Shifts:", shifts3.join(", "));
      doc.moveDown(0.5);
      doc.fontSize(13).font("Helvetica-Bold").text("3. Terms and Conditions");
      doc.moveDown(0.5);
      doc.fontSize(9).font("Helvetica").text(
        'This Subcontractor Agreement (the "Agreement") is entered into by and between 1001328662 Ontario Inc. (the "Company"), located at 1900 Dundas St. West, Mississauga L5K 1P9, and the above-named individual (the "Contractor"). The Contractor agrees to perform services as an independent subcontractor, NOT as an employee of the Company.',
        { lineGap: 3 }
      );
      doc.moveDown(0.3);
      doc.text(
        "The Contractor acknowledges that they are responsible for their own tax obligations, including but not limited to income tax and HST/GST remittances. The Company will not withhold taxes, provide benefits, or make contributions to employment insurance or the Canada Pension Plan on behalf of the Contractor.",
        { lineGap: 3 }
      );
      doc.moveDown(0.3);
      doc.text(
        "The Contractor agrees to comply with all applicable laws, regulations, and client site rules while performing services. The Contractor understands that failure to comply may result in immediate termination of this Agreement.",
        { lineGap: 3 }
      );
      doc.moveDown(0.3);
      doc.text(
        "Either party may terminate this Agreement at any time with or without cause. The Contractor will be compensated for all services performed up to the date of termination.",
        { lineGap: 3 }
      );
      doc.moveDown(0.5);
      doc.fontSize(13).font("Helvetica-Bold").text("4. Time Tracking (TITO)");
      doc.moveDown(0.5);
      doc.fontSize(9).font("Helvetica").text(
        "The Contractor acknowledges that they must accurately submit Time-In/Time-Out (TITO) records through the designated platform. GPS verification may be required to confirm presence at work sites. Falsification of time records may result in immediate termination of this Agreement and forfeiture of payment for the affected period.",
        { lineGap: 3 }
      );
      doc.moveDown(0.5);
      doc.fontSize(13).font("Helvetica-Bold").text("5. Acknowledgments");
      doc.moveDown(0.5);
      const addCheckbox = (label, checked) => {
        const checkmark = checked ? "[X]" : "[ ]";
        doc.fontSize(9).font("Helvetica").text(`${checkmark}  ${label}`);
        doc.moveDown(0.2);
      };
      addCheckbox("TITO System Acknowledgment - I understand that I must accurately submit Time-In/Time-Out records", application.titoAcknowledgment ?? false);
      addCheckbox("Site Rules Agreement - I agree to adhere to client site-specific rules and regulations", application.siteRulesAcknowledgment ?? false);
      addCheckbox("Worker Agreement - I understand I will be working as an independent subcontractor, NOT as an employee", application.workerAgreementConsent ?? false);
      addCheckbox("Privacy Policy - I consent to the collection and use of my personal data (GDPR & PIPEDA compliant)", application.privacyConsent ?? false);
      addCheckbox("Marketing Communications (optional)", application.marketingConsent ?? false);
      doc.moveDown(0.5);
      doc.fontSize(13).font("Helvetica-Bold").text("6. Emergency Contact");
      doc.moveDown(0.5);
      addField("Name:", application.emergencyContactName);
      addField("Relationship:", application.emergencyContactRelationship);
      addField("Phone:", application.emergencyContactPhone);
      doc.moveDown(0.5);
      doc.moveTo(doc.page.margins.left, doc.y).lineTo(doc.page.margins.left + pageWidth, doc.y).stroke("#cccccc");
      doc.moveDown(1);
      doc.fontSize(13).font("Helvetica-Bold").text("7. Electronic Signature");
      doc.moveDown(0.5);
      doc.fontSize(9).font("Helvetica").text(
        "By signing below, the Contractor confirms that all information provided is true and accurate to the best of their knowledge. This electronic signature has the same legal effect as a handwritten signature.",
        { lineGap: 3 }
      );
      doc.moveDown(0.8);
      doc.fontSize(11).font("Helvetica-Bold").text("Signed:");
      doc.moveDown(0.3);
      doc.fontSize(14).font("Helvetica-Oblique").fillColor("#1a3a5c").text(application.signature, { underline: true });
      doc.fillColor("#000000");
      doc.moveDown(0.5);
      addField("Date Signed:", application.signatureDate);
      addField("Application Status:", application.status.toUpperCase());
      addField("Submitted:", new Date(application.createdAt).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" }));
      doc.moveDown(1.5);
      doc.moveTo(doc.page.margins.left, doc.y).lineTo(doc.page.margins.left + pageWidth, doc.y).stroke("#cccccc");
      doc.moveDown(0.5);
      doc.fontSize(8).font("Helvetica").fillColor("#999999").text(
        "This document was generated by 1001328662 Ontario Inc., 1900 Dundas St. West, Mississauga L5K 1P9. For questions, contact admin@wfconnect.org",
        { align: "center" }
      );
      doc.end();
    } catch (error) {
      console.error("Error generating agreement PDF:", error);
      res.status(500).json({ error: "Failed to generate PDF" });
    }
  });
  app2.get("/api/payment-profile", async (req, res) => {
    try {
      const userId = req.session?.userId;
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const [profile] = await db.select().from(paymentProfiles).where(eq16(paymentProfiles.workerUserId, userId));
      res.json(profile || null);
    } catch (error) {
      console.error("Error fetching payment profile:", error);
      res.status(500).json({ error: "Failed to fetch payment profile" });
    }
  });
  app2.put("/api/payment-profile", async (req, res) => {
    try {
      const userId = req.session?.userId;
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const { bankName, bankInstitution, bankTransit, bankAccount, etransferEmail } = req.body;
      if (!bankName || !bankInstitution || !bankTransit || !bankAccount) {
        res.status(400).json({ error: "Bank details are required (bank name, institution, transit, account)" });
        return;
      }
      if (!etransferEmail) {
        res.status(400).json({ error: "E-Transfer email is required" });
        return;
      }
      const [existing] = await db.select().from(paymentProfiles).where(eq16(paymentProfiles.workerUserId, userId));
      const paymentData = {
        paymentMethod: "both",
        bankName,
        bankInstitution,
        bankTransit,
        bankAccount,
        etransferEmail,
        updatedAt: /* @__PURE__ */ new Date()
      };
      if (existing) {
        const [updated] = await db.update(paymentProfiles).set(paymentData).where(eq16(paymentProfiles.workerUserId, userId)).returning();
        res.json(updated);
      } else {
        const [created] = await db.insert(paymentProfiles).values({ workerUserId: userId, ...paymentData }).returning();
        res.json(created);
      }
    } catch (error) {
      console.error("Error saving payment profile:", error);
      res.status(500).json({ error: "Failed to save payment profile" });
    }
  });
  app2.post("/api/public/payment-info", async (req, res) => {
    try {
      const ip = getClientIp(req);
      if (!checkRateLimit(ip)) {
        res.status(429).json({ error: "Too many requests. Please try again later." });
        return;
      }
      const { email, bankName, bankInstitution, bankTransit, bankAccount, etransferEmail } = req.body;
      if (!email) {
        res.status(400).json({ error: "Email is required" });
        return;
      }
      if (!bankName || !bankInstitution || !bankTransit || !bankAccount) {
        res.status(400).json({ error: "Bank details are required (bank name, institution, transit, account)" });
        return;
      }
      if (!etransferEmail) {
        res.status(400).json({ error: "E-Transfer email is required" });
        return;
      }
      const paymentData = {
        paymentMethod: "both",
        bankName,
        bankInstitution,
        bankTransit,
        bankAccount,
        etransferEmail,
        updatedAt: /* @__PURE__ */ new Date()
      };
      const [user] = await db.select().from(users).where(eq16(users.email, email.trim().toLowerCase()));
      if (!user) {
        const [application] = await db.select().from(workerApplications).where(eq16(workerApplications.email, email.trim().toLowerCase()));
        if (application) {
          await db.update(workerApplications).set(paymentData).where(eq16(workerApplications.id, application.id));
          res.json({ ok: true, message: "Payment information updated for your application" });
          return;
        }
        res.status(404).json({ error: "No account or application found with this email. Please apply first at /apply" });
        return;
      }
      const [existing] = await db.select().from(paymentProfiles).where(eq16(paymentProfiles.workerUserId, user.id));
      if (existing) {
        await db.update(paymentProfiles).set(paymentData).where(eq16(paymentProfiles.workerUserId, user.id));
      } else {
        await db.insert(paymentProfiles).values({ workerUserId: user.id, ...paymentData });
      }
      res.json({ ok: true, message: "Payment information saved successfully" });
    } catch (error) {
      console.error("Error saving public payment info:", error);
      res.status(500).json({ error: "Failed to save payment information. Please try again." });
    }
  });
  app2.get("/api/admin/payment-profiles", async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Basic ")) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const base64Credentials = authHeader.split(" ")[1];
      const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
      const [username, password] = credentials.split(":");
      if (username !== "wfconnect" || password !== "@2255Dundaswest") {
        res.status(401).json({ error: "Invalid credentials" });
        return;
      }
      const profiles = await db.select({
        id: paymentProfiles.id,
        workerUserId: paymentProfiles.workerUserId,
        paymentMethod: paymentProfiles.paymentMethod,
        bankName: paymentProfiles.bankName,
        bankInstitution: paymentProfiles.bankInstitution,
        bankTransit: paymentProfiles.bankTransit,
        bankAccount: paymentProfiles.bankAccount,
        etransferEmail: paymentProfiles.etransferEmail,
        workerName: users.fullName,
        workerEmail: users.email,
        createdAt: paymentProfiles.createdAt,
        updatedAt: paymentProfiles.updatedAt
      }).from(paymentProfiles).leftJoin(users, eq16(paymentProfiles.workerUserId, users.id)).orderBy(desc6(paymentProfiles.updatedAt));
      res.json(profiles);
    } catch (error) {
      console.error("Error fetching payment profiles:", error);
      res.status(500).json({ error: "Failed to fetch payment profiles" });
    }
  });
  app2.get("/api/workplaces", checkRoles("admin", "hr"), async (_req, res) => {
    try {
      const allWorkplaces = await db.select().from(workplaces).orderBy(desc6(workplaces.createdAt));
      res.json(allWorkplaces);
    } catch (error) {
      console.error("Error fetching workplaces:", error);
      res.status(500).json({ error: "Failed to fetch workplaces" });
    }
  });
  app2.get("/api/workplaces/:id", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const role = req.headers["x-user-role"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const [workplace] = await db.select().from(workplaces).where(eq16(workplaces.id, req.params.id));
      if (!workplace) {
        res.status(404).json({ error: "Workplace not found" });
        return;
      }
      if (role === "worker" || role === "client") {
        const [assignment] = await db.select().from(workplaceAssignments).where(and13(
          eq16(workplaceAssignments.workplaceId, req.params.id),
          eq16(workplaceAssignments.workerUserId, userId)
        ));
        const [assignedShift] = await db.select({ id: shifts.id }).from(shifts).where(and13(
          eq16(shifts.workplaceId, req.params.id),
          eq16(shifts.workerUserId, userId)
        )).limit(1);
        if (!assignment && !assignedShift) {
          res.json({
            id: workplace.id,
            name: workplace.name,
            latitude: workplace.latitude,
            longitude: workplace.longitude,
            geofenceRadiusMeters: workplace.geofenceRadiusMeters
          });
          return;
        }
      }
      res.json(workplace);
    } catch (error) {
      console.error("Error fetching workplace:", error);
      res.status(500).json({ error: "Failed to fetch workplace" });
    }
  });
  app2.post("/api/workplaces", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { name, addressLine1, city, province, postalCode, country, latitude, longitude, geofenceRadiusMeters, isActive } = req.body;
      if (!name || name.trim().length < 2) {
        res.status(400).json({ error: "Name is required (minimum 2 characters)" });
        return;
      }
      const [newWorkplace] = await db.insert(workplaces).values({
        name: name.trim(),
        addressLine1: addressLine1?.trim() || null,
        city: city?.trim() || null,
        province: province?.trim() || null,
        postalCode: postalCode?.trim() || null,
        country: country?.trim() || "Canada",
        latitude: latitude || null,
        longitude: longitude || null,
        geofenceRadiusMeters: geofenceRadiusMeters || 150,
        isActive: isActive !== false
      }).returning();
      res.json(newWorkplace);
      broadcast({ type: "created", entity: "workplace" });
    } catch (error) {
      console.error("Error creating workplace:", error);
      res.status(500).json({ error: "Failed to create workplace" });
    }
  });
  app2.put("/api/workplaces/:id", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { name, addressLine1, city, province, postalCode, country, latitude, longitude, geofenceRadiusMeters, isActive } = req.body;
      const updateData = { updatedAt: /* @__PURE__ */ new Date() };
      if (name !== void 0) updateData.name = name.trim();
      if (addressLine1 !== void 0) updateData.addressLine1 = addressLine1?.trim() || null;
      if (city !== void 0) updateData.city = city?.trim() || null;
      if (province !== void 0) updateData.province = province?.trim() || null;
      if (postalCode !== void 0) updateData.postalCode = postalCode?.trim() || null;
      if (country !== void 0) updateData.country = country?.trim() || "Canada";
      if (latitude !== void 0) updateData.latitude = latitude;
      if (longitude !== void 0) updateData.longitude = longitude;
      if (geofenceRadiusMeters !== void 0) updateData.geofenceRadiusMeters = geofenceRadiusMeters;
      if (isActive !== void 0) updateData.isActive = isActive;
      const [updatedWorkplace] = await db.update(workplaces).set(updateData).where(eq16(workplaces.id, req.params.id)).returning();
      if (!updatedWorkplace) {
        res.status(404).json({ error: "Workplace not found" });
        return;
      }
      res.json(updatedWorkplace);
      broadcast({ type: "updated", entity: "workplace", id: req.params.id });
    } catch (error) {
      console.error("Error updating workplace:", error);
      res.status(500).json({ error: "Failed to update workplace" });
    }
  });
  app2.patch("/api/workplaces/:id/toggle-active", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const [workplace] = await db.select().from(workplaces).where(eq16(workplaces.id, req.params.id));
      if (!workplace) {
        res.status(404).json({ error: "Workplace not found" });
        return;
      }
      const [updatedWorkplace] = await db.update(workplaces).set({ isActive: !workplace.isActive, updatedAt: /* @__PURE__ */ new Date() }).where(eq16(workplaces.id, req.params.id)).returning();
      res.json(updatedWorkplace);
      broadcast({ type: "updated", entity: "workplace", id: req.params.id });
    } catch (error) {
      console.error("Error toggling workplace status:", error);
      res.status(500).json({ error: "Failed to toggle workplace status" });
    }
  });
  app2.delete("/api/workplaces/:id", checkRoles("admin"), async (req, res) => {
    try {
      const workplaceId = req.params.id;
      const [workplace] = await db.select().from(workplaces).where(eq16(workplaces.id, workplaceId));
      if (!workplace) {
        res.status(404).json({ error: "Workplace not found" });
        return;
      }
      const workplaceShifts = await db.select({ id: shifts.id }).from(shifts).where(eq16(shifts.workplaceId, workplaceId));
      if (workplaceShifts.length > 0) {
        const shiftIds = workplaceShifts.map((s) => s.id);
        await db.delete(shiftOffers).where(inArray5(shiftOffers.shiftId, shiftIds));
        await db.delete(shiftCheckins).where(inArray5(shiftCheckins.shiftId, shiftIds));
        await db.delete(sentReminders).where(inArray5(sentReminders.shiftId, shiftIds));
      }
      await db.delete(shifts).where(eq16(shifts.workplaceId, workplaceId));
      await db.delete(shiftSeries).where(eq16(shiftSeries.workplaceId, workplaceId));
      await db.delete(shiftRequests).where(eq16(shiftRequests.workplaceId, workplaceId));
      await db.delete(workplaceAssignments).where(eq16(workplaceAssignments.workplaceId, workplaceId));
      await db.delete(titoLogs).where(eq16(titoLogs.workplaceId, workplaceId));
      await db.update(timesheetEntries).set({ workplaceId: null }).where(eq16(timesheetEntries.workplaceId, workplaceId));
      await db.update(exportAuditLogs).set({ workplaceId: null }).where(eq16(exportAuditLogs.workplaceId, workplaceId));
      await db.delete(workplaces).where(eq16(workplaces.id, workplaceId));
      broadcast({ type: "deleted", entity: "workplace", id: workplaceId });
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting workplace:", error);
      res.status(500).json({ error: "Failed to delete workplace" });
    }
  });
  app2.get("/api/workplaces/:id/workers", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const assignments = await db.select({
        id: workplaceAssignments.id,
        workplaceId: workplaceAssignments.workplaceId,
        workerUserId: workplaceAssignments.workerUserId,
        status: workplaceAssignments.status,
        invitedAt: workplaceAssignments.invitedAt,
        acceptedAt: workplaceAssignments.acceptedAt,
        notes: workplaceAssignments.notes,
        createdAt: workplaceAssignments.createdAt,
        workerName: users.fullName,
        workerEmail: users.email,
        workerRoles: users.workerRoles
      }).from(workplaceAssignments).leftJoin(users, eq16(workplaceAssignments.workerUserId, users.id)).where(and13(eq16(workplaceAssignments.workplaceId, req.params.id), eq16(workplaceAssignments.status, "active"))).orderBy(desc6(workplaceAssignments.createdAt));
      res.json(assignments);
    } catch (error) {
      console.error("Error fetching workplace workers:", error);
      res.status(500).json({ error: "Failed to fetch workplace workers" });
    }
  });
  app2.post("/api/workplaces/:id/invite-worker", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { workerUserId, status, notes } = req.body;
      const invitedByUserId = req.headers["x-user-id"];
      if (!workerUserId) {
        res.status(400).json({ error: "workerUserId is required" });
        return;
      }
      const [worker] = await db.select().from(users).where(and13(eq16(users.id, workerUserId), eq16(users.role, "worker")));
      if (!worker) {
        res.status(404).json({ error: "Worker not found" });
        return;
      }
      const [workplace] = await db.select().from(workplaces).where(eq16(workplaces.id, req.params.id));
      if (!workplace) {
        res.status(404).json({ error: "Workplace not found" });
        return;
      }
      const existing = await db.select().from(workplaceAssignments).where(and13(
        eq16(workplaceAssignments.workplaceId, req.params.id),
        eq16(workplaceAssignments.workerUserId, workerUserId)
      )).limit(1);
      if (existing.length > 0) {
        if (existing[0].status === "removed") {
          const [updated] = await db.update(workplaceAssignments).set({ status: status || "active", notes, updatedAt: /* @__PURE__ */ new Date() }).where(eq16(workplaceAssignments.id, existing[0].id)).returning();
          res.json(updated);
          return;
        }
        res.status(400).json({ error: "Worker is already assigned to this workplace" });
        return;
      }
      const [newAssignment] = await db.insert(workplaceAssignments).values({
        workplaceId: req.params.id,
        workerUserId,
        status: status || "active",
        invitedByUserId: invitedByUserId || null,
        notes: notes || null
      }).returning();
      res.json(newAssignment);
      broadcast({ type: "created", entity: "assignment", id: newAssignment.id, data: { workplaceId: req.params.id, workerUserId } });
    } catch (error) {
      console.error("Error inviting worker:", error);
      res.status(500).json({ error: "Failed to invite worker" });
    }
  });
  app2.patch("/api/workplace-assignments/:id", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { status, notes } = req.body;
      const updateData = { updatedAt: /* @__PURE__ */ new Date() };
      if (status !== void 0) updateData.status = status;
      if (notes !== void 0) updateData.notes = notes;
      if (status === "active" && !req.body.acceptedAt) {
        updateData.acceptedAt = /* @__PURE__ */ new Date();
      }
      const [updatedAssignment] = await db.update(workplaceAssignments).set(updateData).where(eq16(workplaceAssignments.id, req.params.id)).returning();
      if (!updatedAssignment) {
        res.status(404).json({ error: "Assignment not found" });
        return;
      }
      res.json(updatedAssignment);
      broadcast({ type: "updated", entity: "assignment", id: req.params.id });
    } catch (error) {
      console.error("Error updating assignment:", error);
      res.status(500).json({ error: "Failed to update assignment" });
    }
  });
  app2.delete("/api/workplace-assignments/:id", checkRoles("admin"), async (req, res) => {
    try {
      const [deleted] = await db.delete(workplaceAssignments).where(eq16(workplaceAssignments.id, req.params.id)).returning();
      if (!deleted) {
        res.status(404).json({ error: "Assignment not found" });
        return;
      }
      res.json({ message: "Assignment deleted successfully" });
    } catch (error) {
      console.error("Error deleting assignment:", error);
      res.status(500).json({ error: "Failed to delete assignment" });
    }
  });
  app2.get("/api/me/workplaces", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const role = req.headers["x-user-role"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      if (role !== "worker") {
        res.status(403).json({ error: "Only workers can access this endpoint" });
        return;
      }
      const myWorkplaces = await db.select({
        assignmentId: workplaceAssignments.id,
        status: workplaceAssignments.status,
        invitedAt: workplaceAssignments.invitedAt,
        acceptedAt: workplaceAssignments.acceptedAt,
        workplaceId: workplaces.id,
        workplaceName: workplaces.name,
        addressLine1: workplaces.addressLine1,
        city: workplaces.city,
        province: workplaces.province,
        postalCode: workplaces.postalCode,
        latitude: workplaces.latitude,
        longitude: workplaces.longitude,
        geofenceRadiusMeters: workplaces.geofenceRadiusMeters,
        isActive: workplaces.isActive
      }).from(workplaceAssignments).leftJoin(workplaces, eq16(workplaceAssignments.workplaceId, workplaces.id)).where(and13(
        eq16(workplaceAssignments.workerUserId, userId),
        or2(eq16(workplaceAssignments.status, "active"), eq16(workplaceAssignments.status, "invited"))
      )).orderBy(desc6(workplaceAssignments.invitedAt));
      res.json(myWorkplaces);
    } catch (error) {
      console.error("Error fetching worker workplaces:", error);
      res.status(500).json({ error: "Failed to fetch workplaces" });
    }
  });
  app2.post("/api/tito/time-in", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const role = req.headers["x-user-role"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      if (role !== "worker") {
        res.status(403).json({ error: "Only workers can clock in" });
        return;
      }
      if (!checkTitoRateLimit(userId)) {
        res.status(429).json({ error: "Too many requests. Please wait before trying again.", errorCode: "RATE_LIMITED" });
        return;
      }
      const { workplaceId, gpsLat, gpsLng, shiftId } = req.body;
      if (!workplaceId) {
        res.status(400).json({ error: "workplaceId is required" });
        return;
      }
      const anyOpenLogs = await db.select().from(titoLogs).where(and13(
        eq16(titoLogs.workerId, userId),
        isNull8(titoLogs.timeOut),
        ne5(titoLogs.status, "canceled")
      )).limit(1);
      if (anyOpenLogs.length > 0) {
        const existing = anyOpenLogs[0];
        if (existing.workplaceId === workplaceId && (!shiftId || existing.shiftId === shiftId)) {
          console.log(`[TITO] Idempotent clock-in: worker ${userId} already clocked in (titoLogId=${existing.id})`);
          res.json({
            success: true,
            message: "Already clocked in",
            titoLogId: existing.id,
            timeIn: existing.timeIn,
            distance: existing.timeInDistanceMeters ? Math.round(existing.timeInDistanceMeters) : null,
            gpsVerified: existing.timeInGpsVerified,
            alreadyClockedIn: true
          });
          return;
        }
        console.log(`[TITO] Rejected clock-in: worker ${userId} has active session at workplace ${existing.workplaceId} (titoLogId=${existing.id})`);
        res.status(409).json({
          error: "You already have an active clock-in session. Please clock out first.",
          errorCode: "ACTIVE_SESSION_EXISTS",
          existingTitoLogId: existing.id,
          existingWorkplaceId: existing.workplaceId
        });
        return;
      }
      const [workplace] = await db.select().from(workplaces).where(eq16(workplaces.id, workplaceId));
      if (!workplace) {
        res.status(404).json({ error: "Workplace not found", errorCode: "WORKPLACE_NOT_FOUND" });
        return;
      }
      if (!workplace.isActive) {
        res.status(400).json({ error: "Workplace is not active", errorCode: "WORKPLACE_INACTIVE" });
        return;
      }
      const assignment = await db.select().from(workplaceAssignments).where(and13(
        eq16(workplaceAssignments.workplaceId, workplaceId),
        eq16(workplaceAssignments.workerUserId, userId),
        eq16(workplaceAssignments.status, "active")
      )).limit(1);
      if (assignment.length === 0) {
        res.status(403).json({ error: "You are not assigned to this workplace", errorCode: "NOT_ASSIGNED" });
        return;
      }
      if (!shiftId) {
        res.status(400).json({ error: "shiftId is required. You must clock in against a scheduled shift.", errorCode: "NO_SHIFT_ID" });
        return;
      }
      const [shiftRow] = await db.select().from(shifts).where(eq16(shifts.id, shiftId));
      if (!shiftRow) {
        res.status(404).json({ error: "Shift not found", errorCode: "SHIFT_NOT_FOUND" });
        return;
      }
      const isAssignedWorker = shiftRow.workerUserId === userId;
      const [acceptedOffer] = isAssignedWorker ? [{ id: "assigned" }] : await db.select({ id: shiftOffers.id }).from(shiftOffers).where(and13(
        eq16(shiftOffers.shiftId, shiftId),
        eq16(shiftOffers.workerId, userId),
        eq16(shiftOffers.status, "accepted")
      )).limit(1);
      if (!isAssignedWorker && !acceptedOffer) {
        res.status(403).json({
          error: "You must have an accepted shift offer to clock in for this shift",
          errorCode: "NO_ACCEPTED_OFFER"
        });
        return;
      }
      {
        const now = /* @__PURE__ */ new Date();
        const [sH, sM] = shiftRow.startTime.split(":").map(Number);
        const shiftStart = /* @__PURE__ */ new Date(shiftRow.date + "T00:00:00");
        shiftStart.setHours(sH, sM, 0, 0);
        const windowOpen = new Date(shiftStart.getTime() - 15 * 60 * 1e3);
        let windowClose;
        if (shiftRow.endTime) {
          const [eH, eM] = shiftRow.endTime.split(":").map(Number);
          const shiftEnd = /* @__PURE__ */ new Date(shiftRow.date + "T00:00:00");
          shiftEnd.setHours(eH, eM, 0, 0);
          if (shiftEnd <= shiftStart) {
            shiftEnd.setDate(shiftEnd.getDate() + 1);
          }
          windowClose = new Date(shiftEnd.getTime() + 30 * 60 * 1e3);
        } else {
          windowClose = new Date(shiftStart.getTime() + 24 * 60 * 60 * 1e3);
        }
        if (now < windowOpen || now > windowClose) {
          const fmtTime = (d) => d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "America/Toronto" });
          res.status(400).json({
            error: "Clock-in is only allowed during your scheduled shift window.",
            errorCode: "OUTSIDE_SHIFT_WINDOW",
            windowOpen: windowOpen.toISOString(),
            windowClose: windowClose.toISOString(),
            windowDescription: `Clock-in available ${fmtTime(windowOpen)} - ${fmtTime(windowClose)}`
          });
          return;
        }
      }
      if (workplace.latitude === null || workplace.longitude === null) {
        res.status(400).json({ error: "Workplace coordinates not configured. Contact admin." });
        return;
      }
      if (gpsLat === void 0 || gpsLng === void 0) {
        res.status(400).json({ error: "Location permission required for TITO. Please enable GPS.", errorCode: "NO_GPS" });
        return;
      }
      const distance = haversineDistance(gpsLat, gpsLng, workplace.latitude, workplace.longitude);
      const radius = workplace.geofenceRadiusMeters || 150;
      const isWithinRadius = distance <= radius;
      if (!isWithinRadius) {
        const [titoLog2] = await db.insert(titoLogs).values({
          workerId: userId,
          workplaceId,
          shiftId,
          timeIn: /* @__PURE__ */ new Date(),
          timeInGpsLat: gpsLat,
          timeInGpsLng: gpsLng,
          timeInDistanceMeters: distance,
          timeInGpsVerified: false,
          timeInGpsFailureReason: `Outside geofence: ${Math.round(distance)}m from workplace (max ${radius}m)`,
          status: "pending"
        }).returning();
        res.status(400).json({
          error: `You are not within the required GPS radius of the workplace. You are ${Math.round(distance)}m away, but must be within ${radius}m.`,
          errorCode: "TOO_FAR",
          distance: Math.round(distance),
          maxRadius: radius,
          titoLogId: titoLog2.id,
          gpsVerified: false
        });
        return;
      }
      const [titoLog] = await db.insert(titoLogs).values({
        workerId: userId,
        workplaceId,
        shiftId,
        timeIn: /* @__PURE__ */ new Date(),
        timeInGpsLat: gpsLat,
        timeInGpsLng: gpsLng,
        timeInDistanceMeters: distance,
        timeInGpsVerified: true,
        status: "pending"
      }).returning();
      await db.insert(auditLog).values({
        userId,
        action: "CLOCK_IN",
        entityType: "tito_log",
        entityId: titoLog.id,
        details: JSON.stringify({ workplaceId, shiftId, distance: Math.round(distance), gpsVerified: true })
      });
      res.json({
        success: true,
        message: "Successfully clocked in",
        titoLogId: titoLog.id,
        timeIn: titoLog.timeIn,
        distance: Math.round(distance),
        gpsVerified: true
      });
      if (shiftId) {
        (async () => {
          try {
            const [shiftForCrm] = await db.select().from(shifts).where(eq16(shifts.id, shiftId));
            if (shiftForCrm?.crmShiftId) {
              const { enqueueCrmPush: enqueueCrmPush2 } = await Promise.resolve().then(() => (init_crm_sync(), crm_sync_exports));
              await enqueueCrmPush2("confirmed_shift", shiftId, "update", {
                crmExternalId: shiftForCrm.crmShiftId,
                checkedInAt: titoLog.timeIn.toISOString(),
                confirmStatus: "CONFIRMED"
              });
            }
          } catch (crmErr) {
            console.error("[CRM-PUSH] TITO clock-in push failed:", crmErr?.message);
          }
        })();
      }
      try {
        const [worker] = await db.select({ fullName: users.fullName }).from(users).where(eq16(users.id, userId));
        const workerName = worker?.fullName || "Worker";
        const nowToronto2 = new Date((/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: "America/Toronto" }));
        const currentHour = nowToronto2.getHours();
        const hrAdmins = await db.select({ id: users.id }).from(users).where(
          and13(inArray5(users.role, ["admin", "hr"]), eq16(users.isActive, true))
        );
        const hrAdminIds = hrAdmins.map((u) => u.id);
        let isLate = false;
        if (shiftId) {
          const [shiftRow2] = await db.select({ startTime: shifts.startTime, date: shifts.date }).from(shifts).where(eq16(shifts.id, shiftId));
          if (shiftRow2?.startTime && shiftRow2?.date) {
            const [h, m] = shiftRow2.startTime.split(":").map(Number);
            const shiftStart = /* @__PURE__ */ new Date(shiftRow2.date + "T00:00:00");
            shiftStart.setHours(h, m, 0, 0);
            const lateMinutes = Math.round((Date.now() - shiftStart.getTime()) / 6e4);
            if (lateMinutes > 10) {
              isLate = true;
              await db.update(titoLogs).set({ flaggedLate: true, lateMinutes }).where(eq16(titoLogs.id, titoLog.id));
              const lateMsg = `${workerName} clocked in ${lateMinutes} min late for shift at ${workplace.name}`;
              await db.insert(appNotifications).values({
                userId,
                type: "late_clock_in",
                title: "Late Clock-In Recorded",
                body: `You clocked in ${lateMinutes} minutes after your shift start time at ${workplace.name}.`
              });
              sendPushNotifications([userId], "Late Clock-In", `You clocked in ${lateMinutes} min late at ${workplace.name}.`);
              for (const uid of hrAdminIds) {
                await db.insert(appNotifications).values({
                  userId: uid,
                  type: "late_clock_in",
                  title: "Late Clock-In Alert",
                  body: lateMsg
                });
              }
              if (hrAdminIds.length > 0) {
                sendPushNotifications(hrAdminIds, "Late Clock-In Alert", lateMsg);
              }
              await db.insert(auditLog).values({
                userId,
                action: "LATE_CLOCKIN",
                entityType: "tito_log",
                entityId: titoLog.id,
                details: JSON.stringify({ lateMinutes, shiftId, workplaceId, workerName })
              });
            }
          }
        }
        if (currentHour < 5 || currentHour >= 23) {
          const unusualMsg = `${workerName} clocked in at unusual hours (${nowToronto2.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}) at ${workplace.name}`;
          if (!isLate) {
            await db.insert(appNotifications).values({
              userId,
              type: "unusual_hours",
              title: "Unusual Hours Clock-In",
              body: `You clocked in outside normal hours at ${workplace.name}.`
            });
            sendPushNotifications([userId], "Unusual Hours", `You clocked in at an unusual time at ${workplace.name}.`);
          }
          for (const uid of hrAdminIds) {
            await db.insert(appNotifications).values({
              userId: uid,
              type: "unusual_hours",
              title: "Unusual Hours Alert",
              body: unusualMsg
            });
          }
          if (hrAdminIds.length > 0) {
            sendPushNotifications(hrAdminIds, "Unusual Hours Alert", unusualMsg);
          }
        }
      } catch (notifErr) {
        console.error("Late/unusual notification error (non-blocking):", notifErr);
      }
    } catch (error) {
      console.error("Error clocking in:", error);
      res.status(500).json({ error: "Failed to clock in" });
    }
  });
  app2.post("/api/tito/:id/late-reason", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const titoLogId = req.params.id;
      const { lateReason, lateNote } = req.body;
      if (!lateReason) {
        res.status(400).json({ error: "lateReason is required" });
        return;
      }
      const [log2] = await db.select().from(titoLogs).where(eq16(titoLogs.id, titoLogId));
      if (!log2) {
        res.status(404).json({ error: "TITO log not found" });
        return;
      }
      if (log2.workerId !== userId) {
        res.status(403).json({ error: "Not your TITO log" });
        return;
      }
      await db.update(titoLogs).set({ lateReason, lateNote: lateNote || null, updatedAt: /* @__PURE__ */ new Date() }).where(eq16(titoLogs.id, titoLogId));
      res.json({ success: true });
    } catch (error) {
      console.error("Error updating late reason:", error);
      res.status(500).json({ error: "Failed to update late reason" });
    }
  });
  app2.post("/api/tito/time-out", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const role = req.headers["x-user-role"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      if (role !== "worker") {
        res.status(403).json({ error: "Only workers can clock out" });
        return;
      }
      if (!checkTitoRateLimit(userId)) {
        res.status(429).json({ error: "Too many requests. Please wait before trying again.", errorCode: "RATE_LIMITED" });
        return;
      }
      const { titoLogId, gpsLat, gpsLng } = req.body;
      if (!titoLogId) {
        res.status(400).json({ error: "titoLogId is required" });
        return;
      }
      const [titoLog] = await db.select().from(titoLogs).where(eq16(titoLogs.id, titoLogId));
      if (!titoLog) {
        res.status(404).json({ error: "TITO record not found" });
        return;
      }
      if (titoLog.workerId !== userId) {
        res.status(403).json({ error: "You can only clock out of your own shift" });
        return;
      }
      if (titoLog.timeOut) {
        console.log(`[TITO] Double clock-out prevented: worker ${userId} already clocked out (titoLogId=${titoLog.id})`);
        const totalMs2 = new Date(titoLog.timeOut).getTime() - new Date(titoLog.timeIn).getTime();
        const totalHours2 = Math.max(0, parseFloat((totalMs2 / 36e5).toFixed(2)));
        res.json({
          success: true,
          message: "Already clocked out",
          titoLogId: titoLog.id,
          timeIn: titoLog.timeIn,
          timeOut: titoLog.timeOut,
          totalHours: totalHours2,
          gpsVerified: titoLog.timeOutGpsVerified,
          flaggedForReview: titoLog.status === "flagged",
          alreadyClockedOut: true
        });
        return;
      }
      if (!titoLog.timeIn) {
        res.status(400).json({ error: "Cannot clock out without a clock-in time" });
        return;
      }
      const elapsedSeconds = (Date.now() - new Date(titoLog.timeIn).getTime()) / 1e3;
      if (elapsedSeconds < 60) {
        const remainingSeconds = Math.ceil(60 - elapsedSeconds);
        res.status(400).json({
          error: "Minimum shift duration is 1 minute.",
          errorCode: "MIN_DURATION",
          remainingSeconds
        });
        return;
      }
      if (titoLog.shiftId) {
        const [clockOutShift] = await db.select().from(shifts).where(eq16(shifts.id, titoLog.shiftId));
        if (clockOutShift) {
          const now = /* @__PURE__ */ new Date();
          const [sH, sM] = clockOutShift.startTime.split(":").map(Number);
          const shiftStart = /* @__PURE__ */ new Date(clockOutShift.date + "T00:00:00");
          shiftStart.setHours(sH, sM, 0, 0);
          let windowClose;
          if (clockOutShift.endTime) {
            const [eH, eM] = clockOutShift.endTime.split(":").map(Number);
            const shiftEnd = /* @__PURE__ */ new Date(clockOutShift.date + "T00:00:00");
            shiftEnd.setHours(eH, eM, 0, 0);
            if (shiftEnd <= shiftStart) {
              shiftEnd.setDate(shiftEnd.getDate() + 1);
            }
            windowClose = new Date(shiftEnd.getTime() + 30 * 60 * 1e3);
          } else {
            windowClose = new Date(shiftStart.getTime() + 24 * 60 * 60 * 1e3);
          }
          if (now < shiftStart || now > windowClose) {
            const fmtTime = (d) => d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "America/Toronto" });
            res.status(400).json({
              error: "Clock-out must occur within your scheduled shift window.",
              errorCode: "OUTSIDE_SHIFT_WINDOW",
              windowDescription: `Clock-out allowed ${fmtTime(shiftStart)} - ${fmtTime(windowClose)}`
            });
            return;
          }
        }
      }
      const [workplace] = titoLog.workplaceId ? await db.select().from(workplaces).where(eq16(workplaces.id, titoLog.workplaceId)) : [null];
      const hasGps = gpsLat != null && gpsLng != null && (gpsLat !== 0 || gpsLng !== 0);
      const hasWorkplaceCoords = workplace?.latitude != null && workplace?.longitude != null;
      let distance = null;
      let isWithinRadius = false;
      if (hasGps && hasWorkplaceCoords) {
        distance = haversineDistance(gpsLat, gpsLng, workplace.latitude, workplace.longitude);
        const radius = workplace.geofenceRadiusMeters || 150;
        isWithinRadius = distance <= radius;
      }
      const isFlagged = hasGps && hasWorkplaceCoords && !isWithinRadius;
      const clockOutTime = /* @__PURE__ */ new Date();
      const [updated] = await db.update(titoLogs).set({
        timeOut: clockOutTime,
        timeOutGpsLat: hasGps ? gpsLat : null,
        timeOutGpsLng: hasGps ? gpsLng : null,
        timeOutDistanceMeters: distance,
        timeOutGpsVerified: hasGps ? isWithinRadius : false,
        timeOutGpsFailureReason: !hasGps ? "GPS unavailable at clock-out" : isFlagged ? `Outside geofence: ${Math.round(distance)}m from workplace (max ${workplace.geofenceRadiusMeters || 150}m)` : null,
        status: isFlagged || !hasGps ? "flagged" : void 0,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq16(titoLogs.id, titoLogId)).returning();
      const totalMs = clockOutTime.getTime() - new Date(titoLog.timeIn).getTime();
      const totalHours = Math.max(0, parseFloat((totalMs / 36e5).toFixed(2)));
      let timesheetEntryCreated = false;
      try {
        const clockInDate = new Date(titoLog.timeIn);
        const dateLocalStr = clockInDate.toLocaleDateString("en-CA", { timeZone: "America/Toronto" });
        const payPeriod = getCurrentPayPeriod(/* @__PURE__ */ new Date(dateLocalStr + "T12:00:00"));
        if (payPeriod && totalHours > 0) {
          const [existingTimesheet] = await db.select().from(timesheets).where(and13(
            eq16(timesheets.workerUserId, userId),
            eq16(timesheets.periodYear, payPeriod.year),
            eq16(timesheets.periodNumber, payPeriod.periodNumber)
          ));
          let timesheetId;
          if (existingTimesheet) {
            timesheetId = existingTimesheet.id;
          } else {
            const [newTimesheet] = await db.insert(timesheets).values({
              workerUserId: userId,
              periodYear: payPeriod.year,
              periodNumber: payPeriod.periodNumber,
              status: "draft"
            }).returning();
            timesheetId = newTimesheet.id;
          }
          const defaultPayRate = 18;
          const amount = parseFloat((totalHours * defaultPayRate).toFixed(2));
          const existingEntry = await db.select().from(timesheetEntries).where(eq16(timesheetEntries.titoLogId, titoLogId)).limit(1);
          if (existingEntry.length === 0) {
            await db.insert(timesheetEntries).values({
              timesheetId,
              workplaceId: titoLog.workplaceId || null,
              titoLogId,
              dateLocal: dateLocalStr,
              timeInUtc: titoLog.timeIn,
              timeOutUtc: clockOutTime,
              hours: totalHours.toString(),
              payRate: defaultPayRate.toString(),
              amount: amount.toString(),
              notes: isFlagged ? "Flagged: clock-out outside geofence" : !hasGps ? "GPS unavailable at clock-out" : null
            });
            timesheetEntryCreated = true;
            const allEntries = await db.select({
              hours: timesheetEntries.hours,
              amount: timesheetEntries.amount
            }).from(timesheetEntries).where(eq16(timesheetEntries.timesheetId, timesheetId));
            const totalTimesheetHours = allEntries.reduce((sum2, e) => sum2 + parseFloat(e.hours), 0);
            const totalTimesheetPay = allEntries.reduce((sum2, e) => sum2 + parseFloat(e.amount), 0);
            await db.update(timesheets).set({
              totalHours: totalTimesheetHours.toFixed(2),
              totalPay: totalTimesheetPay.toFixed(2),
              updatedAt: /* @__PURE__ */ new Date()
            }).where(eq16(timesheets.id, timesheetId));
            console.log(`[TIMESHEET] Auto-created entry: worker=${userId}, titoLog=${titoLogId}, hours=${totalHours}, amount=${amount}, period=${payPeriod.year}-${payPeriod.periodNumber}`);
          }
        } else {
          console.warn(`[TIMESHEET] No pay period found for date ${dateLocalStr} or zero hours (${totalHours}h). Skipping auto-timesheet.`);
        }
      } catch (tsError) {
        console.error(`[TIMESHEET] Failed to auto-create timesheet entry for titoLog ${titoLogId}:`, tsError);
      }
      await db.insert(auditLog).values({
        userId,
        action: "CLOCK_OUT",
        entityType: "tito_log",
        entityId: titoLogId,
        details: JSON.stringify({
          workplaceId: titoLog.workplaceId,
          shiftId: titoLog.shiftId,
          timeIn: titoLog.timeIn,
          timeOut: clockOutTime,
          totalHours,
          gpsVerified: isWithinRadius,
          flagged: isFlagged || !hasGps,
          timesheetEntryCreated
        })
      });
      res.json({
        success: true,
        message: isWithinRadius ? "Successfully clocked out" : "Clocked out (flagged for admin review)",
        titoLogId: updated.id,
        timeIn: updated.timeIn,
        timeOut: updated.timeOut,
        totalHours,
        distance: distance != null ? Math.round(distance) : null,
        gpsVerified: isWithinRadius,
        flaggedForReview: isFlagged || !hasGps,
        timesheetEntryCreated
      });
      if (titoLog.shiftId) {
        (async () => {
          try {
            const [shiftForCrm] = await db.select().from(shifts).where(eq16(shifts.id, titoLog.shiftId));
            if (shiftForCrm?.crmShiftId) {
              const { enqueueCrmPush: enqueueCrmPush2 } = await Promise.resolve().then(() => (init_crm_sync(), crm_sync_exports));
              await enqueueCrmPush2("confirmed_shift", titoLog.shiftId, "update", {
                crmExternalId: shiftForCrm.crmShiftId,
                completedAt: clockOutTime.toISOString(),
                confirmStatus: "COMPLETED",
                notes: `Clock-out: ${totalHours}h, GPS verified: ${isWithinRadius}`
              });
            }
          } catch (crmErr) {
            console.error("[CRM-PUSH] TITO clock-out push failed:", crmErr?.message);
          }
        })();
      }
      try {
        const [worker] = await db.select({ fullName: users.fullName }).from(users).where(eq16(users.id, userId));
        const workerName = worker?.fullName || "Worker";
        const nowToronto2 = new Date((/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: "America/Toronto" }));
        const currentHour = nowToronto2.getHours();
        const wpName = workplace?.name || "work site";
        if (currentHour < 5 || currentHour >= 23) {
          const hrAdmins = await db.select({ id: users.id }).from(users).where(
            and13(inArray5(users.role, ["admin", "hr"]), eq16(users.isActive, true))
          );
          const hrAdminIds = hrAdmins.map((u) => u.id);
          const unusualMsg = `${workerName} clocked out at unusual hours (${nowToronto2.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}) at ${wpName}`;
          await db.insert(appNotifications).values({
            userId,
            type: "unusual_hours",
            title: "Unusual Hours Clock-Out",
            body: `You clocked out outside normal hours at ${wpName}.`
          });
          sendPushNotifications([userId], "Unusual Hours", `You clocked out at an unusual time at ${wpName}.`);
          for (const uid of hrAdminIds) {
            await db.insert(appNotifications).values({
              userId: uid,
              type: "unusual_hours",
              title: "Unusual Hours Alert",
              body: unusualMsg
            });
          }
          if (hrAdminIds.length > 0) {
            sendPushNotifications(hrAdminIds, "Unusual Hours Alert", unusualMsg);
          }
        }
        if (isFlagged && distance != null) {
          const hrAdmins2 = await db.select({ id: users.id }).from(users).where(
            and13(inArray5(users.role, ["admin", "hr"]), eq16(users.isActive, true))
          );
          const hrAdminIds2 = hrAdmins2.map((u) => u.id);
          const flaggedMsg = `${workerName} clocked out ${Math.round(distance)}m away from ${wpName} (max ${workplace?.geofenceRadiusMeters || 150}m). Flagged for review.`;
          for (const uid of hrAdminIds2) {
            await db.insert(appNotifications).values({
              userId: uid,
              type: "flagged_clock_out",
              title: "Flagged Clock-Out",
              body: flaggedMsg
            });
          }
          if (hrAdminIds2.length > 0) {
            sendPushNotifications(hrAdminIds2, "Flagged Clock-Out", flaggedMsg);
          }
        }
      } catch (notifErr) {
        console.error("Clock-out notification error (non-blocking):", notifErr);
      }
    } catch (error) {
      console.error("Error clocking out:", error);
      res.status(500).json({ error: "Failed to clock out" });
    }
  });
  app2.get("/api/tito/my-logs", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const role = req.headers["x-user-role"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const isAdmin = role === "admin" || role === "hr" || role === "client";
      const baseSelect = {
        id: titoLogs.id,
        workerId: titoLogs.workerId,
        workplaceId: titoLogs.workplaceId,
        shiftId: titoLogs.shiftId,
        timeIn: titoLogs.timeIn,
        timeOut: titoLogs.timeOut,
        timeInGpsVerified: titoLogs.timeInGpsVerified,
        timeOutGpsVerified: titoLogs.timeOutGpsVerified,
        timeInDistanceMeters: titoLogs.timeInDistanceMeters,
        timeOutDistanceMeters: titoLogs.timeOutDistanceMeters,
        status: titoLogs.status,
        approvedBy: titoLogs.approvedBy,
        approvedAt: titoLogs.approvedAt,
        disputedBy: titoLogs.disputedBy,
        disputedAt: titoLogs.disputedAt,
        notes: titoLogs.notes,
        flaggedLate: titoLogs.flaggedLate,
        lateMinutes: titoLogs.lateMinutes,
        lateReason: titoLogs.lateReason,
        createdAt: titoLogs.createdAt,
        workplaceName: workplaces.name,
        workerName: users.fullName,
        shiftDate: shifts.date,
        shiftTitle: shifts.title
      };
      let query;
      if (isAdmin) {
        query = db.select(baseSelect).from(titoLogs).leftJoin(workplaces, eq16(titoLogs.workplaceId, workplaces.id)).leftJoin(users, eq16(titoLogs.workerId, users.id)).leftJoin(shifts, eq16(titoLogs.shiftId, shifts.id)).orderBy(desc6(titoLogs.createdAt)).limit(100);
      } else {
        query = db.select(baseSelect).from(titoLogs).leftJoin(workplaces, eq16(titoLogs.workplaceId, workplaces.id)).leftJoin(users, eq16(titoLogs.workerId, users.id)).leftJoin(shifts, eq16(titoLogs.shiftId, shifts.id)).where(eq16(titoLogs.workerId, userId)).orderBy(desc6(titoLogs.createdAt)).limit(50);
      }
      const logs = await query;
      const logIds = logs.map((l) => l.id);
      let correctedLogIds = /* @__PURE__ */ new Set();
      if (logIds.length > 0) {
        const corrections = await db.select({ titoLogId: titoCorrections.titoLogId }).from(titoCorrections).where(and13(
          inArray5(titoCorrections.titoLogId, logIds),
          eq16(titoCorrections.status, "approved")
        ));
        correctedLogIds = new Set(corrections.map((c) => c.titoLogId));
      }
      const formattedLogs = logs.map((log2) => ({
        id: log2.id,
        shiftId: log2.shiftId || "",
        workerId: log2.workerId,
        workerName: log2.workerName || "Unknown Worker",
        timeIn: log2.timeIn ? new Date(log2.timeIn).toISOString() : void 0,
        timeOut: log2.timeOut ? new Date(log2.timeOut).toISOString() : void 0,
        timeInLocation: log2.workplaceName || void 0,
        timeOutLocation: log2.workplaceName || void 0,
        timeInDistance: log2.timeInDistanceMeters ? Math.round(log2.timeInDistanceMeters) : void 0,
        timeOutDistance: log2.timeOutDistanceMeters ? Math.round(log2.timeOutDistanceMeters) : void 0,
        verificationMethod: log2.timeInGpsVerified || log2.timeOutGpsVerified ? "gps" : "manual",
        approvedBy: log2.approvedBy || void 0,
        approvedAt: log2.approvedAt ? new Date(log2.approvedAt).toISOString() : void 0,
        disputedBy: log2.disputedBy || void 0,
        disputedAt: log2.disputedAt ? new Date(log2.disputedAt).toISOString() : void 0,
        status: log2.status,
        shiftDate: log2.shiftDate || (log2.timeIn ? new Date(log2.timeIn).toLocaleDateString("en-CA", { timeZone: "America/Toronto" }) : (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA")),
        createdAt: log2.createdAt ? new Date(log2.createdAt).toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
        notes: log2.notes || void 0,
        flaggedLate: log2.flaggedLate || false,
        lateMinutes: log2.lateMinutes || void 0,
        lateReason: log2.lateReason || void 0,
        corrected: correctedLogIds.has(log2.id),
        cancelReason: log2.status === "canceled" ? log2.notes || "Accidental clock-in" : void 0,
        totalHours: log2.timeIn && log2.timeOut ? parseFloat(((new Date(log2.timeOut).getTime() - new Date(log2.timeIn).getTime()) / 36e5).toFixed(2)) : void 0
      }));
      res.json(formattedLogs);
    } catch (error) {
      console.error("Error fetching TITO logs:", error);
      res.status(500).json({ error: "Failed to fetch TITO logs" });
    }
  });
  app2.post("/api/tito/email-timesheet", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { to, subject, period, workplaceId, workerId } = req.body;
      if (!to || typeof to !== "string" || !to.includes("@")) {
        res.status(400).json({ error: "Valid email address is required" });
        return;
      }
      const now = /* @__PURE__ */ new Date();
      let startDate;
      let endDate;
      let periodLabel;
      const selectedPeriod = period || "biweekly";
      if (selectedPeriod === "weekly") {
        const dayOfWeek = now.getDay();
        const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
        startDate = new Date(now);
        startDate.setDate(now.getDate() + mondayOffset);
        startDate.setHours(0, 0, 0, 0);
        endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 6);
        endDate.setHours(23, 59, 59, 999);
        periodLabel = "Weekly";
      } else if (selectedPeriod === "monthly") {
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
        periodLabel = "Monthly";
      } else {
        const currentPayPeriod = getCurrentPayPeriod();
        if (currentPayPeriod) {
          startDate = /* @__PURE__ */ new Date(currentPayPeriod.startDate + "T00:00:00");
          endDate = /* @__PURE__ */ new Date(currentPayPeriod.endDate + "T23:59:59.999");
          periodLabel = `Pay Period ${currentPayPeriod.periodNumber}`;
        } else {
          startDate = new Date(now);
          startDate.setDate(now.getDate() - 13);
          startDate.setHours(0, 0, 0, 0);
          endDate = new Date(now);
          endDate.setHours(23, 59, 59, 999);
          periodLabel = "Biweekly";
        }
      }
      const conditions = [
        ne5(titoLogs.status, "canceled"),
        gte10(titoLogs.timeIn, startDate),
        lte10(titoLogs.timeIn, endDate)
      ];
      if (workplaceId) {
        conditions.push(eq16(titoLogs.workplaceId, workplaceId));
      }
      if (workerId) {
        conditions.push(eq16(titoLogs.workerId, workerId));
      }
      const logs = await db.select({
        id: titoLogs.id,
        workerId: titoLogs.workerId,
        workerName: users.fullName,
        workplaceName: workplaces.name,
        shiftDate: shifts.date,
        shiftTitle: shifts.title,
        timeIn: titoLogs.timeIn,
        timeOut: titoLogs.timeOut,
        status: titoLogs.status
      }).from(titoLogs).leftJoin(users, eq16(titoLogs.workerId, users.id)).leftJoin(workplaces, eq16(titoLogs.workplaceId, workplaces.id)).leftJoin(shifts, eq16(titoLogs.shiftId, shifts.id)).where(and13(...conditions)).orderBy(asc(users.fullName), asc(titoLogs.timeIn)).limit(1e3);
      const formatTime = (d) => d ? d.toLocaleString("en-CA", { timeZone: "America/Toronto" }) : "";
      const formatDate = (d) => d.toLocaleDateString("en-CA", { timeZone: "America/Toronto" });
      const workerTotals = {};
      const csvDataLines = logs.map((log2) => {
        const timeIn = log2.timeIn ? new Date(log2.timeIn) : null;
        const timeOut = log2.timeOut ? new Date(log2.timeOut) : null;
        const hours = timeIn && timeOut ? (timeOut.getTime() - timeIn.getTime()) / 36e5 : 0;
        const wName = log2.workerName || "Unknown";
        if (!workerTotals[log2.workerId]) {
          workerTotals[log2.workerId] = { name: wName, hours: 0 };
        }
        workerTotals[log2.workerId].hours += hours;
        return `"${wName}","${log2.workplaceName || ""}","${log2.shiftDate || ""}","${formatTime(timeIn)}","${formatTime(timeOut)}",${hours.toFixed(2)},"${log2.status}"`;
      });
      const grandTotal = Object.values(workerTotals).reduce((sum2, w) => sum2 + w.hours, 0);
      const summaryLines = [
        "",
        "SUMMARY",
        "Worker,Total Hours",
        ...Object.values(workerTotals).map((w) => `"${w.name}",${w.hours.toFixed(2)}`),
        `"GRAND TOTAL",${grandTotal.toFixed(2)}`
      ];
      const csvLines = [
        "Worker Name,Workplace,Shift Date,Time In,Time Out,Hours,Status",
        ...csvDataLines,
        ...summaryLines
      ];
      const csvContent = csvLines.join("\n");
      const dateRange = `${formatDate(startDate)} to ${formatDate(endDate)}`;
      const filename = `tito-timesheet-${formatDate(startDate)}-to-${formatDate(endDate)}.csv`;
      const emailSubject = subject || `WFConnect ${periodLabel} Timesheet - ${dateRange}`;
      const bodyText = `Please find attached the ${periodLabel} TITO timesheet report.

Period: ${dateRange}
Total Records: ${logs.length}
Total Hours: ${grandTotal.toFixed(2)}

- WFConnect`;
      const result = await sendCSVEmail(to, emailSubject, bodyText, csvContent, filename);
      if (result.success) {
        res.json({ success: true, message: `${periodLabel} timesheet emailed to ${to}`, period: dateRange, totalRecords: logs.length, totalHours: grandTotal.toFixed(2) });
      } else {
        res.status(500).json({ error: result.error || "Failed to send email" });
      }
    } catch (error) {
      console.error("Error emailing TITO timesheet:", error);
      res.status(500).json({ error: "Failed to email timesheet" });
    }
  });
  app2.post("/api/tito/:id/approve", checkRoles("admin", "hr", "client"), async (req, res) => {
    try {
      const titoLogId = req.params.id;
      const userId = req.headers["x-user-id"];
      const [log2] = await db.select().from(titoLogs).where(eq16(titoLogs.id, titoLogId));
      if (!log2) {
        res.status(404).json({ error: "TITO log not found" });
        return;
      }
      await db.update(titoLogs).set({ status: "approved", approvedBy: userId, approvedAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date() }).where(eq16(titoLogs.id, titoLogId));
      await db.insert(auditLog).values({
        userId,
        action: "TITO_APPROVED",
        entityType: "tito_log",
        entityId: titoLogId,
        details: JSON.stringify({ workerId: log2.workerId, previousStatus: log2.status })
      });
      res.json({ success: true, message: "TITO log approved" });
    } catch (error) {
      console.error("Error approving TITO log:", error);
      res.status(500).json({ error: "Failed to approve TITO log" });
    }
  });
  app2.post("/api/tito/:id/dispute", checkRoles("admin", "hr", "client"), async (req, res) => {
    try {
      const titoLogId = req.params.id;
      const userId = req.headers["x-user-id"];
      const { reason } = req.body;
      const [log2] = await db.select().from(titoLogs).where(eq16(titoLogs.id, titoLogId));
      if (!log2) {
        res.status(404).json({ error: "TITO log not found" });
        return;
      }
      await db.update(titoLogs).set({ status: "disputed", disputedBy: userId, disputedAt: /* @__PURE__ */ new Date(), notes: reason || null, updatedAt: /* @__PURE__ */ new Date() }).where(eq16(titoLogs.id, titoLogId));
      await db.insert(auditLog).values({
        userId,
        action: "TITO_DISPUTED",
        entityType: "tito_log",
        entityId: titoLogId,
        details: JSON.stringify({ workerId: log2.workerId, previousStatus: log2.status, reason })
      });
      res.json({ success: true, message: "TITO log disputed" });
    } catch (error) {
      console.error("Error disputing TITO log:", error);
      res.status(500).json({ error: "Failed to dispute TITO log" });
    }
  });
  app2.post("/api/tito/:id/cancel", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const titoLogId = req.params.id;
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const [log2] = await db.select().from(titoLogs).where(eq16(titoLogs.id, titoLogId));
      if (!log2) {
        res.status(404).json({ error: "TITO log not found" });
        return;
      }
      if (log2.workerId !== userId) {
        res.status(403).json({ error: "You can only cancel your own clock-in" });
        return;
      }
      if (log2.timeOut) {
        res.status(400).json({ error: "Cannot cancel a completed clock-in/out record" });
        return;
      }
      if (log2.status === "canceled") {
        res.json({ success: true, message: "Already canceled", alreadyCanceled: true });
        return;
      }
      const clockInTime = log2.timeIn ? new Date(log2.timeIn).getTime() : 0;
      const elapsed = Date.now() - clockInTime;
      const twoMinutes = 2 * 60 * 1e3;
      if (elapsed > twoMinutes) {
        res.status(400).json({ error: "Cancel window has expired. You can only cancel within 2 minutes of clocking in." });
        return;
      }
      await db.update(titoLogs).set({ status: "canceled", notes: "Accidental clock-in", updatedAt: /* @__PURE__ */ new Date() }).where(eq16(titoLogs.id, titoLogId));
      await db.insert(auditLog).values({
        userId,
        action: "TITO_CANCELED",
        entityType: "tito_log",
        entityId: titoLogId,
        details: JSON.stringify({ reason: "Accidental clock-in", elapsedMs: elapsed })
      });
      console.log(`[TITO] Clock-in canceled: worker ${userId}, titoLogId=${titoLogId}, elapsed=${Math.round(elapsed / 1e3)}s`);
      res.json({ success: true, message: "Clock-in canceled" });
    } catch (error) {
      console.error("Error canceling TITO log:", error);
      res.status(500).json({ error: "Failed to cancel clock-in" });
    }
  });
  app2.post("/api/tito/:id/correction", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const titoLogId = req.params.id;
      const { reason, note } = req.body;
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      if (!reason) {
        res.status(400).json({ error: "Reason is required for correction requests" });
        return;
      }
      const [log2] = await db.select().from(titoLogs).where(eq16(titoLogs.id, titoLogId));
      if (!log2) {
        res.status(404).json({ error: "TITO log not found" });
        return;
      }
      if (log2.workerId !== userId) {
        res.status(403).json({ error: "You can only request corrections for your own records" });
        return;
      }
      const existingPending = await db.select().from(titoCorrections).where(and13(
        eq16(titoCorrections.titoLogId, titoLogId),
        eq16(titoCorrections.status, "pending")
      )).limit(1);
      if (existingPending.length > 0) {
        res.status(400).json({ error: "A correction request is already pending for this record" });
        return;
      }
      const [correction] = await db.insert(titoCorrections).values({
        titoLogId,
        requesterId: userId,
        originalTimeIn: log2.timeIn,
        originalTimeOut: log2.timeOut,
        reason,
        note: note || null,
        status: "pending"
      }).returning();
      await db.insert(auditLog).values({
        userId,
        action: "TITO_CORRECTION_REQUESTED",
        entityType: "tito_correction",
        entityId: correction.id,
        details: JSON.stringify({ titoLogId, reason, note })
      });
      const hrAdmins = await db.select({ id: users.id }).from(users).where(
        and13(inArray5(users.role, ["admin", "hr"]), eq16(users.isActive, true))
      );
      for (const admin of hrAdmins) {
        await db.insert(appNotifications).values({
          userId: admin.id,
          type: "tito_correction",
          title: "TITO Correction Request",
          body: `A worker has requested a time correction: ${reason}`
        });
      }
      console.log(`[TITO] Correction requested: worker ${userId}, titoLogId=${titoLogId}, correctionId=${correction.id}`);
      res.json({ success: true, correctionId: correction.id });
    } catch (error) {
      console.error("Error requesting TITO correction:", error);
      res.status(500).json({ error: "Failed to submit correction request" });
    }
  });
  app2.post("/api/tito/corrections/:id/review", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const correctionId = req.params.id;
      const { action, correctedTimeIn, correctedTimeOut } = req.body;
      if (!action || !["approved", "rejected"].includes(action)) {
        res.status(400).json({ error: "action must be 'approved' or 'rejected'" });
        return;
      }
      const [correction] = await db.select().from(titoCorrections).where(eq16(titoCorrections.id, correctionId));
      if (!correction) {
        res.status(404).json({ error: "Correction request not found" });
        return;
      }
      if (correction.status !== "pending") {
        res.status(400).json({ error: "This correction has already been reviewed" });
        return;
      }
      const updateData = {
        status: action,
        approverId: userId,
        reviewedAt: /* @__PURE__ */ new Date()
      };
      if (action === "approved") {
        if (correctedTimeIn) updateData.correctedTimeIn = new Date(correctedTimeIn);
        if (correctedTimeOut) updateData.correctedTimeOut = new Date(correctedTimeOut);
        const titoUpdate = { updatedAt: /* @__PURE__ */ new Date() };
        if (correctedTimeIn) titoUpdate.timeIn = new Date(correctedTimeIn);
        if (correctedTimeOut) titoUpdate.timeOut = new Date(correctedTimeOut);
        await db.update(titoLogs).set(titoUpdate).where(eq16(titoLogs.id, correction.titoLogId));
      }
      await db.update(titoCorrections).set(updateData).where(eq16(titoCorrections.id, correctionId));
      await db.insert(auditLog).values({
        userId,
        action: action === "approved" ? "TITO_CORRECTION_APPROVED" : "TITO_CORRECTION_REJECTED",
        entityType: "tito_correction",
        entityId: correctionId,
        details: JSON.stringify({ titoLogId: correction.titoLogId, correctedTimeIn, correctedTimeOut })
      });
      await db.insert(appNotifications).values({
        userId: correction.requesterId,
        type: "tito_correction",
        title: `Correction ${action === "approved" ? "Approved" : "Rejected"}`,
        body: action === "approved" ? "Your time correction request has been approved." : "Your time correction request has been rejected."
      });
      res.json({ success: true, message: `Correction ${action}` });
    } catch (error) {
      console.error("Error reviewing TITO correction:", error);
      res.status(500).json({ error: "Failed to review correction" });
    }
  });
  app2.get("/api/workers", checkRoles("admin", "hr"), async (_req, res) => {
    try {
      const workers = await db.select({
        id: users.id,
        email: users.email,
        fullName: users.fullName,
        onboardingStatus: users.onboardingStatus,
        workerRoles: users.workerRoles,
        isActive: users.isActive,
        profilePhotoUrl: users.profilePhotoUrl,
        createdAt: users.createdAt
      }).from(users).where(eq16(users.role, "worker")).orderBy(desc6(users.createdAt));
      res.json(workers);
    } catch (error) {
      console.error("Error fetching workers:", error);
      res.status(500).json({ error: "Failed to fetch workers" });
    }
  });
  app2.get("/api/my-today", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const role = req.headers["x-user-role"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA", { timeZone: "America/Toronto" });
      let todayShiftsQuery = db.select({
        id: shifts.id,
        title: shifts.title,
        date: shifts.date,
        startTime: shifts.startTime,
        endTime: shifts.endTime,
        status: shifts.status,
        category: shifts.category,
        workplaceId: shifts.workplaceId,
        workerUserId: shifts.workerUserId,
        workplaceName: workplaces.name,
        workerName: users.fullName
      }).from(shifts).leftJoin(workplaces, eq16(shifts.workplaceId, workplaces.id)).leftJoin(users, eq16(shifts.workerUserId, users.id)).where(
        role === "worker" ? and13(eq16(shifts.date, today), eq16(shifts.workerUserId, userId), ne5(shifts.status, "cancelled")) : and13(eq16(shifts.date, today), ne5(shifts.status, "cancelled"))
      ).orderBy(shifts.startTime);
      const todayShifts = await todayShiftsQuery;
      let pendingOffers = [];
      if (role === "worker") {
        pendingOffers = await db.select({
          id: shiftOffers.id,
          shiftId: shiftOffers.shiftId,
          status: shiftOffers.status,
          offeredAt: shiftOffers.offeredAt,
          shiftTitle: shifts.title,
          shiftDate: shifts.date,
          shiftStartTime: shifts.startTime,
          shiftEndTime: shifts.endTime,
          workplaceName: workplaces.name
        }).from(shiftOffers).innerJoin(shifts, eq16(shiftOffers.shiftId, shifts.id)).leftJoin(workplaces, eq16(shifts.workplaceId, workplaces.id)).where(
          and13(
            eq16(shiftOffers.workerId, userId),
            eq16(shiftOffers.status, "pending")
          )
        ).orderBy(shifts.date);
      }
      let pendingRequestsCount = 0;
      let unfilledTodayCount = 0;
      if (role === "admin" || role === "hr") {
        const [reqCount] = await db.select({ count: sql13`count(*)::int` }).from(shiftRequests).where(eq16(shiftRequests.status, "pending"));
        pendingRequestsCount = reqCount?.count || 0;
        unfilledTodayCount = todayShifts.filter(
          (s) => !s.workerUserId && s.status !== "cancelled"
        ).length;
      }
      res.json({
        today,
        todayShifts,
        pendingOffers,
        pendingRequestsCount,
        unfilledTodayCount,
        totalTodayShifts: todayShifts.length
      });
    } catch (error) {
      console.error("Error fetching my-today data:", error);
      res.status(500).json({ error: "Failed to fetch today data" });
    }
  });
  app2.get("/api/shifts", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const role = req.headers["x-user-role"];
      const workplaceId = req.query.workplaceId;
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      let conditions = [];
      const includePast = req.query.includePast === "true";
      if (!includePast) {
        const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA", { timeZone: "America/Toronto" });
        conditions.push(gte10(shifts.date, today));
      }
      if (role === "worker") {
        conditions.push(eq16(shifts.workerUserId, userId));
      }
      if (workplaceId) {
        conditions.push(eq16(shifts.workplaceId, workplaceId));
      }
      const result = await db.select({
        id: shifts.id,
        workplaceId: shifts.workplaceId,
        workerUserId: shifts.workerUserId,
        title: shifts.title,
        date: shifts.date,
        startTime: shifts.startTime,
        endTime: shifts.endTime,
        notes: shifts.notes,
        status: shifts.status,
        frequencyType: shifts.frequencyType,
        category: shifts.category,
        recurringDays: shifts.recurringDays,
        recurringEndDate: shifts.recurringEndDate,
        parentShiftId: shifts.parentShiftId,
        createdByUserId: shifts.createdByUserId,
        createdAt: shifts.createdAt,
        updatedAt: shifts.updatedAt,
        workplaceName: workplaces.name,
        workerName: users.fullName,
        workerEmail: users.email
      }).from(shifts).leftJoin(workplaces, eq16(shifts.workplaceId, workplaces.id)).leftJoin(users, eq16(shifts.workerUserId, users.id)).where(conditions.length > 0 ? and13(...conditions) : void 0).orderBy(desc6(shifts.date));
      res.json(result);
    } catch (error) {
      console.error("Error fetching shifts:", error);
      res.status(500).json({ error: "Failed to fetch shifts" });
    }
  });
  app2.post("/api/shifts", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const { workplaceId, workerUserId, title, date: date2, startTime, endTime, notes, frequencyType, category, recurringDays, recurringEndDate, blastToAll, workersNeeded } = req.body;
      const freq = frequencyType || "one-time";
      const cat = category || "janitorial";
      const isOpenEnded = freq === "open-ended";
      if (!workplaceId || !title || !date2 || !startTime) {
        res.status(400).json({ error: "workplaceId, title, date, and startTime are required" });
        return;
      }
      if (!blastToAll && !workerUserId) {
        res.status(400).json({ error: "workerUserId is required when not blasting to all workers" });
        return;
      }
      if (freq === "recurring" && (!recurringDays || recurringDays.length === 0)) {
        res.status(400).json({ error: "recurringDays are required for recurring shifts" });
        return;
      }
      const [workplace] = await db.select().from(workplaces).where(eq16(workplaces.id, workplaceId));
      if (!workplace) {
        res.status(404).json({ error: "Workplace not found" });
        return;
      }
      if (!blastToAll) {
        const [worker] = await db.select().from(users).where(and13(eq16(users.id, workerUserId), eq16(users.role, "worker")));
        if (!worker) {
          res.status(404).json({ error: "Worker not found" });
          return;
        }
      }
      if (freq === "recurring" && recurringDays) {
        const days = typeof recurringDays === "string" ? recurringDays.split(",") : recurringDays;
        const endType = recurringEndDate ? "date" : "never";
        const [newSeries] = await db.insert(shiftSeries).values({
          workplaceId,
          workerUserId: blastToAll ? null : workerUserId,
          title,
          startTime,
          endTime: endTime || null,
          notes: notes || null,
          category: cat,
          frequency: "weekly",
          recurringDays: days.join(","),
          startDate: date2,
          endType,
          endDate: recurringEndDate || null,
          status: "active",
          createdByUserId: userId
        }).returning();
        await db.insert(auditLog).values({
          userId,
          action: "create_series",
          entityType: "shift_series",
          entityId: newSeries.id,
          details: JSON.stringify({ title, frequency: "weekly", workplaceId })
        });
        broadcast({ type: "created", entity: "shift_series", id: newSeries.id, data: { workerUserId, workplaceId } });
        res.status(201).json({ ...newSeries, type: "series" });
      } else {
        const [newShift] = await db.insert(shifts).values({
          workplaceId,
          workerUserId: blastToAll ? null : workerUserId,
          title,
          date: date2,
          startTime,
          endTime: isOpenEnded ? null : endTime,
          notes: notes || null,
          status: "scheduled",
          frequencyType: freq,
          category: cat,
          createdByUserId: userId,
          workersNeeded: blastToAll && workersNeeded ? workersNeeded : null
        }).returning();
        if (blastToAll) {
          const eligibleWorkers = await db.select({ id: users.id, fullName: users.fullName, phone: users.phone }).from(users).where(and13(eq16(users.role, "worker"), eq16(users.isActive, true)));
          let offersCreated = 0;
          const offerIds = [];
          for (const w of eligibleWorkers) {
            try {
              const [offer] = await db.insert(shiftOffers).values({
                shiftId: newShift.id,
                workerId: w.id,
                offeredByUserId: userId,
                status: "pending"
              }).returning();
              offersCreated++;
              offerIds.push({ workerId: w.id, offerId: offer.id, phone: w.phone });
              await db.insert(appNotifications).values({
                userId: w.id,
                type: "shift_offer",
                title: "New Shift Available",
                body: `A new ${cat} shift "${title}" on ${date2} is available. Tap to view and accept.`,
                deepLink: `/shift-offers`
              });
            } catch (e) {
            }
          }
          sendPushNotifications(
            eligibleWorkers.map((w) => w.id),
            "New Shift Available",
            `A new ${cat} shift "${title}" on ${date2} is available.`,
            { type: "shift_offer", shiftId: newShift.id }
          );
          for (const o of offerIds) {
            const worker = eligibleWorkers.find((w) => w.id === o.workerId);
            if (worker?.phone) {
              sendShiftOfferSMS(
                { id: worker.id, fullName: worker.fullName, phone: worker.phone },
                newShift,
                o.offerId
              ).catch((err) => console.error(`[OPENPHONE] SMS error for worker ${worker.id}:`, err));
            }
          }
          broadcast({ type: "shift_blast", data: { shiftId: newShift.id, offersCreated } });
          broadcast({ type: "created", entity: "shift", id: newShift.id, data: { workplaceId, blasted: true } });
          res.status(201).json({ ...newShift, blasted: true, offersCreated, totalWorkers: eligibleWorkers.length });
        } else {
          broadcast({ type: "created", entity: "shift", id: newShift.id, data: { workerUserId, workplaceId } });
          res.status(201).json(newShift);
        }
      }
    } catch (error) {
      console.error("Error creating shift:", error);
      res.status(500).json({ error: "Failed to create shift" });
    }
  });
  app2.patch("/api/shifts/:id", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { title, date: date2, startTime, endTime, notes, status } = req.body;
      const [existing] = await db.select().from(shifts).where(eq16(shifts.id, req.params.id));
      if (!existing) {
        res.status(404).json({ error: "Shift not found" });
        return;
      }
      const { frequencyType, category, recurringDays, recurringEndDate } = req.body;
      const updates = { updatedAt: /* @__PURE__ */ new Date() };
      if (title !== void 0) updates.title = title;
      if (date2 !== void 0) updates.date = date2;
      if (startTime !== void 0) updates.startTime = startTime;
      if (endTime !== void 0) updates.endTime = endTime;
      if (notes !== void 0) updates.notes = notes;
      if (status !== void 0) updates.status = status;
      if (frequencyType !== void 0) updates.frequencyType = frequencyType;
      if (category !== void 0) updates.category = category;
      if (recurringDays !== void 0) updates.recurringDays = recurringDays;
      if (recurringEndDate !== void 0) updates.recurringEndDate = recurringEndDate;
      const [updated] = await db.update(shifts).set(updates).where(eq16(shifts.id, req.params.id)).returning();
      broadcast({ type: "updated", entity: "shift", id: updated.id, data: { workerUserId: existing.workerUserId, workplaceId: existing.workplaceId } });
      res.json(updated);
    } catch (error) {
      console.error("Error updating shift:", error);
      res.status(500).json({ error: "Failed to update shift" });
    }
  });
  app2.delete("/api/shifts/:id", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const [existing] = await db.select().from(shifts).where(eq16(shifts.id, req.params.id));
      if (!existing) {
        res.status(404).json({ error: "Shift not found" });
        return;
      }
      await db.delete(shiftOffers).where(eq16(shiftOffers.shiftId, req.params.id));
      await db.delete(shiftCheckins).where(eq16(shiftCheckins.shiftId, req.params.id));
      const childShifts = await db.select({ id: shifts.id }).from(shifts).where(eq16(shifts.parentShiftId, req.params.id));
      if (childShifts.length > 0) {
        const childIds = childShifts.map((c) => c.id);
        await db.delete(shiftOffers).where(inArray5(shiftOffers.shiftId, childIds));
        await db.delete(shiftCheckins).where(inArray5(shiftCheckins.shiftId, childIds));
        await db.delete(shifts).where(eq16(shifts.parentShiftId, req.params.id));
      }
      await db.delete(shifts).where(eq16(shifts.id, req.params.id));
      broadcast({ type: "deleted", entity: "shift", id: req.params.id, data: { workerUserId: existing.workerUserId, workplaceId: existing.workplaceId } });
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting shift:", error);
      res.status(500).json({ error: "Failed to delete shift" });
    }
  });
  app2.get("/api/shift-series", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const workplaceIdFilter = req.query.workplaceId;
      const statusFilter = req.query.status || "active";
      const conditions = [eq16(shiftSeries.status, statusFilter)];
      if (workplaceIdFilter) {
        conditions.push(eq16(shiftSeries.workplaceId, workplaceIdFilter));
      }
      const results = await db.select({
        id: shiftSeries.id,
        workplaceId: shiftSeries.workplaceId,
        workerUserId: shiftSeries.workerUserId,
        title: shiftSeries.title,
        roleType: shiftSeries.roleType,
        startTime: shiftSeries.startTime,
        endTime: shiftSeries.endTime,
        notes: shiftSeries.notes,
        category: shiftSeries.category,
        frequency: shiftSeries.frequency,
        recurringDays: shiftSeries.recurringDays,
        startDate: shiftSeries.startDate,
        endType: shiftSeries.endType,
        endDate: shiftSeries.endDate,
        endAfterCount: shiftSeries.endAfterCount,
        status: shiftSeries.status,
        createdByUserId: shiftSeries.createdByUserId,
        createdAt: shiftSeries.createdAt,
        updatedAt: shiftSeries.updatedAt,
        workplaceName: workplaces.name,
        workerName: users.fullName
      }).from(shiftSeries).leftJoin(workplaces, eq16(shiftSeries.workplaceId, workplaces.id)).leftJoin(users, eq16(shiftSeries.workerUserId, users.id)).where(and13(...conditions)).orderBy(desc6(shiftSeries.startDate));
      res.json(results);
    } catch (error) {
      console.error("Error fetching shift series:", error);
      res.status(500).json({ error: "Failed to fetch shift series" });
    }
  });
  app2.get("/api/shift-series/:id", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const [series] = await db.select({
        id: shiftSeries.id,
        workplaceId: shiftSeries.workplaceId,
        workerUserId: shiftSeries.workerUserId,
        title: shiftSeries.title,
        roleType: shiftSeries.roleType,
        startTime: shiftSeries.startTime,
        endTime: shiftSeries.endTime,
        notes: shiftSeries.notes,
        category: shiftSeries.category,
        frequency: shiftSeries.frequency,
        recurringDays: shiftSeries.recurringDays,
        startDate: shiftSeries.startDate,
        endType: shiftSeries.endType,
        endDate: shiftSeries.endDate,
        endAfterCount: shiftSeries.endAfterCount,
        status: shiftSeries.status,
        createdByUserId: shiftSeries.createdByUserId,
        createdAt: shiftSeries.createdAt,
        updatedAt: shiftSeries.updatedAt,
        workplaceName: workplaces.name,
        workerName: users.fullName
      }).from(shiftSeries).leftJoin(workplaces, eq16(shiftSeries.workplaceId, workplaces.id)).leftJoin(users, eq16(shiftSeries.workerUserId, users.id)).where(eq16(shiftSeries.id, req.params.id));
      if (!series) {
        res.status(404).json({ error: "Shift series not found" });
        return;
      }
      const exceptions = await db.select().from(recurrenceExceptions).where(eq16(recurrenceExceptions.seriesId, req.params.id));
      res.json({ ...series, exceptions });
    } catch (error) {
      console.error("Error fetching shift series:", error);
      res.status(500).json({ error: "Failed to fetch shift series" });
    }
  });
  app2.post("/api/shift-series", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const { workplaceId, workerUserId, title, roleType, startTime, endTime, notes, category, frequency, recurringDays, startDate, endType, endDate, endAfterCount } = req.body;
      if (!workplaceId || !title || !startTime || !startDate || !frequency) {
        res.status(400).json({ error: "workplaceId, title, startTime, startDate, and frequency are required" });
        return;
      }
      if ((frequency === "weekly" || frequency === "biweekly") && !recurringDays) {
        res.status(400).json({ error: "recurringDays is required for weekly/biweekly frequency" });
        return;
      }
      if (endType === "date" && !endDate) {
        res.status(400).json({ error: "endDate is required when endType is 'date'" });
        return;
      }
      if (endType === "count" && !endAfterCount) {
        res.status(400).json({ error: "endAfterCount is required when endType is 'count'" });
        return;
      }
      const [newSeries] = await db.insert(shiftSeries).values({
        workplaceId,
        workerUserId: workerUserId || null,
        title,
        roleType: roleType || null,
        startTime,
        endTime: endTime || null,
        notes: notes || null,
        category: category || "janitorial",
        frequency,
        recurringDays: recurringDays || null,
        startDate,
        endType: endType || "never",
        endDate: endDate || null,
        endAfterCount: endAfterCount || null,
        status: "active",
        createdByUserId: userId
      }).returning();
      await db.insert(auditLog).values({
        userId,
        action: "create_series",
        entityType: "shift_series",
        entityId: newSeries.id,
        details: JSON.stringify({ title, frequency, workplaceId })
      });
      broadcast({ type: "created", entity: "shift_series", id: newSeries.id, data: { workplaceId } });
      res.status(201).json(newSeries);
    } catch (error) {
      console.error("Error creating shift series:", error);
      res.status(500).json({ error: "Failed to create shift series" });
    }
  });
  app2.patch("/api/shift-series/:id", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const { title, workerUserId, startTime, endTime, notes, category, recurringDays, endType, endDate, endAfterCount, status } = req.body;
      const [existing] = await db.select().from(shiftSeries).where(eq16(shiftSeries.id, req.params.id));
      if (!existing) {
        res.status(404).json({ error: "Shift series not found" });
        return;
      }
      const updates = { updatedAt: /* @__PURE__ */ new Date() };
      if (title !== void 0) updates.title = title;
      if (workerUserId !== void 0) updates.workerUserId = workerUserId;
      if (startTime !== void 0) updates.startTime = startTime;
      if (endTime !== void 0) updates.endTime = endTime;
      if (notes !== void 0) updates.notes = notes;
      if (category !== void 0) updates.category = category;
      if (recurringDays !== void 0) updates.recurringDays = recurringDays;
      if (endType !== void 0) updates.endType = endType;
      if (endDate !== void 0) updates.endDate = endDate;
      if (endAfterCount !== void 0) updates.endAfterCount = endAfterCount;
      if (status !== void 0) updates.status = status;
      const [updated] = await db.update(shiftSeries).set(updates).where(eq16(shiftSeries.id, req.params.id)).returning();
      await db.insert(auditLog).values({
        userId,
        action: "update_series",
        entityType: "shift_series",
        entityId: req.params.id,
        details: JSON.stringify(updates)
      });
      broadcast({ type: "updated", entity: "shift_series", id: updated.id, data: { workplaceId: existing.workplaceId } });
      res.json(updated);
    } catch (error) {
      console.error("Error updating shift series:", error);
      res.status(500).json({ error: "Failed to update shift series" });
    }
  });
  app2.delete("/api/shift-series/:id", checkRoles("admin"), async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const [existing] = await db.select().from(shiftSeries).where(eq16(shiftSeries.id, req.params.id));
      if (!existing) {
        res.status(404).json({ error: "Shift series not found" });
        return;
      }
      await db.delete(recurrenceExceptions).where(eq16(recurrenceExceptions.seriesId, req.params.id));
      await db.delete(shiftSeries).where(eq16(shiftSeries.id, req.params.id));
      await db.insert(auditLog).values({
        userId,
        action: "delete_series",
        entityType: "shift_series",
        entityId: req.params.id,
        details: JSON.stringify({ title: existing.title, workplaceId: existing.workplaceId })
      });
      broadcast({ type: "deleted", entity: "shift_series", id: req.params.id, data: { workplaceId: existing.workplaceId } });
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting shift series:", error);
      res.status(500).json({ error: "Failed to delete shift series" });
    }
  });
  app2.post("/api/shift-series/:id/cancel-occurrence", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const { date: date2, reason } = req.body;
      if (!date2) {
        res.status(400).json({ error: "date is required" });
        return;
      }
      const [existing] = await db.select().from(shiftSeries).where(eq16(shiftSeries.id, req.params.id));
      if (!existing) {
        res.status(404).json({ error: "Shift series not found" });
        return;
      }
      const [exception] = await db.insert(recurrenceExceptions).values({
        seriesId: req.params.id,
        date: date2,
        type: "cancelled",
        reason: reason || null,
        cancelledByUserId: userId
      }).returning();
      await db.insert(auditLog).values({
        userId,
        action: "cancel_occurrence",
        entityType: "shift_series",
        entityId: req.params.id,
        details: JSON.stringify({ date: date2, reason })
      });
      broadcast({ type: "updated", entity: "shift_series", id: req.params.id, data: { workplaceId: existing.workplaceId } });
      res.json(exception);
    } catch (error) {
      console.error("Error cancelling occurrence:", error);
      res.status(500).json({ error: "Failed to cancel occurrence" });
    }
  });
  app2.post("/api/shift-series/:id/delete-future", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const { fromDate } = req.body;
      if (!fromDate) {
        res.status(400).json({ error: "fromDate is required" });
        return;
      }
      const [existing] = await db.select().from(shiftSeries).where(eq16(shiftSeries.id, req.params.id));
      if (!existing) {
        res.status(404).json({ error: "Shift series not found" });
        return;
      }
      const newEndDate = new Date(fromDate);
      newEndDate.setDate(newEndDate.getDate() - 1);
      const newEndDateStr = newEndDate.toISOString().split("T")[0];
      if (existing.endType === "never" || existing.endDate && existing.endDate > fromDate) {
        await db.update(shiftSeries).set({
          endType: "date",
          endDate: newEndDateStr,
          updatedAt: /* @__PURE__ */ new Date()
        }).where(eq16(shiftSeries.id, req.params.id));
      }
      await db.delete(recurrenceExceptions).where(
        and13(
          eq16(recurrenceExceptions.seriesId, req.params.id),
          gte10(recurrenceExceptions.date, fromDate)
        )
      );
      await db.insert(auditLog).values({
        userId,
        action: "delete_future_occurrences",
        entityType: "shift_series",
        entityId: req.params.id,
        details: JSON.stringify({ fromDate })
      });
      const [updated] = await db.select().from(shiftSeries).where(eq16(shiftSeries.id, req.params.id));
      broadcast({ type: "updated", entity: "shift_series", id: req.params.id, data: { workplaceId: existing.workplaceId } });
      res.json(updated);
    } catch (error) {
      console.error("Error deleting future occurrences:", error);
      res.status(500).json({ error: "Failed to delete future occurrences" });
    }
  });
  app2.post("/api/shift-series/:id/modify-occurrence", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const { date: date2, startTime, endTime, workerUserId, notes } = req.body;
      if (!date2) {
        res.status(400).json({ error: "date is required" });
        return;
      }
      const [existing] = await db.select().from(shiftSeries).where(eq16(shiftSeries.id, req.params.id));
      if (!existing) {
        res.status(404).json({ error: "Shift series not found" });
        return;
      }
      const [exception] = await db.insert(recurrenceExceptions).values({
        seriesId: req.params.id,
        date: date2,
        type: "modified",
        overrideStartTime: startTime || null,
        overrideEndTime: endTime || null,
        overrideWorkerUserId: workerUserId || null,
        overrideNotes: notes || null
      }).returning();
      await db.insert(auditLog).values({
        userId,
        action: "modify_occurrence",
        entityType: "shift_series",
        entityId: req.params.id,
        details: JSON.stringify({ date: date2, startTime, endTime, workerUserId, notes })
      });
      broadcast({ type: "updated", entity: "shift_series", id: req.params.id, data: { workplaceId: existing.workplaceId } });
      res.json(exception);
    } catch (error) {
      console.error("Error modifying occurrence:", error);
      res.status(500).json({ error: "Failed to modify occurrence" });
    }
  });
  app2.get("/api/shift-series/:id/occurrences", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const startDateParam = req.query.startDate;
      const endDateParam = req.query.endDate;
      if (!startDateParam || !endDateParam) {
        res.status(400).json({ error: "startDate and endDate query parameters are required" });
        return;
      }
      const [series] = await db.select({
        id: shiftSeries.id,
        workplaceId: shiftSeries.workplaceId,
        workerUserId: shiftSeries.workerUserId,
        title: shiftSeries.title,
        roleType: shiftSeries.roleType,
        startTime: shiftSeries.startTime,
        endTime: shiftSeries.endTime,
        notes: shiftSeries.notes,
        category: shiftSeries.category,
        frequency: shiftSeries.frequency,
        recurringDays: shiftSeries.recurringDays,
        startDate: shiftSeries.startDate,
        endType: shiftSeries.endType,
        endDate: shiftSeries.endDate,
        endAfterCount: shiftSeries.endAfterCount,
        status: shiftSeries.status,
        workerName: users.fullName
      }).from(shiftSeries).leftJoin(users, eq16(shiftSeries.workerUserId, users.id)).where(eq16(shiftSeries.id, req.params.id));
      if (!series) {
        res.status(404).json({ error: "Shift series not found" });
        return;
      }
      const exceptions = await db.select().from(recurrenceExceptions).where(eq16(recurrenceExceptions.seriesId, req.params.id));
      const occurrences = expandSeriesOccurrences(series, exceptions, startDateParam, endDateParam);
      const enriched = occurrences.map((occ) => ({
        ...occ,
        workerName: series.workerName,
        title: series.title,
        category: series.category
      }));
      res.json(enriched);
    } catch (error) {
      console.error("Error fetching occurrences:", error);
      res.status(500).json({ error: "Failed to fetch occurrences" });
    }
  });
  app2.get("/api/roster", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const workplaceId = req.query.workplaceId;
      const startDateParam = req.query.startDate;
      const endDateParam = req.query.endDate;
      if (!workplaceId || !startDateParam || !endDateParam) {
        res.status(400).json({ error: "workplaceId, startDate, and endDate query parameters are required" });
        return;
      }
      const oneTimeShifts = await db.select({
        id: shifts.id,
        date: shifts.date,
        startTime: shifts.startTime,
        endTime: shifts.endTime,
        title: shifts.title,
        workerUserId: shifts.workerUserId,
        workerName: users.fullName,
        category: shifts.category,
        status: shifts.status,
        notes: shifts.notes
      }).from(shifts).leftJoin(users, eq16(shifts.workerUserId, users.id)).where(and13(
        eq16(shifts.workplaceId, workplaceId),
        gte10(shifts.date, startDateParam),
        lte10(shifts.date, endDateParam)
      )).orderBy(shifts.date, shifts.startTime);
      const shiftItems = oneTimeShifts.map((s) => ({
        id: s.id,
        date: s.date,
        startTime: s.startTime,
        endTime: s.endTime,
        title: s.title,
        workerUserId: s.workerUserId,
        workerName: s.workerName,
        category: s.category,
        status: s.status,
        notes: s.notes,
        type: "shift",
        seriesId: null
      }));
      const activeSeries = await db.select({
        id: shiftSeries.id,
        workplaceId: shiftSeries.workplaceId,
        workerUserId: shiftSeries.workerUserId,
        title: shiftSeries.title,
        roleType: shiftSeries.roleType,
        startTime: shiftSeries.startTime,
        endTime: shiftSeries.endTime,
        notes: shiftSeries.notes,
        category: shiftSeries.category,
        frequency: shiftSeries.frequency,
        recurringDays: shiftSeries.recurringDays,
        startDate: shiftSeries.startDate,
        endType: shiftSeries.endType,
        endDate: shiftSeries.endDate,
        endAfterCount: shiftSeries.endAfterCount,
        status: shiftSeries.status,
        workerName: users.fullName
      }).from(shiftSeries).leftJoin(users, eq16(shiftSeries.workerUserId, users.id)).where(and13(
        eq16(shiftSeries.workplaceId, workplaceId),
        eq16(shiftSeries.status, "active")
      ));
      const seriesItems = [];
      for (const s of activeSeries) {
        const exceptions = await db.select().from(recurrenceExceptions).where(eq16(recurrenceExceptions.seriesId, s.id));
        const occurrences = expandSeriesOccurrences(s, exceptions, startDateParam, endDateParam);
        for (const occ of occurrences) {
          let workerName = s.workerName;
          if (occ.isException && occ.exceptionType === "modified" && occ.workerUserId && occ.workerUserId !== s.workerUserId) {
            const [overrideWorker] = await db.select({ fullName: users.fullName }).from(users).where(eq16(users.id, occ.workerUserId));
            if (overrideWorker) workerName = overrideWorker.fullName;
          }
          seriesItems.push({
            id: null,
            date: occ.date,
            startTime: occ.startTime,
            endTime: occ.endTime,
            title: s.title,
            workerUserId: occ.workerUserId || s.workerUserId,
            workerName,
            category: s.category,
            status: occ.status,
            notes: occ.notes || s.notes,
            type: "series_occurrence",
            seriesId: s.id,
            isException: occ.isException,
            exceptionType: occ.exceptionType || null
          });
        }
      }
      const merged = [...shiftItems, ...seriesItems].sort((a, b) => {
        const dateCompare = (a.date || "").localeCompare(b.date || "");
        if (dateCompare !== 0) return dateCompare;
        return (a.startTime || "").localeCompare(b.startTime || "");
      });
      res.json(merged);
    } catch (error) {
      console.error("Error fetching roster:", error);
      res.status(500).json({ error: "Failed to fetch roster" });
    }
  });
  app2.get("/api/payroll/periods", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const year = parseInt(req.query.year) || 2026;
      const periods = getPayPeriodsForYear(year);
      res.json(periods);
    } catch (error) {
      console.error("Error fetching pay periods:", error);
      res.status(500).json({ error: "Failed to fetch pay periods" });
    }
  });
  app2.get("/api/timesheets", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const year = parseInt(req.query.year) || 2026;
      const period = req.query.period ? parseInt(req.query.period) : void 0;
      const status = req.query.status;
      let query = db.select({
        id: timesheets.id,
        workerUserId: timesheets.workerUserId,
        periodYear: timesheets.periodYear,
        periodNumber: timesheets.periodNumber,
        status: timesheets.status,
        submittedAt: timesheets.submittedAt,
        approvedAt: timesheets.approvedAt,
        disputedAt: timesheets.disputedAt,
        disputeReason: timesheets.disputeReason,
        totalHours: timesheets.totalHours,
        totalPay: timesheets.totalPay,
        createdAt: timesheets.createdAt,
        workerName: users.fullName,
        workerEmail: users.email
      }).from(timesheets).leftJoin(users, eq16(timesheets.workerUserId, users.id)).where(eq16(timesheets.periodYear, year)).orderBy(desc6(timesheets.submittedAt));
      const results = await query;
      let filtered = results;
      if (period) {
        filtered = filtered.filter((t) => t.periodNumber === period);
      }
      if (status) {
        filtered = filtered.filter((t) => t.status === status);
      }
      res.json(filtered);
    } catch (error) {
      console.error("Error fetching timesheets:", error);
      res.status(500).json({ error: "Failed to fetch timesheets" });
    }
  });
  app2.get("/api/timesheets/:id", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { id } = req.params;
      const [timesheet] = await db.select({
        id: timesheets.id,
        workerUserId: timesheets.workerUserId,
        periodYear: timesheets.periodYear,
        periodNumber: timesheets.periodNumber,
        status: timesheets.status,
        submittedAt: timesheets.submittedAt,
        approvedAt: timesheets.approvedAt,
        disputedAt: timesheets.disputedAt,
        disputeReason: timesheets.disputeReason,
        totalHours: timesheets.totalHours,
        totalPay: timesheets.totalPay,
        createdAt: timesheets.createdAt,
        workerName: users.fullName,
        workerEmail: users.email
      }).from(timesheets).leftJoin(users, eq16(timesheets.workerUserId, users.id)).where(eq16(timesheets.id, id));
      if (!timesheet) {
        res.status(404).json({ error: "Timesheet not found" });
        return;
      }
      const entries = await db.select({
        id: timesheetEntries.id,
        timesheetId: timesheetEntries.timesheetId,
        workplaceId: timesheetEntries.workplaceId,
        titoLogId: timesheetEntries.titoLogId,
        dateLocal: timesheetEntries.dateLocal,
        timeInUtc: timesheetEntries.timeInUtc,
        timeOutUtc: timesheetEntries.timeOutUtc,
        breakMinutes: timesheetEntries.breakMinutes,
        hours: timesheetEntries.hours,
        payRate: timesheetEntries.payRate,
        amount: timesheetEntries.amount,
        notes: timesheetEntries.notes,
        workplaceName: workplaces.name
      }).from(timesheetEntries).leftJoin(workplaces, eq16(timesheetEntries.workplaceId, workplaces.id)).where(eq16(timesheetEntries.timesheetId, id)).orderBy(timesheetEntries.dateLocal);
      res.json({ ...timesheet, entries });
    } catch (error) {
      console.error("Error fetching timesheet:", error);
      res.status(500).json({ error: "Failed to fetch timesheet" });
    }
  });
  app2.patch("/api/timesheets/:id/approve", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { id } = req.params;
      const userId = req.headers["x-user-id"];
      const [timesheet] = await db.select().from(timesheets).where(eq16(timesheets.id, id));
      if (!timesheet) {
        res.status(404).json({ error: "Timesheet not found" });
        return;
      }
      if (timesheet.status !== "submitted") {
        res.status(400).json({ error: "Only submitted timesheets can be approved" });
        return;
      }
      const [updated] = await db.update(timesheets).set({
        status: "approved",
        approvedByUserId: userId,
        approvedAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq16(timesheets.id, id)).returning();
      res.json(updated);
    } catch (error) {
      console.error("Error approving timesheet:", error);
      res.status(500).json({ error: "Failed to approve timesheet" });
    }
  });
  app2.patch("/api/timesheets/:id/dispute", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { id } = req.params;
      const { reason } = req.body;
      const userId = req.headers["x-user-id"];
      if (!reason || reason.trim().length === 0) {
        res.status(400).json({ error: "Dispute reason is required" });
        return;
      }
      const [timesheet] = await db.select().from(timesheets).where(eq16(timesheets.id, id));
      if (!timesheet) {
        res.status(404).json({ error: "Timesheet not found" });
        return;
      }
      if (timesheet.status !== "submitted" && timesheet.status !== "approved") {
        res.status(400).json({ error: "Only submitted or approved timesheets can be disputed" });
        return;
      }
      const [updated] = await db.update(timesheets).set({
        status: "disputed",
        disputedByUserId: userId,
        disputedAt: /* @__PURE__ */ new Date(),
        disputeReason: reason.trim(),
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq16(timesheets.id, id)).returning();
      res.json(updated);
    } catch (error) {
      console.error("Error disputing timesheet:", error);
      res.status(500).json({ error: "Failed to dispute timesheet" });
    }
  });
  app2.post("/api/payroll/batches", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { year, periodNumber } = req.body;
      const userId = req.headers["x-user-id"];
      if (!year || !periodNumber) {
        res.status(400).json({ error: "Year and periodNumber are required" });
        return;
      }
      const [existingBatch] = await db.select().from(payrollBatches).where(and13(
        eq16(payrollBatches.periodYear, year),
        eq16(payrollBatches.periodNumber, periodNumber)
      ));
      if (existingBatch) {
        const items2 = await db.select({
          id: payrollBatchItems.id,
          workerUserId: payrollBatchItems.workerUserId,
          timesheetId: payrollBatchItems.timesheetId,
          status: payrollBatchItems.status,
          hours: payrollBatchItems.hours,
          amount: payrollBatchItems.amount,
          workerName: users.fullName,
          workerEmail: users.email
        }).from(payrollBatchItems).leftJoin(users, eq16(payrollBatchItems.workerUserId, users.id)).where(eq16(payrollBatchItems.payrollBatchId, existingBatch.id));
        res.json({ ...existingBatch, items: items2 });
        return;
      }
      const approvedTimesheets = await db.select().from(timesheets).where(and13(
        eq16(timesheets.periodYear, year),
        eq16(timesheets.periodNumber, periodNumber),
        eq16(timesheets.status, "approved")
      ));
      let totalWorkers = approvedTimesheets.length;
      let totalHours = 0;
      let totalAmount = 0;
      for (const ts of approvedTimesheets) {
        totalHours += parseFloat(ts.totalHours || "0");
        totalAmount += parseFloat(ts.totalPay || "0");
      }
      const [batch] = await db.insert(payrollBatches).values({
        periodYear: year,
        periodNumber,
        status: "open",
        createdByUserId: userId,
        totalWorkers,
        totalHours: totalHours.toFixed(2),
        totalAmount: totalAmount.toFixed(2)
      }).returning();
      const items = [];
      for (const ts of approvedTimesheets) {
        const [item] = await db.insert(payrollBatchItems).values({
          payrollBatchId: batch.id,
          workerUserId: ts.workerUserId,
          timesheetId: ts.id,
          status: "included",
          hours: ts.totalHours || "0",
          amount: ts.totalPay || "0"
        }).returning();
        items.push(item);
      }
      res.json({ ...batch, items });
    } catch (error) {
      console.error("Error creating payroll batch:", error);
      res.status(500).json({ error: "Failed to create payroll batch" });
    }
  });
  app2.get("/api/payroll/batches", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const year = parseInt(req.query.year) || 2026;
      const period = req.query.period ? parseInt(req.query.period) : void 0;
      let results = await db.select().from(payrollBatches).where(eq16(payrollBatches.periodYear, year)).orderBy(desc6(payrollBatches.createdAt));
      if (period) {
        results = results.filter((b) => b.periodNumber === period);
      }
      res.json(results);
    } catch (error) {
      console.error("Error fetching payroll batches:", error);
      res.status(500).json({ error: "Failed to fetch payroll batches" });
    }
  });
  app2.get("/api/payroll/batches/:id", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { id } = req.params;
      const [batch] = await db.select().from(payrollBatches).where(eq16(payrollBatches.id, id));
      if (!batch) {
        res.status(404).json({ error: "Payroll batch not found" });
        return;
      }
      const items = await db.select({
        id: payrollBatchItems.id,
        workerUserId: payrollBatchItems.workerUserId,
        timesheetId: payrollBatchItems.timesheetId,
        status: payrollBatchItems.status,
        hours: payrollBatchItems.hours,
        amount: payrollBatchItems.amount,
        workerName: users.fullName,
        workerEmail: users.email
      }).from(payrollBatchItems).leftJoin(users, eq16(payrollBatchItems.workerUserId, users.id)).where(eq16(payrollBatchItems.payrollBatchId, id));
      res.json({ ...batch, items });
    } catch (error) {
      console.error("Error fetching payroll batch:", error);
      res.status(500).json({ error: "Failed to fetch payroll batch" });
    }
  });
  app2.patch("/api/payroll/batches/:id/finalize", checkRoles("admin"), async (req, res) => {
    try {
      const { id } = req.params;
      const userId = req.headers["x-user-id"];
      const [batch] = await db.select().from(payrollBatches).where(eq16(payrollBatches.id, id));
      if (!batch) {
        res.status(404).json({ error: "Payroll batch not found" });
        return;
      }
      if (batch.status !== "open") {
        res.status(400).json({ error: "Only open batches can be finalized" });
        return;
      }
      const items = await db.select().from(payrollBatchItems).where(and13(
        eq16(payrollBatchItems.payrollBatchId, id),
        eq16(payrollBatchItems.status, "included")
      ));
      for (const item of items) {
        await db.update(timesheets).set({ status: "processed", updatedAt: /* @__PURE__ */ new Date() }).where(eq16(timesheets.id, item.timesheetId));
      }
      const [updated] = await db.update(payrollBatches).set({
        status: "finalized",
        finalizedByUserId: userId,
        finalizedAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq16(payrollBatches.id, id)).returning();
      res.json(updated);
    } catch (error) {
      console.error("Error finalizing payroll batch:", error);
      res.status(500).json({ error: "Failed to finalize payroll batch" });
    }
  });
  app2.get("/api/payroll/batches/:id/export.csv", checkRoles("admin"), async (req, res) => {
    try {
      const { id } = req.params;
      const [batch] = await db.select().from(payrollBatches).where(eq16(payrollBatches.id, id));
      if (!batch) {
        res.status(404).json({ error: "Payroll batch not found" });
        return;
      }
      const period = getPayPeriod(batch.periodYear, batch.periodNumber);
      const dateRange = period ? `${period.startDate} to ${period.endDate}` : "Unknown";
      const items = await db.select({
        workerName: users.fullName,
        workerEmail: users.email,
        hours: payrollBatchItems.hours,
        amount: payrollBatchItems.amount,
        status: payrollBatchItems.status
      }).from(payrollBatchItems).leftJoin(users, eq16(payrollBatchItems.workerUserId, users.id)).where(and13(
        eq16(payrollBatchItems.payrollBatchId, id),
        eq16(payrollBatchItems.status, "included")
      ));
      const csvLines = [
        "Worker Name,Worker Email,Hours,Amount,Period,Date Range",
        ...items.map(
          (item) => `"${item.workerName || ""}","${item.workerEmail || ""}",${item.hours},${item.amount},Period ${batch.periodNumber},"${dateRange}"`
        )
      ];
      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", `attachment; filename="payroll-period-${batch.periodNumber}-${batch.periodYear}.csv"`);
      res.send(csvLines.join("\n"));
    } catch (error) {
      console.error("Error exporting payroll batch:", error);
      res.status(500).json({ error: "Failed to export payroll batch" });
    }
  });
  app2.post("/api/payroll/batches/:id/email", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const { id } = req.params;
      const { to, subject } = req.body;
      if (!to || typeof to !== "string" || !to.includes("@")) {
        res.status(400).json({ error: "Valid email address is required" });
        return;
      }
      const [batch] = await db.select().from(payrollBatches).where(eq16(payrollBatches.id, id));
      if (!batch) {
        res.status(404).json({ error: "Payroll batch not found" });
        return;
      }
      const period = getPayPeriod(batch.periodYear, batch.periodNumber);
      const dateRange = period ? `${period.startDate} to ${period.endDate}` : "Unknown";
      const items = await db.select({
        workerName: users.fullName,
        workerEmail: users.email,
        hours: payrollBatchItems.hours,
        amount: payrollBatchItems.amount,
        status: payrollBatchItems.status
      }).from(payrollBatchItems).leftJoin(users, eq16(payrollBatchItems.workerUserId, users.id)).where(and13(
        eq16(payrollBatchItems.payrollBatchId, id),
        eq16(payrollBatchItems.status, "included")
      ));
      const csvLines = [
        "Worker Name,Worker Email,Hours,Amount,Period,Date Range",
        ...items.map(
          (item) => `"${item.workerName || ""}","${item.workerEmail || ""}",${item.hours},${item.amount},Period ${batch.periodNumber},"${dateRange}"`
        )
      ];
      const csvContent = csvLines.join("\n");
      const filename = `payroll-period-${batch.periodNumber}-${batch.periodYear}.csv`;
      const emailSubject = subject || `WFConnect Payroll - Period ${batch.periodNumber} (${dateRange})`;
      const bodyText = `Please find attached the payroll report for Period ${batch.periodNumber} (${dateRange}).

This report includes ${items.length} worker(s).

- WFConnect`;
      const result = await sendCSVEmail(to, emailSubject, bodyText, csvContent, filename);
      if (result.success) {
        res.json({ success: true, message: `Payroll CSV sent to ${to}` });
      } else {
        res.status(500).json({ error: result.error || "Failed to send email" });
      }
    } catch (error) {
      console.error("Error emailing payroll batch:", error);
      res.status(500).json({ error: "Failed to email payroll batch" });
    }
  });
  app2.get("/api/places/autocomplete", async (req, res) => {
    try {
      const { input } = req.query;
      if (!input || typeof input !== "string" || input.length < 2) {
        res.json({ predictions: [] });
        return;
      }
      const apiKey = process.env.GOOGLE_PLACES_API_KEY;
      if (!apiKey) {
        res.status(500).json({ error: "Google Places API key not configured" });
        return;
      }
      const url = new URL("https://maps.googleapis.com/maps/api/place/autocomplete/json");
      url.searchParams.set("input", input);
      url.searchParams.set("key", apiKey);
      url.searchParams.set("types", "address");
      url.searchParams.set("components", "country:ca|country:us");
      const response = await fetch(url.toString());
      const data = await response.json();
      if (data.status === "OK" || data.status === "ZERO_RESULTS") {
        res.json({ predictions: data.predictions || [] });
      } else {
        console.error("Google Places API error:", data.status, data.error_message);
        res.status(500).json({ error: "Failed to fetch address suggestions" });
      }
    } catch (error) {
      console.error("Error in address autocomplete:", error);
      res.status(500).json({ error: "Failed to fetch address suggestions" });
    }
  });
  app2.get("/api/places/details/:placeId", async (req, res) => {
    try {
      const { placeId } = req.params;
      if (!placeId) {
        res.status(400).json({ error: "Place ID is required" });
        return;
      }
      const apiKey = process.env.GOOGLE_PLACES_API_KEY;
      if (!apiKey) {
        res.status(500).json({ error: "Google Places API key not configured" });
        return;
      }
      const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
      url.searchParams.set("place_id", placeId);
      url.searchParams.set("key", apiKey);
      url.searchParams.set("fields", "formatted_address,address_components,geometry");
      const response = await fetch(url.toString());
      const data = await response.json();
      if (data.status === "OK" && data.result) {
        const result = data.result;
        const components = result.address_components || [];
        const getComponent = (types) => {
          const comp = components.find(
            (c) => types.some((t) => c.types.includes(t))
          );
          return comp?.long_name || "";
        };
        const getShortComponent = (types) => {
          const comp = components.find(
            (c) => types.some((t) => c.types.includes(t))
          );
          return comp?.short_name || "";
        };
        const streetNumber = getComponent(["street_number"]);
        const streetName = getComponent(["route"]);
        const addressLine1 = streetNumber && streetName ? `${streetNumber} ${streetName}` : streetName || getComponent(["premise", "subpremise"]);
        const addressData = {
          formattedAddress: result.formatted_address,
          addressLine1,
          city: getComponent(["locality", "sublocality", "administrative_area_level_3"]),
          province: getShortComponent(["administrative_area_level_1"]),
          postalCode: getComponent(["postal_code"]),
          country: getComponent(["country"]),
          latitude: result.geometry?.location?.lat || null,
          longitude: result.geometry?.location?.lng || null
        };
        res.json(addressData);
      } else {
        console.error("Google Places Details API error:", data.status, data.error_message);
        res.status(500).json({ error: "Failed to fetch address details" });
      }
    } catch (error) {
      console.error("Error in address details:", error);
      res.status(500).json({ error: "Failed to fetch address details" });
    }
  });
  app2.get("/api/debug/whoami", (req, res) => {
    res.json({
      headers: {
        "x-user-id": req.headers["x-user-id"] || null,
        "x-user-role": req.headers["x-user-role"] || null,
        host: req.headers["host"] || null
      },
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  });
  app2.get("/api/shift-requests", async (req, res) => {
    try {
      const role = req.headers["x-user-role"];
      const userId = req.headers["x-user-id"];
      if (!role || !userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      let results;
      if (role === "admin" || role === "hr") {
        results = await db.select({
          id: shiftRequests.id,
          clientId: shiftRequests.clientId,
          workplaceId: shiftRequests.workplaceId,
          roleType: shiftRequests.roleType,
          date: shiftRequests.date,
          startTime: shiftRequests.startTime,
          endTime: shiftRequests.endTime,
          notes: shiftRequests.notes,
          requestedWorkerId: shiftRequests.requestedWorkerId,
          status: shiftRequests.status,
          createdAt: shiftRequests.createdAt,
          updatedAt: shiftRequests.updatedAt,
          workplaceName: workplaces.name,
          clientName: users.fullName
        }).from(shiftRequests).leftJoin(workplaces, eq16(shiftRequests.workplaceId, workplaces.id)).leftJoin(users, eq16(shiftRequests.clientId, users.id)).orderBy(desc6(shiftRequests.createdAt));
      } else if (role === "client") {
        results = await db.select({
          id: shiftRequests.id,
          clientId: shiftRequests.clientId,
          workplaceId: shiftRequests.workplaceId,
          roleType: shiftRequests.roleType,
          date: shiftRequests.date,
          startTime: shiftRequests.startTime,
          endTime: shiftRequests.endTime,
          notes: shiftRequests.notes,
          requestedWorkerId: shiftRequests.requestedWorkerId,
          status: shiftRequests.status,
          createdAt: shiftRequests.createdAt,
          updatedAt: shiftRequests.updatedAt,
          workplaceName: workplaces.name,
          clientName: users.fullName
        }).from(shiftRequests).leftJoin(workplaces, eq16(shiftRequests.workplaceId, workplaces.id)).leftJoin(users, eq16(shiftRequests.clientId, users.id)).where(eq16(shiftRequests.clientId, userId)).orderBy(desc6(shiftRequests.createdAt));
      } else {
        res.status(403).json({ error: "Access denied" });
        return;
      }
      res.json(results);
    } catch (error) {
      console.error("Error fetching shift requests:", error);
      res.status(500).json({ error: "Failed to fetch shift requests" });
    }
  });
  app2.post(
    "/api/shift-requests",
    checkRoles("admin", "hr", "client"),
    async (req, res) => {
      try {
        const userId = req.headers["x-user-id"];
        const { clientId, workplaceId, roleType, date: date2, startTime, endTime, notes, requestedWorkerId } = req.body;
        const effectiveClientId = clientId || userId;
        if (!workplaceId || !roleType || !date2 || !startTime || !endTime) {
          res.status(400).json({ error: "workplaceId, roleType, date, startTime, and endTime are required" });
          return;
        }
        const [newRequest] = await db.insert(shiftRequests).values({
          clientId: effectiveClientId,
          workplaceId,
          roleType,
          date: date2,
          startTime,
          endTime,
          notes: notes || null,
          requestedWorkerId: requestedWorkerId || null,
          status: "submitted"
        }).returning();
        broadcast({ type: "shift_request_created", data: newRequest });
        const [wp] = newRequest.workplaceId ? await db.select().from(workplaces).where(eq16(workplaces.id, newRequest.workplaceId)) : [null];
        const wpName = wp?.name || "a workplace";
        const adminsAndHR = await db.select({ id: users.id }).from(users).where(and13(
          or2(eq16(users.role, "admin"), eq16(users.role, "hr")),
          eq16(users.isActive, true),
          ne5(users.id, userId)
        ));
        const notifyIds = adminsAndHR.map((u) => u.id);
        if (notifyIds.length > 0) {
          for (const uid of notifyIds) {
            await db.insert(appNotifications).values({
              userId: uid,
              type: "shift_request_created",
              title: "New Shift Request",
              body: `A ${newRequest.roleType} shift has been requested at ${wpName} on ${newRequest.date}.`,
              deepLink: `/shift-requests/${newRequest.id}`
            });
          }
          sendPushNotifications(
            notifyIds,
            "New Shift Request",
            `A ${newRequest.roleType} shift has been requested at ${wpName} on ${newRequest.date}.`,
            { type: "shift_request_created", requestId: newRequest.id }
          );
        }
        if (newRequest.requestedWorkerId) {
          await db.insert(appNotifications).values({
            userId: newRequest.requestedWorkerId,
            type: "shift_request_for_you",
            title: "Shift Requested For You",
            body: `A ${newRequest.roleType} shift at ${wpName} on ${newRequest.date} has been requested for you.`,
            deepLink: `/shift-requests/${newRequest.id}`
          });
          sendPushNotifications(
            [newRequest.requestedWorkerId],
            "Shift Requested For You",
            `A ${newRequest.roleType} shift at ${wpName} on ${newRequest.date} has been requested for you.`,
            { type: "shift_request_for_you", requestId: newRequest.id }
          );
        }
        res.json(newRequest);
      } catch (error) {
        console.error("Error creating shift request:", error);
        res.status(500).json({ error: "Failed to create shift request" });
      }
    }
  );
  app2.patch(
    "/api/shift-requests/:id",
    checkRoles("admin", "hr"),
    async (req, res) => {
      try {
        const requestId = req.params.id;
        const updates = req.body;
        const [existing] = await db.select().from(shiftRequests).where(eq16(shiftRequests.id, requestId));
        if (!existing) {
          res.status(404).json({ error: "Shift request not found" });
          return;
        }
        const [updated] = await db.update(shiftRequests).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq16(shiftRequests.id, requestId)).returning();
        if (updates.status === "filled" && existing.status !== "filled") {
          await db.insert(appNotifications).values({
            userId: existing.clientId,
            type: "request_filled",
            title: "Shift Request Filled",
            body: `Your shift request for ${existing.roleType} on ${existing.date} has been filled.`,
            deepLink: `/shift-requests/${requestId}`
          });
          sendPushNotifications(
            [existing.clientId],
            "Shift Request Filled",
            `Your shift request for ${existing.roleType} on ${existing.date} has been filled.`,
            { type: "request_filled", requestId }
          );
        }
        broadcast({ type: "shift_request_updated", data: updated });
        res.json(updated);
      } catch (error) {
        console.error("Error updating shift request:", error);
        res.status(500).json({ error: "Failed to update shift request" });
      }
    }
  );
  app2.delete("/api/shift-requests/:id", async (req, res) => {
    try {
      const role = req.headers["x-user-role"];
      const userId = req.headers["x-user-id"];
      const requestId = req.params.id;
      if (!role || !userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const [existing] = await db.select().from(shiftRequests).where(eq16(shiftRequests.id, requestId));
      if (!existing) {
        res.status(404).json({ error: "Shift request not found" });
        return;
      }
      if (role === "client" && existing.clientId !== userId) {
        res.status(403).json({ error: "You can only delete your own requests" });
        return;
      }
      if (role !== "admin" && role !== "hr" && role !== "client") {
        res.status(403).json({ error: "Access denied" });
        return;
      }
      const associatedShifts = await db.select({ id: shifts.id }).from(shifts).where(eq16(shifts.requestId, requestId));
      if (associatedShifts.length > 0) {
        const shiftIds = associatedShifts.map((s) => s.id);
        await db.delete(shiftOffers).where(inArray5(shiftOffers.shiftId, shiftIds));
        await db.delete(shiftCheckins).where(inArray5(shiftCheckins.shiftId, shiftIds));
        await db.delete(shifts).where(eq16(shifts.requestId, requestId));
      }
      await db.delete(shiftRequests).where(eq16(shiftRequests.id, requestId));
      broadcast({ type: "shift_request_deleted", data: { id: requestId } });
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting shift request:", error);
      res.status(500).json({ error: "Failed to delete shift request" });
    }
  });
  app2.post(
    "/api/shift-requests/:id/assign",
    checkRoles("admin", "hr"),
    async (req, res) => {
      try {
        const requestId = req.params.id;
        const userId = req.headers["x-user-id"];
        const { workerId } = req.body;
        const [request] = await db.select().from(shiftRequests).where(eq16(shiftRequests.id, requestId));
        if (!request) {
          res.status(404).json({ error: "Shift request not found" });
          return;
        }
        const [workplace] = await db.select().from(workplaces).where(eq16(workplaces.id, request.workplaceId));
        if (workerId) {
          const [newShift] = await db.insert(shifts).values({
            requestId,
            workplaceId: request.workplaceId,
            workerUserId: workerId,
            roleType: request.roleType,
            title: `${request.roleType} - ${workplace?.name || "Unknown"}`,
            date: request.date,
            startTime: request.startTime,
            endTime: request.endTime,
            notes: request.notes,
            status: "scheduled",
            createdByUserId: userId
          }).returning();
          await db.update(shiftRequests).set({ status: "filled", updatedAt: /* @__PURE__ */ new Date() }).where(eq16(shiftRequests.id, requestId));
          await db.insert(appNotifications).values({
            userId: workerId,
            type: "shift_assigned",
            title: "New Shift Assigned",
            body: `You have been assigned a ${request.roleType} shift at ${workplace?.name || "a workplace"} on ${request.date}.`,
            deepLink: `/shifts/${newShift.id}`
          });
          sendPushNotifications(
            [workerId],
            "New Shift Assigned",
            `You have been assigned a ${request.roleType} shift at ${workplace?.name || "a workplace"} on ${request.date}.`,
            { type: "shift_assigned", shiftId: newShift.id }
          );
          db.select({ id: users.id, fullName: users.fullName, phone: users.phone }).from(users).where(eq16(users.id, workerId)).then(([worker]) => {
            if (worker?.phone) {
              sendShiftAssignedSMS(
                { id: worker.id, fullName: worker.fullName, phone: worker.phone },
                newShift
              ).catch((err) => console.error(`[OPENPHONE] Assigned SMS error:`, err));
            }
          }).catch((err) => console.error(`[OPENPHONE] Worker lookup error:`, err));
          await db.insert(appNotifications).values({
            userId: request.clientId,
            type: "request_filled",
            title: "Shift Request Filled",
            body: `Your shift request for ${request.roleType} on ${request.date} has been filled.`,
            deepLink: `/shift-requests/${requestId}`
          });
          sendPushNotifications(
            [request.clientId],
            "Shift Request Filled",
            `Your shift request for ${request.roleType} on ${request.date} has been filled.`
          );
          broadcast({ type: "shift_created", data: newShift });
          broadcast({ type: "shift_request_updated", data: { id: requestId, status: "filled" } });
          res.json({ shift: newShift, assignedDirectly: true });
        } else {
          const [newShift] = await db.insert(shifts).values({
            requestId,
            workplaceId: request.workplaceId,
            workerUserId: null,
            roleType: request.roleType,
            title: `${request.roleType} - ${workplace?.name || "Unknown"}`,
            date: request.date,
            startTime: request.startTime,
            endTime: request.endTime,
            notes: request.notes,
            status: "scheduled",
            createdByUserId: userId
          }).returning();
          const allWorkers = await db.select({
            id: users.id,
            fullName: users.fullName,
            workerRoles: users.workerRoles,
            phone: users.phone
          }).from(users).where(and13(
            eq16(users.role, "worker"),
            eq16(users.isActive, true)
          ));
          let eligibleWorkers = allWorkers.filter((w) => {
            if (w.workerRoles) {
              try {
                const roles = JSON.parse(w.workerRoles);
                if (Array.isArray(roles) && roles.length > 0) {
                  return roles.some((r) => r.toLowerCase() === request.roleType.toLowerCase());
                }
              } catch {
                return true;
              }
            }
            return true;
          });
          const existingShifts = await db.select({
            workerUserId: shifts.workerUserId,
            startTime: shifts.startTime,
            endTime: shifts.endTime
          }).from(shifts).where(and13(
            eq16(shifts.date, request.date),
            not(isNull8(shifts.workerUserId)),
            ne5(shifts.status, "cancelled")
          ));
          const conflictWorkerIds = /* @__PURE__ */ new Set();
          for (const es of existingShifts) {
            if (es.workerUserId && es.startTime) {
              const existingEnd = es.endTime || "23:59";
              const requestEnd = request.endTime || "23:59";
              if (es.startTime < requestEnd && existingEnd > request.startTime) {
                conflictWorkerIds.add(es.workerUserId);
              }
            }
          }
          eligibleWorkers = eligibleWorkers.filter((w) => !conflictWorkerIds.has(w.id));
          const offeredWorkerIds = [];
          const broadcastOfferIds = [];
          let offerErrors = 0;
          console.log(`[BROADCAST] Shift ${newShift.id}: ${eligibleWorkers.length} eligible workers found`);
          for (const worker of eligibleWorkers) {
            try {
              const [offer] = await db.insert(shiftOffers).values({
                shiftId: newShift.id,
                workerId: worker.id,
                status: "pending"
              }).returning();
              await db.insert(appNotifications).values({
                userId: worker.id,
                type: "shift_offer",
                title: "New Shift Available",
                body: `A ${request.roleType} shift at ${workplace?.name || "a workplace"} on ${request.date} is available. Tap to accept.`,
                deepLink: `/shift-offers`
              });
              offeredWorkerIds.push(worker.id);
              broadcastOfferIds.push({ workerId: worker.id, offerId: offer.id });
            } catch (offerErr) {
              offerErrors++;
              console.error(`[BROADCAST] Failed to create offer for worker ${worker.id} (${worker.fullName}):`, offerErr?.message || offerErr);
            }
          }
          console.log(`[BROADCAST] Shift ${newShift.id}: ${offeredWorkerIds.length} offers created, ${offerErrors} errors`);
          if (offeredWorkerIds.length > 0) {
            sendPushNotifications(
              offeredWorkerIds,
              "New Shift Available",
              `A ${request.roleType} shift at ${workplace?.name || "a workplace"} on ${request.date} is available. Tap to accept.`,
              { type: "shift_offer", shiftId: newShift.id }
            );
          }
          for (const o of broadcastOfferIds) {
            const worker = eligibleWorkers.find((w) => w.id === o.workerId);
            if (worker?.phone) {
              sendShiftOfferSMS(
                { id: worker.id, fullName: worker.fullName, phone: worker.phone },
                newShift,
                o.offerId
              ).catch((err) => console.error(`[OPENPHONE] Broadcast SMS error for worker ${worker.id}:`, err));
            }
          }
          await db.insert(auditLog).values({
            userId,
            action: "SHIFT_BROADCAST",
            entityType: "shift",
            entityId: newShift.id,
            details: JSON.stringify({
              requestId,
              eligibleCount: eligibleWorkers.length,
              offersCreated: offeredWorkerIds.length,
              offerErrors,
              workerIds: offeredWorkerIds
            })
          });
          await db.update(shiftRequests).set({ status: "offered", updatedAt: /* @__PURE__ */ new Date() }).where(eq16(shiftRequests.id, requestId));
          broadcast({ type: "shift_request_updated", data: { id: requestId, status: "offered" } });
          res.json({
            shift: newShift,
            assignedDirectly: false,
            offeredWorkers: eligibleWorkers.map((w) => ({ id: w.id, fullName: w.fullName })),
            offeredCount: eligibleWorkers.length
          });
        }
      } catch (error) {
        console.error("Error assigning shift request:", error);
        res.status(500).json({ error: "Failed to assign shift request" });
      }
    }
  );
  app2.get(
    "/api/shift-requests/:id/offers",
    checkRoles("admin", "hr"),
    async (req, res) => {
      try {
        const requestId = req.params.id;
        const requestShifts = await db.select({ id: shifts.id }).from(shifts).where(eq16(shifts.requestId, requestId));
        if (requestShifts.length === 0) {
          res.json({ offers: [], counts: { pending: 0, accepted: 0, declined: 0, cancelled: 0 } });
          return;
        }
        const shiftIds = requestShifts.map((s) => s.id);
        const offers = await db.select({
          id: shiftOffers.id,
          shiftId: shiftOffers.shiftId,
          workerId: shiftOffers.workerId,
          status: shiftOffers.status,
          offeredAt: shiftOffers.offeredAt,
          respondedAt: shiftOffers.respondedAt,
          workerName: users.fullName,
          workerEmail: users.email
        }).from(shiftOffers).leftJoin(users, eq16(shiftOffers.workerId, users.id)).where(inArray5(shiftOffers.shiftId, shiftIds)).orderBy(desc6(shiftOffers.offeredAt));
        const counts = {
          pending: offers.filter((o) => o.status === "pending").length,
          accepted: offers.filter((o) => o.status === "accepted").length,
          declined: offers.filter((o) => o.status === "declined").length,
          cancelled: offers.filter((o) => o.status === "cancelled").length
        };
        res.json({ offers, counts });
      } catch (error) {
        console.error("Error fetching shift request offers:", error);
        res.status(500).json({ error: "Failed to fetch offers" });
      }
    }
  );
  app2.get("/api/shift-offers", async (req, res) => {
    try {
      const role = req.headers["x-user-role"];
      const userId = req.headers["x-user-id"];
      if (!role || !userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const statusFilter = req.query.status;
      let results;
      if (role === "worker") {
        const conditions = [eq16(shiftOffers.workerId, userId)];
        if (statusFilter && statusFilter !== "all") {
          conditions.push(eq16(shiftOffers.status, statusFilter));
        }
        results = await db.select({
          id: shiftOffers.id,
          shiftId: shiftOffers.shiftId,
          workerId: shiftOffers.workerId,
          status: shiftOffers.status,
          offeredAt: shiftOffers.offeredAt,
          respondedAt: shiftOffers.respondedAt,
          cancelledAt: shiftOffers.cancelledAt,
          cancelReason: shiftOffers.cancelReason,
          shiftDate: shifts.date,
          shiftStartTime: shifts.startTime,
          shiftEndTime: shifts.endTime,
          shiftTitle: shifts.title,
          shiftRoleType: shifts.roleType,
          workplaceName: workplaces.name,
          workplaceCity: workplaces.city
        }).from(shiftOffers).innerJoin(shifts, eq16(shiftOffers.shiftId, shifts.id)).leftJoin(workplaces, eq16(shifts.workplaceId, workplaces.id)).where(and13(...conditions)).orderBy(desc6(shiftOffers.offeredAt));
      } else if (role === "admin" || role === "hr") {
        const conditions = [];
        if (statusFilter && statusFilter !== "all") {
          conditions.push(eq16(shiftOffers.status, statusFilter));
        }
        results = await db.select({
          id: shiftOffers.id,
          shiftId: shiftOffers.shiftId,
          workerId: shiftOffers.workerId,
          status: shiftOffers.status,
          offeredAt: shiftOffers.offeredAt,
          respondedAt: shiftOffers.respondedAt,
          cancelledAt: shiftOffers.cancelledAt,
          cancelReason: shiftOffers.cancelReason,
          shiftDate: shifts.date,
          shiftStartTime: shifts.startTime,
          shiftEndTime: shifts.endTime,
          shiftTitle: shifts.title,
          shiftRoleType: shifts.roleType,
          workplaceName: workplaces.name,
          workplaceCity: workplaces.city,
          workerName: users.fullName
        }).from(shiftOffers).innerJoin(shifts, eq16(shiftOffers.shiftId, shifts.id)).leftJoin(workplaces, eq16(shifts.workplaceId, workplaces.id)).leftJoin(users, eq16(shiftOffers.workerId, users.id)).where(conditions.length > 0 ? and13(...conditions) : void 0).orderBy(desc6(shiftOffers.offeredAt));
      } else {
        res.status(403).json({ error: "Access denied" });
        return;
      }
      res.json(results || []);
    } catch (error) {
      console.error("Error fetching shift offers:", error);
      res.status(500).json({ error: "Failed to fetch shift offers" });
    }
  });
  app2.post(
    "/api/shift-offers/:id/respond",
    checkRoles("worker"),
    async (req, res) => {
      try {
        const offerId = req.params.id;
        const userId = req.headers["x-user-id"];
        const { response } = req.body;
        if (!response || !["accepted", "declined"].includes(response)) {
          res.status(400).json({ error: "response must be 'accepted' or 'declined'" });
          return;
        }
        const [offer] = await db.select().from(shiftOffers).where(eq16(shiftOffers.id, offerId));
        if (!offer) {
          res.status(404).json({ error: "Shift offer not found" });
          return;
        }
        if (offer.workerId !== userId) {
          res.status(403).json({ error: "This offer is not for you" });
          return;
        }
        if (offer.status !== "pending") {
          res.json({ success: true, message: `Offer already ${offer.status}`, alreadyResponded: true, status: offer.status });
          return;
        }
        await db.insert(auditLog).values({
          userId,
          action: `OFFER_${response.toUpperCase()}`,
          entityType: "shift_offer",
          entityId: offerId,
          details: JSON.stringify({ shiftId: offer.shiftId, response })
        });
        if (response === "accepted") {
          const [shift] = await db.select().from(shifts).where(eq16(shifts.id, offer.shiftId));
          if (!shift) {
            res.status(404).json({ error: "Associated shift not found" });
            return;
          }
          const existingAccepted = await db.select({ count: sql13`count(*)::int` }).from(shiftOffers).where(and13(
            eq16(shiftOffers.shiftId, offer.shiftId),
            eq16(shiftOffers.status, "accepted")
          ));
          const currentAccepted = existingAccepted[0]?.count || 0;
          const neededForShift = shift.workersNeeded || 1;
          if (currentAccepted >= neededForShift) {
            res.status(409).json({ error: "This shift has already been filled with enough workers" });
            return;
          }
          await db.update(shiftOffers).set({ status: "accepted", respondedAt: /* @__PURE__ */ new Date() }).where(eq16(shiftOffers.id, offerId));
          if (!shift.workerUserId) {
            await db.update(shifts).set({ workerUserId: userId, updatedAt: /* @__PURE__ */ new Date() }).where(eq16(shifts.id, offer.shiftId));
          }
          const acceptedCount = await db.select({ count: sql13`count(*)::int` }).from(shiftOffers).where(and13(
            eq16(shiftOffers.shiftId, offer.shiftId),
            eq16(shiftOffers.status, "accepted")
          ));
          const totalAccepted = acceptedCount[0]?.count || 0;
          const neededCount = shift.workersNeeded || 1;
          const shiftFilled = totalAccepted >= neededCount;
          const cancelledWorkerIds = [];
          if (shiftFilled) {
            const otherOffers = await db.select().from(shiftOffers).where(and13(
              eq16(shiftOffers.shiftId, offer.shiftId),
              ne5(shiftOffers.id, offerId),
              eq16(shiftOffers.status, "pending")
            ));
            for (const otherOffer of otherOffers) {
              await db.update(shiftOffers).set({ status: "cancelled", respondedAt: /* @__PURE__ */ new Date(), cancelledAt: /* @__PURE__ */ new Date(), cancelledBy: userId, cancelReason: "Shift filled - enough workers accepted" }).where(eq16(shiftOffers.id, otherOffer.id));
              cancelledWorkerIds.push(otherOffer.workerId);
              await db.insert(auditLog).values({
                userId,
                action: "OFFER_CANCELLED_AUTO",
                entityType: "shift_offer",
                entityId: otherOffer.id,
                details: JSON.stringify({ shiftId: offer.shiftId, cancelledWorkerId: otherOffer.workerId, reason: "Shift filled - enough workers accepted" })
              });
            }
          }
          if (shift.requestId && shiftFilled) {
            await db.update(shiftRequests).set({ status: "filled", updatedAt: /* @__PURE__ */ new Date() }).where(eq16(shiftRequests.id, shift.requestId));
            const [filledReq] = await db.select({ crmRequestId: shiftRequests.crmRequestId }).from(shiftRequests).where(eq16(shiftRequests.id, shift.requestId));
            if (filledReq?.crmRequestId) {
              try {
                const { enqueueCrmPush: enqueueCrmPush2 } = await Promise.resolve().then(() => (init_crm_sync(), crm_sync_exports));
                await enqueueCrmPush2(
                  "hotel_request",
                  shift.requestId,
                  "update",
                  { crmExternalId: filledReq.crmRequestId, status: "CONFIRMED" }
                );
              } catch (crmErr) {
                console.error("[CRM] Failed to enqueue hotel request update:", crmErr?.message);
              }
            }
          }
          const hrAdmins = await db.select({ id: users.id }).from(users).where(or2(eq16(users.role, "admin"), eq16(users.role, "hr")));
          const [worker] = await db.select({ fullName: users.fullName }).from(users).where(eq16(users.id, userId));
          for (const ha of hrAdmins) {
            await db.insert(appNotifications).values({
              userId: ha.id,
              type: "offer_accepted",
              title: "Shift Offer Accepted",
              body: `${worker?.fullName || "A worker"} accepted the ${shift.roleType || ""} shift at ${shift.title} on ${shift.date}.`,
              deepLink: `/shifts/${shift.id}`
            });
          }
          sendPushNotifications(
            hrAdmins.map((ha) => ha.id),
            "Shift Offer Accepted",
            `${worker?.fullName || "A worker"} accepted the shift on ${shift.date}.`,
            { type: "offer_accepted", shiftId: shift.id }
          );
          if (cancelledWorkerIds.length > 0) {
            for (const cwId of cancelledWorkerIds) {
              await db.insert(appNotifications).values({
                userId: cwId,
                type: "offer_cancelled",
                title: "Shift Offer Cancelled",
                body: `The ${shift.roleType || ""} shift at ${shift.title} on ${shift.date} has been filled by another worker.`,
                deepLink: `/shift-offers`
              });
            }
            sendPushNotifications(
              cancelledWorkerIds,
              "Shift Offer Cancelled",
              `The shift on ${shift.date} has been filled by another worker.`,
              { type: "offer_cancelled", shiftId: shift.id }
            );
          }
          if (shift.requestId) {
            const [req2] = await db.select().from(shiftRequests).where(eq16(shiftRequests.id, shift.requestId));
            if (req2) {
              await db.insert(appNotifications).values({
                userId: req2.clientId,
                type: "request_filled",
                title: "Shift Request Filled",
                body: `Your shift request for ${req2.roleType} on ${req2.date} has been filled.`,
                deepLink: `/shift-requests/${req2.id}`
              });
              sendPushNotifications(
                [req2.clientId],
                "Shift Request Filled",
                `Your shift request for ${req2.roleType} on ${req2.date} has been filled.`
              );
            }
          }
          await db.insert(auditLog).values({
            userId,
            action: "OFFER_ACCEPTED",
            entityType: "shift_offer",
            entityId: offerId,
            details: JSON.stringify({ shiftId: offer.shiftId, cancelledOffers: cancelledWorkerIds.length })
          });
          broadcast({ type: "shift_offer_accepted", data: { offerId, shiftId: offer.shiftId } });
          res.json({ success: true, status: "accepted" });
        } else {
          await db.update(shiftOffers).set({ status: "declined", respondedAt: /* @__PURE__ */ new Date() }).where(eq16(shiftOffers.id, offerId));
          const [shift] = await db.select().from(shifts).where(eq16(shifts.id, offer.shiftId));
          const hrAdmins = await db.select({ id: users.id }).from(users).where(or2(eq16(users.role, "admin"), eq16(users.role, "hr")));
          const [worker] = await db.select({ fullName: users.fullName }).from(users).where(eq16(users.id, userId));
          for (const ha of hrAdmins) {
            await db.insert(appNotifications).values({
              userId: ha.id,
              type: "offer_declined",
              title: "Shift Offer Declined",
              body: `${worker?.fullName || "A worker"} declined the ${shift?.roleType || ""} shift on ${shift?.date || "unknown date"}.`,
              deepLink: `/shifts/${offer.shiftId}`
            });
          }
          sendPushNotifications(
            hrAdmins.map((ha) => ha.id),
            "Shift Offer Declined",
            `${worker?.fullName || "A worker"} declined a shift offer.`,
            { type: "offer_declined", shiftId: offer.shiftId }
          );
          await db.insert(auditLog).values({
            userId,
            action: "OFFER_DECLINED",
            entityType: "shift_offer",
            entityId: offerId,
            details: JSON.stringify({ shiftId: offer.shiftId })
          });
          broadcast({ type: "shift_offer_declined", data: { offerId, shiftId: offer.shiftId } });
          res.json({ success: true, status: "declined" });
        }
      } catch (error) {
        console.error("Error responding to shift offer:", error);
        res.status(500).json({ error: "Failed to respond to shift offer" });
      }
    }
  );
  app2.get(
    "/api/admin/debug/broadcast/:shiftId",
    checkRoles("admin", "hr"),
    async (req, res) => {
      try {
        const shiftId = req.params.shiftId;
        const [shift] = await db.select().from(shifts).where(eq16(shifts.id, shiftId));
        if (!shift) {
          res.status(404).json({ error: "Shift not found" });
          return;
        }
        const offers = await db.select().from(shiftOffers).where(eq16(shiftOffers.shiftId, shiftId));
        const workerIds = offers.map((o) => o.workerId);
        let tokensCount = 0;
        if (workerIds.length > 0) {
          const tokens = await db.select({ token: pushTokens.token }).from(pushTokens).where(and13(inArray5(pushTokens.userId, workerIds), eq16(pushTokens.isActive, true)));
          tokensCount = tokens.length;
        }
        const auditEntries = await db.select().from(auditLog).where(and13(eq16(auditLog.entityType, "shift"), eq16(auditLog.entityId, shiftId))).orderBy(desc6(auditLog.createdAt));
        res.json({
          shiftId,
          shiftStatus: shift.status,
          workerUserId: shift.workerUserId,
          totalOffers: offers.length,
          offersByStatus: {
            pending: offers.filter((o) => o.status === "pending").length,
            accepted: offers.filter((o) => o.status === "accepted").length,
            declined: offers.filter((o) => o.status === "declined").length,
            cancelled: offers.filter((o) => o.status === "cancelled").length
          },
          pushTokensFound: tokensCount,
          auditTrail: auditEntries.map((a) => ({
            action: a.action,
            details: a.details ? JSON.parse(a.details) : null,
            createdAt: a.createdAt
          }))
        });
      } catch (error) {
        console.error("Error in debug broadcast:", error);
        res.status(500).json({ error: "Failed to fetch broadcast debug info" });
      }
    }
  );
  app2.post("/api/shifts/:id/blast", checkRoles("admin", "hr"), async (req, res) => {
    try {
      const shiftId = req.params.id;
      const userId = req.headers["x-user-id"];
      const { workersNeeded } = req.body || {};
      const [shift] = await db.select().from(shifts).where(eq16(shifts.id, shiftId));
      if (!shift) {
        res.status(404).json({ error: "Shift not found" });
        return;
      }
      if (workersNeeded && typeof workersNeeded === "number" && workersNeeded > 0) {
        await db.update(shifts).set({ workersNeeded, updatedAt: /* @__PURE__ */ new Date() }).where(eq16(shifts.id, shiftId));
      }
      const [workplace] = shift.workplaceId ? await db.select().from(workplaces).where(eq16(workplaces.id, shift.workplaceId)) : [null];
      const allWorkers = await db.select({
        id: users.id,
        fullName: users.fullName,
        workerRoles: users.workerRoles
      }).from(users).where(and13(
        eq16(users.role, "worker"),
        eq16(users.isActive, true)
      ));
      let eligibleWorkers = allWorkers.filter((w) => {
        if (shift.roleType && w.workerRoles) {
          try {
            const roles = JSON.parse(w.workerRoles);
            if (Array.isArray(roles) && roles.length > 0) {
              return roles.some((r) => r.toLowerCase() === shift.roleType.toLowerCase());
            }
          } catch {
            return true;
          }
        }
        return true;
      });
      if (shift.workerUserId) {
        eligibleWorkers = eligibleWorkers.filter((w) => w.id !== shift.workerUserId);
      }
      const existingOffers = await db.select({ workerId: shiftOffers.workerId }).from(shiftOffers).where(and13(
        eq16(shiftOffers.shiftId, shiftId),
        inArray5(shiftOffers.status, ["pending", "accepted"])
      ));
      const alreadyOffered = new Set(existingOffers.map((o) => o.workerId));
      eligibleWorkers = eligibleWorkers.filter((w) => !alreadyOffered.has(w.id));
      if (shift.date) {
        const existingShifts = await db.select({
          workerUserId: shifts.workerUserId,
          startTime: shifts.startTime,
          endTime: shifts.endTime
        }).from(shifts).where(and13(
          eq16(shifts.date, shift.date),
          not(isNull8(shifts.workerUserId)),
          ne5(shifts.status, "cancelled"),
          ne5(shifts.id, shiftId)
        ));
        const conflictWorkerIds = /* @__PURE__ */ new Set();
        for (const es of existingShifts) {
          if (es.workerUserId && es.startTime && shift.startTime) {
            const existingEnd = es.endTime || "23:59";
            const shiftEnd = shift.endTime || "23:59";
            if (es.startTime < shiftEnd && existingEnd > shift.startTime) {
              conflictWorkerIds.add(es.workerUserId);
            }
          }
        }
        eligibleWorkers = eligibleWorkers.filter((w) => !conflictWorkerIds.has(w.id));
      }
      const offeredWorkerIds = [];
      let offerErrors = 0;
      console.log(`[BLAST] Shift ${shiftId}: ${eligibleWorkers.length} eligible workers found`);
      for (const worker of eligibleWorkers) {
        try {
          await db.insert(shiftOffers).values({
            shiftId,
            workerId: worker.id,
            status: "pending"
          });
          await db.insert(appNotifications).values({
            userId: worker.id,
            type: "shift_offer",
            title: "New Shift Available",
            body: `A ${shift.roleType || shift.category || ""} shift at ${workplace?.name || shift.title || "a workplace"} on ${shift.date} is available. Tap to accept.`,
            deepLink: `/shift-offers`
          });
          offeredWorkerIds.push(worker.id);
        } catch (offerErr) {
          offerErrors++;
          if (offerErr?.message?.includes("unique_shift_worker_offer")) {
            console.log(`[BLAST] Skipped duplicate offer for worker ${worker.id}`);
          } else {
            console.error(`[BLAST] Failed to create offer for worker ${worker.id}:`, offerErr?.message || offerErr);
          }
        }
      }
      if (offeredWorkerIds.length > 0) {
        sendPushNotifications(
          offeredWorkerIds,
          "New Shift Available",
          `A ${shift.roleType || shift.category || ""} shift at ${workplace?.name || shift.title || "a workplace"} on ${shift.date} is available.`,
          { type: "shift_offer", shiftId }
        );
      }
      await db.insert(auditLog).values({
        userId,
        action: "SHIFT_BLAST_ALL",
        entityType: "shift",
        entityId: shiftId,
        details: JSON.stringify({
          totalEligible: eligibleWorkers.length,
          offersCreated: offeredWorkerIds.length,
          offerErrors,
          alreadyOffered: alreadyOffered.size
        })
      });
      broadcast({ type: "shift_blast", data: { shiftId, offersCreated: offeredWorkerIds.length } });
      res.json({
        success: true,
        offersCreated: offeredWorkerIds.length,
        totalEligible: eligibleWorkers.length + alreadyOffered.size,
        alreadyOffered: alreadyOffered.size,
        errors: offerErrors,
        workersNeeded: workersNeeded || null
      });
    } catch (error) {
      console.error("Error blasting shift to all workers:", error);
      res.status(500).json({ error: "Failed to blast shift to workers" });
    }
  });
  app2.post("/api/profile-photo", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const { photoData } = req.body;
      if (!photoData || typeof photoData !== "string") {
        res.status(400).json({ error: "Photo data is required" });
        return;
      }
      if (!photoData.startsWith("data:image/")) {
        res.status(400).json({ error: "Invalid image format. Must be a base64 data URI." });
        return;
      }
      const sizeInBytes = Buffer.byteLength(photoData, "utf8");
      if (sizeInBytes > 5 * 1024 * 1024) {
        res.status(400).json({ error: "Photo is too large. Maximum 5MB allowed." });
        return;
      }
      const [photo] = await db.insert(userPhotos).values({
        userId,
        url: photoData,
        status: "pending_review"
      }).returning();
      res.json({ photo: { id: photo.id, status: photo.status, createdAt: photo.createdAt } });
    } catch (error) {
      console.error("Error uploading profile photo:", error);
      res.status(500).json({ error: "Failed to upload photo" });
    }
  });
  app2.get("/api/profile-photo", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const targetUserId = req.query.userId || userId;
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const photos = await db.select().from(userPhotos).where(eq16(userPhotos.userId, targetUserId)).orderBy(desc6(userPhotos.createdAt)).limit(1);
      res.json({ photo: photos[0] || null });
    } catch (error) {
      console.error("Error fetching profile photo:", error);
      res.status(500).json({ error: "Failed to fetch photo" });
    }
  });
  app2.get("/api/admin/photos-pending", async (req, res) => {
    try {
      const role = req.headers["x-user-role"];
      if (role !== "admin" && role !== "hr") {
        res.status(403).json({ error: "Admin or HR access required" });
        return;
      }
      const pendingPhotos = await db.select({
        id: userPhotos.id,
        userId: userPhotos.userId,
        url: userPhotos.url,
        status: userPhotos.status,
        createdAt: userPhotos.createdAt,
        userName: users.fullName,
        userEmail: users.email
      }).from(userPhotos).innerJoin(users, eq16(userPhotos.userId, users.id)).where(eq16(userPhotos.status, "pending_review")).orderBy(desc6(userPhotos.createdAt));
      res.json({ photos: pendingPhotos });
    } catch (error) {
      console.error("Error fetching pending photos:", error);
      res.status(500).json({ error: "Failed to fetch pending photos" });
    }
  });
  app2.patch("/api/admin/photos/:photoId/review", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const role = req.headers["x-user-role"];
      if (role !== "admin" && role !== "hr") {
        res.status(403).json({ error: "Admin or HR access required" });
        return;
      }
      const { photoId } = req.params;
      const { action, rejectionReason } = req.body;
      if (!["approve", "reject"].includes(action)) {
        res.status(400).json({ error: "Action must be 'approve' or 'reject'" });
        return;
      }
      const newStatus = action === "approve" ? "approved" : "rejected";
      const [updated] = await db.update(userPhotos).set({
        status: newStatus,
        reviewerId: userId,
        reviewedAt: /* @__PURE__ */ new Date(),
        rejectionReason: action === "reject" ? rejectionReason || "Photo does not meet requirements" : null
      }).where(eq16(userPhotos.id, photoId)).returning();
      if (!updated) {
        res.status(404).json({ error: "Photo not found" });
        return;
      }
      if (action === "approve") {
        await db.update(users).set({ profilePhotoUrl: updated.url }).where(eq16(users.id, updated.userId));
      }
      const notifTitle = action === "approve" ? "Photo Approved" : "Photo Rejected";
      const notifBody = action === "approve" ? "Your profile photo has been approved." : `Your profile photo was rejected: ${rejectionReason || "Does not meet requirements"}`;
      await db.insert(appNotifications).values({
        userId: updated.userId,
        title: notifTitle,
        body: notifBody,
        type: "photo_review"
      });
      sendPushNotifications([updated.userId], notifTitle, notifBody, { type: "photo_review" });
      broadcast({ type: "update", entity: "photo", id: updated.userId });
      res.json({ photo: { id: updated.id, status: updated.status } });
    } catch (error) {
      console.error("Error reviewing photo:", error);
      res.status(500).json({ error: "Failed to review photo" });
    }
  });
  app2.get("/api/notifications", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const limit = parseInt(req.query.limit) || 50;
      const offset = parseInt(req.query.offset) || 0;
      const notifications = await db.select().from(appNotifications).where(eq16(appNotifications.userId, userId)).orderBy(desc6(appNotifications.createdAt)).limit(limit).offset(offset);
      const [unreadCount] = await db.select({ count: sql13`count(*)` }).from(appNotifications).where(and13(
        eq16(appNotifications.userId, userId),
        isNull8(appNotifications.readAt)
      ));
      res.json({ notifications, unreadCount: Number(unreadCount?.count || 0) });
    } catch (error) {
      console.error("Error fetching notifications:", error);
      res.status(500).json({ error: "Failed to fetch notifications" });
    }
  });
  app2.patch("/api/notifications/:id/read", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const notifId = req.params.id;
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const [updated] = await db.update(appNotifications).set({ readAt: /* @__PURE__ */ new Date() }).where(and13(
        eq16(appNotifications.id, notifId),
        eq16(appNotifications.userId, userId)
      )).returning();
      if (!updated) {
        res.status(404).json({ error: "Notification not found" });
        return;
      }
      res.json(updated);
    } catch (error) {
      console.error("Error marking notification as read:", error);
      res.status(500).json({ error: "Failed to mark notification as read" });
    }
  });
  app2.post("/api/notifications/read-all", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      await db.update(appNotifications).set({ readAt: /* @__PURE__ */ new Date() }).where(and13(
        eq16(appNotifications.userId, userId),
        isNull8(appNotifications.readAt)
      ));
      res.json({ success: true });
    } catch (error) {
      console.error("Error marking all notifications as read:", error);
      res.status(500).json({ error: "Failed to mark all notifications as read" });
    }
  });
  app2.post(
    "/api/shifts/:id/checkin",
    checkRoles("worker"),
    async (req, res) => {
      try {
        const shiftId = req.params.id;
        const userId = req.headers["x-user-id"];
        const { status, note } = req.body;
        if (!status || !["on_my_way", "issue", "checked_in", "checked_out"].includes(status)) {
          res.status(400).json({ error: "status must be 'on_my_way', 'issue', 'checked_in', or 'checked_out'" });
          return;
        }
        const [shift] = await db.select().from(shifts).where(eq16(shifts.id, shiftId));
        if (!shift) {
          res.status(404).json({ error: "Shift not found" });
          return;
        }
        const [checkin] = await db.insert(shiftCheckins).values({
          shiftId,
          workerId: userId,
          status,
          note: note || null
        }).returning();
        const [worker] = await db.select({ fullName: users.fullName }).from(users).where(eq16(users.id, userId));
        const statusLabels = {
          on_my_way: "is on their way",
          issue: "reported an issue",
          checked_in: "has checked in",
          checked_out: "has checked out"
        };
        if (status === "issue") {
          const hrAdmins = await db.select({ id: users.id }).from(users).where(or2(eq16(users.role, "admin"), eq16(users.role, "hr")));
          for (const ha of hrAdmins) {
            await db.insert(appNotifications).values({
              userId: ha.id,
              type: "checkin_issue",
              title: "Worker Reported Issue",
              body: `${worker?.fullName || "A worker"} reported an issue for shift on ${shift.date}${note ? ": " + note : ""}.`,
              deepLink: `/shifts/${shiftId}`
            });
          }
          sendPushNotifications(
            hrAdmins.map((ha) => ha.id),
            "Worker Reported Issue",
            `${worker?.fullName || "A worker"} reported an issue${note ? ": " + note : ""}.`,
            { type: "checkin_issue", shiftId }
          );
        } else {
          const hrAdmins = await db.select({ id: users.id }).from(users).where(or2(eq16(users.role, "admin"), eq16(users.role, "hr")));
          sendPushNotifications(
            hrAdmins.map((ha) => ha.id),
            "Shift Status Update",
            `${worker?.fullName || "A worker"} ${statusLabels[status] || status} for shift on ${shift.date}.`,
            { type: "shift_checkin", shiftId }
          );
        }
        broadcast({ type: "shift_checkin", data: checkin });
        res.json(checkin);
      } catch (error) {
        console.error("Error creating shift checkin:", error);
        res.status(500).json({ error: "Failed to create shift checkin" });
      }
    }
  );
  app2.get("/api/shifts/:id/checkins", async (req, res) => {
    try {
      const shiftId = req.params.id;
      const userId = req.headers["x-user-id"];
      if (!userId) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const checkins = await db.select({
        id: shiftCheckins.id,
        shiftId: shiftCheckins.shiftId,
        workerId: shiftCheckins.workerId,
        status: shiftCheckins.status,
        note: shiftCheckins.note,
        createdAt: shiftCheckins.createdAt,
        workerName: users.fullName
      }).from(shiftCheckins).leftJoin(users, eq16(shiftCheckins.workerId, users.id)).where(eq16(shiftCheckins.shiftId, shiftId)).orderBy(desc6(shiftCheckins.createdAt));
      res.json(checkins);
    } catch (error) {
      console.error("Error fetching shift checkins:", error);
      res.status(500).json({ error: "Failed to fetch shift checkins" });
    }
  });
  app2.get(
    "/api/shift-requests/:id/eligible-workers",
    checkRoles("admin", "hr"),
    async (req, res) => {
      try {
        const requestId = req.params.id;
        const [request] = await db.select().from(shiftRequests).where(eq16(shiftRequests.id, requestId));
        if (!request) {
          res.status(404).json({ error: "Shift request not found" });
          return;
        }
        const allWorkers = await db.select({
          id: users.id,
          fullName: users.fullName,
          email: users.email,
          workerRoles: users.workerRoles
        }).from(users).where(and13(
          eq16(users.role, "worker"),
          eq16(users.isActive, true)
        ));
        const existingShifts = await db.select({
          workerUserId: shifts.workerUserId,
          startTime: shifts.startTime,
          endTime: shifts.endTime
        }).from(shifts).where(and13(
          eq16(shifts.date, request.date),
          not(isNull8(shifts.workerUserId)),
          ne5(shifts.status, "cancelled")
        ));
        const conflictMap = /* @__PURE__ */ new Map();
        for (const es of existingShifts) {
          if (es.workerUserId && es.startTime && es.endTime) {
            if (es.startTime < request.endTime && es.endTime > request.startTime) {
              conflictMap.set(es.workerUserId, true);
            }
          }
        }
        const result = allWorkers.map((w) => {
          let roleMatch = true;
          if (w.workerRoles) {
            try {
              const roles = JSON.parse(w.workerRoles);
              if (Array.isArray(roles) && roles.length > 0) {
                roleMatch = roles.some((r) => r.toLowerCase() === request.roleType.toLowerCase());
              }
            } catch {
              roleMatch = true;
            }
          }
          return {
            id: w.id,
            fullName: w.fullName,
            email: w.email,
            workerRoles: w.workerRoles,
            roleMatch,
            hasConflict: conflictMap.has(w.id),
            eligible: roleMatch && !conflictMap.has(w.id)
          };
        });
        const eligibleOnly = result.filter((w) => w.eligible);
        res.json({
          workers: result,
          eligibleWorkers: eligibleOnly,
          eligibleCount: eligibleOnly.length,
          totalEligible: eligibleOnly.length,
          totalWorkers: result.length,
          totalActive: result.length
        });
      } catch (error) {
        console.error("Error fetching eligible workers:", error);
        res.status(500).json({ error: "Failed to fetch eligible workers" });
      }
    }
  );
  app2.post("/api/trial-reset/dry-run", checkRoles("admin"), async (_req, res) => {
    try {
      const counts = {};
      const tables = [
        { name: "shift_checkins", table: shiftCheckins },
        { name: "shift_offers", table: shiftOffers },
        { name: "shift_requests", table: shiftRequests },
        { name: "shifts", table: shifts },
        { name: "recurrence_exceptions", table: recurrenceExceptions },
        { name: "shift_series", table: shiftSeries },
        { name: "sent_reminders", table: sentReminders },
        { name: "app_notifications", table: appNotifications },
        { name: "tito_logs", table: titoLogs },
        { name: "timesheet_entries", table: timesheetEntries },
        { name: "timesheets", table: timesheets },
        { name: "payroll_batch_items", table: payrollBatchItems },
        { name: "payroll_batches", table: payrollBatches },
        { name: "messages", table: messages },
        { name: "conversations", table: conversations },
        { name: "workplace_assignments", table: workplaceAssignments },
        { name: "user_photos", table: userPhotos },
        { name: "audit_log", table: auditLog }
      ];
      for (const { name, table } of tables) {
        const result = await db.select({ count: sql13`count(*)::int` }).from(table);
        counts[name] = result[0]?.count || 0;
      }
      const nonAdminUsers = await db.select({ count: sql13`count(*)::int` }).from(users).where(ne5(users.role, "admin"));
      counts["non_admin_users"] = nonAdminUsers[0]?.count || 0;
      const adminUsers = await db.select({ count: sql13`count(*)::int` }).from(users).where(eq16(users.role, "admin"));
      counts["admin_users_preserved"] = adminUsers[0]?.count || 0;
      const totalRecords = Object.entries(counts).filter(([k]) => k !== "admin_users_preserved").reduce((sum2, [, v]) => sum2 + v, 0);
      res.json({ counts, totalRecords, adminUsersPreserved: counts["admin_users_preserved"] });
    } catch (error) {
      console.error("Error in trial reset dry run:", error);
      res.status(500).json({ error: "Failed to perform dry run" });
    }
  });
  app2.post("/api/trial-reset/execute", checkRoles("admin"), async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      const { confirmPhrase } = req.body;
      if (confirmPhrase !== "RESET TRIAL DATA") {
        res.status(400).json({ error: "Invalid confirmation phrase. Type 'RESET TRIAL DATA' to proceed." });
        return;
      }
      const deletionOrder = [
        { name: "export_audit_logs", q: sql13`DELETE FROM export_audit_logs` },
        { name: "shift_checkins", q: sql13`DELETE FROM shift_checkins` },
        { name: "shift_offers", q: sql13`DELETE FROM shift_offers` },
        { name: "shift_requests", q: sql13`DELETE FROM shift_requests` },
        { name: "shifts", q: sql13`DELETE FROM shifts` },
        { name: "recurrence_exceptions", q: sql13`DELETE FROM recurrence_exceptions` },
        { name: "shift_series", q: sql13`DELETE FROM shift_series` },
        { name: "sent_reminders", q: sql13`DELETE FROM sent_reminders` },
        { name: "app_notifications", q: sql13`DELETE FROM app_notifications` },
        { name: "tito_logs", q: sql13`DELETE FROM tito_logs` },
        { name: "timesheet_entries", q: sql13`DELETE FROM timesheet_entries` },
        { name: "timesheets", q: sql13`DELETE FROM timesheets` },
        { name: "payroll_batch_items", q: sql13`DELETE FROM payroll_batch_items` },
        { name: "payroll_batches", q: sql13`DELETE FROM payroll_batches` },
        { name: "messages", q: sql13`DELETE FROM messages` },
        { name: "message_logs", q: sql13`DELETE FROM message_logs` },
        { name: "conversations", q: sql13`DELETE FROM conversations` },
        { name: "workplace_assignments", q: sql13`DELETE FROM workplace_assignments` },
        { name: "user_photos", q: sql13`DELETE FROM user_photos` },
        { name: "push_tokens", q: sql13`DELETE FROM push_tokens WHERE user_id NOT IN (SELECT id FROM users WHERE role = 'admin')` },
        { name: "worker_applications", q: sql13`DELETE FROM worker_applications` },
        { name: "payment_profiles", q: sql13`DELETE FROM payment_profiles WHERE user_id NOT IN (SELECT id FROM users WHERE role = 'admin')` },
        { name: "non_admin_users", q: sql13`DELETE FROM users WHERE role != 'admin'` },
        { name: "audit_log", q: sql13`DELETE FROM audit_log` }
      ];
      const results = {};
      for (const { name, q } of deletionOrder) {
        try {
          await db.execute(q);
          results[name] = "cleared";
        } catch (e) {
          results[name] = `error: ${e.message}`;
        }
      }
      await db.insert(auditLog).values({
        userId,
        action: "trial_reset",
        entityType: "system",
        details: JSON.stringify({ results, timestamp: (/* @__PURE__ */ new Date()).toISOString() })
      });
      res.json({ success: true, results, message: "Trial data has been reset. Admin accounts are preserved." });
    } catch (error) {
      console.error("Error executing trial reset:", error);
      res.status(500).json({ error: "Failed to execute trial reset" });
    }
  });
  const GM_LILEE_PHONE4 = "+14166028038";
  function getShiftTimezone(province) {
    const p = (province || "").trim().toLowerCase().replace(/\s+/g, " ");
    if (p.includes("british columbia") || p.includes(" bc")) return "America/Vancouver";
    if (p.includes("alberta") || p.includes(" ab")) return "America/Edmonton";
    if (p.includes("saskatchewan") || p.includes(" sk")) return "America/Regina";
    if (p.includes("manitoba") || p.includes(" mb")) return "America/Winnipeg";
    if (p.includes("newfoundland") || p.includes(" nl")) return "America/St_Johns";
    if (p.includes("nova scotia") || p.includes("new brunswick") || p.includes("prince edward") || p.includes(" ns") || p.includes(" nb") || p.includes(" pe")) return "America/Halifax";
    return "America/Toronto";
  }
  function getTimezoneAbbr(timezone) {
    const map = {
      "America/Vancouver": "PT",
      "America/Edmonton": "MT",
      "America/Regina": "CT",
      "America/Winnipeg": "CT",
      "America/Toronto": "ET",
      "America/Halifax": "AT",
      "America/St_Johns": "NT"
    };
    return map[timezone] || "ET";
  }
  function getLocalNow(timezone) {
    const now = /* @__PURE__ */ new Date();
    const dateStr = now.toLocaleDateString("en-CA", { timeZone: timezone });
    const timeParts = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).formatToParts(now);
    const hours = parseInt(timeParts.find((p) => p.type === "hour")?.value || "0", 10);
    const minutes = parseInt(timeParts.find((p) => p.type === "minute")?.value || "0", 10);
    return { dateStr, hours, minutes };
  }
  async function processShiftReminders() {
    try {
      const torontoNow = getLocalNow("America/Toronto");
      const tomorrowToronto = /* @__PURE__ */ new Date();
      tomorrowToronto.setDate(tomorrowToronto.getDate() + 1);
      const tomorrowTorontoStr = tomorrowToronto.toLocaleDateString("en-CA", { timeZone: "America/Toronto" });
      const upcomingShifts = await db.select({
        id: shifts.id,
        title: shifts.title,
        date: shifts.date,
        startTime: shifts.startTime,
        workerUserId: shifts.workerUserId,
        workplaceName: workplaces.name,
        workplaceProvince: workplaces.province,
        workerName: users.fullName,
        workerPhone: users.phone
      }).from(shifts).leftJoin(workplaces, eq16(shifts.workplaceId, workplaces.id)).leftJoin(users, eq16(shifts.workerUserId, users.id)).where(
        and13(
          or2(eq16(shifts.date, torontoNow.dateStr), eq16(shifts.date, tomorrowTorontoStr)),
          eq16(shifts.status, "scheduled"),
          sql13`${shifts.workerUserId} IS NOT NULL`
        )
      );
      const lileeReminders = [];
      for (const shift of upcomingShifts) {
        if (!shift.workerUserId || !shift.startTime) continue;
        const tz = getShiftTimezone(shift.workplaceProvince);
        const local = getLocalNow(tz);
        const tzAbbr = getTimezoneAbbr(tz);
        const tomorrowLocal = /* @__PURE__ */ new Date();
        tomorrowLocal.setDate(tomorrowLocal.getDate() + 1);
        const tomorrowLocalStr = tomorrowLocal.toLocaleDateString("en-CA", { timeZone: tz });
        const isToday = shift.date === local.dateStr;
        const isTomorrow = shift.date === tomorrowLocalStr;
        if (!isToday && !isTomorrow) continue;
        const reminderType = isToday ? "day_of" : "day_before";
        const [sh, sm] = shift.startTime.split(":").map(Number);
        const shiftMinutes = sh * 60 + (sm || 0);
        const nowMinutes = local.hours * 60 + local.minutes;
        if (isToday) {
          const minutesUntilShift = shiftMinutes - nowMinutes;
          if (minutesUntilShift < 60 || minutesUntilShift > 480) {
            const isMorningWindow = local.hours >= 7 && local.hours < 9;
            if (isMorningWindow && minutesUntilShift > 0) {
              const morningSmsType = "day_of_morning_sms";
              const existingMorning = await db.select().from(sentReminders).where(and13(
                eq16(sentReminders.shiftId, shift.id),
                eq16(sentReminders.workerId, shift.workerUserId),
                eq16(sentReminders.reminderType, morningSmsType)
              )).limit(1);
              if (existingMorning.length === 0 && shift.workerPhone) {
                const morningMsg = `Good morning ${shift.workerName || "there"}! You have a shift today \u2014 ${shift.title} at ${shift.workplaceName || "your workplace"} at ${shift.startTime} ${tzAbbr}. Have a great shift!`;
                try {
                  const mRes = await sendSMS(shift.workerPhone, morningMsg);
                  await logSMS({ phoneNumber: shift.workerPhone, direction: "outbound", message: morningMsg, shiftId: shift.id, status: mRes.success ? "sent" : "failed" });
                  await db.insert(sentReminders).values({ shiftId: shift.id, workerId: shift.workerUserId, reminderType: morningSmsType });
                  lileeReminders.push({ name: shift.workerName || "Worker", title: shift.title || "", location: shift.workplaceName || "workplace", date: shift.date || "", time: shift.startTime || "", tzAbbr, label: "Today (morning)" });
                  console.log(`[Reminder] Morning SMS sent to ${shift.workerName} (${shift.workerPhone}) \u2014 ${shift.title}`);
                } catch (mErr) {
                  console.error(`[Reminder] Morning SMS failed for shift ${shift.id}:`, mErr);
                }
              }
            }
            continue;
          }
        } else {
          if (local.hours < 18 || local.hours >= 21) continue;
        }
        const existing = await db.select().from(sentReminders).where(
          and13(
            eq16(sentReminders.shiftId, shift.id),
            eq16(sentReminders.workerId, shift.workerUserId),
            eq16(sentReminders.reminderType, reminderType)
          )
        ).limit(1);
        if (existing.length > 0) continue;
        const title = isToday ? "Shift Today" : "Shift Tomorrow";
        const body = `${shift.title} at ${shift.workplaceName || "workplace"} - ${shift.startTime} (${tzAbbr})`;
        try {
          await sendPushNotifications([shift.workerUserId], title, body, {
            type: "shift_reminder",
            shiftId: shift.id
          });
          await db.insert(sentReminders).values({
            shiftId: shift.id,
            workerId: shift.workerUserId,
            reminderType
          });
          lileeReminders.push({ name: shift.workerName || "Worker", title: shift.title || "", location: shift.workplaceName || "workplace", date: shift.date || "", time: shift.startTime || "", tzAbbr, label: isToday ? "Today" : "Tomorrow" });
          await db.insert(appNotifications).values({
            userId: shift.workerUserId,
            title,
            body,
            type: "shift_reminder",
            data: JSON.stringify({ shiftId: shift.id })
          });
          const workerDisplay = shift.workerName || "there";
          const workerSmsType = `${reminderType}_sms`;
          const existingWorkerSms = await db.select().from(sentReminders).where(and13(
            eq16(sentReminders.shiftId, shift.id),
            eq16(sentReminders.workerId, shift.workerUserId),
            eq16(sentReminders.reminderType, workerSmsType)
          )).limit(1);
          if (existingWorkerSms.length === 0 && shift.workerPhone) {
            const workerMsg = isToday ? `Hi ${workerDisplay}, reminder: you're working TODAY \u2014 ${shift.title} at ${shift.workplaceName || "your workplace"} at ${shift.startTime} ${tzAbbr}. See you there!` : `Hi ${workerDisplay}, reminder: you have a shift TOMORROW \u2014 ${shift.title} at ${shift.workplaceName || "your workplace"} at ${shift.startTime} ${tzAbbr}. Reply if you have any questions.`;
            try {
              const wRes = await sendSMS(shift.workerPhone, workerMsg);
              await logSMS({ phoneNumber: shift.workerPhone, direction: "outbound", message: workerMsg, shiftId: shift.id, status: wRes.success ? "sent" : "failed" });
              await db.insert(sentReminders).values({ shiftId: shift.id, workerId: shift.workerUserId, reminderType: workerSmsType });
              console.log(`[Reminder] Worker SMS sent to ${shift.workerName} (${shift.workerPhone}) \u2014 ${shift.title} on ${shift.date}`);
            } catch (wErr) {
              console.error(`[Reminder] Worker SMS failed for shift ${shift.id}:`, wErr);
            }
          }
        } catch (err) {
          console.error(`Failed to send reminder for shift ${shift.id}:`, err);
        }
      }
      if (lileeReminders.length > 0) {
        try {
          const dateLabel = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA", { timeZone: "America/Toronto", month: "short", day: "numeric", year: "numeric" });
          const groupLabels = [...new Set(lileeReminders.map((r) => r.label))].join(" & ");
          const lines = lileeReminders.map((r) => `\u2022 ${r.name} \u2192 ${r.location}, ${r.time} ${r.tzAbbr}`).join("\n");
          const summary = `[WFC] Shift Reminders \u2014 ${dateLabel}
${groupLabels} (${lileeReminders.length} worker${lileeReminders.length !== 1 ? "s" : ""}):

${lines}`;
          const lileeRes = await sendSMS(GM_LILEE_PHONE4, summary);
          await logSMS({ phoneNumber: GM_LILEE_PHONE4, direction: "outbound", message: summary, status: lileeRes.success ? "sent" : "failed" });
          console.log(`[Reminder] Consolidated report sent to Lilee \u2014 ${lileeReminders.length} workers`);
        } catch (lileeErr) {
          console.error("[Reminder] Failed to send consolidated Lilee report:", lileeErr);
        }
      }
    } catch (error) {
      console.error("Error processing shift reminders:", error);
    }
  }
  async function processMissedShiftDetection() {
    try {
      const nowToronto2 = new Date((/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: "America/Toronto" }));
      const todayStr = nowToronto2.toISOString().split("T")[0];
      const currentHour = nowToronto2.getHours();
      const currentMin = nowToronto2.getMinutes();
      const currentTimeMinutes = currentHour * 60 + currentMin;
      const todayShifts = await db.select().from(shifts).where(
        and13(
          eq16(shifts.date, todayStr),
          eq16(shifts.status, "scheduled"),
          not(isNull8(shifts.workerUserId))
        )
      );
      for (const shift of todayShifts) {
        if (!shift.startTime || !shift.workerUserId) continue;
        const [h, m] = shift.startTime.split(":").map(Number);
        const shiftStartMinutes = h * 60 + m;
        const minutesLate = currentTimeMinutes - shiftStartMinutes;
        if (minutesLate < 15 || minutesLate > 120) continue;
        const existingTito = await db.select({ id: titoLogs.id }).from(titoLogs).where(and13(
          eq16(titoLogs.shiftId, shift.id),
          eq16(titoLogs.workerId, shift.workerUserId),
          not(isNull8(titoLogs.timeIn))
        )).limit(1);
        if (existingTito.length > 0) continue;
        const alreadyNotified = await db.select({ id: sentReminders.id }).from(sentReminders).where(and13(
          eq16(sentReminders.shiftId, shift.id),
          eq16(sentReminders.workerId, shift.workerUserId),
          eq16(sentReminders.reminderType, minutesLate >= 30 ? "noshow_hr" : "missed_worker")
        )).limit(1);
        if (alreadyNotified.length > 0) continue;
        const [worker] = await db.select({ fullName: users.fullName }).from(users).where(eq16(users.id, shift.workerUserId));
        const [workplace] = shift.workplaceId ? await db.select({ name: workplaces.name }).from(workplaces).where(eq16(workplaces.id, shift.workplaceId)) : [null];
        const workerName = worker?.fullName || "Worker";
        const wpName = workplace?.name || "workplace";
        if (minutesLate >= 30) {
          const hrAdmins = await db.select({ id: users.id }).from(users).where(and13(inArray5(users.role, ["admin", "hr"]), eq16(users.isActive, true)));
          const hrIds = hrAdmins.map((u) => u.id);
          for (const hrId of hrIds) {
            await db.insert(appNotifications).values({
              userId: hrId,
              type: "no_show_risk",
              title: "Possible No-Show",
              body: `${workerName} has not clocked in for their ${shift.startTime} shift at ${wpName}. ${minutesLate} minutes overdue.`,
              deepLink: `/shifts/${shift.id}`
            });
          }
          sendPushNotifications(
            hrIds,
            "Possible No-Show",
            `${workerName} has not clocked in for their shift at ${wpName}. ${minutesLate} min overdue.`,
            { type: "no_show_risk", shiftId: shift.id }
          );
          await db.insert(sentReminders).values({
            shiftId: shift.id,
            workerId: shift.workerUserId,
            reminderType: "noshow_hr"
          }).onConflictDoNothing();
          await db.insert(auditLog).values({
            userId: shift.workerUserId,
            action: "NO_SHOW_RISK",
            entityType: "shift",
            entityId: shift.id,
            details: JSON.stringify({ minutesLate, workerName, workplaceName: wpName })
          });
          console.log(`[MISSED-SHIFT] No-show alert for ${workerName}, shift ${shift.id}, ${minutesLate} min late`);
        } else if (minutesLate >= 15) {
          await db.insert(appNotifications).values({
            userId: shift.workerUserId,
            type: "missed_shift_prompt",
            title: "Shift Started",
            body: `Your shift at ${wpName} started ${minutesLate} minutes ago. Please clock in or contact HR if you have an issue.`,
            deepLink: `/clock-in`
          });
          sendPushNotifications(
            [shift.workerUserId],
            "Shift Started",
            `Your shift at ${wpName} started ${minutesLate} minutes ago. Please clock in.`,
            { type: "missed_shift_prompt", shiftId: shift.id }
          );
          await db.insert(sentReminders).values({
            shiftId: shift.id,
            workerId: shift.workerUserId,
            reminderType: "missed_worker"
          }).onConflictDoNothing();
          console.log(`[MISSED-SHIFT] Worker prompt for ${workerName}, shift ${shift.id}, ${minutesLate} min late`);
        }
      }
    } catch (error) {
      console.error("[MISSED-SHIFT] Detection error:", error);
    }
  }
  setInterval(processMissedShiftDetection, 5 * 60 * 1e3);
  processMissedShiftDetection();
  processShiftReminders();
  setInterval(processShiftReminders, 15 * 60 * 1e3);
  const KNOWN_OPENPHONE_IDS = /* @__PURE__ */ new Set(["PNo1n737XV", "PNCQJAOZa0"]);
  app2.post("/api/webhooks/openphone", async (req, res) => {
    try {
      const payload = req.body;
      console.log("[OPENPHONE WEBHOOK] Received:", JSON.stringify(payload).substring(0, 500));
      res.status(200).json({ received: true });
      if (!payload?.type || payload.type !== "message.received") {
        console.log("[OPENPHONE WEBHOOK] Ignoring non-message event:", payload?.type);
        return;
      }
      const messageData = payload?.data?.object;
      if (!messageData) {
        console.log("[OPENPHONE WEBHOOK] No message data in payload");
        return;
      }
      const phoneNumberId = messageData.phoneNumberId;
      if (phoneNumberId && !KNOWN_OPENPHONE_IDS.has(phoneNumberId)) {
        console.log(`[OPENPHONE WEBHOOK] Unknown phoneNumberId: ${phoneNumberId}, rejecting`);
        return;
      }
      if (messageData.direction === "outgoing") {
        console.log("[OPENPHONE WEBHOOK] Ignoring outgoing message");
        return;
      }
      const senderPhone = messageData.from;
      const messageBody = (messageData.body || messageData.content || messageData.text || "").trim();
      const openphoneMessageId = messageData.id;
      const mediaUrls = [];
      if (Array.isArray(messageData.media)) {
        for (const m of messageData.media) {
          if (m?.url && typeof m.url === "string" && /^https?:\/\//i.test(m.url)) {
            mediaUrls.push(m.url);
          }
        }
      }
      if (!senderPhone || !messageBody && mediaUrls.length === 0) {
        console.log("[OPENPHONE WEBHOOK] Missing sender phone or message body");
        return;
      }
      console.log(`[OPENPHONE WEBHOOK] From: ${senderPhone}, Body: "${messageBody}"${mediaUrls.length > 0 ? `, Media: ${mediaUrls.length} file(s)` : ""}`);
      if (mediaUrls.length > 0) {
        const imageUrls = mediaUrls.filter((u) => /\.(jpg|jpeg|png|gif|webp)/i.test(u) || u.includes("image"));
        if (imageUrls.length > 0) {
          console.log(`[OPENPHONE WEBHOOK] Processing ${imageUrls.length} MMS image(s) via Clawd vision`);
          setImmediate(async () => {
            try {
              const result = await orchestrate({
                userMessage: messageBody || "Analyze this image sent via SMS",
                conversationHistory: [],
                userId: `sms-${senderPhone}`,
                imageUrls,
                forceActionMode: true
              });
              console.log(`[OPENPHONE WEBHOOK] Vision analysis complete: ${result.response?.slice(0, 120)}`);
            } catch (err) {
              console.error("[OPENPHONE WEBHOOK] Vision analysis failed:", err?.message);
            }
          });
        }
      }
      markResponseReceived(senderPhone).catch(() => {
      });
      const normalizedPhone = senderPhone.replace(/[^\d]/g, "");
      const phoneVariants = [
        senderPhone,
        `+${normalizedPhone}`,
        `+1${normalizedPhone}`,
        normalizedPhone,
        normalizedPhone.startsWith("1") ? normalizedPhone.substring(1) : normalizedPhone
      ];
      let worker = null;
      for (const variant of phoneVariants) {
        const [found] = await db.select({ id: users.id, fullName: users.fullName, phone: users.phone }).from(users).where(and13(eq16(users.phone, variant), eq16(users.role, "worker")));
        if (found) {
          worker = found;
          break;
        }
      }
      if (!worker) {
        const allWorkers = await db.select({ id: users.id, fullName: users.fullName, phone: users.phone }).from(users).where(and13(
          eq16(users.role, "worker"),
          eq16(users.isActive, true)
        ));
        worker = allWorkers.find((w) => {
          if (!w.phone) return false;
          const cleaned = w.phone.replace(/[^\d]/g, "");
          return phoneVariants.some((v) => {
            const vCleaned = v.replace(/[^\d]/g, "");
            return cleaned === vCleaned || cleaned.endsWith(vCleaned) || vCleaned.endsWith(cleaned);
          });
        });
      }
      await logSMS({
        phoneNumber: senderPhone,
        direction: "inbound",
        message: messageBody,
        workerId: worker?.id || null,
        status: worker ? "received" : "unknown_sender",
        openphoneMessageId
      });
      const upperBody = messageBody.toUpperCase().trim();
      const isShiftKeyword = ["ACCEPT SHIFT", "ACCEPT", "DECLINE SHIFT", "DECLINE"].includes(upperBody);
      if (!isShiftKeyword) {
        const classif = classifySms(messageBody);
        const senderMatched = !!worker;
        const senderLabel = senderMatched ? worker.fullName : `Unmatched(${senderPhone})`;
        const dbClassification = classif.intent === "staff_absence" ? "sick_call" : classif.intent === "late_arrival" ? "late_arrival" : classif.intent === "emergency" ? "sick_call" : classif.intent === "client_request" ? "client_request" : classif.intent === "unknown_staffing" ? "unknown_staffing" : "general";
        console.log(
          `[OPENPHONE WEBHOOK] intent=${classif.intent} confidence=${classif.confidence} urgency=${classif.urgency} sender=${senderLabel} matched=${senderMatched} entities={role:${classif.role_requested},qty:${classif.quantity_requested},date:${classif.shift_date},time:${classif.shift_time}} msg="${messageBody.slice(0, 80)}"`
        );
        try {
          if (openphoneMessageId) {
            await db.update(smsLogs).set({ classification: dbClassification }).where(eq16(smsLogs.openphoneMessageId, openphoneMessageId));
          }
        } catch (_e) {
        }
        if (classif.intent === "staff_absence" || classif.intent === "emergency") {
          setImmediate(() => {
            handleSickCall({
              workerId: worker?.id || null,
              workerName: senderMatched ? worker.fullName : `Unmatched number ${senderPhone}`,
              workerPhone: senderPhone,
              smsMessage: messageBody,
              senderMatched,
              classification: classif
            }).catch((err) => console.error("[OPENPHONE WEBHOOK] handleSickCall error:", err?.message));
          });
        } else if (classif.intent === "late_arrival") {
          setImmediate(() => {
            handleLateArrival({
              workerId: worker?.id || null,
              workerName: senderMatched ? worker.fullName : `Unmatched number ${senderPhone}`,
              workerPhone: senderPhone,
              smsMessage: messageBody,
              classification: classif
            }).catch((err) => console.error("[OPENPHONE WEBHOOK] handleLateArrival error:", err?.message));
          });
        } else if (classif.intent === "client_request") {
          setImmediate(() => {
            handleClientRequest({
              phoneNumber: senderPhone,
              smsMessage: messageBody,
              senderMatched,
              classification: classif
            }).catch((err) => console.error("[OPENPHONE WEBHOOK] handleClientRequest error:", err?.message));
          });
        } else if (classif.intent === "unknown_staffing" && !senderMatched) {
          setImmediate(async () => {
            try {
              const { sendDiscordNotification: notifyDiscord } = await Promise.resolve().then(() => (init_discord(), discord_exports));
              const { sendSMS: sendAlert, logSMS: logAlert } = await Promise.resolve().then(() => (init_openphone(), openphone_exports));
              const GM_LILEE = "+14166028038";
              await notifyDiscord({
                title: "Possible Staffing Message \u2014 Unmatched Sender",
                message: `\u{1F7E0} POSSIBLE STAFFING MESSAGE
Sender: Unmatched number ${senderPhone}
Message: "${messageBody}"
Confidence: ${classif.confidence}
Action: Manual review needed \u2014 sender not in system`,
                color: "amber",
                type: "general",
                sourcePhone: senderPhone
              });
              const gmMsg = `[WFConnect] Possible staffing message from unmatched number ${senderPhone}: "${messageBody.slice(0, 120)}". Manual review needed.`;
              await sendAlert(GM_LILEE, gmMsg);
              await logAlert({ phoneNumber: GM_LILEE, direction: "outbound", message: gmMsg, status: "sent" });
            } catch (err) {
              console.error("[OPENPHONE WEBHOOK] unknown_staffing alert failed:", err?.message);
            }
          });
        } else {
          console.log(`[OPENPHONE WEBHOOK] General message from ${senderLabel} \u2014 no action triggered`);
        }
        return;
      }
      if (!worker) {
        console.log(`[OPENPHONE WEBHOOK] Unknown sender ${senderPhone} sent shift keyword: "${messageBody}"`);
        sendSMS(senderPhone, "Sorry, we couldn't identify your account. Please contact HR directly or use the WFConnect app.").catch((err) => console.error("[OPENPHONE] Reply SMS error:", err));
        return;
      }
      let responseAction = null;
      if (["ACCEPT SHIFT", "ACCEPT"].includes(upperBody)) {
        responseAction = "accepted";
      } else if (["DECLINE SHIFT", "DECLINE"].includes(upperBody)) {
        responseAction = "declined";
      }
      const pendingOffers = await db.select({
        offerId: shiftOffers.id,
        shiftId: shiftOffers.shiftId,
        status: shiftOffers.status,
        shiftTitle: shifts.title,
        shiftDate: shifts.date,
        shiftStartTime: shifts.startTime,
        workersNeeded: shifts.workersNeeded,
        workplaceId: shifts.workplaceId
      }).from(shiftOffers).innerJoin(shifts, eq16(shiftOffers.shiftId, shifts.id)).where(and13(
        eq16(shiftOffers.workerId, worker.id),
        eq16(shiftOffers.status, "pending")
      )).orderBy(desc6(shiftOffers.offeredAt)).limit(1);
      if (pendingOffers.length === 0) {
        sendConfirmationSMS(
          senderPhone,
          `Hi ${worker.fullName}, you don't have any pending shift offers right now. Check the WFConnect app for more details.`,
          worker.id
        ).catch((err) => console.error("[OPENPHONE] Reply SMS error:", err));
        return;
      }
      const offer = pendingOffers[0];
      if (responseAction === "accepted") {
        const acceptedCount = await db.select({ id: shiftOffers.id }).from(shiftOffers).where(and13(
          eq16(shiftOffers.shiftId, offer.shiftId),
          eq16(shiftOffers.status, "accepted"),
          ne5(shiftOffers.id, offer.offerId)
        ));
        const needed = offer.workersNeeded || 1;
        if (acceptedCount.length >= needed) {
          await db.update(shiftOffers).set({ status: "cancelled", cancelReason: "Shift filled before SMS reply", cancelledAt: /* @__PURE__ */ new Date() }).where(eq16(shiftOffers.id, offer.offerId));
          sendConfirmationSMS(
            senderPhone,
            `Sorry ${worker.fullName}, the shift "${offer.shiftTitle}" on ${offer.shiftDate} has already been filled.`,
            worker.id
          ).catch((err) => console.error("[OPENPHONE] Reply SMS error:", err));
          return;
        }
        await db.update(shiftOffers).set({ status: "accepted", respondedAt: /* @__PURE__ */ new Date() }).where(eq16(shiftOffers.id, offer.offerId));
        const [currentShift] = await db.select().from(shifts).where(eq16(shifts.id, offer.shiftId));
        if (currentShift && !currentShift.workerUserId) {
          await db.update(shifts).set({ workerUserId: worker.id, updatedAt: /* @__PURE__ */ new Date() }).where(eq16(shifts.id, offer.shiftId));
        }
        const newAcceptedCount = acceptedCount.length + 1;
        if (newAcceptedCount >= needed) {
          await db.update(shiftOffers).set({ status: "cancelled", cancelReason: "Shift filled - enough workers accepted", cancelledAt: /* @__PURE__ */ new Date() }).where(and13(
            eq16(shiftOffers.shiftId, offer.shiftId),
            eq16(shiftOffers.status, "pending")
          ));
        }
        await db.insert(auditLog).values({
          userId: worker.id,
          action: "OFFER_ACCEPTED_VIA_SMS",
          entityType: "shift_offer",
          entityId: offer.offerId,
          details: JSON.stringify({ shiftId: offer.shiftId, method: "sms" })
        });
        const adminUsers = await db.select({ id: users.id }).from(users).where(or2(eq16(users.role, "admin"), eq16(users.role, "hr")));
        for (const admin of adminUsers) {
          await db.insert(appNotifications).values({
            userId: admin.id,
            type: "offer_accepted",
            title: "Shift Offer Accepted (SMS)",
            body: `${worker.fullName} accepted the shift "${offer.shiftTitle}" on ${offer.shiftDate} via SMS.`,
            deepLink: `/shifts/${offer.shiftId}`
          });
        }
        broadcast({ type: "offer_responded", data: { offerId: offer.offerId, status: "accepted", workerId: worker.id, method: "sms" } });
        sendConfirmationSMS(
          senderPhone,
          `Confirmed! You've accepted the shift "${offer.shiftTitle}" on ${offer.shiftDate} at ${offer.shiftStartTime}. See the WFConnect app for details.`,
          worker.id
        ).catch((err) => console.error("[OPENPHONE] Reply SMS error:", err));
      } else {
        await db.update(shiftOffers).set({ status: "declined", respondedAt: /* @__PURE__ */ new Date() }).where(eq16(shiftOffers.id, offer.offerId));
        await db.insert(auditLog).values({
          userId: worker.id,
          action: "OFFER_DECLINED_VIA_SMS",
          entityType: "shift_offer",
          entityId: offer.offerId,
          details: JSON.stringify({ shiftId: offer.shiftId, method: "sms" })
        });
        broadcast({ type: "offer_responded", data: { offerId: offer.offerId, status: "declined", workerId: worker.id, method: "sms" } });
        sendConfirmationSMS(
          senderPhone,
          `Got it, ${worker.fullName}. You've declined the shift "${offer.shiftTitle}" on ${offer.shiftDate}.`,
          worker.id
        ).catch((err) => console.error("[OPENPHONE] Reply SMS error:", err));
      }
    } catch (error) {
      console.error("[OPENPHONE WEBHOOK] Error processing webhook:", error);
      if (!res.headersSent) {
        res.status(200).json({ received: true });
      }
    }
  });
  app2.post("/api/auth/forgot-password", async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        res.status(400).json({ error: "Email is required" });
        return;
      }
      const [user] = await db.select().from(users).where(eq16(users.email, email.toLowerCase()));
      if (user && user.isActive) {
        const resetToken = crypto2.randomBytes(32).toString("hex");
        const resetExpiry = new Date(Date.now() + 60 * 60 * 1e3);
        await db.update(users).set({ passwordResetToken: resetToken, passwordResetExpiry: resetExpiry, updatedAt: /* @__PURE__ */ new Date() }).where(eq16(users.id, user.id));
        const resetLink = `https://app.wfconnect.org?reset=${resetToken}`;
        sendEmail({
          to: user.email,
          subject: "Reset your Workforce Connect password",
          text: `Hi ${user.fullName},

You requested a password reset. Click the link below to set a new password (expires in 1 hour):

${resetLink}

If you didn't request this, you can safely ignore this email.

The WFConnect Team`,
          html: `<p>Hi ${user.fullName},</p><p>You requested a password reset. Click the button below to set a new password (expires in 1 hour):</p><p><a href="${resetLink}" style="background:#2563EB;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;display:inline-block;">Reset Password</a></p><p>If you didn't request this, you can safely ignore this email.</p><p>The WFConnect Team</p>`
        }).catch((err) => console.error("[EMAIL] Password reset email error:", err));
      }
      res.json({ success: true, message: "If that email is registered and active, a reset link has been sent." });
    } catch (error) {
      console.error("Error in forgot-password:", error);
      res.status(500).json({ error: "Failed to process request" });
    }
  });
  app2.post("/api/auth/reset-password", async (req, res) => {
    try {
      const { token, newPassword } = req.body;
      if (!token || !newPassword) {
        res.status(400).json({ error: "Token and new password are required" });
        return;
      }
      if (newPassword.length < 8) {
        res.status(400).json({ error: "Password must be at least 8 characters" });
        return;
      }
      const [user] = await db.select().from(users).where(
        and13(
          eq16(users.passwordResetToken, token),
          gte10(users.passwordResetExpiry, /* @__PURE__ */ new Date())
        )
      );
      if (!user) {
        res.status(400).json({ error: "Invalid or expired reset link. Please request a new one." });
        return;
      }
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await db.update(users).set({
        password: hashedPassword,
        passwordResetToken: null,
        passwordResetExpiry: null,
        mustChangePassword: false,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq16(users.id, user.id));
      res.json({ success: true, message: "Password reset successfully. You can now sign in." });
    } catch (error) {
      console.error("Error in reset-password:", error);
      res.status(500).json({ error: "Failed to reset password" });
    }
  });
  app2.post("/api/admin/invite-user", checkRoles("admin"), async (req, res) => {
    try {
      const { email, fullName, role, businessName, phone } = req.body;
      if (!email || !fullName || !role) {
        res.status(400).json({ error: "Email, full name, and role are required" });
        return;
      }
      if (!["hr", "client"].includes(role)) {
        res.status(400).json({ error: "Invite flow is for HR and Client roles only" });
        return;
      }
      const existingUser = await db.select().from(users).where(eq16(users.email, email.toLowerCase())).limit(1);
      if (existingUser.length > 0) {
        const existing = existingUser[0];
        const roleLabel = existing.role.charAt(0).toUpperCase() + existing.role.slice(1);
        const statusLabel = existing.isActive ? "active" : "inactive";
        const hint = existing.isActive ? `You can manage their account in User Management.` : `You can reactivate their account in User Management.`;
        res.status(409).json({
          error: `An ${statusLabel} ${roleLabel} account already exists with this email. ${hint}`
        });
        return;
      }
      if (phone) {
        const [phoneDuplicate] = await db.select({ id: users.id }).from(users).where(eq16(users.phone, phone)).limit(1);
        if (phoneDuplicate) {
          res.status(409).json({ error: `A user with phone ${phone} already exists.` });
          return;
        }
      }
      const [fullNameDuplicate] = await db.select({ id: users.id }).from(users).where(eq16(users.fullName, fullName.trim())).limit(1);
      if (fullNameDuplicate) {
        res.status(409).json({ error: `A user with name "${fullName}" already exists.` });
        return;
      }
      const firstName = fullName.trim().split(" ")[0];
      const tempPassword = `${firstName}${Math.floor(1e3 + Math.random() * 9e3)}`;
      const hashedPassword = await bcrypt.hash(tempPassword, 10);
      const [newUser] = await db.insert(users).values({
        email: email.toLowerCase(),
        password: hashedPassword,
        fullName: fullName.trim(),
        role,
        isActive: true,
        mustChangePassword: true,
        businessName: role === "client" ? businessName?.trim() || null : null,
        onboardingStatus: null
      }).returning();
      broadcast({ type: "created", entity: "user" });
      const { password: _, ...userWithoutPassword } = newUser;
      res.status(201).json({ ...userWithoutPassword, tempPassword });
    } catch (error) {
      console.error("Error inviting user:", error);
      res.status(500).json({ error: "Failed to invite user" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/index.ts
init_payroll_hours();
init_db();
init_schema();
import * as fs from "fs";
import * as path from "path";
import bcrypt2 from "bcryptjs";
import { eq as eq17, and as and14, isNull as isNull9 } from "drizzle-orm";
var app = express();
var log = console.log;
var DEMO_USERS = [
  {
    id: "client-1",
    email: "client@example.com",
    fullName: "Sarah Mitchell",
    role: "client",
    password: "password123"
  },
  {
    id: "worker-1",
    email: "worker@example.com",
    fullName: "James Rodriguez",
    role: "worker",
    password: "password123",
    onboardingStatus: "ONBOARDED",
    workerRoles: ["Housekeeper", "Houseperson", "Server"]
  },
  {
    id: "hr-1",
    email: "hr@example.com",
    fullName: "Emily Chen",
    role: "hr",
    password: "password123"
  },
  {
    id: "admin-1",
    email: "admin@example.com",
    fullName: "Michael Thompson",
    role: "admin",
    password: "password123"
  }
];
async function seedDemoUsers() {
  try {
    for (const demoUser of DEMO_USERS) {
      const existing = await db.select().from(users).where(eq17(users.id, demoUser.id)).limit(1);
      if (existing.length === 0) {
        const hashedPassword = await bcrypt2.hash(demoUser.password, 10);
        await db.insert(users).values({
          id: demoUser.id,
          email: demoUser.email,
          fullName: demoUser.fullName,
          password: hashedPassword,
          role: demoUser.role,
          isActive: true,
          onboardingStatus: demoUser.onboardingStatus,
          workerRoles: demoUser.workerRoles ? JSON.stringify(demoUser.workerRoles) : null
        });
        log(`Seeded demo user: ${demoUser.email}`);
      }
    }
  } catch (error) {
    log("Error seeding demo users:", error);
  }
}
var CAE_WORKPLACE = {
  id: "workplace-cae-1",
  name: "CAE Aviation Training & Services Toronto",
  addressLine1: "2025 Logistics Dr",
  city: "Mississauga",
  province: "ON",
  postalCode: "L5S 1Z9",
  country: "Canada",
  latitude: 43.6894,
  longitude: -79.6355,
  geofenceRadiusMeters: 150,
  isActive: true
};
async function seedWorkplaces() {
  try {
    const existing = await db.select().from(workplaces).where(eq17(workplaces.id, CAE_WORKPLACE.id)).limit(1);
    if (existing.length === 0) {
      await db.insert(workplaces).values(CAE_WORKPLACE);
      log(`Seeded workplace: ${CAE_WORKPLACE.name}`);
      const adminExists = await db.select().from(users).where(eq17(users.id, "admin-1")).limit(1);
      const workerExists = await db.select().from(users).where(eq17(users.id, "worker-1")).limit(1);
      if (adminExists.length > 0 && workerExists.length > 0) {
        const assignmentExists = await db.select().from(workplaceAssignments).where(eq17(workplaceAssignments.workplaceId, CAE_WORKPLACE.id)).limit(1);
        if (assignmentExists.length === 0) {
          await db.insert(workplaceAssignments).values({
            id: "assignment-1",
            workplaceId: CAE_WORKPLACE.id,
            workerUserId: "worker-1",
            status: "active",
            invitedByUserId: "admin-1",
            notes: "Demo assignment for testing"
          });
          log(`Seeded workplace assignment: worker-1 to CAE Aviation`);
        }
      }
    }
  } catch (error) {
    log("Error seeding workplaces:", error);
  }
}
async function seedTimesheets() {
  try {
    const existingTs = await db.select().from(timesheets).where(eq17(timesheets.id, "timesheet-demo-1")).limit(1);
    if (existingTs.length === 0) {
      await db.insert(timesheets).values({
        id: "timesheet-demo-1",
        workerUserId: "worker-1",
        periodYear: 2026,
        periodNumber: 2,
        status: "submitted",
        submittedAt: /* @__PURE__ */ new Date("2026-01-24T09:00:00Z"),
        totalHours: "32.50",
        totalPay: "650.00"
      });
      const entries = [
        {
          id: "entry-1",
          timesheetId: "timesheet-demo-1",
          workplaceId: "workplace-cae-1",
          dateLocal: "2026-01-12",
          timeInUtc: /* @__PURE__ */ new Date("2026-01-12T13:00:00Z"),
          timeOutUtc: /* @__PURE__ */ new Date("2026-01-12T21:00:00Z"),
          breakMinutes: 30,
          hours: "7.50",
          payRate: "20.00",
          amount: "150.00",
          notes: "Regular shift"
        },
        {
          id: "entry-2",
          timesheetId: "timesheet-demo-1",
          workplaceId: "workplace-cae-1",
          dateLocal: "2026-01-13",
          timeInUtc: /* @__PURE__ */ new Date("2026-01-13T13:00:00Z"),
          timeOutUtc: /* @__PURE__ */ new Date("2026-01-13T21:00:00Z"),
          breakMinutes: 30,
          hours: "7.50",
          payRate: "20.00",
          amount: "150.00"
        },
        {
          id: "entry-3",
          timesheetId: "timesheet-demo-1",
          workplaceId: "workplace-cae-1",
          dateLocal: "2026-01-14",
          timeInUtc: /* @__PURE__ */ new Date("2026-01-14T14:00:00Z"),
          timeOutUtc: /* @__PURE__ */ new Date("2026-01-14T22:30:00Z"),
          breakMinutes: 30,
          hours: "8.00",
          payRate: "20.00",
          amount: "160.00"
        },
        {
          id: "entry-4",
          timesheetId: "timesheet-demo-1",
          workplaceId: "workplace-cae-1",
          dateLocal: "2026-01-19",
          timeInUtc: /* @__PURE__ */ new Date("2026-01-19T09:00:00Z"),
          timeOutUtc: /* @__PURE__ */ new Date("2026-01-19T17:30:00Z"),
          breakMinutes: 30,
          hours: "8.00",
          payRate: "20.00",
          amount: "160.00"
        }
      ];
      for (const entry of entries) {
        await db.insert(timesheetEntries).values(entry);
      }
      log("Seeded demo timesheet: worker-1 Period 2 (submitted, 32.5h, $650)");
    }
    const existingTs2 = await db.select().from(timesheets).where(eq17(timesheets.id, "timesheet-demo-2")).limit(1);
    if (existingTs2.length === 0) {
      await db.insert(timesheets).values({
        id: "timesheet-demo-2",
        workerUserId: "worker-1",
        periodYear: 2026,
        periodNumber: 3,
        status: "approved",
        submittedAt: /* @__PURE__ */ new Date("2026-02-07T09:00:00Z"),
        approvedByUserId: "admin-1",
        approvedAt: /* @__PURE__ */ new Date("2026-02-08T10:00:00Z"),
        totalHours: "40.00",
        totalPay: "800.00"
      });
      const entries2 = [
        {
          id: "entry-5",
          timesheetId: "timesheet-demo-2",
          workplaceId: "workplace-cae-1",
          dateLocal: "2026-01-26",
          timeInUtc: /* @__PURE__ */ new Date("2026-01-26T09:00:00Z"),
          timeOutUtc: /* @__PURE__ */ new Date("2026-01-26T17:30:00Z"),
          breakMinutes: 30,
          hours: "8.00",
          payRate: "20.00",
          amount: "160.00"
        },
        {
          id: "entry-6",
          timesheetId: "timesheet-demo-2",
          workplaceId: "workplace-cae-1",
          dateLocal: "2026-01-27",
          timeInUtc: /* @__PURE__ */ new Date("2026-01-27T09:00:00Z"),
          timeOutUtc: /* @__PURE__ */ new Date("2026-01-27T17:30:00Z"),
          breakMinutes: 30,
          hours: "8.00",
          payRate: "20.00",
          amount: "160.00"
        },
        {
          id: "entry-7",
          timesheetId: "timesheet-demo-2",
          workplaceId: "workplace-cae-1",
          dateLocal: "2026-01-28",
          timeInUtc: /* @__PURE__ */ new Date("2026-01-28T09:00:00Z"),
          timeOutUtc: /* @__PURE__ */ new Date("2026-01-28T17:30:00Z"),
          breakMinutes: 30,
          hours: "8.00",
          payRate: "20.00",
          amount: "160.00"
        },
        {
          id: "entry-8",
          timesheetId: "timesheet-demo-2",
          workplaceId: "workplace-cae-1",
          dateLocal: "2026-02-02",
          timeInUtc: /* @__PURE__ */ new Date("2026-02-02T09:00:00Z"),
          timeOutUtc: /* @__PURE__ */ new Date("2026-02-02T17:30:00Z"),
          breakMinutes: 30,
          hours: "8.00",
          payRate: "20.00",
          amount: "160.00"
        },
        {
          id: "entry-9",
          timesheetId: "timesheet-demo-2",
          workplaceId: "workplace-cae-1",
          dateLocal: "2026-02-03",
          timeInUtc: /* @__PURE__ */ new Date("2026-02-03T09:00:00Z"),
          timeOutUtc: /* @__PURE__ */ new Date("2026-02-03T17:30:00Z"),
          breakMinutes: 30,
          hours: "8.00",
          payRate: "20.00",
          amount: "160.00"
        }
      ];
      for (const entry of entries2) {
        await db.insert(timesheetEntries).values(entry);
      }
      log("Seeded demo timesheet: worker-1 Period 3 (approved, 40h, $800)");
    }
  } catch (error) {
    log("Error seeding timesheets:", error);
  }
}
async function seedProductionAdmin() {
  try {
    const existingAdmin = await db.select().from(users).where(eq17(users.email, "admin@wfconnect.org")).limit(1);
    if (existingAdmin.length === 0) {
      const hashedPassword = await bcrypt2.hash("@1900Dundas", 10);
      await db.insert(users).values({
        id: crypto.randomUUID(),
        email: "admin@wfconnect.org",
        password: hashedPassword,
        fullName: "Admin User",
        role: "admin",
        timezone: "America/Toronto",
        isActive: true
      });
      log("Created production admin user: admin@wfconnect.org");
    } else {
      log("Production admin user already exists");
    }
  } catch (error) {
    log("Error seeding production admin:", error);
  }
}
async function backfillApprovedApplicationAccounts() {
  try {
    const approvedApps = await db.select({
      id: workerApplications.id,
      email: workerApplications.email,
      fullName: workerApplications.fullName,
      phone: workerApplications.phone,
      preferredRoles: workerApplications.preferredRoles
    }).from(workerApplications).where(eq17(workerApplications.status, "approved"));
    let created = 0;
    for (const app2 of approvedApps) {
      if (!app2.email) continue;
      const [existing] = await db.select({ id: users.id }).from(users).where(eq17(users.email, app2.email.toLowerCase())).limit(1);
      if (existing) continue;
      const crypto3 = await import("crypto");
      const firstName = (app2.fullName || "worker").split(" ")[0].toLowerCase().replace(/[^a-z]/g, "");
      const phoneLast4 = (app2.phone || "0000").replace(/\D/g, "").slice(-4);
      const tempPassword = `${firstName}${phoneLast4}`;
      const hashedPassword = await bcrypt2.hash(tempPassword, 10);
      await db.insert(users).values({
        id: crypto3.randomUUID(),
        email: app2.email.toLowerCase(),
        password: hashedPassword,
        fullName: app2.fullName || "Worker",
        role: "worker",
        phone: app2.phone || void 0,
        isActive: true,
        onboardingStatus: "AGREEMENT_PENDING",
        workerRoles: app2.preferredRoles || void 0,
        mustChangePassword: true,
        timezone: "America/Toronto"
      });
      created++;
    }
    if (created > 0) {
      log(`Backfilled ${created} user accounts from approved applications`);
    }
  } catch (error) {
    log("Error backfilling approved application accounts:", error);
  }
}
async function backfillWorkerPhones() {
  try {
    const workersWithoutPhone = await db.select({ id: users.id, email: users.email }).from(users).where(and14(eq17(users.role, "worker"), isNull9(users.phone)));
    if (workersWithoutPhone.length === 0) {
      return;
    }
    let backfilled = 0;
    for (const worker of workersWithoutPhone) {
      const [app2] = await db.select({ phone: workerApplications.phone }).from(workerApplications).where(and14(
        eq17(workerApplications.email, worker.email),
        eq17(workerApplications.status, "approved")
      )).limit(1);
      if (app2?.phone) {
        await db.update(users).set({ phone: app2.phone }).where(eq17(users.id, worker.id));
        backfilled++;
      }
    }
    if (backfilled > 0) {
      log(`Backfilled phone numbers for ${backfilled} workers from their applications`);
    }
  } catch (error) {
    log("Error backfilling worker phones:", error);
  }
}
function setupCors(app2) {
  app2.use((req, res, next) => {
    const origins = /* @__PURE__ */ new Set();
    if (process.env.REPLIT_DEV_DOMAIN) {
      origins.add(`https://${process.env.REPLIT_DEV_DOMAIN}`);
    }
    if (process.env.REPLIT_DOMAINS) {
      process.env.REPLIT_DOMAINS.split(",").forEach((d) => {
        origins.add(`https://${d.trim()}`);
      });
    }
    const origin = req.header("origin");
    const isLocalhost = origin?.startsWith("http://localhost:") || origin?.startsWith("http://127.0.0.1:");
    if (origin && (origins.has(origin) || isLocalhost)) {
      res.header("Access-Control-Allow-Origin", origin);
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
      );
      res.header("Access-Control-Allow-Headers", "Content-Type, x-user-role, x-user-id");
      res.header("Access-Control-Allow-Credentials", "true");
    }
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });
}
function setupBodyParsing(app2) {
  app2.use(
    express.json({
      limit: "30mb",
      // Increased for base64 file uploads (photo + resume, each up to 10MB → ~13.3MB base64)
      verify: (req, _res, buf) => {
        req.rawBody = buf;
      }
    })
  );
  app2.use(express.urlencoded({ extended: false, limit: "30mb" }));
}
function setupRequestLogging(app2) {
  app2.use((req, res, next) => {
    const start = Date.now();
    const path2 = req.path;
    let capturedJsonResponse = void 0;
    const originalResJson = res.json;
    res.json = function(bodyJson, ...args) {
      capturedJsonResponse = bodyJson;
      return originalResJson.apply(res, [bodyJson, ...args]);
    };
    res.on("finish", () => {
      if (!path2.startsWith("/api")) return;
      const duration = Date.now() - start;
      let logLine = `${req.method} ${path2} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    });
    next();
  });
}
function getAppName() {
  try {
    const appJsonPath = path.resolve(process.cwd(), "app.json");
    const appJsonContent = fs.readFileSync(appJsonPath, "utf-8");
    const appJson = JSON.parse(appJsonContent);
    return appJson.expo?.name || "App Landing Page";
  } catch {
    return "App Landing Page";
  }
}
function serveExpoManifest(platform, res) {
  const manifestPath = path.resolve(
    process.cwd(),
    "static-build",
    platform,
    "manifest.json"
  );
  if (!fs.existsSync(manifestPath)) {
    return res.status(404).json({ error: `Manifest not found for platform: ${platform}` });
  }
  res.setHeader("expo-protocol-version", "1");
  res.setHeader("expo-sfv-version", "0");
  res.setHeader("content-type", "application/json");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  const manifest = fs.readFileSync(manifestPath, "utf-8");
  res.send(manifest);
}
function serveLandingPage({
  req,
  res,
  landingPageTemplate,
  appName
}) {
  const forwardedProto = req.header("x-forwarded-proto");
  const protocol = forwardedProto || req.protocol || "https";
  const forwardedHost = req.header("x-forwarded-host");
  const host = forwardedHost || req.get("host");
  const baseUrl = `${protocol}://${host}`;
  const expsUrl = `${host}`;
  log(`baseUrl`, baseUrl);
  log(`expsUrl`, expsUrl);
  const html = landingPageTemplate.replace(/BASE_URL_PLACEHOLDER/g, baseUrl).replace(/EXPS_URL_PLACEHOLDER/g, expsUrl).replace(/APP_NAME_PLACEHOLDER/g, appName);
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(html);
}
function configureExpoAndLanding(app2) {
  const templatePath = path.resolve(
    process.cwd(),
    "server",
    "templates",
    "landing-page.html"
  );
  const landingPageTemplate = fs.readFileSync(templatePath, "utf-8");
  const appName = getAppName();
  const sitemapPath = path.resolve(process.cwd(), "server", "templates", "sitemap.xml");
  const robotsPath = path.resolve(process.cwd(), "server", "templates", "robots.txt");
  app2.get("/sitemap.xml", (_req, res) => {
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.sendFile(sitemapPath);
  });
  app2.get("/robots.txt", (_req, res) => {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.sendFile(robotsPath);
  });
  const logoPath = path.resolve(process.cwd(), "server", "templates", "logo.png");
  const faviconPath = path.resolve(process.cwd(), "server", "templates", "favicon.png");
  app2.get("/logo.png", (_req, res) => {
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.sendFile(logoPath);
  });
  app2.get("/favicon.png", (_req, res) => {
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.sendFile(faviconPath);
  });
  app2.get("/favicon.ico", (_req, res) => {
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.sendFile(faviconPath);
  });
  const applyFormPath = path.resolve(process.cwd(), "server", "templates", "apply-form.html");
  const applyFormTemplate = fs.existsSync(applyFormPath) ? fs.readFileSync(applyFormPath, "utf-8") : null;
  const applicantsPortalPath = path.resolve(process.cwd(), "server", "templates", "applicants-portal.html");
  const applicantsPortalTemplate = fs.existsSync(applicantsPortalPath) ? fs.readFileSync(applicantsPortalPath, "utf-8") : null;
  function isApplySubdomain(req) {
    const host = (req.hostname || req.headers.host || "").toLowerCase();
    return host.startsWith("apply.") || host.includes("apply.wfconnect");
  }
  if (applicantsPortalTemplate) {
    app2.get("/applicants", (req, res, next) => {
      if (!isApplySubdomain(req) && req.hostname !== "localhost" && !req.hostname?.includes("replit")) {
        return next();
      }
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.setHeader("Cache-Control", "no-cache");
      const googleClientId = process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID || "";
      const rendered = applicantsPortalTemplate.replace("__GOOGLE_CLIENT_ID__", googleClientId);
      return res.status(200).send(rendered);
    });
    log("Applicants admin portal available at /applicants and apply.wfconnect.org/applicants");
  }
  if (applyFormTemplate) {
    log("Applicant lead portal available at apply.wfconnect.org/apply");
  }
  const clawdChatPath = path.resolve(process.cwd(), "server", "templates", "clawd-chat.html");
  const clawdChatTemplate = fs.existsSync(clawdChatPath) ? fs.readFileSync(clawdChatPath, "utf-8") : null;
  if (clawdChatTemplate) {
    app2.get("/clawdai", (req, res, next) => {
      if (!isAppSubdomain(req) && req.hostname !== "localhost" && !req.hostname?.includes("replit")) {
        return next();
      }
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.setHeader("Cache-Control", "no-cache");
      return res.status(200).send(clawdChatTemplate);
    });
    const clawdManifestPath = path.resolve(process.cwd(), "server", "templates", "clawd-manifest.json");
    app2.get("/clawd-manifest.json", (_req, res) => {
      res.setHeader("Content-Type", "application/manifest+json");
      res.sendFile(clawdManifestPath);
    });
    log("Clawd AI web chat available at /clawdai and app.wfconnect.org/clawdai");
  }
  const contractorGuidePath = path.resolve(process.cwd(), "server", "templates", "contractor-guide.html");
  const contractorGuideTemplate = fs.readFileSync(contractorGuidePath, "utf-8");
  app2.get("/guide", (_req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.status(200).send(contractorGuideTemplate);
  });
  app2.get("/contractor-guide", (_req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.status(200).send(contractorGuideTemplate);
  });
  const supportPath = path.resolve(process.cwd(), "server", "templates", "support.html");
  const supportTemplate = fs.readFileSync(supportPath, "utf-8");
  app2.get("/support", (_req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.status(200).send(supportTemplate);
  });
  const privacyPath = path.resolve(process.cwd(), "server", "templates", "privacy.html");
  const privacyTemplate = fs.readFileSync(privacyPath, "utf-8");
  app2.get("/privacy", (_req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.status(200).send(privacyTemplate);
  });
  const accountDeletionPath = path.resolve(process.cwd(), "server", "templates", "account-deletion.html");
  const accountDeletionTemplate = fs.readFileSync(accountDeletionPath, "utf-8");
  app2.get("/account-deletion", (_req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.status(200).send(accountDeletionTemplate);
  });
  const applyPath = path.resolve(process.cwd(), "server", "templates", "apply.html");
  const applyTemplate = fs.readFileSync(applyPath, "utf-8");
  app2.get("/apply", (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    if (isApplySubdomain(req) && applyFormTemplate) {
      res.setHeader("Cache-Control", "no-cache");
      return res.status(200).send(applyFormTemplate);
    }
    res.setHeader("Cache-Control", "public, max-age=3600");
    return res.status(200).send(applyTemplate);
  });
  app2.get("/contractor-apply", (_req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600");
    return res.status(200).send(applyTemplate);
  });
  const paymentInfoPath = path.resolve(process.cwd(), "server", "templates", "payment-info.html");
  const paymentInfoTemplate = fs.readFileSync(paymentInfoPath, "utf-8");
  app2.get("/payment-info", (_req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.status(200).send(paymentInfoTemplate);
  });
  const adminAppsPath = path.resolve(process.cwd(), "server", "templates", "admin-applications.html");
  const adminAppsTemplate = fs.readFileSync(adminAppsPath, "utf-8");
  app2.get("/admin/applications", (_req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    res.status(200).send(adminAppsTemplate);
  });
  const adminTimesheetsPath = path.resolve(process.cwd(), "server", "templates", "admin-timesheets.html");
  const adminTimesheetsTemplate = fs.readFileSync(adminTimesheetsPath, "utf-8");
  app2.get("/admin/timesheets", (_req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    res.status(200).send(adminTimesheetsTemplate);
  });
  const adminHoursPath = path.resolve(process.cwd(), "server", "templates", "admin-hours.html");
  const adminHoursTemplate = fs.readFileSync(adminHoursPath, "utf-8");
  app2.get("/admin/hours", (_req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    res.status(200).send(adminHoursTemplate);
  });
  log("Serving static Expo files with dynamic manifest routing");
  const webDistPath = path.resolve(process.cwd(), "web-dist");
  const webDistIndexPath = path.join(webDistPath, "index.html");
  const webBuildExists = fs.existsSync(webDistIndexPath);
  if (webBuildExists) {
    log("Web build found at web-dist/index.html - app subdomain routing enabled");
  } else {
    log("WARNING: web-dist/index.html not found - app subdomain will return 500 error");
  }
  function isAppSubdomain(req) {
    const host = (req.hostname || req.headers.host || "").toLowerCase();
    return host.startsWith("app.") || host.includes("app.wfconnect");
  }
  function isGuideSubdomain(req) {
    const host = (req.hostname || req.headers.host || "").toLowerCase();
    return host.startsWith("guide.") || host.includes("guide.wfconnect");
  }
  app2.use((req, res, next) => {
    if (isAppSubdomain(req) && webBuildExists) {
      if (req.path.startsWith("/api")) {
        return next();
      }
      const filePath = path.join(webDistPath, req.path);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        if (req.path.includes("/_expo/") || req.path.includes("/assets/")) {
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        }
        return res.sendFile(filePath);
      }
    }
    next();
  });
  app2.get("/", (req, res) => {
    const platform = req.header("expo-platform");
    if (platform && (platform === "ios" || platform === "android")) {
      return serveExpoManifest(platform, res);
    }
    if (isAppSubdomain(req)) {
      if (!webBuildExists) {
        return res.status(500).json({
          error: "Web build not available",
          message: "The Expo web build (web-dist/index.html) was not found. Please ensure the web build step completed successfully."
        });
      }
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.setHeader("Cache-Control", "no-cache");
      return res.sendFile(webDistIndexPath);
    }
    if (isGuideSubdomain(req)) {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.setHeader("Cache-Control", "public, max-age=3600");
      return res.status(200).send(contractorGuideTemplate);
    }
    if (isApplySubdomain(req) && applyFormTemplate) {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.setHeader("Cache-Control", "no-cache");
      return res.status(200).send(applyFormTemplate);
    }
    return serveLandingPage({
      req,
      res,
      landingPageTemplate,
      appName
    });
  });
  app2.get("/manifest", (req, res, next) => {
    const platform = req.header("expo-platform");
    if (platform && (platform === "ios" || platform === "android")) {
      return serveExpoManifest(platform, res);
    }
    next();
  });
  app2.use("/assets", express.static(path.resolve(process.cwd(), "assets")));
  app2.use(express.static(path.resolve(process.cwd(), "static-build"), { index: false }));
  app2.use((req, res, next) => {
    if (req.method !== "GET") {
      return next();
    }
    if (req.path.startsWith("/api")) {
      return next();
    }
    if (isAppSubdomain(req) && webBuildExists) {
      if (path.extname(req.path)) {
        return next();
      }
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.setHeader("Cache-Control", "no-cache");
      return res.sendFile(webDistIndexPath);
    }
    next();
  });
  log("Expo routing: Checking expo-platform header on / and /manifest");
  log("Domain routing: app.wfconnect.org -> web-dist/, wfconnect.org -> landing page");
}
function setupErrorHandler(app2) {
  app2.use((err, _req, res, next) => {
    const error = err;
    const status = error.status || error.statusCode || 500;
    const message = error.message || "Internal Server Error";
    console.error("Internal Server Error:", err);
    if (res.headersSent) {
      return next(err);
    }
    return res.status(status).json({ message });
  });
}
var isDemoMode = process.env.DEMO_MODE !== "false";
(async () => {
  if (isDemoMode) {
    log("DEMO MODE enabled - seeding demo data...");
    await seedDemoUsers();
    await seedWorkplaces();
    await seedTimesheets();
  } else {
    log("PRODUCTION MODE - skipping demo data seeding");
    await seedProductionAdmin();
    await backfillWorkerPhones();
    await backfillApprovedApplicationAccounts();
  }
  setupCors(app);
  setupBodyParsing(app);
  setupRequestLogging(app);
  configureExpoAndLanding(app);
  registerPayrollHoursRoutes(app);
  const server = await registerRoutes(app);
  setupWebSocket(server);
  setupErrorHandler(app);
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true
    },
    () => {
      log(`express server serving on port ${port}`);
      (async () => {
        try {
          const crmClient = await Promise.resolve().then(() => (init_weekdays_crm(), weekdays_crm_exports));
          if (!crmClient.isConfigured()) {
            log("[CRM] Not configured - skipping sync setup");
            return;
          }
          const connResult = await crmClient.testConnection();
          if (!connResult.connected) {
            log("[CRM] Connection test failed:", connResult.error);
            return;
          }
          log("[CRM] Connected to Weekdays CRM successfully");
          const crmSync = await Promise.resolve().then(() => (init_crm_sync(), crm_sync_exports));
          try {
            await crmSync.syncAll(false);
            log("[CRM] Initial sync completed");
          } catch (syncErr) {
            log("[CRM] Initial sync failed:", syncErr.message);
          }
          try {
            const backfill = await crmSync.backfillWorkplacesToCrm();
            if (backfill.pushed > 0 || backfill.matched > 0) {
              log(`[CRM] Backfill: ${backfill.pushed} pushed, ${backfill.matched} matched, ${backfill.failed} failed`);
            }
          } catch (backfillErr) {
            log("[CRM] Backfill failed (non-blocking):", backfillErr.message);
          }
          let lastSyncFailed = false;
          setInterval(async () => {
            try {
              if (crmSync.isSyncRunning()) return;
              if (lastSyncFailed) {
                log("[CRM] Previous sync failed \u2014 attempting full recovery sync");
                await crmSync.syncAll(false);
                lastSyncFailed = false;
                log("[CRM] Recovery sync completed successfully");
              } else {
                await crmSync.syncConfirmedShifts(false);
                await crmSync.syncHotelRequests(false);
                crmSync.markSyncCompleted();
              }
            } catch (err) {
              lastSyncFailed = true;
              log("[CRM] Auto-sync failed:", err.message);
            }
          }, 3 * 60 * 1e3);
          setInterval(async () => {
            try {
              const pushResult = await crmSync.processCrmPushQueue();
              if (pushResult.processed > 0) {
                log(`[CRM] Push queue: ${pushResult.succeeded} succeeded, ${pushResult.failed} failed of ${pushResult.processed}`);
              }
            } catch (err) {
              log("[CRM] Push queue processing failed:", err.message);
            }
          }, 60 * 1e3);
          log("[CRM] Auto-sync scheduled every 3 minutes, push queue every 1 minute");
        } catch (crmErr) {
          log("[CRM] Startup check failed (non-blocking):", crmErr.message);
        }
      })();
      (async () => {
        try {
          const aiAssistant = await Promise.resolve().then(() => (init_ai_assistant(), ai_assistant_exports));
          await aiAssistant.startAssistant();
        } catch (aiErr) {
          log("[AI] Startup failed (non-blocking):", aiErr.message);
        }
      })();
      (async () => {
        try {
          const followup = await Promise.resolve().then(() => (init_aiFollowupService(), aiFollowupService_exports));
          followup.startFollowupScheduler();
        } catch (err) {
          log("[AI FOLLOWUP] Startup failed (non-blocking):", err.message);
        }
      })();
      (async () => {
        try {
          const discordBot = await Promise.resolve().then(() => (init_discord_bot(), discord_bot_exports));
          await discordBot.startDiscordBot();
        } catch (err) {
          log("[DISCORD BOT] Startup failed (non-blocking):", err.message);
        }
      })();
    }
  );
})();
