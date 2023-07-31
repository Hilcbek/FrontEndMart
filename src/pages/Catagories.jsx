import React from 'react'
import { Catagory } from './Catagory'

export const Catagories = () => {
    let images = [
        {
            'one': 'https://static.zara.net/photos///2023/I/0/1/p/7972/919/250/2/w/940/7972919250_6_1_1.jpg?ts=1689319524996',
            'two' : 'https://static.zara.net/photos///2023/I/0/1/p/4786/302/300/2/w/470/4786302300_6_1_1.jpg?ts=1689262917656'
        },
        {
            'one' : 'https://static.zara.net/photos///2023/I/0/1/p/7521/268/712/2/w/470/7521268712_6_1_1.jpg?ts=1689686967318',
            'two' : 'https://static.zara.net/photos///2023/I/0/1/p/6895/252/330/2/w/470/6895252330_6_1_1.jpg?ts=1688714546893',
        },
        {
            'one' : 'https://static.zara.net/photos///2023/I/0/1/p/8019/819/912/2/w/470/8019819912_6_1_1.jpg?ts=1688655786316',
            'two' : 'https://static.zara.net/photos///2023/I/0/1/p/3067/025/802/2/w/470/3067025802_6_1_1.jpg?ts=1688654075592',
        },
        {
            'one' : 'https://static.zara.net/photos///2023/I/0/1/p/5107/255/615/2/w/940/5107255615_6_1_1.jpg?ts=1689847448931',
            'two' : 'https://static.zara.net/photos///2023/I/0/1/p/4786/320/802/2/w/470/4786320802_6_1_1.jpg?ts=1689319532751'
        },
        {
            'one' : 'https://static.zara.net/photos///2023/I/0/1/p/7877/342/800/2/w/485/7877342800_6_1_1.jpg?ts=1689686965215',
            'two' : 'https://static.zara.net/photos///2023/I/0/1/p/7993/967/802/2/w/485/7993967802_6_1_1.jpg?ts=1689760471492'
        },
        {
            'one' : 'https://static.zara.net/photos///2023/I/0/1/p/7901/069/064/2/w/470/7901069064_6_1_1.jpg?ts=1688456861456',
            'two' : 'https://static.zara.net/photos///2023/I/0/1/p/7878/273/046/2/w/470/7878273046_6_1_1.jpg?ts=1686120769675'
        },
        {
            'one' : 'https://static.zara.net/photos///2023/I/0/1/p/8072/967/515/2/w/705/8072967515_6_1_1.jpg?ts=1687944860711',
            'two' : 'https://static.zara.net/photos///2023/I/0/1/p/7828/967/800/2/w/705/7828967800_6_1_1.jpg?ts=1689319526558'
        },
        {
            'one' : 'https://static.zara.net/photos///2023/I/0/1/p/7896/607/505/2/w/705/7896607505_6_1_1.jpg?ts=1688714651868',
            'two' : 'https://static.zara.net/photos///2023/I/0/1/p/4661/510/800/2/w/940/4661510800_6_1_1.jpg?ts=1687428538522'
        },
        {
            'one' : 'https://static.zara.net/photos///2023/I/0/1/p/4877/252/802/2/w/940/4877252802_6_1_1.jpg?ts=1688649858109',
            'two' : 'https://static.zara.net/photos///2023/I/0/1/p/4786/266/330/2/w/970/4786266330_6_1_1.jpg?ts=1687944583449'
        },
        {
            'one' : 'https://static.zara.net/photos///2023/I/0/1/p/7740/102/526/2/w/940/7740102526_6_1_1.jpg?ts=1687944583485',
            'two' : 'https://static.zara.net/photos///2023/I/0/1/p/6895/255/500/2/w/940/6895255500_6_1_1.jpg?ts=1689328748897'
        }
    ]
  return (
    <div className='w-11/12 mx-auto grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 py-5'>
        {
            images.map((data) => (
                <Catagory data={data} />
            ))
        }
    </div>
  )
}
