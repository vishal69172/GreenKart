import SwiftUI

struct ProductDetailView: View {
    let product: Product
    @State private var quantity: Int = 1
    
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                Image(product.image)
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .frame(maxWidth: .infinity)
                    .background(Color.white)
                
                VStack(alignment: .leading, spacing: 16) {
                    HStack {
                        if let discount = product.discount {
                            Text("\(discount)% OFF")
                                .font(.caption.bold())
                                .foregroundColor(.white)
                                .padding(.horizontal, 10)
                                .padding(.vertical, 5)
                                .background(Color.red)
                                .cornerRadius(5)
                        }
                        
                        if product.dietary {
                            Text("VEGETARIAN")
                                .font(.caption.bold())
                                .foregroundColor(.green)
                                .padding(.horizontal, 10)
                                .padding(.vertical, 5)
                                .background(Color.green.opacity(0.1))
                                .cornerRadius(5)
                        }
                    }
                    
                    Text(product.name)
                        .font(.largeTitle.bold())
                    
                    Text(product.unit)
                        .font(.title3)
                        .foregroundColor(.secondary)
                    
                    HStack(alignment: .bottom) {
                        Text("₹\(Int(product.price))")
                            .font(.system(size: 34, weight: .bold))
                        
                        if let original = product.originalPrice {
                            Text("₹\(Int(original))")
                                .font(.title2)
                                .strikethrough()
                                .foregroundColor(.secondary)
                                .padding(.leading, 10)
                        }
                        
                        Spacer()
                    }
                    
                    if let bulk = product.bulkPricing {
                        VStack(alignment: .leading, spacing: 10) {
                            Text("Bulk Pricing")
                                .font(.headline)
                            
                            ForEach(bulk) { pricing in
                                HStack {
                                    Text(pricing.label)
                                    Spacer()
                                    Text("₹\(Int(pricing.pricePerUnit))/unit")
                                        .bold()
                                }
                                .padding()
                                .background(Color.gray.opacity(0.05))
                                .cornerRadius(8)
                            }
                        }
                        .padding(.top, 10)
                    }
                    
                    Divider()
                        .padding(.vertical, 10)
                    
                    HStack {
                        HStack(spacing: 20) {
                            Button(action: { if quantity > 1 { quantity -= 1 } }) {
                                Image(systemName: "minus.circle.fill")
                                    .font(.title)
                                    .foregroundColor(.green)
                            }
                            
                            Text("\(quantity)")
                                .font(.title2.bold())
                            
                            Button(action: { quantity += 1 }) {
                                Image(systemName: "plus.circle.fill")
                                    .font(.title)
                                    .foregroundColor(.green)
                            }
                        }
                        .padding()
                        .background(Color.gray.opacity(0.1))
                        .cornerRadius(12)
                        
                        Spacer()
                        
                        Button(action: {
                            // Add to cart
                        }) {
                            Text("ADD TO CART")
                                .font(.headline)
                                .foregroundColor(.white)
                                .padding()
                                .frame(maxWidth: .infinity)
                                .background(Color.green)
                                .cornerRadius(12)
                        }
                        .padding(.leading, 10)
                    }
                }
                .padding()
            }
        }
        .navigationBarTitleDisplayMode(.inline)
    }
}
