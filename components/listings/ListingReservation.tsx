"use client";

import { Range } from 'react-date-range';
import Calendar from '../input/Calendar';
import { Button } from '..';

interface ListingReservationProps {
    price: number;
    totalPrice: number;
    onChangeDate: (value: Range) => void;
    dateRange: Range;
    onSubmit: () => void;
    disableDate: Date[];
    disabled?: boolean;
}

const ListingReservation: React.FC<ListingReservationProps> = ({
    price,
    totalPrice,
    onChangeDate,
    dateRange,
    onSubmit,
    disableDate,
    disabled,
}) => {
    return (
        <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
            <div className="fle flex-row items-center gap-1 p-4">
                <div className="text-2xl font-semibold">
                    $ {price}
                </div>
                <div className="font-light text-neutral-600">
                    night
                </div>
            </div>
            <hr />
            <Calendar
                value={dateRange}
                disableDate={disableDate}
                onChange={(value) => onChangeDate(value.selection)}
            />
            <hr />
            <div className="p-4">
                <Button
                    disabled={disabled}
                    label="Reserve"
                    onClick={onSubmit}
                />
            </div>
            <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
                <div className="">
                    Total
                </div>
                <div>
                    $ {totalPrice}
                </div>
            </div>
        </div>
    )
}

export default ListingReservation