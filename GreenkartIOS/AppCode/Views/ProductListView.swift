import SwiftUI

struct ProductListView: View {
    @State private var selectedCategory: String = "All"
    let categories = ["All"] + Array(ProductData.products.keys)
    
    var filteredProducts: [Product] {
        if selectedCategory == "All" {
            return ProductData.allProducts
        } else {
            return ProductData.products[selectedCategory] ?? []
        }
    }
    
    let columns = [
        GridItem(.flexible(), spacing: 16),
        GridItem(.flexible(), spacing: 16)
    ]
    
    var body: some View {
        NavigationView {
            VStack {
                scrollViewCategories
                
                ScrollView {
                    LazyVGrid(columns: columns, spacing: 16) {
                        ForEach(filteredProducts) { product in
                            NavigationLink(destination: ProductDetailView(product: product)) {
                                ProductCardView(product: product)
                            }
                            .buttonStyle(PlainButtonStyle())
                        }
                    }
                    .padding()
                }
            }
            .navigationTitle("Greenkart")
            .background(Color(UIColor.systemGroupedBackground))
        }
    }
    
    var scrollViewCategories: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 12) {
                ForEach(categories, id: \.self) { category in
                    Button(action: {
                        selectedCategory = category
                    }) {
                        Text(category)
                            .font(.subheadline.bold())
                            .padding(.horizontal, 20)
                            .padding(.vertical, 8)
                            .background(selectedCategory == category ? Color.green : Color.white)
                            .foregroundColor(selectedCategory == category ? .white : .green)
                            .cornerRadius(20)
                            .overlay(
                                RoundedRectangle(cornerRadius: 20)
                                    .stroke(Color.green, lineWidth: 1)
                            )
                    }
                }
            }
            .padding()
        }
        .background(Color.white)
    }
}
