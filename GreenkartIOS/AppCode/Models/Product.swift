import Foundation

struct BulkPricing: Identifiable, Codable {
    var id = UUID()
    let minQty: Int
    let pricePerUnit: Double
    let label: String
}

struct Product: Identifiable, Codable {
    let id: Int
    let name: String
    let price: Double
    let originalPrice: Double?
    let unit: String
    let dietary: Bool
    let discount: Int?
    let image: String
    let bulkPricing: [BulkPricing]?
    
    var category: String?
}
