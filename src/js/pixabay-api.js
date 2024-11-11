export function serverRequest(url) {
    return fetch(url)
        
        .then(data => {
            if (!data.ok) {
            throw new Error(data.status)
            }
            return data.json();
            
    }) 
    
}