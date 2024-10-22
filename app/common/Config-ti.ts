/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const ConfigKey = t.lit("audit_log_streaming_destinations");

export const ConfigValue = t.name("AuditLogStreamingDestinations");

export const AuditLogStreamingDestinations = t.array("AuditLogStreamingDestination");

export const AuditLogStreamingDestination = t.iface([], {
  "id": "string",
  "name": t.lit("splunk"),
  "url": "string",
  "token": t.opt("string"),
});

const exportedTypeSuite: t.ITypeSuite = {
  ConfigKey,
  ConfigValue,
  AuditLogStreamingDestinations,
  AuditLogStreamingDestination,
};
export default exportedTypeSuite;