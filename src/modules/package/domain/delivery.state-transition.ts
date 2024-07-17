import { PackageStatus } from '../package.constants';

/**
 * This is a happy flow. For example, there is a possibility, that package can be stuck in the postbox,
 * so it should be picked up later back to the sender facility.
 */
export const PackageStatusTransitions = new Map<
  `${PackageStatus}`,
  `${PackageStatus}`[]
>([
  [PackageStatus.registered, [PackageStatus.inSenderPostbox]],
  [PackageStatus.inSenderPostbox, [PackageStatus.inTransportToWarehouse]],
  [PackageStatus.inTransportToWarehouse, [PackageStatus.warehouseSorting]],
  [PackageStatus.warehouseSorting, [PackageStatus.inTransportFromWarehouse]],
  [
    PackageStatus.inTransportFromWarehouse,
    [PackageStatus.inTransportToReceiver],
  ],
  [PackageStatus.inTransportToReceiver, [PackageStatus.inReceiverPostbox]],
  [PackageStatus.inReceiverPostbox, [PackageStatus.pickedUpBySender]],
]);
