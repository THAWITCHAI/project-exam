import { NextResponse } from "next/server"
import { mysqlPool } from "../../../../lib/DB"


export async function POST(req: any) {
    const data = await req.json()
    console.log(data)
    const PromisePool = mysqlPool.promise()
    PromisePool.query('INSERT INTO jobs set ?', [data])
    return NextResponse.json({ massage: 'Success' }, { status: 200 })
}
export async function PUT(req: any) {
    const data = await req.json()
    console.log(data)
    const PromisePool = mysqlPool.promise()
    PromisePool.query(`
        UPDATE jobs 
        SET ?, update_job = CURRENT_TIMESTAMP 
        WHERE id = ?;
        `,[data,data.id])
    return NextResponse.json({ massage: 'Success' }, { status: 200 })
}
export async function DELETE(req: any) {
    const {id} = await req.json()
    console.log(id)
    const PromisePool = mysqlPool.promise()
    PromisePool.query(`DELETE FROM jobs WHERE id = ${id}`)
    return NextResponse.json({ massage: 'Success' }, { status: 200 })
}
export async function GET() {
    const PromisePool = mysqlPool.promise()
    const [row] = await PromisePool.query(`SELECT * FROM jobs`)
    return NextResponse.json(row)
}