import SwiftUI

struct ProductCardView: View {
    let product: Product
    
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            ZStack(topAlignment: .topTrailing) {
                Image(product.image)
                    .resizable()
                    .aspectRatio(contentMode: .fill)
                    .frame(height: 150)
                    .clipped()
                    .cornerRadius(12)
                
                if let discount = product.discount {
                    Text("\(discount)% OFF")
                        .font(.caption2.bold())
                        .foregroundColor(.white)
                        .padding(.horizontal, 8)
                        .padding(.vertical, 4)
                        .background(Color.red)
                        .cornerRadius(4)
                        .padding(8)
                }
            }
            
            VStack(alignment: .leading, spacing: 4) {
                Text(product.name)
                    .font(.headline)
                    .lineLimit(2)
                    .foregroundColor(.primary)
                
                Text(product.unit)
                    .font(.caption)
                    .foregroundColor(.secondary)
                
                HStack {
                    Text("₹\(Int(product.price))")
                        .font(.title3.bold())
                        .foregroundColor(.primary)
                    
                    if let original = product.originalPrice {
                        Text("₹\(Int(original))")
                            .font(.caption)
                            .strikethrough()
                            .foregroundColor(.secondary)
                    }
                }
                
                Button(action: {
                    // Add to cart logic
                }) {
                    Text("ADD TO CART")
                        .font(.footnote.bold())
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 10)
                        .background(Color.green)
                        .cornerRadius(8)
                }
                .padding(.top, 4)
            }
            .padding(.horizontal, 8)
            .padding(.bottom, 8)
        }
        .background(Color.white)
        .cornerRadius(12)
        .shadow(color: Color.black.opacity(0.1), radius: 4, x: 0, y: 2)
    }
}

extension ZStack {
    init(topAlignment: Alignment, @ViewBuilder content: () -> Content) {
        self.init(alignment: topAlignment, content: content)
    }
}
