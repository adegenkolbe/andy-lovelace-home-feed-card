export function computeDomain(entityId) {
  return entityId.substr(0, entityId.indexOf("."));
}