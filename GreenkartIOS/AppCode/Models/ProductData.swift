import Foundation

struct ProductData {
    static let products: [String: [Product]] = [
        "Fruits & Vegetables": [
            Product(id: 9, name: "Carrots (Big), 1 Kg", price: 74, originalPrice: nil, unit: "1 kg", dietary: true, discount: nil, image: "carrots", bulkPricing: [
                BulkPricing(minQty: 3, pricePerUnit: 72, label: "3 kgs+"),
                BulkPricing(minQty: 7, pricePerUnit: 71, label: "7 kgs+")
            ]),
            Product(id: 10, name: "Green Chilli (Spicy), 500 gm", price: 33, originalPrice: nil, unit: "0.50 kg", dietary: true, discount: nil, image: "green-chilli", bulkPricing: nil),
            Product(id: 11, name: "Mint Leaves (Pudina), 250 gm", price: 19, originalPrice: nil, unit: "0.25 kg", dietary: true, discount: nil, image: "mint-leaves", bulkPricing: [
                BulkPricing(minQty: 4, pricePerUnit: 72, label: "1 kg+")
            ]),
            Product(id: 12, name: "Frozen Sweet Corn, 1 Kg", price: 80, originalPrice: nil, unit: "1 kg", dietary: true, discount: nil, image: "frozen-corn", bulkPricing: nil),
            Product(id: 13, name: "Frozen Green Peas, 1 Kg", price: 95, originalPrice: nil, unit: "1 kg", dietary: true, discount: nil, image: "frozen-peas", bulkPricing: nil),
            Product(id: 14, name: "Spring Onion, 250 gm", price: 17, originalPrice: nil, unit: "0.25 kg", dietary: true, discount: nil, image: "spring-onion", bulkPricing: nil),
            Product(id: 15, name: "Coriander Leaves, 1 Kg", price: 72, originalPrice: nil, unit: "1 kg", dietary: true, discount: nil, image: "coriander-leaves", bulkPricing: nil),
            Product(id: 16, name: "Green Capsicum, 1 Kg", price: 49, originalPrice: 54.4, unit: "1 kg", dietary: true, discount: 14, image: "green-capsicum", bulkPricing: [
                BulkPricing(minQty: 3, pricePerUnit: 48, label: "3 kgs+"),
                BulkPricing(minQty: 6, pricePerUnit: 47, label: "6 kgs+")
            ]),
            Product(id: 17, name: "Basil Leaves, 100 gm", price: 12, originalPrice: nil, unit: "0.10 kg", dietary: true, discount: nil, image: "basil-leaves", bulkPricing: nil),
            Product(id: 18, name: "Onion (Regular), 5 Kg", price: 114, originalPrice: nil, unit: "5 kg", dietary: true, discount: nil, image: "onion-regular", bulkPricing: nil)
        ],
        "Dairy": [
            Product(id: 19, name: "Amul - Butter Salted, 500 gm", price: 259, originalPrice: nil, unit: "1 pack", dietary: true, discount: nil, image: "amul-butter", bulkPricing: nil),
            Product(id: 20, name: "Amul - Fresh Cream, 1 L", price: 225, originalPrice: nil, unit: "1 ltr", dietary: true, discount: nil, image: "amul-fresh-cream", bulkPricing: nil),
            Product(id: 21, name: "Amul - Processed Cheese Block, 1 Kg", price: 484, originalPrice: nil, unit: "1 kg", dietary: true, discount: nil, image: "amul-cheese-block", bulkPricing: nil),
            Product(id: 22, name: "Milky Mist - Paneer, 1 Kg", price: 324, originalPrice: nil, unit: "1 kg", dietary: true, discount: nil, image: "paneer", bulkPricing: nil),
            Product(id: 23, name: "Amul - Delicious Margarine, 500 gm", price: 85, originalPrice: nil, unit: "0.50 kg", dietary: true, discount: nil, image: "margarine", bulkPricing: nil),
            Product(id: 24, name: "Nutralite - Professional Fat Spread, 500 gm", price: 84, originalPrice: nil, unit: "0.50 kg", dietary: true, discount: nil, image: "nutralite-spread", bulkPricing: nil),
            Product(id: 25, name: "Amul - Toned Curd, 1 Kg", price: 47, originalPrice: nil, unit: "1 kg", dietary: true, discount: nil, image: "amul-curd", bulkPricing: nil),
            Product(id: 26, name: "Amul - Cheese, Diced Mozzarella, 1 Kg", price: 443, originalPrice: nil, unit: "1 kg", dietary: true, discount: nil, image: "amul-mozzarella", bulkPricing: nil),
            Product(id: 27, name: "Amul - Taaza Milk, 1 L", price: 74, originalPrice: nil, unit: "1 ltr", dietary: true, discount: nil, image: "amul-milk", bulkPricing: nil),
            Product(id: 28, name: "Fresh Paneer, 1 Kg", price: 317, originalPrice: nil, unit: "1 kg", dietary: true, discount: nil, image: "paneer", bulkPricing: nil)
        ]
    ]
    
    static var allProducts: [Product] {
        return products.values.flatMap { $0 }
    }
}
