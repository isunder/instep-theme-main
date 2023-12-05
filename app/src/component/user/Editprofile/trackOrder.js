import React from 'react'
import { Table } from 'react-bootstrap';

const TrackOrder = () => {
    return (
        <div>
            <div className="recent_orders">
                <h3>Your Orders</h3>
            </div>
            <Table responsive="md" className="main">
                <thead>
                    <tr>
                        <th>Order Code</th>
                        <th>Placed On </th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Status </th>
                        <th>Action </th>
                    </tr>
                </thead>
                <tbody>
                
                </tbody>
            </Table>
        </div>
    )
}

export default TrackOrder
